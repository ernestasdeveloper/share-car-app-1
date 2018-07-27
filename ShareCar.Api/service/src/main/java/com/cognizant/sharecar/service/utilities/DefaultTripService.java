package com.cognizant.sharecar.service.utilities;

import com.cognizant.sharecar.api.model.dto.TripView;
import com.cognizant.sharecar.api.model.request.GetAllTripsQuery;
import com.cognizant.sharecar.api.spi.TripService;
import com.cognizant.sharecar.repository.entity.Ride;
import com.cognizant.sharecar.repository.entity.Trip;
import com.cognizant.sharecar.repository.spi.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class DefaultTripService implements TripService {

    private final TripRepository tripRepository;

    @Autowired
    public DefaultTripService(TripRepository tripRepository){
        this.tripRepository = tripRepository;
    }

    @Override
    public List<TripView> getAll(GetAllTripsQuery getAllTripsQuery){
        return tripRepository.findAll()
                .stream()
                .map(trip -> {
                    TripView tripView =  new TripView(trip.getId(),
                                    trip.getRoute(),
                                    trip.getStatus(),
                                    trip.getDateTime(),
                                    trip.getDriver().getId());

                    tripView.setRideIdList(trip.getRides()
                            .stream()
                            .map(Ride::getId)
                            .collect(toList()));

                    return tripView;})
                .collect(toList());
    }
}
