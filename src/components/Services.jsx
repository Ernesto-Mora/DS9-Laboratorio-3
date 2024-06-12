// src/components/Services.jsx
import React from 'react';


function Services() {
  const services = [
    { title: "Tienda Online", description: "¡Tenemos lo que tu mascota necesita!", image: "/src/assets/service1.jpg" },
    { title: "Red Social", description: "¡Tus mascotas aquí pueden brillar!", image: "/src/assets/service2.jpg" },
    { title: "Control Veterinario", description: "¡La salud de tus mascotas es lo primero!", image: "/src/assets/service3.jpg" },
    { title: "Criadores de Mascotas", description: "¡Tus mascotas aquí la pasan bien!", image: "/src/assets/service4.jpg" }
  ];

  return (
    <section id="services" className="services">
      <h2>Nuestros Servicios</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
