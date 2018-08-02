package com.cognizant.sharecar.api.spi;

import com.cognizant.sharecar.api.model.dto.UserView;
import com.cognizant.sharecar.api.model.request.AddUserRequest;
import com.cognizant.sharecar.api.model.request.UpdateUserRequest;

public interface UserService {

    UserView getOne(Long id);

    Long add(AddUserRequest request);

    void update(Long id, UpdateUserRequest updateUserRequest);
}
