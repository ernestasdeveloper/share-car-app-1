package com.cognizant.sharecar.service;

import com.cognizant.sharecar.api.model.dto.RideView;
import com.cognizant.sharecar.api.model.request.AddRideRequest;
import com.cognizant.sharecar.api.model.request.GetAllRidesQuery;
import com.cognizant.sharecar.api.model.request.UpdateRideRequest;
import com.cognizant.sharecar.api.spi.RideService;
import com.cognizant.sharecar.common.spi.model.RideStatus;
import com.cognizant.sharecar.repository.entity.Ride;
import com.cognizant.sharecar.repository.entity.Trip;
import com.cognizant.sharecar.repository.entity.User;
import com.cognizant.sharecar.repository.specifications.RideSpecifications;
import com.cognizant.sharecar.repository.spi.RideRepository;
import com.cognizant.sharecar.service.exception.NotFoundException;
import com.cognizant.sharecar.service.utils.RideMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class DefaultRideService implements RideService {

    private final RideRepository rideRepository;
    private final RideSpecifications rideSpecifications;

    @Autowired
    public DefaultRideService(RideRepository rideRepository, RideSpecifications rideSpecifications) {
        this.rideRepository = rideRepository;
        this.rideSpecifications = rideSpecifications;
    }

    @Override
    public RideView getOne(Long id) {
        return rideRepository.findById(id)
                .map(RideMapper::mapEntityToView)
                .orElseThrow(() -> new NotFoundException("Ride with id " + id + " was not found"));
    }

    @Override
    public List<RideView> getAll(GetAllRidesQuery getAllQuery) {
        final RideStatus status = getAllQuery.getStatus();
        final Long passengerId = getAllQuery.getPassengerId();
        final Long tripId = getAllQuery.getTripId();
        final Long driverId = getAllQuery.getDriverId();

        return rideRepository.findAll(rideSpecifications.ridesFilteredByStatus(status)
                .and(rideSpecifications.ridesFilteredByPassengerId(passengerId))
                .and(rideSpecifications.ridesFilteredByTripId(tripId))
                .and(rideSpecifications.ridesFilteredByDriverId(driverId)))
                .stream()
                .map(RideMapper::mapEntityToView)
                .collect(toList());
    }

    @Override
    public Long add(AddRideRequest request) {
        final Ride rideEntity = new Ride(RideStatus.REQUEST_PENDING,
                new User(request.getPassengerId()),
                new Trip(request.getTripId())
        );
        return rideRepository.save(rideEntity).getId();
    }

    @Override
    public void patch(Long id, UpdateRideRequest updateRideRequest) {
        final RideStatus status = updateRideRequest.getStatus();
        final Ride ride = rideRepository.getOne(id);

        if(status != null)
            ride.setStatus(status);

        rideRepository.save(ride);
    }
}
