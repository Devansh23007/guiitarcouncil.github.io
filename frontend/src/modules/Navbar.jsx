import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo1 from '../assets/logos/new.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo1} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/funding">Funding</Link></li>
          <li><Link to="/programs">Programs & Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
