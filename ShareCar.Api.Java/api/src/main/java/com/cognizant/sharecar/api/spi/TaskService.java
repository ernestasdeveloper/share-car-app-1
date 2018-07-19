package com.cognizant.sharecar.api.spi;

import com.cognizant.sharecar.api.model.GetAllQuery;
import com.cognizant.sharecar.api.model.TaskView;

import java.util.List;

public interface TaskService {

    List<TaskView> getAll(GetAllQuery getAllQuery);

    TaskView getOne(Integer id);

    void add(TaskView task);

    void delete(TaskView task);
}
