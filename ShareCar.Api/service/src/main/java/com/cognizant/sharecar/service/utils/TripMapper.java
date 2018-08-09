package com.cognizant.sharecar.service.utils;

import com.cognizant.sharecar.api.model.dto.LazyTripView;
import com.cognizant.sharecar.api.model.dto.TripView;
import com.cognizant.sharecar.repository.entity.Ride;
import com.cognizant.sharecar.repository.entity.Trip;

import static java.util.stream.Collectors.toList;

public class TripMapper {

    public static TripView mapEntityToView(Trip trip){
        return new TripView(trip.getId(),
                trip.getRoute(),
                trip.getStatus(),
                trip.getDateTime(),
                UserMapper.mapEntityToLazyView(trip.getDriver()),
                WaypointMapper.mapEntityToView(trip.getStartPoint()),
                WaypointMapper.mapEntityToView(trip.getEndPoint()),
                trip.getRides()
                        .stream()
                        .map(Ride::getId)
                        .collect(toList()));
    }

    public static LazyTripView mapEntityToLazyView(Trip trip){
        return new LazyTripView(trip.getId(),
                trip.getStartPoint().getName(),
                trip.getEndPoint().getName(),
                trip.getDateTime());
        }
}
