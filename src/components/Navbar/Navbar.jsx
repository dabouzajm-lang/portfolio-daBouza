import { useState } from 'react'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="navbar">

            <nav className="navbar__container">

                <a
                    href="#hero"
                    className="navbar__logo"
                    aria-label="Ir al inicio"
                    onClick={closeMenu}
                >
                    <span>&lt;</span>
                    JMB
                    <span>/&gt;</span>
                </a>

                {/* Desktop */}

                <ul className="navbar__menu">

                    <li>
                        <a href="#about">
                            Sobre mí
                        </a>
                    </li>

                    <li>
                        <a href="#skills">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects">
                            Proyectos
                        </a>
                    </li>

                    <li>
                        <a href="#contact">
                            Contacto
                        </a>
                    </li>

                </ul>

                <a
                    href="#contact"
                    className="navbar__cta"
                >
                    Hablemos
                </a>

                {/* Mobile */}

                <button
                    className={`navbar__toggle ${
                        isMenuOpen ? 'navbar__toggle--active' : ''
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={
                        isMenuOpen
                            ? 'Cerrar menú'
                            : 'Abrir menú'
                    }
                    aria-expanded={isMenuOpen}
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

                <div
                    className={`navbar__mobile-menu ${
                        isMenuOpen
                            ? 'navbar__mobile-menu--open'
                            : ''
                    }`}
                >

                    <a
                        href="#about"
                        onClick={closeMenu}
                    >
                        Sobre mí
                    </a>

                    <a
                        href="#skills"
                        onClick={closeMenu}
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        onClick={closeMenu}
                    >
                        Proyectos
                    </a>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                    >
                        Contacto
                    </a>

                    <a
                        href="#contact"
                        className="navbar__mobile-cta"
                        onClick={closeMenu}
                    >
                        Hablemos
                    </a>

                </div>

            </nav>

        </header>
    )
}

export default Navbar