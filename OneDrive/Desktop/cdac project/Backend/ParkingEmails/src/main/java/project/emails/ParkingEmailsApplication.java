package project.emails;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ParkingEmailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParkingEmailsApplication.class, args);
	}

}
