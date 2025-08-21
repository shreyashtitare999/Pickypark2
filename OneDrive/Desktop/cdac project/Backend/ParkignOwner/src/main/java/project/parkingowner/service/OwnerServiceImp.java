package project.parkingowner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.parkingowner.entity.Owner;
import project.parkingowner.repo.OwnerRepo;

@Service
public class OwnerServiceImp implements OwnerService{
	@Autowired
    private OwnerRepo ownerRepo;

    @Override
    public Owner addOwner(Owner owner) {
        return ownerRepo.save(owner);
    }

    @Override
    public List<Owner> getAllOwners() {
        return ownerRepo.findAll();
    }

    @Override
    public Owner getOwnerById(int id) {
        return ownerRepo.findById(id).orElse(null);
    }
    
    @Override
    public Owner getOwnerByAddress(String address) {
        return ownerRepo.findByPAddress(address);
    }

    @Override
    public Owner getOwnerByEmailAndPassword(String pEmail, String pPassword) {
        return ownerRepo.findByPEmailAndPPassword(pEmail, pPassword);
    }
    
    @Override
    public void deleteOwner(int id) {
        ownerRepo.deleteById(id);
    }
    
    @Override
    public Owner getOwnerByEmail(String email) {
        return ownerRepo.findBypEmail(email);
    }

}
