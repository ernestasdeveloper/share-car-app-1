package com.cognizant.sharecar.service.utils;

import com.cognizant.sharecar.api.model.dto.RideView;
import com.cognizant.sharecar.repository.entity.Ride;

public class RideMapper {

    public static RideView mapEntityToView(Ride ride){
        return new RideView(ride.getId(),
                ride.getStatus(),
                ride.getPassenger().getId(),
                ride.getPassenger().getFirstName(),
                ride.getPassenger().getLastName(),
                ride.getTrip().getDriver().getId(),
                ride.getTrip().getDriver().getFirstName(),
                ride.getTrip().getDriver().getLastName(),
                ride.getTrip().getId(),
                ride.getTrip().getStartPoint().getName(),
                ride.getTrip().getEndPoint().getName(),
                ride.getTrip().getDateTime());
    }
}
