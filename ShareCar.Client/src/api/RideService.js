// @flow

export interface RideService {
    getAll(tripId: TripId): Promise<Ride[]>;
    add(item: AddRideRequest): Promise<AddRideResponse>;
}