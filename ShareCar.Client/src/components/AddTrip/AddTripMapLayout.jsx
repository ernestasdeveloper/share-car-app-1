//@flow

import * as React from "react";
import {Map, View, Feature} from "ol";
import {Vector, OSM} from "ol/source";
import {Vector as VectorLayer, Tile} from "ol/layer";
import {Style, Stroke, Icon} from "ol/style";
import {Point} from "ol/geom";
import {Polyline} from "ol/format";
import {fromLonLat, transform} from "ol/proj";
import "../../styles/map.css";
import "../../styles/genericStyles.css";
import "ol/ol.css";
import {RestMapService} from "../../api/RestMapService";
import * as Geocoder from "ol-geocoder";
import "ol-geocoder/dist/ol-geocoder.min.css";
import {Offices} from "../../utils/constants";

type AddTripMapLayoutProps = {
    fieldValues: {
        dateTime: string,
        driverId: UserId,
        toOffice: boolean,
        office: Office,
        geometry: Geometry,
        startPoint: {
            name: string,
            longitude: number,
            latitude: number
        },
        endPoint: {
            name: string,
            longitude: number,
            latitude: number
        }
    },
    nextStep: Function,
    previousStep: Function,
    saveValues: Function
}

type AddTripMapLayoutState = {
    points: Waypoint[],
    geometry: Geometry
}

export class AddTripMapLayout extends React.Component<AddTripMapLayoutProps, AddTripMapLayoutState> {
    map: Map;
    geocoder: Geocoder;

    state = {
        points: []
    };

    msg_el: element;
    url_osrm_route: string;
    icon_url: string;
    vectorSource: Vector;
    vectorLayer: VectorLayer;
    styles: {
        route: any;
        icon: any;
    }

    mapService = new RestMapService();

    to4326(coord) {
        return transform([
            parseFloat(coord[0]), parseFloat(coord[1])
        ], "EPSG:3857", "EPSG:4326");
    }
    getNearestWaypoint(coord) {
        let coord4326 = this.to4326(coord);
        return this.mapService.getNearestLocation(coord4326);
    }
    createFeature(coord) {
        let feature = new Feature({
            type: "place",
            geometry: new Point(fromLonLat(coord))
        });
        feature.setStyle(this.styles.icon);
        this.vectorSource.addFeature(feature);
    }
    officeCoord(office) {
        switch (office) {
            default:
                return fromLonLat([25.255483, 54.676937]);
            case Offices.savanoriu_pr_16:
                return fromLonLat([25.255483, 54.676937]);
            case Offices.savanoriu_pr_28:
                return fromLonLat([25.252781, 54.675655]);
        }
    }

    addCoord(coord) {
        if (this.state.points.length >= 2) {
            // this.msg_el.innerHTML = "";
            return;
        }
        this.getNearestWaypoint(coord).then(waypoint => {

            let last_point = this.state.points[this.state.points.length - 1];
            let points_length = this.state.points.push(waypoint);

            this.createFeature(waypoint.location);

            if (points_length === 2) {
                this.msg_el.innerHTML = "";
            }
            else if (points_length < 2) {
                this.msg_el.innerHTML = "Click to add another point";
                return;
            }

            //get the route
            let point1 = last_point.location.join();
            let point2 = waypoint.location.join();

            // utils.createRoute(mapService.getRouteGeometry(point1, point2));
            if (this.props.fieldValues.toOffice) {
                this.updateWaypoints(point2, point1);
            }
            else {
                this.updateWaypoints(point1, point2);
            }
        });
    }

    handleClick(evt) {
        this.addCoord(evt.coordinate);
    }

    handleAddressChosen(evt) {
        console.info(evt);
        // window.setTimeout(function () {
        // this.popup.show(evt.coordinate, evt.address.formatted);
        // }, 3000);
        this.handleClick(evt);
    }

    createRoute(polyline: Geometry) {
        this.setState({geometry: polyline});
        // route is LineString
        let route = new Polyline({
            factor: 1e5
        }).readGeometry(polyline, {
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857"
        });
        let feature = new Feature({
            type: "route",
            geometry: route
        });;
        feature.setStyle(this.styles.route);
        this.vectorSource.addFeature(feature);
    }

