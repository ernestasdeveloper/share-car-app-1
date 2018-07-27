package com.cognizant.sharecar.api.model.request;

import com.cognizant.sharecar.common.spi.model.RideStatus;

public class GetAllRidesQuery {

    private RideStatus status;
    private Long passengerId;
    private Long tripId;

    // Check for null parameters?
    public GetAllRidesQuery(RideStatus status, Long passengerId, Long tripId) {
        this.status = status;
        this.passengerId = passengerId;
        this.tripId = tripId;
    }

    public RideStatus getStatus() {
        return status;
    }

    public void setStatus(RideStatus status) {
        this.status = status;
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
}