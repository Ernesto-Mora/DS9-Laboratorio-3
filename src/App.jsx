// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Catalog from './components/Catalog';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <Catalog />
        <About />
        <Services />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
