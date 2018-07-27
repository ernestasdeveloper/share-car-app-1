package com.cognizant.sharecar.repository.spi;

import com.cognizant.sharecar.common.spi.model.TripStatus;
import  com.cognizant.sharecar.repository.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TripRepository extends JpaRepository<Trip, Long> {

    List<Trip> findByStatus(TripStatus status);
}
