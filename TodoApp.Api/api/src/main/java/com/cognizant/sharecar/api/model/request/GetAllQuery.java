package com.cognizant.sharecar.api.model.request;

import com.cognizant.sharecar.common.spi.model.Priority;
import com.cognizant.sharecar.common.spi.model.TaskStatus;

public class GetAllQuery {

    private TaskStatus status;

    public GetAllQuery(TaskStatus status) {
        this.status = status;
    }

    public GetAllQuery(TaskStatus status, Priority priority) {
        this.status = status;
    }

    public GetAllQuery() {
    }

    public TaskStatus getStatus() {
        return status;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

}
