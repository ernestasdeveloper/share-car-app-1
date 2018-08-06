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

export class MapLayout extends React.Component<{}> {
    map: Map;

    componentDidMount() {

        const points = [];
        const msg_el = document.getElementById("msg");
        // const url_osrm_nearest = "//localhost:5000/nearest/v1/driving/";
        const url_osrm_route = "//cts-maps.northeurope.cloudapp.azure.com:5000/route/v1/driving/";
        const icon_url = "//cdn.rawgit.com/openlayers/ol3/master/examples/data/icon.png";
        const vectorSource = new Vector();
        const vectorLayer = new VectorLayer({
            source: vectorSource
        });
        const styles = {
            route: new Style({
                stroke: new Stroke({
                    width: 6, color: [40, 40, 40, 0.8]
                })
            }),
            icon: new Style({
                image: new Icon({
                    anchor: [0.5, 1],
                    src: icon_url
                })
            })
        };

        // console.clear();

        const mapService = new RestMapService();


        const utils = {
            getNearest: function (coord) {
                let coord4326 = utils.to4326(coord);
                return mapService.getNearestLocation(coord4326);
            },
            createFeature: function (coord) {
                let feature = new Feature({
                    type: "place",
                    geometry: new Point(fromLonLat(coord))
                });
                feature.setStyle(styles.icon);
                vectorSource.addFeature(feature);
            },
            createRoute: function (polyline) {
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
                feature.setStyle(styles.route);
                vectorSource.addFeature(feature);
            },
            to4326: function (coord) {
                return transform([
                    parseFloat(coord[0]), parseFloat(coord[1])
                ], "EPSG:3857", "EPSG:4326");
            }
        };

        this.map = new Map({
            target: "map",
            layers: [
                new Tile({
                    source: new OSM()
                }),
                vectorLayer
            ],
            view: new View({
                center: fromLonLat([25.272932, 54.679042]),
                zoom: 11
                //projection: "EPSG:4326"
            })
        });

        this.map.on("click", function (evt) {
            utils.getNearest(evt.coordinate).then(function (coord_street) {
                let last_point = points[points.length - 1];
                let points_length = points.push(coord_street);

                utils.createFeature(coord_street);

                if (points_length < 2) {
                    msg_el.innerHTML = "Click to add another point";
                    return;
                }

                //get the route
                let point1 = last_point.join();
                let point2 = coord_street.join();

                // utils.createRoute(mapService.getRouteGeometry(point1, point2));

                fetch(url_osrm_route + point1 + ";" + point2).then(function (r) {
                    return r.json();
                }).then(function (json) {
                    if (json.code !== "Ok") {
                        console.log(json.code);
                        msg_el.innerHTML = "No route found.";
                        return;
                    }
                    msg_el.innerHTML = "Route added";
                    //points.length = 0;
                    console.log(json.routes[0].geometry);
                    utils.createRoute(json.routes[0].geometry);
                });
            });
        });
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