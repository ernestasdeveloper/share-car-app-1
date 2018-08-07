package com.cognizant.sharecar.service.auth;

public class TokenVerificationException extends Exception {

    public TokenVerificationException(String message) {
        super(message);
    }

    public TokenVerificationException(String message, Throwable cause) {
        super(message, cause);
    }

    public TokenVerificationException(Throwable cause) {
        super(cause);
    }
}
