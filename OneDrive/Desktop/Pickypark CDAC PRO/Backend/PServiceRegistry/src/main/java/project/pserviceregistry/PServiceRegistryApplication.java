
package project.pserviceregistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class PServiceRegistryApplication {

	public static void main(String[] args) {
		SpringApplication.run(PServiceRegistryApplication.class, args);
	}

}
