package project.parkingattendent.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.parkingattendent.entity.Attendent;
import project.parkingattendent.repo.AttendentRepo;

@Service
public class AttendentServiceImp implements AttendentService {

    @Autowired
    private AttendentRepo repository;

    @Override
    public Attendent addAttendent(Attendent attendent) {
        return repository.save(attendent);
    }

    @Override
    public List<Attendent> getAllAttendants() {
        return repository.findAll();
    }

    @Override
    public Attendent getAttendentById(int id) {
        return repository.findById(id).orElse(null);
    }
    
    @Override
    public List<Attendent> getAttendantsByAddress(String address) {
        return repository.findBypAddress(address);
    }
    
}