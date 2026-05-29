import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import LangToggle from './LangToggle.jsx'

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'founder', key: 'nav.founder' },
  { id: 'research', key: 'nav.research' },
  { id: 'education', key: 'nav.education' },
  { id: 'skills', key: 'nav.skills' },
]

export default function Nav() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="glass-card border-x-0 border-t-0 px-5 py-3 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold text-white" aria-label="Arsène Vuarand — top">
          AV<span className="text-gradient">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle />
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 -mr-2 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none rounded"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-5 h-0.5 bg-white mb-1.5" />
            <span className="block w-5 h-0.5 bg-white mb-1.5" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      {open && (
        <ul className="md:hidden glass-card border-x-0 border-t-0 px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block text-slate-200 hover:text-white transition-colors"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
