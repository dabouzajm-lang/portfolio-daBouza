function AboutCard({ icon, title, children }) {

    return (
        <article className="about-card">

            <div className="about-card__icon">
                {icon}
            </div>

            <div className="about-card__content">

                <h3>
                    {title}
                </h3>

                <p>
                    {children}
                </p>

            </div>

        </article>
    )
}

export default AboutCard