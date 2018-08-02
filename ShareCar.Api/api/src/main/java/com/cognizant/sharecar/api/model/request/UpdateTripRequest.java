package com.cognizant.sharecar.api.model.request;

import com.cognizant.sharecar.common.spi.model.TripStatus;

public class UpdateTripRequest {

    private TripStatus status;

    public UpdateTripRequest() {
    }

    public TripStatus getStatus() {
        return status;
    }
}
