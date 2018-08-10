package com.cognizant.sharecar.repository.entity;

import com.cognizant.sharecar.common.spi.model.RideStatus;

import javax.persistence.*;

@Entity
public class Ride {

    @Id
    @GeneratedValue
    private Long id;
    @Enumerated(EnumType.STRING)
    private RideStatus status;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pickup_point_id")
    private Waypoint pickupPoint;
    @ManyToOne
    @JoinColumn(name = "passenger_id")
    private User passenger;
    @ManyToOne
    @JoinColumn(name = "trip_id")
    private Trip trip;

    public Ride() {
    }

    public Ride(RideStatus status, User passenger, Trip trip, Waypoint pickupPoint) {
        this.status = status;
        this.passenger = passenger;
        this.trip = trip;
        this.pickupPoint = pickupPoint;
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

    public Waypoint getPickupPoint() {
        return pickupPoint;
    }

    public void setPickupPoint(Waypoint pickupPoint) {
        this.pickupPoint = pickupPoint;
    }
}
