package com.cognizant.sharecar.service.auth;

import org.springframework.util.StringUtils;

public class UserPrincipal {

    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean isEmpty() {
        return StringUtils.isEmpty(username);
    }
}
