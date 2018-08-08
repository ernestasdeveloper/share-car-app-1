package com.cognizant.sharecar.api.resource.auth;

import com.cognizant.sharecar.api.model.dto.UserView;
import com.cognizant.sharecar.api.spi.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/principal")
public class UserInfoApi {

    public final UserService userService;

    @Autowired
    public UserInfoApi(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "/info")
    public ResponseEntity<UserView> get() {
        return ResponseEntity.ok(userService.getLoggedInUser());
    }
}
