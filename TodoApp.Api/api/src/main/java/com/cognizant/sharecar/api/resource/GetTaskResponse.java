package com.cognizant.sharecar.api.resource;

import com.cognizant.sharecar.api.model.dto.TaskView;
import com.cognizant.sharecar.api.model.response.ResponseWrapper;
import com.cognizant.sharecar.common.spi.model.Priority;
import com.cognizant.sharecar.common.spi.model.TaskStatus;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;

public class GetTaskResponse implements ResponseWrapper {

    private Long id;
    private String title;
    private String description;
    private LocalDateTime endDate;
    private TaskStatus status;
    private Priority priority;

    GetTaskResponse(TaskView taskView) {
        this.id = taskView.getId();
        this.title = taskView.getTitle();
        this.description = taskView.getDescription();
        this.endDate = taskView.getEndDate();
        this.status = taskView.getStatus();
        this.priority = taskView.getPriority();
    }

    @JsonProperty("id")
    public Long getTaskId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public Priority getPriority() {
        return priority;
    }
}
