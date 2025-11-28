import React from "react";
import "../styles/footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-grid">

                {/* LOGO + DESCRIPCIÓN */}
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src="/logo_automoviles.png" alt="Toyota Logo" />
                    </div>
                    <p>
                        Tu mejor aliado para encontrar el vehículo perfecto. 
                    </p>
                </div>

                {/* ENLACES */}
                <div className="footer-section">
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="#catalogo"><i className="fas fa-car"></i> Vehículos</a></li>
                        <li><a href="#nosotros"><i className="fas fa-users"></i> Nosotros</a></li>
                        <li><a href="#contacto"><i className="fas fa-phone"></i> Contacto</a></li>
                        <li><a href="#asesores"><i className="fas fa-user-tie"></i> Asesores</a></li>
                    </ul>
                </div>

                {/* CONTACTO */}
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <ul>
                        <li>
                            <i className="fas fa-phone"></i> +51 999 999 999
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i> info@concesionario.com
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i> Lima – Perú
                        </li>
                    </ul>
                </div>

                {/* REDES SOCIALES */}
                <div className="footer-section">
                    <h4>Redes Sociales</h4>
                    <div className="footer-socials">
                        <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-youtube"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="footer-bottom">
                © {currentYear} Concesionario Toyota — Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
