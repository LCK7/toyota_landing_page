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
                            <i className="fas fa-map-marker-alt"></i> Huancayo – Perú
                        </li>
                    </ul>
                </div>

                {/* REDES SOCIALES */}
                <div className="footer-section">
                    <h4>Redes Sociales</h4>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com/share/1ADv5okWh4/" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/automoviles.s.a?igsh=MW5zNzB5cmtocmgyNg==" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@automoviless.a.778/videos" target="_blank"><i className="fab fa-youtube"></i></a>
                        <a href="https://www.tiktok.com/@automoviles.sa?is_from_webapp=1&sender_device=pc" target="_blank"><i className="fab fa-tiktok"></i></a>
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
