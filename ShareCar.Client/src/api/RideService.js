// @flow

export interface TripService {
    add(item: AddRideRequest): Promise<AddRideResponse>;
}