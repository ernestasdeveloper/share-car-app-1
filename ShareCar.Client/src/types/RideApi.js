//@flow

type AddRideRequest = {
   passengerId: UserId,
   tripId: TripId,
   pickupPoint: Waypoint
};

type AddRideResponse = {
    id: RideId
};

type UpdateRideRequest = {
    status: RideStatus
}