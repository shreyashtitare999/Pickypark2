package project.parkingowner.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import project.parkingowner.entity.Owner;

public interface OwnerRepo extends JpaRepository<Owner, Integer>{

	Owner findByPAddress(String address);
	Owner findByPEmailAndPPassword(String pEmail, String pPassword);
	Owner findBypEmail(String email);

}
