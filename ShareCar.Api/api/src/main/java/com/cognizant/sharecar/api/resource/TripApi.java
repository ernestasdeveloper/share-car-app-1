package com.cognizant.sharecar.api.resource;

import com.cognizant.sharecar.api.model.exception.InternalServerException;
import com.cognizant.sharecar.api.model.dto.TripView;
import com.cognizant.sharecar.api.model.request.AddTripRequest;
import com.cognizant.sharecar.api.model.request.GetAllTripsQuery;
import com.cognizant.sharecar.api.model.request.UpdateTripRequest;
import com.cognizant.sharecar.api.model.response.AddTripResponse;
import com.cognizant.sharecar.api.model.response.GetTripResponse;
import com.cognizant.sharecar.api.spi.TripService;
import com.cognizant.sharecar.common.spi.model.TripStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping(path = "/trips")
public class TripApi{

    @Autowired
    private TripService tripService;

    @GetMapping(path = "/{id}")
    public ResponseEntity<GetTripResponse> getOne(@PathVariable(name = "id") Long id) {
        TripView trip = tripService.getOne(id);
        return ResponseEntity.ok(new GetTripResponse(trip));
    }

    @GetMapping
    public ResponseEntity<List<GetTripResponse>> getAll(@RequestParam(required = false)TripStatus status,
                                                        @RequestParam(required = false)Long driverId,
                                                        @RequestParam(required = false)
                                                            @DateTimeFormat(pattern="yyyy-MM-dd")LocalDate date) {
        List<TripView> trips = tripService.getAll(new GetAllTripsQuery(status,driverId, date));
        List<GetTripResponse> responses = trips.stream()
                .map(GetTripResponse::new)
                .collect(toList());

        return ResponseEntity.ok(responses);
    }

    @PostMapping ResponseEntity<AddTripResponse> add(@RequestBody AddTripRequest tripRequest){
        try {
            AddTripResponse response = new AddTripResponse(tripService.add(tripRequest));
            return ResponseEntity.ok(response);
        } catch (Exception exception) {
            throw new InternalServerException("Internal error occurred!");
        }
    }

    @PatchMapping(path = "/{id}")
    public ResponseEntity patch(@PathVariable(name = "id") Long id,
                                @RequestBody UpdateTripRequest updateTripRequest){
        tripService.patch(id, updateTripRequest);
        return new ResponseEntity(HttpStatus.OK);
    }
}
