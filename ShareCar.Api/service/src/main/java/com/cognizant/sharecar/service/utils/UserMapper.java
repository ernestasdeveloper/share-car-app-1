package com.cognizant.sharecar.service.utils;

import com.cognizant.sharecar.api.model.dto.LazyUserView;
import com.cognizant.sharecar.api.model.dto.UserView;
import com.cognizant.sharecar.repository.entity.User;

public class UserMapper {

    public static UserView mapEntityToView(User user){
        return new UserView(user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPhoneNo());
    }

    public static LazyUserView mapEntityToLazyView(User user){
        return new LazyUserView(user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getPhoneNo());
    }
}
