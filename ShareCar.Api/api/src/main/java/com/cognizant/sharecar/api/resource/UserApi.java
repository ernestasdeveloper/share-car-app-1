package com.cognizant.sharecar.api.resource;

import com.cognizant.sharecar.api.model.exception.InternalServerException;
import com.cognizant.sharecar.api.model.dto.UserView;
import com.cognizant.sharecar.api.model.request.AddUserRequest;
import com.cognizant.sharecar.api.model.request.UpdateUserRequest;
import com.cognizant.sharecar.api.model.response.AddUserResponse;
import com.cognizant.sharecar.api.model.response.GetUserResponse;
import com.cognizant.sharecar.api.spi.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/users")
public class UserApi{

    @Autowired
    private UserService userService;

    @GetMapping(path = "/{id}")
    public ResponseEntity<GetUserResponse> getOne(@PathVariable(name = "id") Long id) {
        UserView user = userService.getOne(id);
        return ResponseEntity.ok(new GetUserResponse(user));
    }

    @PostMapping ResponseEntity<AddUserResponse> add(@RequestBody AddUserRequest userRequest){
        try {
            AddUserResponse response = new AddUserResponse(userService.add(userRequest));
            return ResponseEntity.ok(response);
        } catch (Exception exception) {
            throw new InternalServerException("Internal error occurred!");
        }
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity update(@PathVariable(name = "id") Long id,
                                 @RequestBody UpdateUserRequest updateUserRequest){
        userService.update(id, updateUserRequest);
        return new ResponseEntity(HttpStatus.OK);
    }
}

