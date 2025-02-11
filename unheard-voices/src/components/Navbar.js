import React from 'react';
import '../styles/Navbar.css';  
import Header from './Header';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="main-navbar">
        <Header />
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="sub-navbar">
        <ul>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/sensory">Sensory</Link></li>
          <li><Link to="/language">Language</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
