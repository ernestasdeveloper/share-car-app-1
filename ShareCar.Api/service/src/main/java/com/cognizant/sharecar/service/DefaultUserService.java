package com.cognizant.sharecar.service;

import com.cognizant.sharecar.api.model.dto.UserView;
import com.cognizant.sharecar.api.model.request.AddUserRequest;
import com.cognizant.sharecar.api.model.request.UpdateUserRequest;
import com.cognizant.sharecar.api.spi.UserService;
import com.cognizant.sharecar.common.spi.model.RideStatus;
import com.cognizant.sharecar.repository.entity.User;
import com.cognizant.sharecar.repository.spi.UserRepository;
import com.cognizant.sharecar.service.exception.NotFoundException;
import com.cognizant.sharecar.service.utils.UserMapper;
import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicInteger;


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
    public int countRidesDriven(Long id){
        AtomicInteger counter = new AtomicInteger(0);
        User user  = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User with id " + id + " was not found"));

        user.getTrips().forEach(trip -> counter.addAndGet((int)trip.getRides().stream()
                .filter(ride -> ride.getStatus().equals(RideStatus.RIDE_SUCCESSFUL))
                .count()));

        return counter.get();
    }

    @Override
    public int countRidesTaken(Long id){
        AtomicInteger counter = new AtomicInteger(0);
        User user  = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User with id " + id + " was not found"));

        counter.addAndGet((int)user.getRides().stream()
                .filter(ride -> ride.getStatus().equals(RideStatus.RIDE_SUCCESSFUL))
                .count());

        return counter.get();
    }
}
