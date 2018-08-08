package com.cognizant.sharecar.service.auth;

import com.cognizant.sharecar.repository.entity.User;

public final class UserInfoMapper {

    public static User toEntity(UserInfo userInfo) {
        User user = new User();
        user.setFbId(userInfo.getId());
        user.setEmail(userInfo.getEmail());
        user.setFirstName(user.getFirstName());
        user.setLastName(user.getLastName());
        return user;
    }
}
