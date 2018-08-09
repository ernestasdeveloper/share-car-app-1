package com.cognizant.sharecar.api.model.response;

import com.cognizant.sharecar.api.model.dto.UserView;

public class GetUserResponse {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNo;

    public GetUserResponse(UserView user){
        this.id = user.getId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.phoneNo = user.getPhoneNo();
    }

    public Long getId() {
        return id;
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
