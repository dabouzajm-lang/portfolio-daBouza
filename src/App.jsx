import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Career from './components/Career/Career'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

    return (
        <>
            <Navbar />

            <main>

                <Hero />

                <About />

                <Skills />

                <Projects />

                <Career />

                <Contact />

            </main>

            <Footer />
        </>
    )
}

export default App