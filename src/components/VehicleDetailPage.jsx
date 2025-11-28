// src/components/VehicleDetailPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { vehicles } from "../data/vehicles";
import "../styles/vehicleDetailPage.css";

function VehicleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const vehicle = vehicles.find(v => v.id.toString() === id);

  if (!vehicle) {
    return (
      <h2 style={{ padding: "80px", textAlign: "center" }}>
        Vehículo no encontrado
      </h2>
    );
  }

  const handleContactClick = () => {
    localStorage.setItem("selectedVehicle", vehicle.name);

    navigate("/", { replace: false });

    setTimeout(() => {
      window.location.hash = "contacto";
    }, 80);
  };

  return (
    <section className="vehicle-detail container">

      {/* Botón volver */}
      <button
        className="btn-secondary return-btn"
        onClick={() => navigate(-1)}
      >
        ← Volver
      </button>

      {/* Contenedor principal */}
      <div className="detail-wrapper">

        {/* Imagen */}
        <div className="detail-image-box">
          <img src={vehicle.image} alt={vehicle.name} />
        </div>

        {/* Información */}
        <div className="detail-info">
          <h1>{vehicle.name}</h1>
          <p className="detail-subtitle">
            {vehicle.year} • {vehicle.type.toUpperCase()}
          </p>

          <p className="detail-description">{vehicle.description}</p>

          {/* FICHA TÉCNICA */}
          <h3>Ficha Técnica</h3>
          <div className="detail-grid">

            {vehicle.engine && (
              <p><strong>Motor:</strong> {vehicle.engine}</p>
            )}

            {vehicle.power && (
              <p><strong>Potencia:</strong> {vehicle.power}</p>
            )}

            {vehicle.fuel && (
              <p><strong>Combustible:</strong> {vehicle.fuel}</p>
            )}

            {vehicle.transmission && (
              <p><strong>Transmisión:</strong> {vehicle.transmission}</p>
            )}

            {vehicle.traction && (
              <p><strong>Tracción:</strong> {vehicle.traction}</p>
            )}

            {vehicle.consumption && (
              <p><strong>Consumo:</strong> {vehicle.consumption}</p>
            )}
          </div>

          {/* SEGURIDAD */}
          {vehicle.safety && (
            <>
              <h3>Sistemas de Seguridad</h3>
              <ul className="detail-list">
                {vehicle.safety.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </>
          )}

          {/* CARACTERÍSTICAS */}
          {vehicle.features && (
            <>
              <h3>Confort y Tecnología</h3>
              <ul className="detail-list">
                {vehicle.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </>
          )}

          {/* PRECIO */}
          <p className="detail-price">
            USD {vehicle.price.toLocaleString()}
          </p>

          <button className="detail-btn" onClick={handleContactClick}>
            Consultar sobre este vehículo
          </button>
        </div>
      </div>

    </section>
  );
}

export default VehicleDetailPage;
