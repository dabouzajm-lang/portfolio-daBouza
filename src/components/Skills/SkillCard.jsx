function SkillCard({
    icon,
    title,
    description,
    technologies
}) {

    return (
        <article className="skill-card">

            <div className="skill-card__icon">
                <i className={icon}></i>
            </div>

            <div className="skill-card__content">

                <h3 className="skill-card__title">
                    {title}
                </h3>

                <p className="skill-card__description">
                    {description}
                </p>

                <div className="skill-card__technologies">

                    {technologies.map((technology) => (

                        <span
                            key={technology.name}
                            className="skill-card__technology"
                        >

                            {technology.icon && (
                                <i className={technology.icon}></i>
                            )}

                            {technology.name}

                        </span>

                    ))}

                </div>

            </div>

        </article>
    )
}

export default SkillCard