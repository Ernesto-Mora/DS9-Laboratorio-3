// src/components/About.jsx
import React from 'react';
import aboutImage from '../assets/acerca_de_nosotros.png';


function About() {
  return (
    <section className="about">
        <h2>Acerca de Nosotros</h2>
      <div className="about-content">
        <img src={aboutImage} alt="About" className="about-image" />
        <hr className="about-line" />
        <p className='about-p'>En Wandas Pet, nos dedicamos a brindar los mejores productos y servicios para el bienestar de tus mascotas.<br /><br />Nuestro compromiso es ofrecer calidad y satisfacción a nuestros clientes. 
        <br /><br />Contamos con una amplia variedad de productos y servicios que garantizan la salud y felicidad de tus mascotas.</p>
      </div>
    </section>
  );
}

export default About;
