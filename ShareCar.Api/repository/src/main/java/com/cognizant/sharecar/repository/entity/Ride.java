package com.cognizant.sharecar.repository.entity;

import com.cognizant.sharecar.common.spi.model.RideStatus;

import javax.persistence.*;

@Entity
public class Ride {

    @Id
    @GeneratedValue
    private Long id;
    private RideStatus status;
    @ManyToOne
    @JoinColumn(name = "passenger_id")
    private User passenger;
    @ManyToOne
    @JoinColumn(name = "trip_id")
    private Trip trip;

    public Ride() {
    }

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

    public User getPassenger() {
        return passenger;
    }

    public void setPassenger(User passenger) {
        this.passenger = passenger;
    }

    public Trip getTrip() {
        return trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }
}