    async updateWaypoints(point1: Coord4326, point2: Coord4326) {
        const data = await this.mapService.getRouteGeometry(point1, point2);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.createRoute(data);

        // try {
        //     let response = await mapService.getRouteGeometry(point1, point2);
        //     utils.createRoute(response));
        //     msg_el.innerHTML = "Route added";
        // }
        // catch(error) {
        //      msg_el.innerHTML = "No route found.";
        // }
    };

    async clearAPoint() {
        // Remove elements from array
        this.setState({points: []});

        // Clear vector layer
        this.vectorSource.clear();

        await new Promise(resolve => setTimeout(resolve, 1000));
        // Add marker for office
        this.addCoord(this.officeCoord(this.props.fieldValues.office));
    }

    saveAndContinue() {
        let payload;
        if (this.props.fieldValues.toOffice) {
            payload = {
                dateTime: this.props.fieldValues.dateTime,
                driverId: this.props.fieldValues.driverId,
                toOffice: this.props.fieldValues.toOffice,
                office: this.props.fieldValues.office,
                geometry: this.state.geometry,
                startPoint: {
                    name: this.state.points[1].name,
                    longitude: this.state.points[1].location[0],
                    latitude: this.state.points[1].location[1]
                },
                endPoint: {
                    name: this.state.points[0].name,
                    longitude: this.state.points[0].location[0],
                    latitude: this.state.points[0].location[1]
                }
            };
        }
        else {
            payload = {
                dateTime: this.props.fieldValues.dateTime,
                driverId: this.props.fieldValues.driverId,
                toOffice: this.props.fieldValues.toOffice,
                office: this.props.fieldValues.office,
                geometry: this.state.geometry,
                startPoint: {
                    name: this.state.points[0].name,
                    longitude: this.state.points[0].location[0],
                    latitude: this.state.points[0].location[1]
                },
                endPoint: {
                    name: this.state.points[1].name,
                    longitude: this.state.points[1].location[0],
                    latitude: this.state.points[1].location[1]
                }
            };
        }
        console.log(payload);
        this.props.saveValues(payload);
        this.props.nextStep();
    }

    componentDidMount() {

        this.msg_el = document.getElementById("msg");
        this.icon_url = "//cdn.rawgit.com/openlayers/ol3/master/examples/data/icon.png";
        this.vectorSource = new Vector();
        this.vectorLayer = new VectorLayer({
            source: this.vectorSource
        });
        this.styles = {
            route: new Style({
                stroke: new Stroke({
                    width: 6, color: [40, 40, 40, 0.8]
                })
            }),
            icon: new Style({
                image: new Icon({
                    anchor: [0.5, 1],
                    src: this.icon_url
                })
            })
        };

        this.map = new Map({
            target: "map",
            layers: [
                new Tile({
                    source: new OSM()
                }),
                this.vectorLayer
            ],
            view: new View({
                center: fromLonLat([25.272932, 54.679042]),
                zoom: 11
            })
        });

        // Register map events
        this.map.on("click", this.handleClick.bind(this));

        this.geocoder = new Geocoder("nominatim", {
            provider: "osm",
            lang: "en",
            placeholder: "Enter location",
            targetType: "glass-button",
            limit: 5,
            keepOpen: false,
            debug: true,
            preventDefault: true
        });

        this.map.addControl(this.geocoder);

        // Register geocoder events
        this.geocoder.on("addresschosen", this.handleAddressChosen.bind(this));

        // Add office to map
        this.addCoord(this.officeCoord(this.props.fieldValues.office));
    }

    render() {
        return (
            <div>
                <div className="gen-map-container" id="map"></div>
                <div id="msg"></div>
                <div className="map-buttons-container">
                    <button className="gen-button btn-lg" onClick={this.saveAndContinue.bind(this)}>Next</button>
                    <button className="gen-button btn-lg" onClick={this.clearAPoint.bind(this)}>Clear</button>
                </div>
            </div>
        );
    }
}