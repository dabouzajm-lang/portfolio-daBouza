import SkillCard from "./SkillCard"

function Skills() {

    const skillGroups = [

        {
            icon: "devicon-react-original colored",

            title: "Frontend Development",

            description:
                "Desarrollo de aplicaciones web con React y JavaScript, utilizando componentes reutilizables, manejo de estado y navegación SPA.",

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
                    name: "HTML5",
                    icon: "devicon-html5-plain colored"
                },
                {
                    name: "CSS3",
                    icon: "devicon-css3-plain colored"
                },
                {
                    name: "Firebase",
                    icon: "devicon-firebase-plain colored"
                }
            ]
        },

        {
            icon: "devicon-sass-original colored",

            title: "UI & Styling",

            description:
                "Construcción de interfaces responsive utilizando preprocesadores, frameworks CSS y sistemas de layout modernos.",

            technologies: [
                {
                    name: "SASS",
                    icon: "devicon-sass-original colored"
                },
                {
                    name: "Bootstrap",
                    icon: "devicon-bootstrap-plain colored"
                },
                {
                    name: "Flexbox"
                },
                {
                    name: "CSS Grid"
                },
                {
                    name: "Responsive Design"
                }
            ]
        },

        {
            icon: "devicon-git-plain colored",

            title: "Tools & Workflow",

            description:
                "Herramientas que utilizo para desarrollar, versionar, organizar y publicar proyectos web.",

            technologies: [
                {
                    name: "Git",
                    icon: "devicon-git-plain colored"
                },
                {
                    name: "GitHub",
                    icon: "devicon-github-original"
                },
                {
                    name: "VS Code",
                    icon: "devicon-vscode-plain colored"
                },
                {
                    name: "Vite",
                    icon: "devicon-vitejs-plain colored"
                }
            ]
        },

        {
            icon: "devicon-nodejs-plain colored",

            title: "Currently Learning",

            description:
                "Actualmente amplío mi formación hacia Backend para comprender mejor la arquitectura y el ciclo completo de una aplicación web.",

            technologies: [
                {
                    name: "Node.js",
                    icon: "devicon-nodejs-plain colored"
                },
                {
                    name: "Express",
                    icon: "devicon-express-original"
                },
                {
                    name: "APIs REST"
                }
            ]
        }

    ]

    return (
        <section
            id="skills"
            className="skills"
        >

            <div className="skills__header">

                <span className="section-label">
                    Stack tecnológico
                </span>

                <h2>
                    Tecnologías con las que construyo.
                </h2>

                <p>
                    Mi stack está enfocado principalmente en desarrollo Frontend
                    con React y JavaScript, complementado por herramientas de
                    styling, control de versiones y formación continua en Backend.
                </p>

            </div>

            <div className="skills__grid">

                {skillGroups.map((group) => (

                    <SkillCard
                        key={group.title}
                        {...group}
                    />

                ))}

            </div>

        </section>
    )
}

export default Skills