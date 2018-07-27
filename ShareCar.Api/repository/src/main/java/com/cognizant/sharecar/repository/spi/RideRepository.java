package com.cognizant.sharecar.repository.spi;

import com.cognizant.sharecar.repository.entity.Ride;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RideRepository extends JpaRepository<Ride, Long> {
}
