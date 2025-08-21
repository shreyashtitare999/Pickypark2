import React from 'react';
import '../pagesStyleCss/userCss.css'; // tumhara CSS wahi rakhna

const Thankyou = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        {/* <img
          src="/images/thankyou.png" // public/images folder mein svg/png rakhna
          alt="Thank You"
          className="thankyou-image"
        /> */}
        <h2>Reservation Successful!</h2>
        <p>Thank you for your reservation. We look forward to seeing you.</p>
      </div>
    </div>
  );
};

export default Thankyou;
