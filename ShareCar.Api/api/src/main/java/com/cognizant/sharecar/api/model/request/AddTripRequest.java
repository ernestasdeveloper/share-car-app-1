package com.cognizant.sharecar.api.model.request;

import com.cognizant.sharecar.api.model.dto.WaypointView;

import java.time.LocalDateTime;

public class AddTripRequest {

    private String route;
    private LocalDateTime dateTime;
//    private Long driverId;
    private WaypointView startPoint;
    private WaypointView endPoint;

    public AddTripRequest() {
    }

    public String getRoute() {
        return route;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

//    public Long getDriverId() {
//        return driverId;
//    }

    public WaypointView getStartPoint() {
        return startPoint;
    }

    public WaypointView getEndPoint() {
        return endPoint;
    }
}
