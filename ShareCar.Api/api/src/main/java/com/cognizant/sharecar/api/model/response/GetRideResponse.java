package com.cognizant.sharecar.api.model.response;

import com.cognizant.sharecar.api.model.dto.LazyTripView;
import com.cognizant.sharecar.api.model.dto.LazyUserView;
import com.cognizant.sharecar.api.model.dto.RideView;
import com.cognizant.sharecar.api.model.dto.WaypointView;
import com.cognizant.sharecar.common.spi.model.RideStatus;

public class GetRideResponse {
    private Long id;
    private RideStatus status;
    private LazyUserView passenger;
    private LazyUserView driver;
    private LazyTripView trip;
    private WaypointView pickupPoint;

    public GetRideResponse(RideView rideView) {
        this.id = rideView.getId();
        this.status = rideView.getStatus();
        this.passenger = rideView.getPassenger();
        this.driver = rideView.getDriver();
        this.trip = rideView.getTrip();
        this.pickupPoint = rideView.getPickupPoint();
    }

    public Long getId() {
        return id;
    }

    public RideStatus getStatus() {
        return status;
    }

    public LazyUserView getPassenger() {
        return passenger;
    }

    public LazyUserView getDriver() {
        return driver;
    }

    public LazyTripView getTrip() {
        return trip;
    }

    public WaypointView getPickupPoint() {
        return pickupPoint;
    }
}