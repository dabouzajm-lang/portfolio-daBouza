function Contact() {

    return (
        <section
            id="contact"
            className="contact"
        >

            <div className="contact__container">

                <div className="contact__header">

                    <span className="section-label">
                        Contacto
                    </span>

                    <h2>
                        ¿Trabajamos juntos?
                    </h2>

                    <p>
                        Estoy buscando nuevas oportunidades como Frontend Developer,
                        donde pueda aportar mis conocimientos en React y JavaScript,
                        continuar creciendo profesionalmente y formar parte de un
                        equipo de desarrollo.
                    </p>

                </div>

                <div className="contact__links">

                    {/* EMAIL */}

                    <a
                        href="mailto:dabouza.j.m@gmail.com"
                        className="contact__link"
                        aria-label="Enviar un email a Juan Manuel da Bouza"
                    >

                        <span
                            className="contact__icon"
                            aria-hidden="true"
                        >
                            @
                        </span>

                        <span>
                            Email
                        </span>

                    </a>

                    {/* LINKEDIN */}

                    <a
                        href="https://www.linkedin.com/in/juan-manuel-da-bouza-58a952249/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__link"
                        aria-label="Visitar perfil de LinkedIn"
                    >

                        <i
                            className="devicon-linkedin-plain"
                            aria-hidden="true"
                        ></i>

                        <span>
                            LinkedIn
                        </span>

                    </a>

                    {/* GITHUB */}

                    <a
                        href="https://github.com/dabouzajm-lang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__link"
                        aria-label="Visitar perfil de GitHub"
                    >

                        <i
                            className="devicon-github-original"
                            aria-hidden="true"
                        ></i>

                        <span>
                            GitHub
                        </span>

                    </a>

                </div>

            </div>

        </section>
    )
}

export default Contact