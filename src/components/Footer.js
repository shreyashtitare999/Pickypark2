import React from 'react';
import './styleCss/footerStyle.css';

function Footer() {
  return (
    <footer className="bg-light border-top mt-auto">
      <div className="container py-4">
        <div className="row align-items-start">
          {/* Logo + Icons */}
          <div className="col-md-3 mb-4">
            <h3 className="fw-bold text-dark mb-0">Picky</h3>
            <h3 className="fw-bold text-dark">Park</h3>
            <div className="d-flex mt-2">
              <a href="https://instagram.com" className="text-dark me-3"><i className="bi bi-instagram"></i></a>
              <a href="https://twitter.com" className="text-dark me-3"><i className="bi bi-twitter"></i></a>
              <a href="https://whatsapp.com" className="text-dark me-3"><i className="bi bi-whatsapp"></i></a>
              <a href="https://facebook.com" className="text-dark"><i className="bi bi-facebook"></i></a>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-dark">PickyPark</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="/research" className="text-dark text-decoration-none">Research</a></li>
              <li><a href="/careers" className="text-dark text-decoration-none">Careers</a></li>
              <li><a href="/about" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-dark">Social</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-dark text-decoration-none">Facebook</a></li>
              <li><a href="https://whatsapp.com" className="text-dark text-decoration-none">WhatsApp</a></li>
              <li><a href="https://youtube.com" className="text-dark text-decoration-none">YouTube</a></li>
              <li><a href="https://twitter.com" className="text-dark text-decoration-none">X</a></li>
              <li><a href="https://instagram.com" className="text-dark text-decoration-none">Instagram</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-dark">Contact</h5>
            <p className="text-dark fw-semibold">Call <a href="tel:+9187878787878" className="text-dark text-decoration-none fw-bold">+91-87878787878</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

