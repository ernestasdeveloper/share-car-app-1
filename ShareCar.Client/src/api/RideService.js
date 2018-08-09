// @flow

export interface RideService {
    getAll(tripId: TripId, passengerId: PassengerId): Promise<Ride[]>;
    add(item: AddRideRequest): Promise<AddRideResponse>;
}