package com.cognizant.sharecar.api.model.dto;

import java.util.ArrayList;
import java.util.List;

public class UserView{

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNo;

    private List<TripView> trips = new ArrayList<>();
    private List<RideView> rides = new ArrayList<>();

    public UserView() {
    }

    public UserView(Long id, String firstName, String lastName, String email, String phoneNo) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNo = phoneNo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public List<TripView> getTrips() {
        return trips;
    }

    public void setTrips(List<TripView> trips) {
        this.trips = trips;
    }

    public List<RideView> getRides() {
        return rides;
    }

    public void setRides(List<RideView> rides) {
        this.rides = rides;
    }
}