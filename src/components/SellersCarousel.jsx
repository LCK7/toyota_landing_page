import React, { useEffect, useRef } from 'react';
import { sellers } from '../data/sellers';
import '../styles/sellersCarousel.css';

function SellersCarousel() {
    const trackRef = useRef(null);

    // Duplicamos los vendedores para crear el efecto de loop
    const infiniteSellers = [...sellers, ...sellers];

    useEffect(() => {
        const track = trackRef.current;
        let position = 0;

        const slide = () => {
            if (!track.isPaused) {
                position -= 1;

                if (position <= -(track.scrollWidth / 2)) {
                    position = 0;
                }

                track.style.transform = `translateX(${position}px)`;
            }

            requestAnimationFrame(slide);
        };

        slide();
    }, []);
    return (
        <section id='asesores' className="sellers-section">
            <div className="container">
                <h2 className="text-secondary">Conoce a Nuestros Asesores de Venta</h2>

                <div className="carousel-container infinite-carousel">
                    <div className="carousel-track infinite-track" ref={trackRef}>
                        {infiniteSellers.map((seller, index) => (
                            <div
                                key={index}
                                className="seller-card"
                                onMouseEnter={() => trackRef.current.isPaused = true}
                                onMouseLeave={() => trackRef.current.isPaused = false}
                            >
                                <div className="seller-content">
                                    <img 
                                        src={seller.photo || '/photos/default-seller.jpg'}
                                        alt={seller.name}
                                        className="seller-photo"
                                    />
                                    <h4>{seller.name}</h4>
                                    <p>{seller.title}</p>

                                    <div className="seller-contact">
                                        <a href={`tel:${seller.phone}`} className="info-item">
                                            <i className="fas fa-phone"></i> {seller.phone}
                                        </a>
                                        <a href={`mailto:${seller.email}`} className="info-item">
                                            <i className="fas fa-envelope"></i> {seller.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SellersCarousel;
