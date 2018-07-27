package com.cognizant.sharecar.api.model.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.hateoas.ResourceSupport;

public class AddTaskResponse extends ResourceSupport {
    private Long taskId;

    public AddTaskResponse(Long taskId) {
        this.taskId = taskId;
    }

    @JsonProperty("id")
    public Long getTaskId() {
        return taskId;
    }
}
