// src/components/VehicleCatalog.jsx (Clases aplicadas: .catalog-section, .filter-controls, .vehicle-grid)
import React, { useState, useMemo } from 'react';
import VehicleCard from './VehicleCard';
import { vehicles } from '../data/vehicles';
import '../styles/vehicleCatalog.css';

function VehicleCatalog() {
    // ... (El resto de la lógica de filtros se mantiene igual)
    const [filters, setFilters] = useState({ type: '', year: '', availability: 'all' });
    const handleFilterChange = (e) => { setFilters({ ...filters, [e.target.name]: e.target.value }); };
    const filteredVehicles = useMemo(() => {
        return vehicles.filter(vehicle => {
            const typeMatch = filters.type === '' || vehicle.type === filters.type;
            const yearMatch = filters.year === '' || vehicle.year.toString() === filters.year;
            let availabilityMatch = filters.availability === 'all' || (filters.availability === 'available' ? vehicle.available : !vehicle.available);
            return typeMatch && yearMatch && availabilityMatch;
        });
    }, [filters]);
    const vehicleTypes = [...new Set(vehicles.map(v => v.type))];
    const vehicleYears = [...new Set(vehicles.map(v => v.year.toString()))].sort((a, b) => b - a);

    return (
        <section id="catalogo" className="container catalog-section">
            <h2 className="text-primary">Catálogo de Vehículos</h2>
            
            {/* RF03: Controles de Filtro */}
            <div className="filter-controls">
                
                <select name="type" onChange={handleFilterChange}>
                    <option value="">Filtrar por Tipo</option>
                    {vehicleTypes.map(type => (
                        <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                    ))}
                </select>

                <select name="year" onChange={handleFilterChange}>
                    <option value="">Filtrar por Año</option>
                    {vehicleYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

            </div>

            {/* RF02: Grid de Vehículos */}
            <div className="vehicle-grid">
                {
                    filteredVehicles.length > 0 ? (
                        filteredVehicles.map(vehicle => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} />
                        ))
                    ) : (
                        <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#999' }}>
                            No se encontraron vehículos que coincidan con los filtros.
                        </p>
                    )
                }
            </div>
        </section>
    );
}

export default VehicleCatalog;