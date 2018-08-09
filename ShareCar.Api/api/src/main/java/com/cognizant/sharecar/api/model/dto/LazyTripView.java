package com.cognizant.sharecar.api.model.dto;

import java.time.LocalDateTime;

public class LazyTripView {
    private Long id;
    private String startPointName;
    private String endPointName;
    private LocalDateTime dateTime;

    public LazyTripView(Long id, String startPointName, String endPointName, LocalDateTime dateTime) {
        this.id = id;
        this.startPointName = startPointName;
        this.endPointName = endPointName;
        this.dateTime = dateTime;
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

    public LocalDateTime getDateTime() {
        return dateTime;
    }
}
