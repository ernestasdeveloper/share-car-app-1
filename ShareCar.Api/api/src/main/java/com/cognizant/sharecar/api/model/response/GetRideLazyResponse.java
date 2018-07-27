package com.cognizant.sharecar.api.model.response;

import com.cognizant.sharecar.common.spi.model.RideStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.hateoas.ResourceSupport;

public class GetRideLazyResponse extends ResourceSupport {
    private Long rideId;
    private RideStatus status;
    private Long passengerId;
    private Long tripId;
    private String driverFirstName;
    private String driverLastName;

    public GetRideLazyResponse(Long rideId, RideStatus status, Long passengerId, Long tripId, String driverFirstName, String driverLastName) {
        this.rideId = rideId;
        this.status = status;
        this.passengerId = passengerId;
        this.tripId = tripId;
        this.driverFirstName = driverFirstName;
        this.driverLastName = driverLastName;
    }

    @JsonProperty("id")
    public Long getRideIdId() {
        return rideId;
    }

    public void setId(Long rideId) {
        this.rideId = rideId;
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
