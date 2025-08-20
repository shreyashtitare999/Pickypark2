package project.parkingattendent.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import project.parkingattendent.entity.Attendent;

public interface AttendentRepo extends JpaRepository<Attendent, Integer> {

	List<Attendent> findBypAddress(String address);
	
}
