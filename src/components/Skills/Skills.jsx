import SkillCard from "./SkillCard"

function Skills() {

    const skillGroups = [

        {
            icon: "devicon-react-original colored",

            title: "Frontend Development",

            description:
                "Desarrollo de interfaces modernas y aplicaciones web utilizando tecnologías actuales del ecosistema frontend.",

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
                }
            ]
        },

        {
            icon: "devicon-sass-original colored",

            title: "UI & Styling",

            description:
                "Construcción de interfaces responsive utilizando sistemas de estilos, layouts modernos y metodologías de diseño adaptativo.",

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
                "Uso de herramientas de desarrollo y control de versiones para organizar, mantener y publicar proyectos.",

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
                "Actualmente ampliando mi perfil hacia el desarrollo backend para comprender el ciclo completo de una aplicación web.",

            technologies: [
                {
                    name: "Node.js",
                    icon: "devicon-nodejs-plain colored"
                },
                {
                    name: "Backend I"
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
                    Un stack enfocado principalmente en Frontend,
                    acompañado por formación continua en Backend.
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