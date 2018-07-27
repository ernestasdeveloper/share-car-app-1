package com.cognizant.sharecar.service;

import com.cognizant.sharecar.api.model.dto.LazyRideView;
import com.cognizant.sharecar.api.model.request.GetAllRidesQuery;
import com.cognizant.sharecar.api.spi.RideService;
import com.cognizant.sharecar.common.spi.model.RideStatus;
import com.cognizant.sharecar.repository.entity.Ride;
import com.cognizant.sharecar.repository.spi.RideRepository;
import com.cognizant.sharecar.service.exception.NotImplementedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class DefaultRideService implements RideService {

    private final RideRepository repository;

    @Autowired
    public DefaultRideService(RideRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<LazyRideView> getAll(GetAllRidesQuery getAllQuery) {
        final RideStatus status = getAllQuery.getStatus();
        final Long passengerId = getAllQuery.getPassengerId();
        final Long tripId = getAllQuery.getTripId();

        List<Ride> rides;

        if (status == null && passengerId == null && tripId == null) {
            rides = repository.findAll();
        }
        else {
            throw new NotImplementedException();
        }
        return rides.stream()
                .map(ride -> new LazyRideView(ride.getId(),
                                    ride.getStatus(),
                                    ride.getPassenger().getId(),
                                    ride.getTrip().getId(),
                                    ride.getTrip().getDriver().getFirstName(),
                                    ride.getTrip().getDriver().getLastName()))
                .collect(toList());
    }
}
