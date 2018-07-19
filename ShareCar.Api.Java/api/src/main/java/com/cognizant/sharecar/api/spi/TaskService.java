package com.cognizant.sharecar.api.spi;

import com.cognizant.sharecar.api.model.GetAllQuery;
import com.cognizant.sharecar.api.model.TaskView;
import org.springframework.scheduling.config.Task;

import java.util.List;

public interface TaskService {

    List<TaskView> getAll();

    List<TaskView> getAll(GetAllQuery getAllQuery);

    TaskView getOne(Long id);

    void add(TaskView task);

    void delete(long id);
}
