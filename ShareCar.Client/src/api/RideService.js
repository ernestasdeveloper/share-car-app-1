// @flow

export interface RideService {
    getAll(tripId: TripId, passengerId: PassengerId): Promise<Ride[]>;
    getSingle(rideId: RideId): Promise<Ride>;
    add(item: AddRideRequest): Promise<AddRideResponse>;
}