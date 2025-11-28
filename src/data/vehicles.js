export const vehicles = [
    // --- SUV (4) ---
    {
        id: 1,
        name: 'Toyota Corolla Cross',
        type: 'SUV',
        year: 2024,
        price: 32000,
        description: 'Un SUV compacto, eficiente y versátil, perfecto tanto para la ciudad como para escapadas.',
        image: '/cars/corrolla.jpg',

        engine: "2.0L Dynamic Force",
        power: "168 HP",
        fuel: "Gasolina",
        transmission: "Automática CVT",
        traction: "4x2",
        consumption: "18 km/l",

        dimensions: {
            largo: "4,460 mm",
            ancho: "1,825 mm",
            alto: "1,620 mm",
            maletero: "440 L",
        },

        safety: [
            "Toyota Safety Sense",
            "7 airbags",
            "Control de estabilidad (VSC)",
            "Asistencia de arranque en pendiente",
            "Frenado autónomo de emergencia",
        ],

        features: [
            "Pantalla táctil 10” con CarPlay/Android Auto",
            "Aire acondicionado digital",
            "Sensores de estacionamiento",
            "Cámara de retroceso HD",
            "Rieles de techo",
        ],

        gallery: [
            "/public/cars/corrolla_inter1.jpg",
            "/public/cars/corrolla_inter2.jpg"
        ]
    },

    {
        id: 4,
        name: 'Toyota Rav4 Adventure',
        type: 'SUV',
        year: 2024,
        price: 38900,
        description: 'Capacidades off-road y diseño audaz para quienes buscan aventura.',
        image: '/cars/rav4.jpg',

        engine: "2.5L VVT-i",
        power: "203 HP",
        fuel: "Gasolina",
        transmission: "Automática 8 velocidades",
        traction: "AWD",
        consumption: "14.5 km/l",

        dimensions: {
            largo: "4,600 mm",
            ancho: "1,855 mm",
            alto: "1,685 mm",
            maletero: "580 L",
        },

        safety: [
            "Toyota Safety Sense 2.0",
            "Monitor de punto ciego",
            "Alerta de tráfico cruzado",
            "Control crucero adaptativo",
            "Asistente de mantenimiento de carril",
        ],

        features: [
            "Sunroof panorámico",
            "Pantalla táctil 10.5”",
            "Cargador inalámbrico",
            "Rines negros Adventure",
            "Modos de manejo Multi-Terrain",
        ]
    },

    {
        id: 5,
        name: 'Toyota Fortuner SRV',
        type: 'SUV',
        year: 2023,
        price: 52500,
        description: 'SUV de 7 pasajeros con chasis robusto, ideal para viajes largos.',
        image: '/cars/fortuner.jpg',

        engine: "2.8L Turbo Diésel",
        power: "201 HP",
        fuel: "Diésel",
        transmission: "Automática 6 velocidades",
        traction: "4x4",
        consumption: "12.3 km/l",

        dimensions: {
            largo: "4,795 mm",
            ancho: "1,855 mm",
            alto: "1,835 mm",
            maletero: "296 L (hasta 716 L con 3ra fila abatida)",
        },

        safety: [
            "Control de estabilidad",
            "Control de descenso",
            "7 airbags",
            "ABS + EBD",
            "Asistencia al frenado",
        ],

        features: [
            "Asientos de cuero",
            "Pantalla 9” con Android Auto",
            "Climatizador automático",
            "Cámara 360°",
            "Faros LED premium",
        ]
    },

    {
        id: 6,
        name: 'Toyota Land Cruiser Prado',
        type: 'SUV',
        year: 2022,
        price: 68000,
        description: 'El todoterreno icónico de Toyota con lujo y fuerza legendaria.',
        image: '/cars/landcruiser.jpg',

        engine: "4.0L V6",
        power: "271 HP",
        fuel: "Gasolina",
        transmission: "Automática 6 velocidades",
        traction: "4x4 Full-time",
        consumption: "8.5 km/l",

        dimensions: {
            largo: "4,840 mm",
            ancho: "1,885 mm",
            alto: "1,890 mm",
            maletero: "640 L",
        },

        safety: [
            "Toyota Safety Sense",
            "Control de balance de remolque",
            "Asistencia en curvas",
            "10 airbags",
            "Cámara 360°",
        ],

        features: [
            "Asientos eléctricos con memoria",
            "Climatizador de triple zona",
            "Pantalla central 12.3”",
            "Suspensión KDSS",
            "Interior premium con cuero Nappa"
        ]
    },

    // *** SEDANES ***
    {
        id: 2,
        name: 'Toyota Yaris Sedan',
        type: 'sedán',
        year: 2024,
        price: 21500,
        description: 'Sedán accesible, económico y confiable para uso diario.',
        image: '/cars/yaris.jpg',

        engine: "1.5L",
        power: "106 HP",
        fuel: "Gasolina",
        transmission: "Automática CVT",
        traction: "4x2",
        consumption: "20 km/l",

        safety: [
            "Control de estabilidad",
            "Airbags frontales y laterales",
            "Asistente de arranque",
            "ABS + EBD",
        ],

        features: [
            "Pantalla 8”",
            "Cámara de retroceso",
            "Control crucero",
            "Aros de aleación 15”"
        ]
    },

    {
        id: 7,
        name: 'Toyota Corolla Sedan Hybrid',
        type: 'sedán',
        year: 2025,
        price: 28500,
        description: 'El Corolla híbrido con máxima eficiencia y tecnología moderna.',
        image: '/cars/sedanhybrid.png',

        engine: "1.8L Híbrido",
        power: "121 HP combinados",
        fuel: "Híbrido",
        transmission: "CVT e-CVT",
        traction: "4x2",
        consumption: "27 km/l",

        safety: [
            "Toyota Safety Sense 3.0",
            "Alerta de carril",
            "Frenado autónomo",
            "Detector de peatones",
        ],

        features: [
            "Tablero digital",
            "Pantalla 10”",
            "Sistemas híbridos Toyota",
            "Luces LED"
        ]
    },

    {
        id: 8,
        name: 'Toyota Camry XSE',
        type: 'sedán',
        year: 2023,
        price: 35900,
        description: 'Sedán deportivo de lujo con gran confort.',
        image: '/cars/camry.jpg',

        engine: "2.5L",
        power: "206 HP",
        fuel: "Gasolina",
        transmission: "Automática 8 velocidades",
        traction: "4x2",
        consumption: "14 km/l",

        safety: [
            "Control de estabilidad",
            "Airbags laterales tipo cortina",
            "Detección de punto ciego",
        ],

        features: [
            "Asientos de cuero",
            "Sunroof eléctrico",
            "Pantalla 10”",
            "Climatizador dual",
        ]
    },

    {
        id: 9,
        name: 'Toyota Mirai',
        type: 'sedán',
        year: 2021,
        price: 55000,
        description: 'Sedán impulsado por hidrógeno, futuro hecho realidad.',
        image: '/cars/mirai.jpg',

        engine: "Motor eléctrico (celdas de hidrógeno)",
        power: "182 HP",
        fuel: "Hidrógeno",
        transmission: "Automática",
        traction: "4x2",
        consumption: "650 km de autonomía",
        safety: [
            "Toyota Safety Sense",
            "8 airbags",
            "Control de estabilidad",
            "Asistencia de frenado"
        ],

        features: [
            "Interior futurista",
            "Pantalla 12”",
            "Sonido premium JBL",
            "Asientos climatizados"
        ]
    },

    // *** PICK-UPS & DEPORTIVOS ***
    {
        id: 3,
        name: 'Toyota Hilux 4x4',
        type: 'pick-up',
        year: 2023,
        price: 45000,
        description: 'Potencia, resistencia y rendimiento en el trabajo.',
        image: '/cars/hilux.jpg',

        engine: "2.8L Turbo Diésel",
        power: "201 HP",
        fuel: "Diésel",
        transmission: "Manual/Automática",
        traction: "4x4",
        consumption: "12 km/l",

        safety: [
            "ABS + EBD",
            "Control de estabilidad",
            "Airbags frontales",
        ],

        features: [
            "Pantalla 8”",
            "Control crucero",
            "Modo Power & Eco",
        ]
    },

    {
        id: 10,
        name: 'Toyota Tacoma TRD Pro',
        type: 'pick-up',
        year: 2024,
        price: 51000,
        description: 'Pick-up todoterreno con diseño agresivo TRD.',
        image: '/cars/tacoma.jpg',

        engine: "3.5L V6",
        power: "278 HP",
        fuel: "Gasolina",
        transmission: "Automática 6 velocidades",
        traction: "4x4",
        consumption: "11 km/l",

        safety: [
            "Toyota Safety Sense",
            "Monitor de punto ciego",
            "Airbags múltiples",
        ],

        features: [
            "Suspensión FOX",
            "Skid plate TRD",
            "Rines 16’’ off-road"
        ]
    },

    {
        id: 11,
        name: 'Toyota GR86',
        type: 'deportivo',
        year: 2024,
        price: 31000,
        description: 'Un coupé ligero perfecto para experiencias deportivas.',
        image: '/cars/gr86.jpg',

        engine: "2.4L Boxer",
        power: "228 HP",
        fuel: "Gasolina",
        transmission: "Manual/Automática",
        traction: "RWD",
        consumption: "12 km/l",

        safety: ["ABS", "Control de estabilidad", "Airbags frontales"],

        features: [
            "Interior deportivo",
            "Pantalla 8”",
            "Launch Control (AT)"
        ]
    },

    {
        id: 12,
        name: 'Toyota Supra GT',
        type: 'deportivo',
        year: 2023,
        price: 65000,
        description: 'El legendario Supra con ADN de rendimiento puro.',
        image: '/cars/supra.jpeg',

        engine: "3.0L Twin Scroll Turbo",
        power: "382 HP",
        fuel: "Gasolina",
        transmission: "Automática 8 velocidades",
        traction: "RWD",
        consumption: "10 km/l",

        safety: ["Control de tracción", "Sensores delanteros", "Cámara HD"],

        features: [
            "Interior alcántara",
            "Asientos deportivos",
            "Pantalla 12.3”",
            "Sound System JBL"
        ]
    },
];
