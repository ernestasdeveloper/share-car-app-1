package com.cognizant.sharecar.repository.entity;

import com.cognizant.sharecar.common.spi.model.TripStatus;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Trip {

    @Id
    @GeneratedValue
    private Long id;

    private String route;
    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    @JoinColumn(name="start_point_id")
    private Waypoint startPoint;
    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    @JoinColumn(name="end_point_id")
    private Waypoint endPoint;
    @Enumerated(EnumType.STRING)
    private TripStatus status;
    private LocalDateTime dateTime;
    @ManyToOne
    @JoinColumn(name="driver_id")
    private User driver;
    @OneToMany(mappedBy = "trip")
    private List<Ride> rides = new ArrayList<>();

    public Trip() {
    }

    public Trip(Long id) {
        this.id = id;
    }

    public Trip(String route, TripStatus status, LocalDateTime dateTime, User driver, Waypoint startPoint, Waypoint endPoint) {
        this.route = route;
        this.status = status;
        this.dateTime = dateTime;
        this.driver = driver;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
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

    public Waypoint getStartPoint() {
        return startPoint;
    }

    public void setStartPoint(Waypoint startPoint) {
        this.startPoint = startPoint;
    }

    public Waypoint getEndPoint() {
        return endPoint;
    }

    public void setEndPoint(Waypoint endPoint) {
        this.endPoint = endPoint;
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

    public User getDriver() {
        return driver;
    }

    public void setDriver(User driver) {
        this.driver = driver;
    }

    public List<Ride> getRides() {
        return rides;
    }

    public void setRides(List<Ride> rides) {
        this.rides = rides;
    }
}
