//@flow

import {MapApiStatusCodeValues} from "../utils/constants";

type MapApiStatusCode = $Keys<typeof MapApiStatusCodeValues>;
type MapApiRouteStatusCode = $Keys<typeof MapApiRouteStatusCodeValues>;

type GetNearestResponse = {
    waypoints: Waypoint[],
    code: MapApiStatusCode
}

type GetRouteResponse = {
    code: MapApiRouteStatusCode,
    routes: Route[],
    waypoints: Waypoint[]
}