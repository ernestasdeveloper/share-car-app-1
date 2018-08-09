//@flow

export interface UserService {
    getSingle(userId: UserId): Promise<User>;
    update(userId: UserId, item: UpdateUserRequest): Promise<string>;
    getLoggedInUser(callback: User): void;
}