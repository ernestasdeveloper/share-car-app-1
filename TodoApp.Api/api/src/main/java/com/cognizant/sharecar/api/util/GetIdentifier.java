package com.cognizant.sharecar.api.util;

import com.cognizant.sharecar.api.model.response.ResponseWrapper;
import org.springframework.http.ResponseEntity;

public interface GetIdentifier {

    ResponseEntity<? extends ResponseWrapper> getOne(long id);
}

