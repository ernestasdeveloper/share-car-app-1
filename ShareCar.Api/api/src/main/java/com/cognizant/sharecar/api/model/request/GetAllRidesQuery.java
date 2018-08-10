package com.cognizant.sharecar.api.model.request;

import com.cognizant.sharecar.common.spi.model.RideStatus;

public class GetAllRidesQuery {

    private RideStatus status;
    private Long passengerId;
    private Long tripId;
    private Long driverId;

    public GetAllRidesQuery(RideStatus status, Long passengerId, Long tripId, Long driverId) {
        this.status = status;
        this.passengerId = passengerId;
        this.tripId = tripId;
        this.driverId = driverId;
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

    public Long getDriverId() {
        return driverId;
    }
}