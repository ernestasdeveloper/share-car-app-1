package com.cognizant.sharecar.api.model.dto;

import org.springframework.hateoas.Identifiable;

public class LazyTaskView implements Identifiable<Long> {

    private Long id;

    public LazyTaskView(Long id) {
        this.id = id;
    }

    @Override
    public Long getId() {
        return id;
    }
}
