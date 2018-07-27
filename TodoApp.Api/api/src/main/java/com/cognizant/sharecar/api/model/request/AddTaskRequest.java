package com.cognizant.sharecar.api.model.request;

import com.cognizant.sharecar.api.model.dto.TaskView;

public class AddTaskRequest {

    private TaskView task;

    public AddTaskRequest(TaskView task) {
        this.task = task;
    }

    public AddTaskRequest() {
    }

    public TaskView getTask() {
        return task;
    }

    public void setTask(TaskView task) {
        this.task = task;
    }
}
