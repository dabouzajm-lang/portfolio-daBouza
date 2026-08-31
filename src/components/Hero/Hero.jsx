function Hero() {
    return (
        <section id="hero" className="hero">

            <div className="hero__container">

                <div className="hero__content">

                    <div className="hero__status">

                        <span
                            className="hero__status-dot"
                            aria-hidden="true"
                        ></span>

                        Abierto a oportunidades Frontend

                    </div>

                    <span className="hero__eyebrow">
                        Frontend Developer
                    </span>

                    <h1 className="hero__title">
                        Hola, soy

                        <span>
                            Juan Manuel da Bouza.
                        </span>
                    </h1>

                    <h2 className="hero__subtitle">
                        Construyo interfaces web modernas,
                        funcionales y responsive.
                    </h2>

                    <p className="hero__description">
                        Desarrollo aplicaciones frontend con React y JavaScript,
                        trabajando con componentes reutilizables, diseño responsive
                        y buenas prácticas orientadas a crear experiencias web
                        claras y funcionales.
                    </p>

                    <div className="hero__buttons">

                        <a
                            href="#projects"
                            className="btn btn--primary"
                        >
                            Ver proyectos

                            <span aria-hidden="true">
                                →
                            </span>
                        </a>

                        <a
                            href={`${import.meta.env.BASE_URL}assets/cv/daBouzaJuanManuel.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--secondary"
                        >
                            Ver CV
                        </a>

                    </div>

                    <div className="hero__socials">

                        <a
                            href="https://github.com/dabouzajm-lang"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <i
                                className="devicon-github-original"
                                aria-hidden="true"
                            ></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/juan-manuel-da-bouza-58a952249/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i
                                className="devicon-linkedin-plain"
                                aria-hidden="true"
                            ></i>
                        </a>

                    </div>

                </div>

                <div className="hero__visual">

                    <div className="hero__code">

                        <div className="hero__code-header">

                            <div
                                className="hero__code-dots"
                                aria-hidden="true"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <span>
                                developer.jsx
                            </span>

                        </div>

                        <div className="hero__code-body">

                            <p>
                                <span className="code-purple">
                                    const
                                </span>{" "}
                                developer = {"{"}
                            </p>

                            <p className="code-indent">
                                name:{" "}

                                <span className="code-green">
                                    "Juan Manuel"
                                </span>,
                            </p>

                            <p className="code-indent">
                                role:{" "}

                                <span className="code-green">
                                    "Frontend Developer"
                                </span>,
                            </p>

                            <p className="code-indent">
                                stack: [
                            </p>

                            <p className="code-indent-2">
                                <span className="code-green">
                                    "React"
                                </span>,
                            </p>

                            <p className="code-indent-2">
                                <span className="code-green">
                                    "JavaScript"
                                </span>,
                            </p>

                            <p className="code-indent-2">
                                <span className="code-green">
                                    "SASS"
                                </span>,
                            </p>

                            <p className="code-indent-2">
                                <span className="code-green">
                                    "Node.js"
                                </span>
                            </p>

                            <p className="code-indent">
                                ],
                            </p>

                            <p>
                                {"}"}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div
                className="hero__scroll"
                aria-hidden="true"
            >
                <span>
                    Scroll para explorar
                </span>

                <span>
                    ↓
                </span>
            </div>

        </section>
    )
}

export default Hero