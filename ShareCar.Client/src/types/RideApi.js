//@flow

type AddRideRequest = {
   passengerId: UserId,
   tripId: TripId
};

type AddRideResponse = {
    id: RideId
};