package com.cognizant.sharecar.api.spi;

import com.cognizant.sharecar.api.model.dto.TripView;
import com.cognizant.sharecar.api.model.request.GetAllTripsQuery;

import java.util.List;

public interface TripService {
    List<TripView> getAll(GetAllTripsQuery getAllTripsQuery);
}
