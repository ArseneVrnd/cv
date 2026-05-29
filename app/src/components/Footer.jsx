import { useLang } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer id="contact" className="relative z-10 py-12 px-6 text-center scroll-mt-20">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <a
          href="/cv/CV_Arsene_Vuarand.pdf"
          download
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium text-white transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
        >
          {t('hero.cta.cv')}
        </a>
        <a
          href="https://github.com/ArseneVrnd"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 glass-card rounded-xl text-sm font-medium text-white transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
        >
          {t('hero.cta.github')}
        </a>
      </div>
      <p className="text-slate-500 text-sm">© 2026 Arsène Vuarand. {t('footer.built')}</p>
    </footer>
  )
}
