import React, { useState, useEffect } from 'react';
import '../styles/hero.css';

const heroImages = [
  '/hiluxgr.jpg',
  '/motor.jpg',
  '/supra.jpg',
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero">
      {heroImages.map((img, index) => (
        <div
          key={index}
          className="hero-bg"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === currentIndex ? 1 : 0
          }}
        />
      ))}

      {/* Capa oscura */}
      <div className="hero-overlay" />

      <div className="hero-content container">
        <h1 className="hero-title">
          Encuentra el Vehículo Ideal para tu Próxima Aventura
        </h1>

        <p className="hero-subtitle">
          Concesionario oficial Toyota. Modelos nuevos, asesoría experta  
          y financiamiento a tu medida.
        </p>

        <a 
          href="https://wa.me/51949570614?text=Hola,%20me%20interesa%20un%20vehículo." 
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </header>
  );
}

export default Hero;
