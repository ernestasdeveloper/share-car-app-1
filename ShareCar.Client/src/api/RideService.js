// @flow

export interface RideService {
    getAll(tripId: TripId, passengerId: PassengerId, driverId: DriverId): Promise<Ride[]>;
    getSingle(rideId: RideId): Promise<Ride>;
    add(item: AddRideRequest): Promise<AddRideResponse>;
    updateStatus(rideId: RideId, item: UpdateRideRequest): void;
}