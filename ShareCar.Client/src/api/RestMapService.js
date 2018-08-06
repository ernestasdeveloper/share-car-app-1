// @flow

import { fetchData } from "../utils/apiUtils";
import {MapService} from "./MapService";
import {MapApiStatusCodeValues, MapApiRouteStatusCodeValues} from "../utils/constants";

const API_URL = "http://cts-maps.northeurope.cloudapp.azure.com:5000";

const buildUrl = (path: string) => API_URL + path;

export class RestMapService implements MapService {
    async getNearestLocation(coord: Coord4326): Promise<Coord4326> {
        const data: ApiResponse<GetNearestResponse> = await fetchData("GET", buildUrl("/nearest/v1/driving/" + coord.join()));
        if (data.isError || data.value.code !== MapApiStatusCodeValues.Ok) {
            throw new Error(); // TODO: better error handling
        }
        return data.value.waypoints[0].location;
    }

    async getRouteGeometry(coord1: Coord4326, coord2: Coord4326): Promise<Geometry> {
        const data: ApiResponse<GetRouteResponse> = await fetchData("GET", buildUrl("/route/v1/driving/" + coord1 + ";" + coord2));
        if (data.isError || data.value.code !== MapApiRouteStatusCodeValues.Ok) {
            throw new Error();
        }
        return data.value.routes[0].geometry;
    }
}