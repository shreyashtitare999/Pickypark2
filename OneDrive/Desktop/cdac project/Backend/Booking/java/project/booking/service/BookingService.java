package project.booking.service;



import java.util.List;

import project.booking.entity.Booking;

public interface BookingService {
    Booking saveBooking(Booking booking);
    List<Booking> getAllBookings();
    Booking getBookingById(int id);
    void deleteBookingById(int id);
	List<Booking> searchByVehicleNumber(String vNo);
	List<Booking> getBookingsByPAddress(String pAddress);
    
}