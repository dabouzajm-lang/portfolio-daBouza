import AboutCard from "./AboutCard"

function About() {

    return (
        <section
            id="about"
            className="about"
        >

            <div className="about__header">

                <span className="section-label">
                    Sobre mí
                </span>

                <h2>
                    Construyendo una base sólida para desarrollarme profesionalmente en tecnología.
                </h2>

            </div>

            <div className="about__content">

                <div className="about__description">

                    <p>
                        Me formé en desarrollo frontend trabajando con tecnologías
                        como React, JavaScript, HTML5, CSS3 y SASS, con especial
                        interés en construir interfaces claras, funcionales y
                        adaptables a distintos dispositivos.
                    </p>

                    <p>
                        A lo largo de mi formación desarrollé proyectos completos
                        que me permitieron aplicar componentización, manejo de estado,
                        navegación SPA, integración con Firebase, diseño responsive
                        y buenas prácticas de organización del código.
                    </p>

                    <p>
                        Luego de completar mi formación en JavaScript y React,
                        actualmente continúo ampliando mi perfil con Backend I
                        en CoderHouse, incorporando conceptos relacionados con
                        Node.js, APIs REST y desarrollo del lado del servidor.
                    </p>

                    <p>
                        Mi objetivo es conseguir mi primera experiencia profesional
                        como Frontend o Software Developer, formar parte de un equipo
                        de desarrollo y seguir creciendo a través de proyectos reales
                        y trabajo colaborativo.
                    </p>

                </div>

                <div className="about__cards">

                    <AboutCard
                        icon="01"
                        title="Frontend"
                    >
                        Desarrollo interfaces y aplicaciones web utilizando React,
                        JavaScript, HTML5 y CSS3, priorizando componentización,
                        claridad y reutilización.
                    </AboutCard>

                    <AboutCard
                        icon="02"
                        title="UI & Responsive"
                    >
                        Trabajo con SASS, Bootstrap, Flexbox y CSS Grid para crear
                        interfaces consistentes y adaptables a distintos tamaños
                        de pantalla.
                    </AboutCard>

                    <AboutCard
                        icon="03"
                        title="Backend en formación"
                    >
                        Actualmente amplío mis conocimientos con Node.js y APIs REST
                        para comprender mejor el desarrollo integral de aplicaciones web.
                    </AboutCard>

                </div>

            </div>

        </section>
    )
}

export default About