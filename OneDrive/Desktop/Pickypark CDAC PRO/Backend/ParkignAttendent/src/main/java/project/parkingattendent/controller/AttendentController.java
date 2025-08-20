package project.parkingattendent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project.parkingattendent.entity.Attendent;
import project.parkingattendent.service.AttendentService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/attendent")
public class AttendentController {

    @Autowired
    private AttendentService service;

    @PostMapping
    public Attendent addAttendent(@RequestBody Attendent attendent) {
        return service.addAttendent(attendent);
    }

    @GetMapping
    public List<Attendent> getAllAttendants() {
        return service.getAllAttendants();
    }

    @GetMapping("/{id}")
    public Attendent getAttendentById(@PathVariable int id) {
        return service.getAttendentById(id);
    }
    
    @GetMapping("/address/{address}")
    public List<Attendent> getAttendantsByAddress(@PathVariable String address) {
        return service.getAttendantsByAddress(address);
    }
    
    
    

}