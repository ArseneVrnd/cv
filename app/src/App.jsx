import ParticleBackground from './components/Particles.jsx'
import LangToggle from './components/LangToggle.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import FounderTrack from './components/FounderTrack.jsx'
import Research from './components/Research.jsx'
import { useLang } from './i18n/LanguageContext.jsx'

export default function App() {
  const { t } = useLang()
  return (
    <div className="min-h-screen text-slate-200 overflow-x-hidden">
      <ParticleBackground />
      <LangToggle />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <FounderTrack />
        <Research />
      </main>

      <footer className="relative z-10 py-10 text-center text-slate-500 text-sm">
        © 2026 Arsène Vuarand. {t('footer.built')}
      </footer>
    </div>
  )
}
