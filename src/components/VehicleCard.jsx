// src/components/VehicleCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/vehicleCard.css';

function VehicleCard({ vehicle }) {
    return (
        <div className="vehicle-card">
            
            <div className="card-image-wrapper">
                <img 
                    src={vehicle.image || '/default-car.jpg'} 
                    alt={vehicle.name} 
                    className="card-image"
                />
                <span className="vehicle-tag">{vehicle.type.toUpperCase()}</span>
            </div>

            <div className="card-info">
                <h3 className="vehicle-title">{vehicle.name}</h3>

                <p className="card-price">
                    ${vehicle.price.toLocaleString('es-PE')}
                </p>

                <p className="vehicle-description">
                    {vehicle.description}
                </p>

                <div className="card-specs">
                    <span>Año: {vehicle.year}</span>
                </div>

                <Link to={`/vehiculo/${vehicle.id}`} className="btn-contact">
                    Ver Detalles
                </Link>
            </div>

        </div>
    );
}

export default VehicleCard;
