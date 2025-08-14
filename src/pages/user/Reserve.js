import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pagesStyleCss/userCss.css';
import ParkingCard from '../../components/ParkingCard';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Reserve = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const calculatePrice = (hours) => {
    if (!hours || hours <= 0) return 0;
    let total = 10;
    if (hours > 1) {
      total += (hours - 1) * 5;
    }
    return total;
  };

  const totalPrice = calculatePrice(parseInt(duration));

  const handleSave = async () => {
    if (!vehicleNumber || !vehicleType || !reservationDate || !checkInTime || !duration || !location || !email) {
      alert("Please fill in all fields.");
      return;
    }
    navigate('/thanks');  // make sure this route exists
    try {
      // Match location with owner API
      const ownerRes = await fetch("http://localhost:8081/owners"); // adjust if your backend URL changes
      const owners = await ownerRes.json();

      const matchedOwner = owners.find(owner =>
        owner.pAddress.toLowerCase() === location.toLowerCase()
      );

      if (!matchedOwner) {
        alert("Parking is not available at this location.");
        return;
      }

      // Convert vehicleType
      const vType = vehicleType === "2-wheeler" ? "2w" : "4w";

      // Calculate check-out time
      const [h, m] = checkInTime.split(":").map(Number);
      const checkInDateTime = new Date();
      checkInDateTime.setHours(h + parseInt(duration), m, 0);

      const c_out = checkInDateTime.toTimeString().split(" ")[0].substring(0, 8); // HH:mm:ss

      const payload = {
        vNo: vehicleNumber,
        vType: vType,
        rEmail: email,
        c_in: checkInTime + ":00",
        c_out: c_out,
        pAddress: location,
        duration: parseInt(duration),
        d_Booking: reservationDate,
      };

      const response = await fetch("http://localhost:8083/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert("Reservation successful!");
//         const emailPayload = {
//           recipient: email,
//           subject: "Booking Confirmation - PickyPark",
//           message: `Dear User,

// Your booking has been successfully confirmed with the following details:

// Vehicle Number: ${vehicleNumber}
// Vehicle Type: ${vehicleType}
// Reservation Date: ${reservationDate}
// Check-in Time: ${checkInTime}
// Check-out Time: ${c_out}
// Duration: ${duration} hour(s)
// Location: ${location}
// Total Price: ₹${totalPrice}

// Thank you for choosing PickyPark!
// - Team PickyPark`
//         };

//         await fetch("http://localhost:8085/email/send", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(emailPayload)
//         });

        // Reset all fields
        
        setVehicleNumber('');
        setVehicleType('');
        setReservationDate('');
        setCheckInTime('');
        setDuration('');
        setLocation('');
        setEmail('');
      } else {
        alert("Reservation failed. Please try again.");
      }

    } catch (err) {
      console.error("Error:", err);
      // alert("we are not available in that parking area");
    }
  };

  return (
    <>
      <Header />
      <div className="reserve-container">
        <h2>Reserve a Parking Slot</h2>

        <div className="form-group">
          <label>Vehicle Number:</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            placeholder="e.g., MH12AB1234"
          />
        </div>

        <div className="form-group">
          <label>Vehicle Type:</label>
          <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
            <option value="">--Select--</option>
            <option value="2-wheeler">2-Wheeler</option>
            <option value="4-wheeler">4-Wheeler</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date of Reservation:</label>
          <input
            type="date"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Check-in Time (AM/PM):</label>
          <input
            type="time"
            value={checkInTime}
            onChange={(e) => setCheckInTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Duration (in hours):</label>
          <input
            type="number"
            min="1"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Total Price:</label>
          <p><strong>₹{totalPrice}</strong></p>
        </div>

        <button onClick={handleSave}>Save Reservation</button>
      </div>
      <Footer />
    </>
  );
};

export default Reserve;
