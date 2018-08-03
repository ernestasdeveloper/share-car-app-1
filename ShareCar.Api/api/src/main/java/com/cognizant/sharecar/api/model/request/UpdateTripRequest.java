package com.cognizant.sharecar.api.model.request;

import com.cognizant.sharecar.common.spi.model.TripStatus;

import java.time.LocalDateTime;

public class UpdateTripRequest {

    private TripStatus status;
    private String route;
    private LocalDateTime dateTime;

    public UpdateTripRequest() {
    }

    public TripStatus getStatus() {
        return status;
    }

    public String getRoute() {
        return route;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }
}
