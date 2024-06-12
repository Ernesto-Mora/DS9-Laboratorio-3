// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo.png';


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
}

export default Header;
