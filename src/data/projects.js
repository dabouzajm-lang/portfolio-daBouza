const projects = [
    {
        id: 1,

        title: "Volley Store",

        category: "React Application",

        description:
            "E-commerce desarrollado con React para la gestión y comercialización de productos relacionados con el vóley.",

        longDescription:
            "Aplicación web desarrollada con React y Vite. Implementa navegación mediante React Router, gestión global del carrito utilizando Context API e integración con Firebase y Firestore para la obtención y gestión de productos.",

        image: "/assets/img/volley-store.jpg",

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
                name: "Firebase",
                icon: "devicon-firebase-plain colored"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain colored"
            }
        ],

        features: [
            "Catálogo de productos",
            "Filtrado por categorías",
            "Detalle de productos",
            "Carrito de compras",
            "Gestión de estado con Context API",
            "Persistencia de productos mediante Firestore"
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

        image: "/assets/img/voley-argentino.jpg",

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
    }
]
export default projects