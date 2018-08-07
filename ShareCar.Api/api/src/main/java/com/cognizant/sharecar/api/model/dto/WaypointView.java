package com.cognizant.sharecar.api.model.dto;

public class WaypointView {
    private String name;
    private double longitude;
    private double latitude;

    public WaypointView() {
    }

    public WaypointView(String name, double longitude, double latitude) {
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
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
