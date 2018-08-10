package com.cognizant.sharecar.api.resource;

import com.cognizant.sharecar.api.model.dto.RideView;
import com.cognizant.sharecar.api.model.request.AddRideRequest;
import com.cognizant.sharecar.api.model.request.GetAllRidesQuery;
import com.cognizant.sharecar.api.model.request.UpdateRideRequest;
import com.cognizant.sharecar.api.model.response.AddRideResponse;
import com.cognizant.sharecar.api.model.response.GetRideResponse;
import com.cognizant.sharecar.api.spi.RideService;
import com.cognizant.sharecar.common.spi.model.RideStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping(path = "/rides")
public class RideApi {

    @Autowired
    private RideService rideService;

    @GetMapping(path = "/{id}")
    public ResponseEntity<GetRideResponse> getOne(@PathVariable(name = "id") Long id) {
        RideView rideView = rideService.getOne(id);
        return ResponseEntity.ok(new GetRideResponse(rideView));
    }

    @GetMapping
    public ResponseEntity<List<GetRideResponse>> getAll(@RequestParam(required = false) RideStatus status,
                                                            @RequestParam(required = false) Long passengerId,
                                                            @RequestParam(required = false) Long tripId,
                                                            @RequestParam(required = false) Long driverId) {
        List<RideView> rides = rideService.getAll(new GetAllRidesQuery(status, passengerId, tripId, driverId));
        List<GetRideResponse> responses = rides.stream()
                .map(GetRideResponse::new)
                .collect(toList());

        return ResponseEntity.ok(responses);
    }

    @PostMapping
    public ResponseEntity<AddRideResponse> add(@RequestBody AddRideRequest rideRequest) {
        try {
            AddRideResponse response = new AddRideResponse(rideService.add(rideRequest));
            return ResponseEntity.ok(response);
        } catch (Exception exception) {
            throw new InternalServerException("Internal error occurred!");
        }
    }

    @PatchMapping(path = "/{id}")
    public ResponseEntity patch(@PathVariable(name = "id") Long id,
                                @RequestBody UpdateRideRequest updateRideRequest){
        rideService.patch(id, updateRideRequest);
        return new ResponseEntity(HttpStatus.OK);
    }
}