package com.cognizant.sharecar.api.resource;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR)
class InternalServerException extends RuntimeException{

    InternalServerException(String message) {
        super(message);
    }
}
