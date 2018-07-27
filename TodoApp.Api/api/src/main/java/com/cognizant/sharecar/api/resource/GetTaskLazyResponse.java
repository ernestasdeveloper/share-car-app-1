package com.cognizant.sharecar.api.resource;

import com.cognizant.sharecar.common.spi.model.Priority;
import com.cognizant.sharecar.common.spi.model.TaskStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.hateoas.ResourceSupport;

public class GetTaskLazyResponse extends ResourceSupport {
    private Long taskId;
    private String title;
    private TaskStatus status;
    private Priority priority;
    private String href;

    public String getHref() {
        return href;
    }

    GetTaskLazyResponse(Long taskId, String title, TaskStatus status, Priority priority, String href) {
        this.taskId = taskId;
        this.title = title;
        this.status = status;
        this.priority = priority;
        this.href = href;

    }

    @JsonProperty("id")
    public Long getTaskId() {
        return taskId;
    }

    public String getTitle() {
        return title;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public Priority getPriority() {
        return priority;
    }
}
