package com.cognizant.sharecar.api.spi;

import com.cognizant.sharecar.api.model.request.AccessTokenRequest;

public interface FacebookAuthenticationService {

     String authenticate(AccessTokenRequest request);
}
