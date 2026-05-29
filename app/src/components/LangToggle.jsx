import { useLang } from '../i18n/LanguageContext.jsx'

// Fixed FR/EN switch in the top-right corner.
export default function LangToggle() {
  const { lang, toggle, t } = useLang()
  return (
    <button
      onClick={toggle}
      aria-label={t('lang.aria')}
      className="fixed top-5 right-5 z-50 glass-card rounded-full px-4 py-2 text-sm font-mono font-semibold text-white hover:scale-105"
    >
      <span className={lang === 'fr' ? 'text-blue-400' : 'text-slate-500'}>FR</span>
      <span className="text-slate-600 mx-1">/</span>
      <span className={lang === 'en' ? 'text-blue-400' : 'text-slate-500'}>EN</span>
    </button>
  )
}
