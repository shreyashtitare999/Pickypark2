import React, { useState } from 'react';
import '../pagesStyleCss/userCss.css';
import ParkingCard from '../../components/ParkingCard';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Booking = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [reservations, setReservations] = useState([]);

  const calculatePrice = (hours) => {
    if (!hours || hours <= 0) return 0;
    let total = 10;
    if (hours > 1) {
      total += (hours - 1) * 5;
    }
    return total;
  };

  const handleSearch = async () => {
    if (!vehicleNumber.trim()) {
      alert("Please enter a vehicle number.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8083/booking/vehicle/${vehicleNumber}`);
      if (!response.ok) throw new Error("No reservation found.");
      const data = await response.json();
      if (data.length === 0) {
        alert("No reservation found for this vehicle number.");
        setReservations([]);
      } else {
        setReservations(data); 
      }
    } catch (error) {
      alert("Error: " + error.message);
      setReservations([]);
    }
  };

  return (
    <>
      <Header />
      <div className="booking-container glass-box">
        <h2>Check Your Booking</h2>
        <div className="form-group">
          <label>Enter Vehicle Number:</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            placeholder="e.g., MH12AB1234"
          />
          <button onClick={handleSearch}>Search Booking</button>
        </div>

        {reservations.length > 0 && (
          <div className="reservation-summary">
            <h3>Reservation Summary</h3>
            {reservations.map((reservation, index) => (
              <div key={index} className="reservation-card">
                <p><strong>Vehicle Number:</strong> {reservation.vNo}</p>
                <p><strong>Vehicle Type:</strong> {reservation.vType}</p>
                <p><strong>Reservation Date:</strong> {reservation.d_Booking}</p>
                <p><strong>Check-in Time:</strong> {reservation.c_in}</p>
                <p><strong>Duration:</strong> {reservation.duration} hour(s)</p>
                <p><strong>Check-out Time:</strong> {reservation.c_out}</p>
                <p><strong>Location:</strong> {reservation.pAddress}</p>
                <p><strong>Total Price:</strong> ₹{calculatePrice(reservation.duration)}</p>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Booking;
