// src/components/MapLocation.jsx
import React from 'react';
import '../styles/mapLocation.css';

function MapLocation() {
    // Cambia la URL de Google Maps con la ubicación exacta
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.1369935104324!2d-75.23823599712544!3d-12.02464902430902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910ebde5db1fe167%3A0xfff9510674176bba!2sAutom%C3%B3viles%20S.A%20-%20Concesionario%20Toyota%20autorizado%20Huancayo!5e0!3m2!1ses!2spe!4v1764313424233!5m2!1ses!2spe";

    return (
        <section className="container catalog-section">
            <h2 className="text-primary">Ubicación y Horarios</h2>
            
            <div className="location-content">
                <div className="map-container">
                    <iframe 
                        src={mapEmbedUrl}
                        title="Ubicación del Concesionario Automóviles S.A."
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                
                <div className="info-box">
                    <h3>Visítanos</h3>
                    <p className="info-item">
                        <i className="fas fa-map-marker-alt"></i> Av. Miguel Grau 4800, El Tambo [Huancayo].
                    </p>
                    <p className="info-item">
                        <i className="fas fa-phone"></i> (064) 603434
                    </p>
                    <p className="info-item">
                        <i className="fas fa-envelope"></i> info@automoviles.com
                    </p>

                    <p style={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '10px', color: '#e3000b' }}>
                        Horarios de Atención:
                    </p>
                    <ul>
                        <li className="info-item"><i className="fas fa-clock"></i> Ventas: Lunes a Viernes: 9:00 - 18:00</li>
                        <li className="info-item"><i className="fas fa-clock"></i> Sábados: 9:00 - 13:00</li>
                        <li className="info-item"><i className="fas fa-tools"></i> Servicio: Lunes a Viernes: 8:00 - 17:00</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default MapLocation;
