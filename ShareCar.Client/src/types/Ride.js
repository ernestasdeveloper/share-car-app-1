//@flow

import { RideStatusValues } from "../utils/constants";

type RideId = number;
type RideStatus = $Keys<typeof RideStatusValues>;


type Ride = {
    id: RideId,
    status: RideStatus,
    passenger: User,
    driver: User,
    trip: LazyTrip
};