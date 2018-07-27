package com.cognizant.sharecar.api.spi;

import com.cognizant.sharecar.api.model.request.AddTaskRequest;
import com.cognizant.sharecar.api.model.request.GetAllQuery;
import com.cognizant.sharecar.api.model.dto.LazyTaskView;
import com.cognizant.sharecar.api.model.dto.TaskView;

import java.util.List;

public interface TaskService {

    List<TaskView> getAll(GetAllQuery getAllQuery);

    TaskView getOne(Long id);

    LazyTaskView add(AddTaskRequest task);

    void delete(long id);
}
