import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext.jsx'

const headline = {
  fr: 'Business Analyst & Solo Founder — Data, Commercial Analytics, AI',
  en: 'Business Analyst & Solo Founder — Data, Commercial Analytics, AI',
}

const subline = {
  fr: "Business Analyst chez HP · Solo founder. J'analyse la donnée, je modélise la marge et je construis des produits.",
  en: 'Business Analyst at HP · Solo founder. I analyse data, model margin, and ship products.',
}

export default function Hero() {
  const { pick, t } = useLang()
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-6xl md:text-8xl font-bold leading-tight"
        >
          <span className="text-white">Arsène</span>{' '}
          <span className="text-gradient block">Vuarand</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-lg md:text-2xl text-slate-300"
        >
          <span className="text-white font-medium">{pick(headline)}</span>
          <br />
          <span className="text-slate-400 text-base md:text-lg">{pick(subline)}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/cv/CV_Arsene_Vuarand.pdf"
            download
            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium text-white transition-all hover:scale-105"
          >
            {t('hero.cta.cv')}
          </a>
          <a
            href="https://github.com/ArseneVrnd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass-card rounded-xl font-medium text-white transition-all hover:scale-105"
          >
            {t('hero.cta.github')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
