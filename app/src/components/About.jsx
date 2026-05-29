import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { about } from '../data/about.js'

export default function About() {
  const { t, pick } = useLang()
  return (
    <Section id="about" title={t('section.about')}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.12 }}
        className="grid md:grid-cols-3 gap-8 items-start"
      >
        <motion.div variants={fadeUp} className="md:col-span-2 space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-300 leading-relaxed">
              {pick(p)}
            </p>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
          {about.highlights.map((h, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{h.value}</div>
              <div className="text-xs text-slate-400 mt-1">{pick(h.label)}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
