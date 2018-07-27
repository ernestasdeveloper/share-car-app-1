package com.cognizant.sharecar.api.resource;

import com.cognizant.sharecar.api.model.dto.LazyRideView;
import com.cognizant.sharecar.api.model.request.GetAllRidesQuery;
import com.cognizant.sharecar.api.model.response.GetRideLazyResponse;
import com.cognizant.sharecar.api.model.response.ResponseWrapper;
import com.cognizant.sharecar.api.spi.RideService;
import com.cognizant.sharecar.api.util.GetIdentifier;
import com.cognizant.sharecar.common.spi.model.RideStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping(path = "/rides")
public class RideApi implements GetIdentifier {

    @Autowired
    private RideService rideService;


    @GetMapping
    public ResponseEntity<List<GetRideLazyResponse>> getAll(@RequestParam(required = false) RideStatus status, @RequestParam(required = false) Long passenger_id, @RequestParam(required = false) Long trip_id) {

        List<LazyRideView> rides = rideService.getAll(new GetAllRidesQuery(status, passenger_id, trip_id));
        List<GetRideLazyResponse> responses = rides
                .stream()
                .map(rideView ->
                    new GetRideLazyResponse(
                            rideView.getId(),
                            rideView.getStatus(),
                            rideView.getPassengerId(),
                            rideView.getTripId(),
                            rideView.getDriverFirstName(),
                            rideView.getDriverLastName()))
                .collect(toList());

        return ResponseEntity.ok(responses);
//        List<TaskView> tasks = taskService.getAll(new GetAllQuery(status));
//        List<GetTaskLazyResponse> responses = tasks
//                .stream()
//                .map(taskView -> {
//                    GetTaskLazyResponse lazyResponse = new GetTaskLazyResponse(
//                            taskView.getId(),
//                            taskView.getTitle(),
//                            taskView.getStatus(),
//                            taskView.getPriority(),
//                            ApiUtil.getHrefForGet(taskView.getId(), this.getClass()).getHref());
//
////                    lazyResponse.add(ApiUtil.getHrefForGet(taskView.getId(), this.getClass()));
//                    return lazyResponse;
//                })
//                .collect(toList());
//
//        return ResponseEntity.ok(responses);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<? extends ResponseWrapper> getOne(long id) {
        return null;
    }

//    @GetMapping(path = "/{id}")
//    public ResponseEntity<GetTaskResponse> getOne(@PathVariable(name = "id") long id) {
//        TaskView task = taskService.getOne(id);
//        return ResponseEntity.ok(new GetTaskResponse(task));
//    }
}