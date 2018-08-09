//@flow

type AddTripRequest = {
    route: Geometry,
    dateTime: string,
    // driverId: DriverId,
    startPoint: WaypointView,
    endPoint: WaypointView
};

type AddTripResponse = {
    id: TripId
};