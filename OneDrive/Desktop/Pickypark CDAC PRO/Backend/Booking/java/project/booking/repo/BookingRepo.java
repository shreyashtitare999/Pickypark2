package project.booking.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import project.booking.entity.Booking;

import java.util.List;

public interface BookingRepo extends JpaRepository<Booking, Integer> {
	List<Booking> findByVNo(String vNo);

	List<Booking> findByPAddress(String pAddress);
}