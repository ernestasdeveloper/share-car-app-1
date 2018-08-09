package com.cognizant.sharecar.api.model.response;

import com.cognizant.sharecar.api.model.dto.RideView;
import com.cognizant.sharecar.common.spi.model.RideStatus;

import java.time.ZoneId;
import java.time.ZonedDateTime;

public class GetRideResponse {
    private Long id;
    private RideStatus status;
    private Long passengerId;
    private String passengerFirstName;
    private String passengerLastName;
    private Long driverId;
    private String driverFirstName;
    private String driverLastName;
    private Long tripId;
    private String startPoint;
    private String endPoint;
    private ZonedDateTime dateTime;

    public GetRideResponse(RideView rideView) {
        this.id = rideView.getId();
        this.status = rideView.getStatus();
        this.passengerId = rideView.getPassengerId();
        this.passengerFirstName = rideView.getPassengerFirstName();
        this.passengerLastName = rideView.getPassengerLastName();
        this.tripId = rideView.getTripId();
        this.driverId = rideView.getDriverId();
        this.driverFirstName = rideView.getDriverFirstName();
        this.driverLastName = rideView.getDriverLastName();
        this.startPoint = rideView.getStartPoint();
        this.endPoint = rideView.getEndPoint();
        this.dateTime = ZonedDateTime.of(rideView.getDateTime(), ZoneId.of("Z"));
    }

    public Long getId() {
        return id;
    }

    public RideStatus getStatus() {
        return status;
    }

    public Long getPassengerId() {
        return passengerId;
    }

    public String getPassengerFirstName() {
        return passengerFirstName;
    }

    public String getPassengerLastName() {
        return passengerLastName;
    }

    public Long getTripId() {
        return tripId;
    }

    public Long getDriverId() {
        return driverId;
    }

    public String getDriverFirstName() {
        return driverFirstName;
    }

    public String getDriverLastName() {
        return driverLastName;
    }

    public String getStartPoint() {
        return startPoint;
    }

    public String getEndPoint() {
        return endPoint;
    }

    public ZonedDateTime getDateTime() {
        return dateTime;
    }
}