package com.cognizant.sharecar.api.model.response;

import com.cognizant.sharecar.api.model.dto.LazyUserView;
import com.cognizant.sharecar.api.model.dto.TripView;
import com.cognizant.sharecar.api.model.dto.WaypointView;
import com.cognizant.sharecar.common.spi.model.TripStatus;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

public class GetTripResponse {
    private Long id;
    private String route;
    private TripStatus status;
    private ZonedDateTime dateTime;
    private LazyUserView driver;
    private WaypointView startPoint;
    private WaypointView endPoint;
    private List<Long> rideIdList;

    public GetTripResponse(TripView trip) {
        this.id = trip.getId();
        this.route = trip.getRoute();
        this.status = trip.getStatus();
        this.dateTime = ZonedDateTime.of(trip.getDateTime(), ZoneId.of("Z"));
        this.driver = trip.getDriver();
        this.startPoint = trip.getStartPoint();
        this.endPoint = trip.getEndPoint();
        this.rideIdList = trip.getRideIdList();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }

    public TripStatus getStatus() {
        return status;
    }

    public void setStatus(TripStatus status) { this.status = status; }

    public ZonedDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(ZonedDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public LazyUserView getDriver() {
        return driver;
    }

    public void setDriver(LazyUserView driver) {
        this.driver = driver;
    }

    public WaypointView getStartPoint() {
        return startPoint;
    }

    public WaypointView getEndPoint() {
        return endPoint;
    }

    public List<Long> getRideIdList() {
        return rideIdList;
    }

    public void setRideIdList(List<Long> rideIdList) {
        this.rideIdList = rideIdList;
    }
}
