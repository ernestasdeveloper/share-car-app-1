// @flow
import { TripService } from "./TripService";
import { fetchData } from "../utils/apiUtils";
import api from "../helpers/axiosHelper";

const API_URL = "http://localhost:9001/api";

const buildUrl = (path: string) => API_URL + path;

export class RestTripService implements TripService {
    async getAll(date: DateString): Promise<Trip[]> {
        var data: ApiResponse<Trip[]> = null;
        if (date === undefined) {
            data = await fetchData("GET", buildUrl("/trips"));
        }
        else {
            data = await fetchData("GET", buildUrl("/trips?date=" + date));
        }
        if (data.isError) {
            throw new Error(); // TODO: better error handling
        }
        return data.value;
    }

    // async getListByDate(date: DateTime): Promise<Trip[]> {
    //     const data: ApiResponse<Trip[]> = await fetchData("GET", buildUrl("/trips?date=" + date));
    //     if (data.isError) {
    //         throw new Error(); // TODO: better error handling
    //     }
    //     return data.value;
    // }

    async getSingle(tripId: tripId): Promise<Trip> {
        const data: ApiResponse<Trip> = await api.get(buildUrl("/trips" + tripId));
        // const data: ApiResponse<Trip> = await fetchData("GET", buildUrl("/trips/" + tripId));
        if (data.isError) {
            throw new Error();
        }
        return data.value;
    }

    add(item: AddTripRequest): Promise<AddTripResponse> {
        console.dir(item, {depth: null});
        const data: ApiResponse<AddTripResponse> = api.post(buildUrl("/trips"), item);
        // const data: ApiResponse<AddTripResponse> = await fetchData("POST", buildUrl(`/trips`), item);
        if (data.isError) {
            throw new Error();
        }
        return data.value;
    }
}