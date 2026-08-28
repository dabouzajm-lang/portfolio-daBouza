const projects = [
    {
        id: 1,

        title: "Volley Store",

        category: "React E-commerce",

        description:
            "E-commerce desarrollado con React, enfocado en una experiencia de compra clara, responsive y funcional para productos relacionados con el vóley.",

        longDescription:
            "Aplicación web desarrollada con React y Vite, estructurada mediante componentes reutilizables y navegación con React Router. Implementa gestión global del carrito utilizando Context API e integración con Firebase Firestore para la consulta de productos y generación de órdenes de compra.",

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
            "Carrito de compras global con Context API",
            "Checkout y generación de órdenes",
            "Persistencia de productos y órdenes con Firestore",
            "Catálogo dinámico de productos",
            "Filtrado por categorías",
            "Vista de detalle de producto",
            "Control de stock y cantidades",
            "Navegación SPA con React Router",
            "Diseño responsive"
        ],

        demo: "https://volley-store-swart.vercel.app/",

        github: "https://github.com/dabouzajm-lang/volley-store",

        featured: true
    },

    {
        id: 2,

        title: "Vóley Argentino",

        category: "Frontend Website",

        description:
            "Sitio web informativo sobre el vóley argentino, desarrollado como proyecto frontend responsive.",

        longDescription:
            "Proyecto web desarrollado desde cero aplicando HTML semántico, arquitectura de estilos con SASS, diseño responsive y buenas prácticas de SEO.",

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
            "Portfolio profesional desarrollado con React para presentar mi perfil como Frontend Developer, proyectos y stack tecnológico.",

        longDescription:
            "Aplicación web desarrollada con React y Vite utilizando una arquitectura basada en componentes reutilizables. Implementa SASS para la organización de estilos, diseño responsive, navegación interna y publicación mediante GitHub Pages.",

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