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
                    Frontend Developer enfocado en crear experiencias web modernas.
                </h2>

            </div>

            <div className="about__content">

                <div className="about__description">

                    <p>
                        Soy Frontend Developer con formación en desarrollo web,
                        especializado en la creación de interfaces modernas,
                        responsive y orientadas a una buena experiencia de usuario.
                    </p>

                    <p>
                        Actualmente trabajo principalmente con React y JavaScript,
                        complementando mi formación con HTML5, CSS3, SASS, Bootstrap,
                        Git y GitHub.
                    </p>

                    <p>
                        Luego de finalizar mi formación en JavaScript y obtener la
                        certificación en ReactJS, actualmente estoy cursando Backend I
                        en CoderHouse para ampliar progresivamente mis conocimientos
                        y comprender mejor el desarrollo de aplicaciones de extremo a extremo.
                    </p>

                    <p>
                        Mi objetivo es incorporarme a un equipo de desarrollo donde
                        pueda aportar mis conocimientos, seguir aprendiendo y participar
                        en la construcción de productos digitales reales.
                    </p>

                </div>

                <div className="about__cards">

                    <AboutCard
                        icon="01"
                        title="Frontend"
                    >
                        Desarrollo interfaces responsive y componentes reutilizables
                        utilizando React, JavaScript, HTML5 y CSS3.
                    </AboutCard>

                    <AboutCard
                        icon="02"
                        title="UI & Responsive"
                    >
                        Trabajo con SASS, Bootstrap, Flexbox, CSS Grid y principios
                        de diseño responsive para diferentes dispositivos.
                    </AboutCard>

                    <AboutCard
                        icon="03"
                        title="En formación"
                    >
                        Actualmente amplío mis conocimientos hacia Backend mediante
                        mi formación en CoderHouse.
                    </AboutCard>

                </div>

            </div>

        </section>
    )
}

export default About