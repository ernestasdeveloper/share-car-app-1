package com.cognizant.sharecar.api.model.response;

import com.cognizant.sharecar.api.model.dto.TripView;
import com.cognizant.sharecar.common.spi.model.TripStatus;

import java.time.LocalDateTime;
import java.util.List;

public class GetTripResponse {
    private Long id;
    private String route;
    private TripStatus status;
    private LocalDateTime dateTime;
    private Long driverId;
    private List<Long> rideIdList;

    public GetTripResponse(TripView trip) {
        this.id = trip.getId();
        this.route = trip.getRoute();
        this.status = trip.getStatus();
        this.dateTime = trip.getDateTime();
        this.driverId = trip.getDriverId();
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

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public Long getDriverId() {
        return driverId;
    }

    public void setDriverId(Long driverId) {
        this.driverId = driverId;
    }

    public List<Long> getRideIdList() {
        return rideIdList;
    }

    public void setRideIdList(List<Long> rideIdList) {
        this.rideIdList = rideIdList;
    }
}
