package com.cognizant.sharecar.service;

import com.cognizant.sharecar.api.model.dto.LazyRideView;
import com.cognizant.sharecar.api.model.dto.RideView;
import com.cognizant.sharecar.api.model.request.AddRideRequest;
import com.cognizant.sharecar.api.model.request.GetAllRidesQuery;
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
    private final RideSpecifications spec;

    @Autowired
    public DefaultRideService(RideRepository rideRepository, RideSpecifications spec) {
        this.rideRepository = rideRepository;
        this.spec = spec;
    }

    @Override
    public RideView getOne(Long id) {
        return rideRepository.findById(id)
                .map(RideMapper::mapEntityToView)
                .orElseThrow(() -> new NotFoundException("Ride with id " + id + " was not found"));
    }

    @Override
    public List<LazyRideView> getAll(GetAllRidesQuery getAllQuery) {
        final RideStatus status = getAllQuery.getStatus();
        final Long passengerId = getAllQuery.getPassengerId();
        final Long tripId = getAllQuery.getTripId();

        return rideRepository.findAll(spec.ridesFilteredByStatus(status)
                .and(spec.ridesFilteredByPassengerId(passengerId))
                .and(spec.ridesFilteredByTripId(tripId)))
                .stream()
                .map(RideMapper::mapEntityToLazyView)
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
}
