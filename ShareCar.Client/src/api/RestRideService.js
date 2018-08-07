// @flow
import { RideService } from "./RideService";
import { fetchData } from "../utils/apiUtils";

const API_URL = "http://localhost:8080/api";

const buildUrl = (path: string) => API_URL + path;

export class RestRideService implements RideService {
    async add(item: AddRideRequest): Promise<AddRideResponse> {
        const data: ApiResponse<AddRideResponse> = await fetchData("POST", buildUrl(`/rides`), item);
        if (data.isError) {
            throw new Error();
        }
        return data.value;
    }
}