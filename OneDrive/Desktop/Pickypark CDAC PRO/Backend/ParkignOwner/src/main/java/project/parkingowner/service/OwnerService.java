package project.parkingowner.service;

import java.util.List;

import project.parkingowner.entity.Owner;

public interface OwnerService {

	Owner addOwner(Owner owner);

	List<Owner> getAllOwners();

	Owner getOwnerById(int id);

	void deleteOwner(int id);


	Owner getOwnerByAddress(String address);
	
	Owner getOwnerByEmailAndPassword(String pEmail, String pPassword);

	Owner getOwnerByEmail(String email);
   

}
