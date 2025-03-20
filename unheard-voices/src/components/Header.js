import React from "react";
import logo from '../images/Unheard_Voices__1_-removebg-preview.png'

function Header() {
  return (
    <div>
      <div className="header-wrapper">
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <div className="main-header">
          <h1>Unheard Voices</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
