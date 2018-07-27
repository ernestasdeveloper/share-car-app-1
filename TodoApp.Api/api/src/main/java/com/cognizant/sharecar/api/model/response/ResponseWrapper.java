package com.cognizant.sharecar.api.model.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.hateoas.Identifiable;

public interface ResponseWrapper extends Identifiable<Long> {

    @JsonIgnore
    default Long getId() {
        return null;
    }
}
