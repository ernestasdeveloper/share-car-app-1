package com.cognizant.sharecar.service.auth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.cognizant.sharecar.api.model.request.AccessTokenRequest;
import com.cognizant.sharecar.api.spi.FacebookAuthenticationService;
import com.cognizant.sharecar.repository.entity.User;
import com.cognizant.sharecar.repository.spi.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
public class DefaultFacebookAuthenticationService implements FacebookAuthenticationService {

    private FacebookClientService facebookClientService;
    private UserRepository userRepository;
    private JwtProperties jwtProperties;

    @Autowired
    public DefaultFacebookAuthenticationService(FacebookClientService facebookClientService, UserRepository userRepository, JwtProperties jwtProperties) {
        this.facebookClientService = facebookClientService;
        this.userRepository = userRepository;
        this.jwtProperties = jwtProperties;
    }

    @Override
    public String authenticate(AccessTokenRequest request) {
        try {
            facebookClientService.verifyToken(request.getAccessToken());
        } catch (TokenVerificationException e) {
        }

        UserInfo userInfo = facebookClientService.getUserInfo(request.getAccessToken());
        if (userInfo == null) {
            throw new IllegalStateException("Cannot retrieve user info from facebook!");
        }
        validate(userInfo);
        userRepository.findByEmail(userInfo.getEmail()).orElseGet(() -> {
            User user = mapToEntity(userInfo);
            return userRepository.save(user);
        });

        return JWT.create().withIssuer(jwtProperties.getIssuer())
                           .withSubject(userInfo.getEmail())
                           .sign(Algorithm.HMAC512(jwtProperties.getSecret()));

    }

    private void validate(UserInfo userInfo) {
        if (StringUtils.isEmpty(userInfo.getEmail())) {
            throw new IllegalStateException("Facebook returned empty user info!");
        }
    }

    private User mapToEntity(UserInfo userInfo) {
        User user = new User();
        user.setLastName(userInfo.getLastName());
        user.setFirstName(userInfo.getFirstName());
        user.setEmail(userInfo.getEmail());
        user.setFbId(userInfo.getId());
        return user;
    }
}
