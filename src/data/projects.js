const projects = [
    {
        id: 1,

        title: "Volley Store",

        category: "React E-commerce",

        description:
            "E-commerce desarrollado con React que implementa catálogo dinámico, carrito global, checkout e integración con Firebase Firestore.",

        longDescription:
            "Aplicación web desarrollada con React y Vite, organizada mediante componentes reutilizables y navegación SPA con React Router. Implementa gestión global del carrito mediante Context API e integración con Firebase Firestore para consultar productos, gestionar stock y generar órdenes de compra.",

        image: `${import.meta.env.BASE_URL}assets/img/volley-store.jpg`,

        technologies: [
            {
                name: "React",
                icon: "devicon-react-original colored"
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            },
            {
                name: "Vite",
                icon: "devicon-vitejs-plain colored"
            },
            {
                name: "Firebase",
                icon: "devicon-firebase-plain colored"
            },
            {
                name: "React Router",
                icon: "devicon-reactrouter-plain colored"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain colored"
            }
        ],

        features: [
            "Carrito global gestionado con Context API",
            "Checkout y generación de órdenes con Firestore",
            "Catálogo dinámico con filtrado y control de stock",
            "Vista de detalle de productos",
            "Navegación SPA con React Router",
            "Diseño responsive"
        ],

        demo: "https://volley-store-vert.vercel.app/",

        github: "https://github.com/dabouzajm-lang/volley-store",

        featured: true
    },

    {
        id: 2,

        title: "Vóley Argentino",

        category: "Frontend Website",

        description:
            "Sitio web informativo desarrollado desde cero aplicando HTML semántico, SASS, Bootstrap, diseño responsive y fundamentos de SEO.",

        longDescription:
            "Proyecto web desarrollado desde cero aplicando HTML semántico, arquitectura de estilos con SASS, Bootstrap, diseño responsive y buenas prácticas de SEO.",

        image: `${import.meta.env.BASE_URL}assets/img/voley-argentino.jpg`,

        technologies: [
            {
                name: "HTML5",
                icon: "devicon-html5-plain colored"
            },
            {
                name: "CSS3",
                icon: "devicon-css3-plain colored"
            },
            {
                name: "SASS",
                icon: "devicon-sass-original colored"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain colored"
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            }
        ],

        features: [
            "Diseño responsive",
            "Arquitectura SASS",
            "HTML semántico",
            "Optimización SEO",
            "Diseño Mobile First"
        ],

        demo: "https://dabouzajm-lang.github.io/voleyarg/",

        github: "https://github.com/dabouzajm-lang/voleyarg",

        featured: false
    },

    {
        id: 3,

        title: "Portfolio Personal",

        category: "React Application",

        description:
            "Portfolio profesional desarrollado con React y Vite para presentar proyectos, stack tecnológico y perfil profesional.",

        longDescription:
            "Aplicación web desarrollada con React y Vite mediante una arquitectura basada en componentes reutilizables. Utiliza SASS para organizar estilos, diseño responsive, navegación interna, accesibilidad básica y publicación mediante GitHub Pages.",

        image: `${import.meta.env.BASE_URL}assets/img/portfolio.jpg`,

        technologies: [
            {
                name: "React",
                icon: "devicon-react-original colored"
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            },
            {
                name: "Vite",
                icon: "devicon-vitejs-plain colored"
            },
            {
                name: "SASS",
                icon: "devicon-sass-original colored"
            },
            {
                name: "GitHub",
                icon: "devicon-github-original"
            }
        ],

        features: [
            "Arquitectura basada en componentes",
            "Diseño responsive",
            "Sistema de estilos con SASS",
            "Componentes reutilizables",
            "Deploy mediante GitHub Pages"
        ],

        demo: "https://dabouzajm-lang.github.io/portfolio-daBouza/",

        github: "https://github.com/dabouzajm-lang/portfolio-daBouza",

        featured: false
    }
]

export default projects