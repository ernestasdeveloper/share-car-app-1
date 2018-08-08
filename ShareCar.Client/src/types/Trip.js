//@flow

import { TripStatusValues } from "../utils/constants";

type TripId = number;
type DriverId = number;
// type Route = string;
type TripStatus = $Keys<typeof TripStatusValues>;

type Trip = {
    id: TripId,
    route: Geometry,
    status: TripStatus,
    dateTime: DateTime,
    startPoint: Coord4326,
    endPoint: Coord4326,
    driver: User,
    rides: Ride[]
}

type WaypointView = {
    name: string,
    longitude: number,
    latitude:number
}