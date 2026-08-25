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
                    <span className="project-card__badge">
                        Proyecto destacado
                    </span>
                )}

            </div>

            <div className="project-card__content">

                <span className="project-card__category">
                    {project.category}
                </span>

                <h3>
                    {project.title}
                </h3>

                <p className="project-card__description">
                    {project.description}
                </p>

                <div className="project-card__technologies">

                    {project.technologies.map((technology) => (

                        <span
                            key={technology.name}
                            className="project-card__technology"
                        >

                            <i className={technology.icon}></i>

                            {technology.name}

                        </span>

                    ))}

                </div>

                <div className="project-card__actions">

                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__button project-card__button--primary"
                    >
                        Ver proyecto
                        <span>↗</span>
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__button project-card__button--secondary"
                    >
                        GitHub
                        <span>↗</span>
                    </a>

                </div>

            </div>

        </article>
    )
}

export default ProjectCard