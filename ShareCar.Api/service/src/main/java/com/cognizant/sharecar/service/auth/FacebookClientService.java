package com.cognizant.sharecar.service.auth;

public interface FacebookClientService {

    void verifyToken(String token) throws TokenVerificationException;
    UserInfo getUserInfo(String token);
}
