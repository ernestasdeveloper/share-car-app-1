// @flow
import { RideService } from "./RideService";
import { fetchData } from "../utils/apiUtils";

const API_URL = "http://localhost:9001/api";

const buildUrl = (path: string) => API_URL + path;

export class RestRideService implements RideService {

    async getAll(tripId: TripId, passengerId: PassengerId, driverId: DriverId): Promise<Ride[]> {
        var data: ApiResponse<Ride[]> = null;
        if (tripId !== undefined) {
            data = await fetchData("GET", buildUrl("/rides?tripId=" + tripId));
        }
        else if (passengerId !== undefined){
            data = await fetchData("GET", buildUrl("/rides?passengerId=" + passengerId));
        }
        else if (driverId !== undefined){
            data = await fetchData ("GET", buildUrl("/rides?driverId=" + driverId));
        }

        if (data.isError) {
            throw new Error();
        }
        return data.value;
    }

    async getSingle(rideId: RideId): Promise<Ride> {
        const data: ApiResponse<Ride> = await fetchData("GET", buildUrl("/rides/" + rideId));
        if (data.isError) {
            throw new Error();
        }
        return data.value;
    }


    async add(item: AddRideRequest): Promise<AddRideResponse> {
        const data: ApiResponse<AddRideResponse> = await fetchData("POST", buildUrl(`/rides`), item);
        if (data.isError) {
            throw new Error();
        }
        return data.value;
    }

    async updateStatus(rideId: RideId, item: UpdateRideRequest) {
        const data: ApiResponse<> = await fetchData("PUT", buildUrl("/rides/" + rideId), item);
        if (data.isError) {
            throw new Error();
        }
    }
}