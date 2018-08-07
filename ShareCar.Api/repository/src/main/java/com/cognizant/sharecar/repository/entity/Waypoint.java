package com.cognizant.sharecar.repository.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Waypoint {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private double longitude;
    private double latitude;

    public Waypoint() {
    }

    public Waypoint(String name, double longitude, double latitude) {
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getLongitude() {
        return longitude;
    }

    public double getLatitude() {
        return latitude;
    }
}
