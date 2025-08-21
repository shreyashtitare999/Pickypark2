package project.booking.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.booking.entity.Booking;
import project.booking.repo.BookingRepo;

import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImp implements BookingService {

    @Autowired
    private BookingRepo repository;

    @Override
    public Booking saveBooking(Booking booking) {
        return repository.save(booking);
    }

    @Override
    public List<Booking> getAllBookings() {
        return repository.findAll();
    }

    @Override
    public Booking getBookingById(int id) {
        Optional<Booking> optional = repository.findById(id);
        return optional.orElse(null);
    }

    @Override
    public void deleteBookingById(int id) {
        repository.deleteById(id);
    }

    public List<Booking> searchByVehicleNumber(String vNo) {
        return repository.findByVNo(vNo); 
    }
    
    public List<Booking> getBookingsByPAddress(String pAddress) {
        return repository.findByPAddress(pAddress);
    }
}