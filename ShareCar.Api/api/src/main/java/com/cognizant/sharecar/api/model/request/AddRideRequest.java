package com.cognizant.sharecar.api.model.request;

import com.cognizant.sharecar.api.model.dto.WaypointView;

public class AddRideRequest {

    private Long passengerId;
    private Long tripId;
    private WaypointView pickupPoint;

    public AddRideRequest(Long passengerId, Long tripId, WaypointView pickupPoint) {
        this.passengerId = passengerId;
        this.tripId = tripId;
        this.pickupPoint = pickupPoint;
    }

    public AddRideRequest() {
    }

    public Long getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(Long passengerId) {
        this.passengerId = passengerId;
    }

    public Long getTripId() {
        return tripId;
    }

    public void setTripId(Long tripId) {
        this.tripId = tripId;
    }

    public WaypointView getPickupPoint() {
        return pickupPoint;
    }

    public void setPickupPoint(WaypointView pickupPoint) {
        this.pickupPoint = pickupPoint;
    }
}