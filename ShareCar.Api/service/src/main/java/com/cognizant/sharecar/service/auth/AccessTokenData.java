package com.cognizant.sharecar.service.auth;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "tokenData"
})
public class AccessTokenData {

    @JsonProperty("data")
    private TokenData tokenData;

    @JsonProperty("data")
    public TokenData getTokenData() {
        return tokenData;
    }

    @JsonProperty("data")
    public void setTokenData(TokenData tokenData) {
        this.tokenData = tokenData;
    }
}