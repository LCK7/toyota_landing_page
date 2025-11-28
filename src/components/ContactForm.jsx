// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { vehicles } from '../data/vehicles';
import '../styles/contactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        model: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    // AUTORELLENA modelo si viene desde detalle
    useEffect(() => {
        const stored = localStorage.getItem("selectedVehicle");
        if (stored) {
            setFormData(prev => ({ ...prev, model: stored }));
            localStorage.removeItem("selectedVehicle");
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            setStatus('Error: Por favor, complete todos los campos obligatorios (*).');
            return;
        }

        console.log("Datos enviados:", formData);

        setStatus("¡Mensaje enviado exitosamente! Pronto nos pondremos en contacto contigo.");

        setFormData({ name: '', email: '', phone: '', model: '', message: '' });
    };

    return (
        <section id="contacto" className="contact-section container">

            <h2 className="contact-title">Contáctanos</h2>
            <p className="contact-subtitle">
                Déjanos tus datos y uno de nuestros asesores Toyota se comunicará contigo.
            </p>

            <div className="contact-box">

                {status && (
                    <p className={`status-message ${status.startsWith("Error") ? "status-error" : "status-success"}`}>
                        {status.replace("Error: ", "")}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="contact-form">

                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="*Nombre completo"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="*Correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="*Teléfono"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />

                        <select
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            className="input-field"
                        >
                            <option value="">Modelo de interés (Opcional)</option>
                            {vehicles.map(v => (
                                <option key={v.id} value={v.name || v.model}>
                                    {v.name || v.model}
                                </option>
                            ))}
                        </select>
                    </div>

                    <textarea
                        name="message"
                        placeholder="Mensaje o consulta"
                        value={formData.message}
                        onChange={handleChange}
                        className="input-field textarea-field"
                    />

                    <button type="submit" className="btn-primary contact-btn">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
