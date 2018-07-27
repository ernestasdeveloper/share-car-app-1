module api {
    exports com.cognizant.sharecar.api.spi;
//    exports com.cognizant.sharecar.api.model;
    exports com.cognizant.sharecar.api.model.dto;
    exports com.cognizant.sharecar.api.model.request;

    requires commons;
    requires jackson.annotations;
    requires com.fasterxml.jackson.databind;
    requires spring.context;
    requires spring.web;
    requires spring.beans;
    requires spring.hateoas;
    requires jackson.datatype.jsr310;
}