// @flow
import { UserService } from "./UserService";
import { fetchData } from "../utils/apiUtils";

const API_URL = "http://localhost:9001/api";

const buildUrl = (path: string) => API_URL + path;

export class RestUserService implements UserService {

    async getSingle(userId: UserId): Promise<User> {
        const data: ApiResponse<User> = await fetchData("GET", buildUrl("/users/" + userId));
        if (data.isError) {
            throw new Error();
        }
        return data.value;
    }

    async update(userId: UserId, item: UpdateUserRequest): Promise<string> {
        const data: ApiResponse<string> = await fetchData("PUT", buildUrl("/users/" + userId), item);
        if (data.isError) {
            throw new Error();
        }
        return data.value;
    }
}