import React, { useState } from 'react';
import './styleCss/ParkingCardStyle.css';

const ParkingCard = ({ parking }) => {
  const [hours, setHours] = useState(1);

  // Dynamic pricing logic
  const calculatePrice = (hrs) => {
    if (hrs <= 1) return 10;
    return 10 + (hrs - 1) * 5;
  };

  const handleReservation = () => {
    alert(
      `Slot reserved at "${parking.slotName}" for ${hours} hour(s).\nTotal Price: ₹${calculatePrice(hours)}`
    );
    // Future: Send POST request to backend here
  };

  return (
    <div className="parking-card">
      <h3>{parking.slotName}</h3>
      <p><strong>Location:</strong> {parking.location}</p>
      <p><strong>Slots Available:</strong> {parking.slotsAvailable}</p>
        <button href="/reserve" onClick={handleReservation} className="reserve-button">
         <a href="/reserve">Reserve</a>
        </button>
      
    </div>
  );
};

export default ParkingCard;
