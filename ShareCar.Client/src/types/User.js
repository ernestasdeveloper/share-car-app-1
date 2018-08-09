//@flow

type UserId = number;
type Name = string;
type Email = string;

type User = {
    id: UserId,
    firstName: Name,
    lastName: Name,
    email: Email,
    phoneNo: PhoneNo,
    trips: Trip[],
    rides: Ride[],
    ridesDriven: number,
    ridesTaken: number
};