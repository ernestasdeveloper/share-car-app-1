package com.cognizant.sharecar.service.auth;

import org.springframework.security.authentication.AbstractAuthenticationToken;

import java.util.ArrayList;

public class JwtAuthenticationToken extends AbstractAuthenticationToken {

    private String token;
    private UserPrincipal principal;

    public JwtAuthenticationToken(String token) {
        super(new ArrayList<>());
        this.token = token;
    }

    public JwtAuthenticationToken(UserPrincipal principal) {
        super(new ArrayList<>());
        this.principal = principal;
    }

    public String getToken() {
        return token;
    }

    @Override
    public Object getCredentials() {
        return token;
    }

    @Override
    public Object getPrincipal() {
        return principal;
    }

    public void setPrincipal(UserPrincipal principal) {
        this.principal = principal;
    }

    @Override
    public boolean isAuthenticated() {
        return principal != null && !principal.isEmpty();
    }
}
