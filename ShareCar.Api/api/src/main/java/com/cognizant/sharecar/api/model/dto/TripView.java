package com.cognizant.sharecar.api.model.dto;

import com.cognizant.sharecar.common.spi.model.TripStatus;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class TripView{

    private Long id;
    private String route;
    private TripStatus status;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime dateTime;
    private LazyUserView driver;
    private List<Long> rideIdList = new ArrayList<>();

    public TripView() {
    }

    public TripView(Long id, String route, TripStatus status, LocalDateTime dateTime, LazyUserView driver, List<Long> rideIdList) {
        this.id = id;
        this.route = route;
        this.status = status;
        this.dateTime = dateTime;
        this.driver = driver;
        this.rideIdList = rideIdList;
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

    public void setStatus(TripStatus status) {
        this.status = status;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public LazyUserView getDriver() {
        return driver;
    }

    public void setDriver(LazyUserView driver) {
        this.driver = driver;
    }

    public List<Long> getRideIdList() {
        return rideIdList;
    }

    public void setRideIdList(List<Long> rideIdList) {
        this.rideIdList = rideIdList;
    }
}
