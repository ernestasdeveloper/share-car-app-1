package com.cognizant.sharecar.api.resource.auth;

import com.cognizant.sharecar.api.model.request.AccessTokenRequest;
import com.cognizant.sharecar.api.spi.FacebookAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class FacebookAuthenticationApi {

    private FacebookAuthenticationService facebookAuthenticationService;

    @Autowired
    public FacebookAuthenticationApi(FacebookAuthenticationService facebookAuthenticationService) {
        this.facebookAuthenticationService = facebookAuthenticationService;
    }

    @PostMapping(path = "/facebook")
    public ResponseEntity login(@RequestBody AccessTokenRequest request, HttpServletResponse httpServletResponse) {
        String authToken = facebookAuthenticationService.authenticate(request);

        Cookie cookie = new Cookie("token", authToken);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        httpServletResponse.addCookie(cookie);
        return ResponseEntity.noContent().build();
    }

    @PostMapping(path = "/logout")
    public ResponseEntity logout(HttpServletRequest request, HttpServletResponse httpServletResponse) {
        Optional<Cookie> cookie = Arrays.stream(request.getCookies()).filter(c -> c.getName().equalsIgnoreCase("token"))
                                        .findFirst();
        cookie.ifPresent(c -> {
            c.setMaxAge(0);
            c.setValue("deleted");
            c.setPath(null);
            httpServletResponse.addCookie(c);
        });
        return ResponseEntity.noContent().build();
    }

}
