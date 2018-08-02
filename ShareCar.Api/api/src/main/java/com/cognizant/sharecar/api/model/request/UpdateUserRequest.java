package com.cognizant.sharecar.api.model.request;

public class UpdateUserRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNo;

    public UpdateUserRequest() {
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNo() {
        return phoneNo;
    }
}
