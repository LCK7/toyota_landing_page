import React from 'react';
import '../styles/hero.css';

function Hero() {
    return (
        <header className="hero">
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
