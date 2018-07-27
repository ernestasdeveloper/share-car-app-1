package com.cognizant.sharecar.api.model.dto;

import org.springframework.hateoas.Identifiable;

import java.util.ArrayList;
import java.util.List;

public class UserView implements Identifiable<Long> {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNo;

    private List<TripView> trips = new ArrayList<>();
    private List<LazyRideView> rides = new ArrayList<>();

    public UserView() {
    }

    public UserView(Long id, String firstName, String lastName, String email, String phoneNo, List<TripView> trips, List<LazyRideView> rides) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNo = phoneNo;
        this.trips = trips;
        this.rides = rides;
    }

    @Override
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

    public List<LazyRideView> getRides() {
        return rides;
    }

    public void setRides(List<LazyRideView> rides) {
        this.rides = rides;
    }
}