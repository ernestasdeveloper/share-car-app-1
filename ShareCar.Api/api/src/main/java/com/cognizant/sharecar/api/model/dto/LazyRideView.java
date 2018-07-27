package com.cognizant.sharecar.api.model.dto;

import com.cognizant.sharecar.common.spi.model.RideStatus;
import org.springframework.hateoas.Identifiable;

public class LazyRideView implements Identifiable<Long> {

    private Long id;
    private RideStatus status;
    // Only the relevant fields from the User table are rendered here
    private Long passengerId;
    private Long tripId;
    private String driverFirstName;
    private String driverLastName;

    public LazyRideView(Long id, RideStatus status, Long passengerId, Long tripId, String driverFirstName, String driverLastName) {
        this.id = id;
        this.status = status;
        this.passengerId = passengerId;
        this.tripId = tripId;
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

    public Long getTripId() {
        return tripId;
    }

    public void setTripId(Long tripId) {
        this.tripId = tripId;
    }

    public String getDriverFirstName() {
        return driverFirstName;
    }

    public void setDriverFirstName(String driverFirstName) {
        this.driverFirstName = driverFirstName;
    }

    public String getDriverLastName() {
        return driverLastName;
    }

    public void setDriverLastName(String driverLastName) {
        this.driverLastName = driverLastName;
    }
}
