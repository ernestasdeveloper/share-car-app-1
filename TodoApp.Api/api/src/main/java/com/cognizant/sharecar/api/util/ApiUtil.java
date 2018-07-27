package com.cognizant.sharecar.api.util;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;

public class ApiUtil {

    /**
     * Clazz should implement GetIdentifier interface and implement it.
     * @see GetIdentifier
     */
    public static <API extends GetIdentifier> Link getHrefForGet(long identifier, Class<API> clazz) {
        return ControllerLinkBuilder.linkTo(ControllerLinkBuilder.methodOn(clazz).getOne(identifier)).withSelfRel();
    }
}
