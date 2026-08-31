import ProjectCard from "./ProjectCard"
import projects from "../../data/projects"

function Projects() {

    const featuredProject = projects.find(
        (project) => project.featured
    )

    const otherProjects = projects.filter(
        (project) => !project.featured
    )

    return (
        <section
            id="projects"
            className="projects"
        >

            <div className="projects__header">

                <span className="section-label">
                    Proyectos
                </span>

                <h2>
                    Proyectos donde transformo conceptos en aplicaciones reales.
                </h2>

                <p>
                    Una selección de proyectos donde aplico React, JavaScript,
                    diseño responsive, manejo de estado, integración con servicios
                    externos y buenas prácticas de desarrollo frontend.
                </p>

            </div>

            {featuredProject && (
                <div className="projects__featured">

                    <ProjectCard
                        project={featuredProject}
                    />

                </div>
            )}

            <div className="projects__grid">

                {otherProjects.map((project) => (

                    <ProjectCard
                        key={project.id}
                        project={project}
                    />

                ))}

            </div>

        </section>
    )
}

export default Projects