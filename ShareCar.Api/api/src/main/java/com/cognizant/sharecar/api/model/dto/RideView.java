package com.cognizant.sharecar.api.model.dto;

import com.cognizant.sharecar.common.spi.model.RideStatus;
import org.springframework.hateoas.Identifiable;

public class RideView implements Identifiable<Long> {

    private Long id;
    private RideStatus status;
    private Long passengerId;
    private Long passengerFirstName;
    private Long passengerLastName;
    private Long tripId;
    private Long driverId;
    private Long driverFirstName;
    private Long driverLastName;

    public RideView(Long id, RideStatus status, Long passengerId, Long passengerFirstName, Long passengerLastName, Long tripId, Long driverId, Long driverFirstName, Long driverLastName) {
        this.id = id;
        this.status = status;
        this.passengerId = passengerId;
        this.passengerFirstName = passengerFirstName;
        this.passengerLastName = passengerLastName;
        this.tripId = tripId;
        this.driverId = driverId;
        this.driverFirstName = driverFirstName;
        this.driverLastName = driverLastName;
    }

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RideStatus getStatus() {
        return status;
    }

    public void setStatus(RideStatus status) {
        this.status = status;
    }

    public Long getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(Long passengerId) {
        this.passengerId = passengerId;
    }

    public Long getPassengerFirstName() {
        return passengerFirstName;
    }

    public void setPassengerFirstName(Long passengerFirstName) {
        this.passengerFirstName = passengerFirstName;
    }

    public Long getPassengerLastName() {
        return passengerLastName;
    }

    public void setPassengerLastName(Long passengerLastName) {
        this.passengerLastName = passengerLastName;
    }

    public Long getTripId() {
        return tripId;
    }

    public void setTripId(Long tripId) {
        this.tripId = tripId;
    }

    public Long getDriverFirstName() {
        return driverFirstName;
    }

    public void setDriverFirstName(Long driverFirstName) {
        this.driverFirstName = driverFirstName;
    }

    public Long getDriverLastName() {
        return driverLastName;
    }

    public void setDriverLastName(Long driverLastName) {
        this.driverLastName = driverLastName;
    }

    public Long getDriverId() {
        return driverId;
    }

    public void setDriverId(Long driverId) {
        this.driverId = driverId;
    }
}
