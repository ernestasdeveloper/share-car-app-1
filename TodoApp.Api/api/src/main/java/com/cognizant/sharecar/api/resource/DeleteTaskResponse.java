package com.cognizant.sharecar.api.resource;

import com.cognizant.sharecar.api.model.response.ResponseWrapper;

public class DeleteTaskResponse implements ResponseWrapper {

    private boolean deleted;
    private Long id;

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public boolean isDeleted() {
        return deleted;
    }

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
