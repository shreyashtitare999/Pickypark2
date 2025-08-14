import React from 'react';
import '../pagesStyleCss/userCss.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Thankyou = () => {
  return (
    <>
      <Header />
      <div className="thankyou-container">
        <div className="thankyou-card">
          <h2 className="thankyou-title">Reservation Successful!</h2>
          <p className="thankyou-message">
            Thank you for your reservation. We look forward to seeing you.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Thankyou;
