package com.cognizant.sharecar.api.model.dto;

import com.cognizant.sharecar.common.spi.model.TripStatus;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.hateoas.Identifiable;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class TripView implements Identifiable<Long> {

    private Long id;
    private String route;
    private TripStatus status;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime dateTime;
    private Long driverId;
    private List<Long> rideIdList = new ArrayList<>();

    public TripView() {
    }

    public TripView(Long id, String route, TripStatus status, LocalDateTime dateTime, Long driverId) {
        this.id = id;
        this.route = route;
        this.status = status;
        this.dateTime = dateTime;
        this.driverId = driverId;
    }

    @Override
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

    public void setStatus(TripStatus status) {
        this.status = status;
    }

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
