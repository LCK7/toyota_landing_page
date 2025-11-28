// src/components/Header.jsx
import React from 'react';
import '../styles/header.css';

function Header() {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <img
                        href="#"
                        src="/public/logo_automoviles.png" 
                        alt="Logo Toyota" 
                        className="logo-img"
                    />
                </div>
                
                <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <a href="#catalogo" className="nav-link">Vehículos</a>
                    <a href="#nosotros" className="nav-link">Nosotros</a>
                    <a href="#contacto" className="nav-link">Contacto</a>

                    <div style={{ display: 'flex', gap: '8px' }}>
                        {/* ICONOS DE REDES SOCIALES */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;