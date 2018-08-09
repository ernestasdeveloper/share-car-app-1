package com.cognizant.sharecar.service;

import com.cognizant.sharecar.api.model.dto.TripView;
import com.cognizant.sharecar.api.model.dto.UserView;
import com.cognizant.sharecar.api.model.request.AddTripRequest;
import com.cognizant.sharecar.api.model.request.GetAllTripsQuery;
import com.cognizant.sharecar.api.model.request.UpdateTripRequest;
import com.cognizant.sharecar.api.spi.TripService;
import com.cognizant.sharecar.api.spi.UserService;
import com.cognizant.sharecar.common.spi.model.TripStatus;
import com.cognizant.sharecar.repository.entity.Trip;
import com.cognizant.sharecar.repository.entity.User;
import com.cognizant.sharecar.repository.specifications.TripSpecifications;
import com.cognizant.sharecar.repository.spi.TripRepository;
import com.cognizant.sharecar.repository.spi.UserRepository;
import com.cognizant.sharecar.service.exception.NotFoundException;
import com.cognizant.sharecar.service.utils.TripMapper;
import com.cognizant.sharecar.service.utils.WaypointMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class DefaultTripService implements TripService {

    private final TripRepository tripRepository;
    private final TripSpecifications spec;

    @Autowired
    private UserService userService;

    @Autowired
    public DefaultTripService(TripRepository tripRepository, TripSpecifications spec) {
        this.tripRepository = tripRepository;
        this.spec = spec;
    }

    @Override
    public TripView getOne(Long id) {
        return tripRepository.findById(id)
                .map(TripMapper::mapEntityToView)
                .orElseThrow(() -> new NotFoundException("Trip with id " + id + " was not found"));
    }

    @Override
    public List<TripView> getAll(GetAllTripsQuery getAllTripsQuery){
        final TripStatus status = getAllTripsQuery.getStatus();
        final Long driverId = getAllTripsQuery.getDriverId();
        final LocalDate date = getAllTripsQuery.getDate();

        return tripRepository.findAll(spec.tripsFilteredByDate(date)
                .and(spec.tripsFilteredByStatus(status))
                .and(spec.tripsFilteredByDriverId(driverId)))
                .stream()
                .map(TripMapper::mapEntityToView)
                .collect(toList());
    }

    @Override
    public Long add(AddTripRequest request) {
        final UserView loggedInUser = userService.getLoggedInUser();
        final Trip tripEntity = new Trip(request.getRoute(),
                TripStatus.SCHEDULED,
                request.getDateTime(),
                new User(loggedInUser.getId()),
                WaypointMapper.mapViewToEntity(request.getStartPoint()),
                WaypointMapper.mapViewToEntity(request.getEndPoint())
        );
        return tripRepository.save(tripEntity).getId();
    }

    @Override
    public void patch(Long id, UpdateTripRequest updateTripRequest) {
        final TripStatus status = updateTripRequest.getStatus();
        final LocalDateTime dateTime = updateTripRequest.getDateTime();
        final String route = updateTripRequest.getRoute();
        final Trip trip = tripRepository.getOne(id);

        if(status != null)
            trip.setStatus(status);
        if(dateTime != null)
            trip.setDateTime(dateTime);
        if(route != null)
            trip.setRoute(route);

        tripRepository.save(trip);
    }
}
