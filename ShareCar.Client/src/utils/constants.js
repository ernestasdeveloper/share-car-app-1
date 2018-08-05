export const TripStatusValues = {
    SCHEDULED: "SCHEDULED",
    CANCELLED: "CANCELLED",
    SUCCESSFUL: "SUCCESSFUL"
};

export const RideStatusValues = {
    REQUEST_PENDING: "REQUEST_PENDING", 
    REQUEST_ACCEPTED: "REQUEST_ACCEPTED", 
    REQUEST_DECLINED: "REQUEST_DECLINED", 
    REQUEST_CANCELLED: "REQUEST_CANCELLED", 
    RIDE_CANCELLED: "RIDE_CANCELLED", 
    RIDE_SUCCESSFUL: "RIDE_SUCCESSFUL", 
    RIDE_REMOVED: "RIDE_REMOVED"
};

export const MapApiStatusCodeValues = {
    Ok: "Ok",
    InvalidUrl: "InvalidUrl",
    InvalidService: "InvalidService",
    InvalidVersion: "InvalidVersion",
    InvalidOptions: "InvalidOptions",
    InvalidQuery: "InvalidQuery",
    InvalidValue: "InvalidValue",
    NoSegment: "NoSegemnt",
    TooBig: "TooBig"
}

export const MapApiRouteStatusCodeValues = MapApiStatusCodeValues & {NoRoute: "NoRoute"};