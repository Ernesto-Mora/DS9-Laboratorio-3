// src/components/Catalog.jsx
import React from 'react';

function Catalog() {
  const products = [
    { id: 1, name: 'Comida para perro', price: 24.99, image: '/src/assets/pet_food.png', description: 'Comida para perro - Excelente para la salud de tu mascota.' },
    { id: 2, name: 'Juguete masticable', price: 8.99, image: '/src/assets/juguete.png', description: 'Juguete masticable - Perfecto para mantener a tu mascota feliz.' },
    { id: 3, name: 'Plato para perro 2 en 1', price: 19.99, image: '/src/assets/plato_mascotas.png', description: 'Plato 2 en 1 - Es ideal para el cuidado de tu mascota' },
  ];

  return (
    <section id="catalog" className="catalog">
      <h2>Catálogo de Productos</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
              <button className="buy-button">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalog;
