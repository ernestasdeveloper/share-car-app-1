package com.cognizant.sharecar.service;

import com.cognizant.sharecar.api.model.dto.LazyTaskView;
import com.cognizant.sharecar.api.model.request.AddTaskRequest;
import com.cognizant.sharecar.api.model.request.GetAllQuery;
import com.cognizant.sharecar.api.model.dto.TaskView;
import com.cognizant.sharecar.api.spi.TaskService;
import com.cognizant.sharecar.common.spi.model.TaskStatus;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskViewServiceTest {

    @Autowired
    private TaskService taskService;

    @Test
    public void getAll_NoTasksWereAdded_ReturnEmptyTaskList() {
        List<TaskView> tasks = taskService.getAll(new GetAllQuery());

        assertThat(tasks, hasSize(0));
    }

    @Test
    public void getAll_OneTaskWasAdded_ReturnOneTask() {
        addTask(TaskStatus.DONE);

        List<TaskView> tasks = taskService.getAll(new GetAllQuery());

        assertThat(tasks, hasSize(1));
    }

    @Test
    public void getAll_StatusIsDone_ReturnEmpty() {
        addTask(TaskStatus.OPEN);
        List<TaskView> tasks = taskService.getAll(new GetAllQuery(TaskStatus.DONE));

        assertThat(tasks, hasSize(0));
    }

    @Test
    public void getAll_TwoTasksWereAddedAndStatusIsDone_OneIsReturned() {
        addTask(TaskStatus.DONE);
        List<TaskView> tasks = taskService.getAll(new GetAllQuery(TaskStatus.DONE));

        assertThat(tasks, hasSize(1));
    }

    @Test
    public void getAll_TwoTasksWereAddedAndStatusIsAbsent_ReturnTwoTasks() {
        addTask(TaskStatus.OPEN);
        addTask(TaskStatus.DONE);
        List<TaskView> tasks = taskService.getAll(new GetAllQuery());

        assertThat(tasks, hasSize(2));
    }

//    @Test
//    public void delete_AddOneTask_OneTaskIsDeleted() {
//        addTask(TaskStatus.DONE);
//        addTask(TaskStatus.OPEN);
//        addTask(TaskStatus.IN_PROGRESS);
//        List<TaskView> tasks = taskService.getAll(new GetAllQuery());
//
//        TaskView task = tasks.get(0);
//        taskService.delete(task);
//
//        List<TaskView> fetchedTasksAfterDelete = taskService.getAll(new GetAllQuery());
//
//        assertThat(fetchedTasksAfterDelete, hasSize(2));
//    }

    private void addTask(TaskStatus taskStatus) {
        TaskView task = new TaskView();
        task.setStatus(taskStatus);
        taskService.add(new AddTaskRequest(task));
    }
}
