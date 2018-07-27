//@flow

import {TripStatus} from "../utils/constants";

type ShareCarAppItemTripId = number;
type ShareCarAppItemDriverId = number;
type ShareCarAppItemRouteString = string;
type ShareCarAppItemTripStatus = $Keys<typeof TripStatus>;
//type ShareCarAppItemTripDateTime = dateTime;

type ShareCarAppItemBase = {
    trip_id: ShareCarAppItemTripId,
    driver_id: ShareCarAppItemDriverId,
    route_string: ShareCarAppItemRouteString,
    status: ShareCarAppItemTripStatus
}