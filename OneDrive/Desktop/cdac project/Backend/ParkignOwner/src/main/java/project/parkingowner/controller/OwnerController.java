package project.parkingowner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import project.parkingowner.entity.Owner;
import project.parkingowner.service.OwnerService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/owners")
public class OwnerController {

    @Autowired
    private OwnerService ownerService;

    @PostMapping
    public Owner addOwner(@RequestBody Owner owner) {
        return ownerService.addOwner(owner);
    }

    @GetMapping
    public List<Owner> getAllOwners() {
        return ownerService.getAllOwners();
    }

    @GetMapping("/{id}")
    public Owner getOwnerById(@PathVariable int id) {
        return ownerService.getOwnerById(id);
    }
    
    @GetMapping("/address/{address}")
    public ResponseEntity<Owner> getOwnerByAddress(@PathVariable String address) {
        Owner owner = ownerService.getOwnerByAddress(address);
        if (owner != null) {
            return ResponseEntity.ok(owner);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public void deleteOwner(@PathVariable int id) {
        ownerService.deleteOwner(id);
    }
    
    @PostMapping("/login")
    public ResponseEntity<Owner> loginOwner(@RequestBody Owner loginRequest) {
        Owner owner = ownerService.getOwnerByEmailAndPassword(
            loginRequest.getpEmail(),
            loginRequest.getpPassword()
        );

        if (owner != null) {
            return ResponseEntity.ok(owner);
        } else {
            return ResponseEntity.status(401).build(); // Unauthorized
        }
    }
    
    @GetMapping("/email")
    public ResponseEntity<String> getAddressByEmail(@RequestParam String email) {
        Owner owner = ownerService.getOwnerByEmail(email);
        if (owner != null) {
            return ResponseEntity.ok(owner.getpAddress());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}