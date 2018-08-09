package com.cognizant.sharecar.api.model.response;

import com.cognizant.sharecar.api.model.dto.LazyTripView;
import com.cognizant.sharecar.api.model.dto.LazyUserView;
import com.cognizant.sharecar.api.model.dto.RideView;
import com.cognizant.sharecar.common.spi.model.RideStatus;

public class GetRideResponse {
    private Long id;
    private RideStatus status;
    private LazyUserView passenger;
    private LazyUserView driver;
    private LazyTripView trip;

    public GetRideResponse(RideView rideView) {
        this.id = rideView.getId();
        this.status = rideView.getStatus();
        this.passenger = rideView.getPassenger();
        this.driver = rideView.getDriver();
        this.trip = rideView.getTrip();
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
}