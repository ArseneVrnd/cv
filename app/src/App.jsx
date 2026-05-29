import ParticleBackground from './components/Particles.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import FounderTrack from './components/FounderTrack.jsx'
import Research from './components/Research.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import { LanguagesAndCerts, Interests } from './components/Extras.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top" className="min-h-screen text-slate-200 overflow-x-hidden">
      <ParticleBackground />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <FounderTrack />
        <Research />
        <Education />
        <Skills />
        <LanguagesAndCerts />
        <Interests />
      </main>

      <Footer />
    </div>
  )
}
