package com.cognizant.sharecar.api.model.dto;

import com.cognizant.sharecar.common.spi.model.RideStatus;

public class RideView {

    private Long id;
    private RideStatus status;
    private LazyUserView passenger;
    private LazyUserView driver;
    private LazyTripView trip;
    private WaypointView pickupPoint;

    public RideView(Long id, RideStatus status, LazyUserView passenger, LazyUserView driver,
                    LazyTripView trip, WaypointView pickupPoint) {
        this.id = id;
        this.status = status;
        this.passenger = passenger;
        this.driver = driver;
        this.trip = trip;
        this.pickupPoint = pickupPoint;
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
