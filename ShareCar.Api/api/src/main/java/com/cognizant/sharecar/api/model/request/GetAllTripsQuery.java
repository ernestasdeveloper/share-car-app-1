package com.cognizant.sharecar.api.model.request;

import com.cognizant.sharecar.common.spi.model.TripStatus;

public class GetAllTripsQuery {

    private TripStatus status;
    private Long driverId;

    public GetAllTripsQuery() {
    }

    public GetAllTripsQuery(TripStatus status, Long driverId) {
        this.status = status;
        this.driverId = driverId;
    }

    public TripStatus getStatus() {
        return status;
    }

    public void setStatus(TripStatus status) {
        this.status = status;
    }

    public Long getDriverId() {
        return driverId;
    }

    public void setDriverId(Long driverId) {
        this.driverId = driverId;
    }
}
