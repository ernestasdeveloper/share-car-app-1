//@flow

import * as React from "react";
import {Map, View, Feature} from "ol";
import {Vector, OSM} from "ol/source";
import {Vector as VectorLayer, Tile} from "ol/layer";
import {Style, Stroke, Icon} from "ol/style";
import {Point} from "ol/geom";
import {Polyline} from "ol/format";
import {fromLonLat, transform} from "ol/proj";
import "../../styles/rideMap.css";
import "../../styles/genericStyles.css";
import "ol/ol.css";

type RideDetailsMapProps = {
    pickupPoint: Waypoint
}

export class RideDetailsMap extends React.Component<RideDetailsMapProps> {
    map: Map;

    url_osrm_route: string;
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

    async componentDidMount() {

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
                center: fromLonLat([this.props.pickupPoint.longitude, this.props.pickupPoint.latitude]),
                zoom: 15
            })
        });

        // Add pickup point
        console.log("point " + [this.props.pickupPoint.longitude, this.props.pickupPoint.latitude]);
        this.createFeature([this.props.pickupPoint.longitude, this.props.pickupPoint.latitude]);
    }

    render() {
        return (
            <div>
                <div className="gen-map-container" id="map"></div>
            </div>
        );
    }
}