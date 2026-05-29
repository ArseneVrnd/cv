import { useLang } from '../i18n/LanguageContext.jsx'

// Inline FR/EN switch, placed inside the nav bar.
export default function LangToggle() {
  const { lang, toggle, t } = useLang()
  return (
    <button
      onClick={toggle}
      aria-label={t('lang.aria')}
      className="glass-card rounded-full px-3 py-1.5 text-xs font-mono font-semibold text-white hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
    >
      <span className={lang === 'fr' ? 'text-blue-400' : 'text-slate-500'}>FR</span>
      <span className="text-slate-600 mx-1">/</span>
      <span className={lang === 'en' ? 'text-blue-400' : 'text-slate-500'}>EN</span>
    </button>
  )
}
