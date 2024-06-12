// src/components/Navigation.jsx
import React from 'react';


function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#catalog">Catálogo</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
