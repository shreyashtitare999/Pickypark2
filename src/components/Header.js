import { Link } from 'react-router-dom';
import './styleCss/HeaderStyle.css';
import logo from '../assets/logo.png'; // <- apna logo yahan import kar

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="logo-text">PickyPark</h1>
      </div>

      <nav className="navbar">
        <Link to="/home">Home</Link>
        
        <Link to="/booking">Booking Details</Link>
        <div className="login-page">
          <div className="login-options">
            <Link to="/loginowner" className="login-btn owner">Owner Login</Link>
            <Link to="/loginattendent" className="login-btn attendant">Attendant Login</Link>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
