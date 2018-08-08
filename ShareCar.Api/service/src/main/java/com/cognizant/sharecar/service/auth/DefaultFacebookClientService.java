package com.cognizant.sharecar.service.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Objects;


@Service
public class DefaultFacebookClientService implements FacebookClientService {

    private FacebookProperties facebookProperties;
    private RestTemplate restTemplate = new RestTemplate();

    @Autowired
    public DefaultFacebookClientService(FacebookProperties facebookProperties) {
        this.facebookProperties = facebookProperties;
    }

    @Override
    public UserInfo getUserInfo(String token) {
        URI userInfoUri = UriComponentsBuilder.newInstance()
                                      .scheme("https")
                                      .host(facebookProperties.getApiUrl())
                                      .path("me")
                                      .queryParam("fields", "id,email,first_name,last_name,name,gender,birthday,picture")
                                      .queryParam("access_token", token)
                                      .build()
                                      .toUri();
        ResponseEntity<UserInfo> userInfo = restTemplate.getForEntity(userInfoUri, UserInfo.class);
        if (userInfo.getStatusCode().is2xxSuccessful()) {
            return userInfo.getBody();
        }
        throw new RuntimeException("could not get user info!");
    }

    @Override
    public void verifyToken(String token) throws TokenVerificationException {
        URI verifyTokenUri = UriComponentsBuilder.newInstance()
                                      .scheme("https")
                                      .host(facebookProperties.getApiUrl())
                                      .path("debug_token")
                                      .queryParam("input_token", token)
                                      .queryParam("access_token", facebookProperties.getAppId() + "|" + facebookProperties.getAppSecret())
                                      .build()
                                      .toUri();

        ResponseEntity<AccessTokenData> responseEntity = restTemplate.getForEntity(verifyTokenUri, AccessTokenData.class);
        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            TokenData tokenData = responseEntity.getBody().getTokenData();
            if (tokenData != null && Objects.equals(Boolean.FALSE, tokenData.getIsValid())) {
                throw new TokenVerificationException("token is invalid!");
            }
        }
    }
}
