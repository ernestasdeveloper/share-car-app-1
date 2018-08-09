package com.cognizant.sharecar.service.utils;

import com.cognizant.sharecar.api.model.dto.RideView;
import com.cognizant.sharecar.repository.entity.Ride;

public class RideMapper {

    public static RideView mapEntityToView(Ride ride){
        return new RideView(ride.getId(),
                ride.getStatus(),
                UserMapper.mapEntityToLazyView(ride.getPassenger()),
                UserMapper.mapEntityToLazyView(ride.getTrip().getDriver()),
                TripMapper.mapEntityToLazyView(ride.getTrip()));
    }
}
