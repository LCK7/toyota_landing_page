// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from './components/Header';
import Hero from './components/Hero';
import VehicleCatalog from './components/VehicleCatalog';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import MapLocation from './components/MapLocation';
import SellersCarousel from './components/SellersCarousel';
import Footer from './components/Footer';

import VehicleDetailPage from "./components/VehicleDetailPage";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      {/* Componente que maneja los #hash */}
      <ScrollToHash />

      <Header />

      <main>
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <VehicleCatalog />
                <SellersCarousel />
                <AboutUs />
                <ContactForm />
                <MapLocation />
              </>
            }
          />

          {/* Página individual de cada vehículo */}
          <Route path="/vehiculo/:id" element={<VehicleDetailPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
