// src/components/AboutUs.jsx
import React from 'react';
import '../styles/aboutUs.css';

function AboutUs() {
  return (
    <section id="nosotros" className="about-us-section">
      <div className="container about-container">
        <h2 className="about-title">Quiénes Somos</h2>
        <div className="about-content">

          <div className="about-text">
            <p>
              Bienvenido a <strong>AUTOMOVILES SA</strong>, concesionario autorizado Toyota con presencia en Perú. 
              Somos tu socio de confianza para acceder a la amplia gama de vehículos Toyota, respaldados por la 
              solidez, calidad y prestigio de una marca reconocida mundialmente.
            </p>

            <p>
              Con más de 20 años en el mercado, acumulamos experiencia, profesionalismo y compromiso. Nuestro objetivo 
              es ofrecer no solo vehículos, sino una experiencia completa desde la asesoría inicial, financiamiento, 
              postventa y mantenimiento garantizando la durabilidad y satisfacción de tu compra.
            </p>

            <p>
              Toyota es líder en ventas en Perú y destaca por su fiabilidad, calidad de fabricación y excelente valor 
              de reventa, lo que nos permite ofrecerte modelos con respaldo local e internacional.
            </p>
            <p>
            Cada visita a nuestro concesionario es una oportunidad para asesorarte con transparencia, 
            ofreciéndote soluciones reales que se adapten a tu estilo de vida y expectativas.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Clientes satisfechos</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Modelos disponibles</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
