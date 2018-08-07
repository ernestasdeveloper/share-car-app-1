package com.cognizant.sharecar;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.cognizant.sharecar.service.auth.JwtAuthenticationToken;
import com.cognizant.sharecar.service.auth.JwtProperties;
import com.cognizant.sharecar.service.auth.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpServerErrorException;

import static org.springframework.http.HttpStatus.UNAUTHORIZED;

@Component
@SuppressWarnings("unchecked")
public class JwtAuthenticationProvider implements AuthenticationProvider, InitializingBean {

    public static final Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationProvider.class.getSimpleName());

    private final JwtProperties jwtProperties;
    private JWTVerifier jwtVerifier;

    @Autowired
    public JwtAuthenticationProvider(JwtProperties jwtProperties) {
        this.jwtProperties = jwtProperties;
    }

    @Override
    public Authentication authenticate(Authentication authentication) {
        String token = String.valueOf(authentication.getCredentials());
        DecodedJWT decodedJWT;
        try {
            decodedJWT = jwtVerifier.verify(token);
        } catch (Exception e) {
            LOGGER.error("Error occurred when trying to validate authentication token!", e);
            throw new HttpServerErrorException(UNAUTHORIZED, "Access token could not be verified successfully!");
        }
        UserPrincipal user = new UserPrincipal();
        user.setUsername(decodedJWT.getSubject());

        return new JwtAuthenticationToken(user);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return (JwtAuthenticationToken.class.isAssignableFrom(authentication));
    }

    @Override
    public void afterPropertiesSet() {
        jwtVerifier = JWT.require(Algorithm.HMAC512(jwtProperties.getSecret())).withIssuer(jwtProperties.getIssuer()).build();
    }
}
