package com.cognizant.sharecar.api.model.dto;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class LazyTripView {
    private Long id;
    private String startPointName;
    private String endPointName;
    private ZonedDateTime dateTime;

    public LazyTripView(Long id, String startPointName, String endPointName, LocalDateTime dateTime) {
        this.id = id;
        this.startPointName = startPointName;
        this.endPointName = endPointName;
        this.dateTime = ZonedDateTime.of(dateTime, ZoneId.of("Z"));
    }

    public Long getId() {
        return id;
    }

    public String getStartPointName() {
        return startPointName;
    }

    public String getEndPointName() {
        return endPointName;
    }

    public ZonedDateTime getDateTime() {
        return dateTime;
    }
}
