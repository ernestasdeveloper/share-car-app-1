package com.cognizant.sharecar.api.model.request;

import com.cognizant.sharecar.common.spi.model.RideStatus;

public class UpdateRideRequest {

    private RideStatus status;

    public UpdateRideRequest() {
    }

    public RideStatus getStatus() {
        return status;
    }
}
