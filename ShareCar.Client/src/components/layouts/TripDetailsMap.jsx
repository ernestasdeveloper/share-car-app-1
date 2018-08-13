//@flow

import * as React from "react";
import {Map, View, Feature} from "ol";
import {Vector, OSM} from "ol/source";
import {Vector as VectorLayer, Tile} from "ol/layer";
import {Style, Stroke, Icon} from "ol/style";
import {Point} from "ol/geom";
import {Polyline} from "ol/format";
import {fromLonLat, transform} from "ol/proj";
import "../../styles/tripMap.css";
import "../../styles/genericStyles.css";
import "ol/ol.css";

type TripDetailsMapProps = {
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
}

export class TripDetailsMap extends React.Component<TripDetailsMapProps> {
    map: Map;

    icon_url: string;
    vectorSource: Vector;
    vectorLayer: VectorLayer;
    styles: {
        route: any;
        icon: any;
    }


    to4326(coord) {
        return transform([
            parseFloat(coord[0]), parseFloat(coord[1])
        ], "EPSG:3857", "EPSG:4326");
    }

    createFeature(coord) {
        let feature = new Feature({
            type: "place",
            geometry: new Point(fromLonLat(coord))
        });
        feature.setStyle(this.styles.icon);
        this.vectorSource.addFeature(feature);
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

    drawRoute() {
        this.createFeature([this.props.startPoint.longitude, this.props.startPoint.latitude]);
        this.createFeature([this.props.endPoint.longitude, this.props.endPoint.latitude]);
        this.createRoute(this.props.geometry);
    }

    componentDidMount() {

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
            target: "trip-map",
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

        this.drawRoute();
    }

    render() {
        return (
            <div>
                <div id="trip-map"></div>
            </div>
        );
    }
}