package project.parkingattendent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class ParkignAttendentApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParkignAttendentApplication.class, args);
	}

}
