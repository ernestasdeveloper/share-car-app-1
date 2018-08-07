package com.cognizant.sharecar.service;

import com.cognizant.sharecar.api.model.dto.UserView;
import com.cognizant.sharecar.api.model.request.AddUserRequest;
import com.cognizant.sharecar.api.model.request.UpdateUserRequest;
import com.cognizant.sharecar.api.spi.UserService;
import com.cognizant.sharecar.repository.entity.User;
import com.cognizant.sharecar.repository.spi.UserRepository;
import com.cognizant.sharecar.service.auth.JwtAuthenticationToken;
import com.cognizant.sharecar.service.auth.UserPrincipal;
import com.cognizant.sharecar.service.exception.NotFoundException;
import com.cognizant.sharecar.service.utils.UserMapper;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException;

import static com.cognizant.sharecar.service.utils.UserMapper.mapEntityToView;
import static org.springframework.http.HttpStatus.UNAUTHORIZED;


@Service
public class DefaultUserService implements UserService {

    private final UserRepository userRepository;

    public DefaultUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserView getOne(Long id) {
        return userRepository.findById(id)
                .map(UserMapper::mapEntityToView)
                .orElseThrow(() -> new NotFoundException("User with id " + id + " was not found"));
    }

    @Override
    public Long add(AddUserRequest request) {
        final User userEntity = new User(request.getFirstName(),
                request.getLastName(),
                request.getEmail(),
                request.getPhoneNo());
        return userRepository.save(userEntity).getId();
    }

    @Override
    public void update(Long id, UpdateUserRequest updateUserRequest) {
        final User user = userRepository.getOne(id);
        user.setFirstName(updateUserRequest.getFirstName());
        user.setLastName(updateUserRequest.getLastName());
        user.setEmail(updateUserRequest.getEmail());
        user.setPhoneNo(updateUserRequest.getPhoneNo());
        userRepository.save(user);
    }

    @Override
    public UserView getLoggedInUser() {
        SecurityContext context = SecurityContextHolder.getContext();
        if (context == null || context.getAuthentication() == null) {
            throw new HttpServerErrorException(UNAUTHORIZED, "User is not authenticated!");
        }
        JwtAuthenticationToken token = (JwtAuthenticationToken) context.getAuthentication();
        if (!token.isAuthenticated()) {
            throw new HttpServerErrorException(UNAUTHORIZED, "User is not authenticated!");
        }

        String username = ((UserPrincipal) token.getPrincipal()).getUsername();
        return mapEntityToView(userRepository.findByEmail(username)
                                             .orElseThrow(() -> new NotFoundException(String.format("User could not be found with email \"%s\"", username))));
    }
}
