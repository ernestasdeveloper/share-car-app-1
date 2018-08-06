//@flow

import * as React from "react";
import {Map, View, Feature} from "ol";
import {Vector, OSM} from "ol/source";
import {Vector as VectorLayer, Tile} from "ol/layer";
import {Style, Stroke, Icon} from "ol/style";
import {Point} from "ol/geom";
import {Polyline} from "ol/format";
import {fromLonLat, transform} from "ol/proj";
import "../styles/map.css";
import "ol/ol.css";
import {RestMapService} from "../api/RestMapService";

type MapLayoutState = {
    points: any[];
}

export class MapLayout extends React.Component<{}, MapLayoutState> {
    map: Map;

    state = {
        points: []
    };

    // points: any[];
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
    getNearest(coord) {
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

    handleClick(evt) {
        if (this.state.points.length >= 2) {
            // this.msg_el.innerHTML = "";
            return;
        }
        this.getNearest(evt.coordinate).then(coord_street => {

            let last_point = this.state.points[this.state.points.length - 1];
            let points_length = this.state.points.push(coord_street);

            if (points_length)

            this.createFeature(coord_street);

            // console.log("inside handleClick points_length " + points_length);
            if (points_length === 2) {
                this.msg_el.innerHTML = "";
            }
            else if (points_length < 2) {
                this.msg_el.innerHTML = "Click to add another point";
                return;
            }

            //get the route
            let point1 = last_point.join();
            let point2 = coord_street.join();

            // utils.createRoute(mapService.getRouteGeometry(point1, point2));

            this.updateWaypoints(point1, point2);

            // console.log("inside handleClick points " + this.state.points);
        });
    }

    createRoute(polyline: Geometry) {
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
        });
        //console.log(polyline);
        feature.setStyle(this.styles.route);
        this.vectorSource.addFeature(feature);
    }

    async updateWaypoints(point1: Coord4326, point2: Coord4326) {
        const data = await this.mapService.getRouteGeometry(point1, point2);
        await new Promise(resolve => setTimeout(resolve, 1000));
        // let waypoints = this.state.waypoints;
        // waypoints.add(point1);
        // waypoints.add(point2);
        // this.setState({waypoints: waypoints});
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

    componentDidMount() {

        // this.points = [];
        this.msg_el = document.getElementById("msg");
        // const url_osrm_nearest = "//localhost:5000/nearest/v1/driving/";
        this.url_osrm_route = "//localhost:5000/maps/route/v1/driving/";
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
                //projection: "EPSG:4326"
            })
        });

        this.map.on("click", this.handleClick.bind(this));
    }

    render() {
        return (
            <div>
                <div id="map"></div>
                <div id="msg"></div>
            </div>
        );
    }
}