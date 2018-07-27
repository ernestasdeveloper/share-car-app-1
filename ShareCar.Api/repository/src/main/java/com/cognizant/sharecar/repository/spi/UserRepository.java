package com.cognizant.sharecar.repository.spi;

import com.cognizant.sharecar.repository.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
