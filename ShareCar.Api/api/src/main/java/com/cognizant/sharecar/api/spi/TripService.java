package com.cognizant.sharecar.api.spi;

import com.cognizant.sharecar.api.model.dto.TripView;
import com.cognizant.sharecar.api.model.request.AddTripRequest;
import com.cognizant.sharecar.api.model.request.GetAllTripsQuery;
import com.cognizant.sharecar.api.model.request.UpdateTripRequest;

import java.util.List;

public interface TripService {

    TripView getOne(Long id);

    List<TripView> getAll(GetAllTripsQuery getAllTripsQuery);

    Long add(AddTripRequest request);

    void patch(Long id, UpdateTripRequest updateTripRequest);
}
