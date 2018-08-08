package com.cognizant.sharecar;

import com.cognizant.sharecar.service.auth.FacebookProperties;
import com.cognizant.sharecar.service.auth.JwtProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication(scanBasePackages = {"com.cognizant.sharecar"})
@EnableConfigurationProperties({JwtProperties.class, FacebookProperties.class})
public class ShareCarApp {

    public static void main(String[] args) { SpringApplication.run(ShareCarApp.class, args); }

}
