function ProjectCard({ project }) {

    return (
        <article
            className={`project-card ${
                project.featured
                    ? "project-card--featured"
                    : ""
            }`}
        >

            <div className="project-card__image">

                <img
                    src={project.image}
                    alt={`Captura del proyecto ${project.title}`}
                />

                {project.featured && (
                    <>
                        <span className="project-card__badge">
                            Proyecto destacado
                        </span>

                        <div className="project-card__overlay">

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card__overlay-link"
                            >
                                Ver demo

                                <span aria-hidden="true">
                                    ↗
                                </span>
                            </a>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card__overlay-link"
                            >
                                Código

                                <span aria-hidden="true">
                                    ↗
                                </span>
                            </a>

                        </div>
                    </>
                )}

            </div>


            <div className="project-card__content">

                <span className="project-card__category">
                    {project.category}
                </span>


                <h3 className="project-card__title">
                    {project.title}
                </h3>


                <p className="project-card__description">
                    {project.description}
                </p>


                <div className="project-card__technologies">

                    {project.technologies?.map((technology) => (

                        <span
                            key={technology.name}
                            className="project-card__technology"
                        >

                            {technology.icon && (
                                <i className={technology.icon}></i>
                            )}

                            {technology.name}

                        </span>

                    ))}

                </div>


                {project.featured && project.features?.length > 0 && (

                    <ul className="project-card__features">

                        {project.features
                            .slice(0, 3)
                            .map((feature) => (

                                <li key={feature}>

                                    <span aria-hidden="true">
                                        ✓
                                    </span>

                                    {feature}

                                </li>

                            ))}

                    </ul>

                )}


                <div className="project-card__actions">

                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__button project-card__button--primary"
                    >
                        Ver demo

                        <span aria-hidden="true">
                            ↗
                        </span>
                    </a>


                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__button project-card__button--secondary"
                    >
                        Código

                        <span aria-hidden="true">
                            ↗
                        </span>
                    </a>

                </div>

            </div>

        </article>
    )
}

export default ProjectCard