 package project.booking.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project.booking.entity.Booking;
import project.booking.service.BookingService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService service;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return service.saveBooking(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return service.getAllBookings();
    }

    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable int id) {
        return service.getBookingById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteBooking(@PathVariable int id) {
        service.deleteBookingById(id);
        return "Booking deleted with ID: " + id;
    }
    
    @GetMapping("/paddress/{pAddress}")
    public List<Booking> getBookingsByPAddress(@PathVariable String pAddress) {
        return service.getBookingsByPAddress(pAddress);
    }
    
    @GetMapping("/vehicle/{vNo}")
    public List<Booking> getByVehicleNumber(@PathVariable String vNo) {
        return service.searchByVehicleNumber(vNo);
    }
}