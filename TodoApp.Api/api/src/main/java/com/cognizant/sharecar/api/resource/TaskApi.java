package com.cognizant.sharecar.api.resource;

import com.cognizant.sharecar.api.model.dto.LazyTaskView;
import com.cognizant.sharecar.api.model.dto.TaskView;
import com.cognizant.sharecar.api.model.request.AddTaskRequest;
import com.cognizant.sharecar.api.model.request.GetAllQuery;
import com.cognizant.sharecar.api.model.response.AddTaskResponse;
import com.cognizant.sharecar.api.spi.TaskService;
import com.cognizant.sharecar.api.util.ApiUtil;
import com.cognizant.sharecar.api.util.GetIdentifier;
import com.cognizant.sharecar.common.spi.model.TaskStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.*;


@RestController
@RequestMapping(path = "/tasks")
public class TaskApi implements GetIdentifier {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<AddTaskResponse> add(@RequestBody AddTaskRequest taskRequest) {
        try {
            LazyTaskView lazyTaskView = taskService.add(taskRequest);
            AddTaskResponse response = new AddTaskResponse(lazyTaskView.getId());
            response.add(ApiUtil.getHrefForGet(lazyTaskView.getId(), this.getClass()));
            return ResponseEntity.ok(response);
        } catch (Exception exception) {
            throw new InternalServerException("Internal error occurred!");
        }
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<GetTaskResponse> getOne(@PathVariable(name = "id") long id) {
        TaskView task = taskService.getOne(id);
        return ResponseEntity.ok(new GetTaskResponse(task));
    }

    @GetMapping
    public ResponseEntity<List<GetTaskLazyResponse>> getAll(@RequestParam(required = false) TaskStatus status) {
        List<TaskView> tasks = taskService.getAll(new GetAllQuery(status));
        List<GetTaskLazyResponse> responses = tasks
                .stream()
                .map(taskView -> {
                    GetTaskLazyResponse lazyResponse = new GetTaskLazyResponse(
                            taskView.getId(),
                            taskView.getTitle(),
                            taskView.getStatus(),
                            taskView.getPriority(),
                            ApiUtil.getHrefForGet(taskView.getId(), this.getClass()).getHref());

//                    lazyResponse.add(ApiUtil.getHrefForGet(taskView.getId(), this.getClass()));
                    return lazyResponse;
                })
                .collect(toList());

        return ResponseEntity.ok(responses);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") long id) {
        try {
            taskService.delete(id);
        } catch (Exception exception) {
            throw new InternalServerException("Internal error occurred!");
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
