// @flow

import { fetchData } from "../utils/apiUtils";
import {MapService} from "./MapService";
import {MapApiStatusCodeValues} from "../utils/constants";

const API_URL = "http://cts-maps.northeurope.cloudapp.azure.com/maps";

const buildUrl = (path: string) => API_URL + path;

export class RestMapService implements MapService {
    async getNearestLocation(coord: Coord4326): Promise<Waypoint> {
        const data: ApiResponse<GetNearestResponse> = await fetchData("GET", buildUrl("/nearest/v1/driving/" + coord.join()));
        console.log("Nearest call with " + coord);
        if (data.isError || data.value.code !== MapApiStatusCodeValues.Ok) {
            throw new Error(); // TODO: better error handling
        }
        return data.value.waypoints[0];
    }

    async getRouteGeometry(coord1: Coord4326, coord2: Coord4326): Promise<Geometry> {
        console.log("URL " + buildUrl("/route/v1/driving/" + coord1 + ";" + coord2));
        const data: ApiResponse<GetRouteResponse> = await fetchData("GET", buildUrl("/route/v1/driving/" + coord1 + ";" + coord2));
        if (data.isError || data.value.code !== MapApiStatusCodeValues.Ok) {
            throw new Error();
        }
        // console.log("geometry (service side) " + data.value.routes[0].geometry);
        return data.value.routes[0].geometry;
    }
}

// fetch(url_osrm_route + point1 + ";" + point2).then(function (r) {
//                     return r.json();
//                 }).then(function (json) {
//                     if (json.code !== "Ok") {
//                         console.log(json.code);
//                         msg_el.innerHTML = "No route found.";
//                         return;
//                     }
//                     msg_el.innerHTML = "Route added";
//                     //points.length = 0;
//                     console.log(json.routes[0].geometry);
//                     utils.createRoute(json.routes[0].geometry);
//                 });