import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { research } from '../data/research.js'

export default function Research() {
  const { t, pick } = useLang()
  return (
    <Section id="research" title={t('section.research')}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.1 }}
        className="grid sm:grid-cols-2 gap-5"
      >
        {research.map((r, i) => (
          <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-6 flex gap-4">
            <span className="text-blue-500 text-xl shrink-0 leading-none mt-0.5">◆</span>
            <div>
              <h3 className="text-white font-semibold mb-1">{pick(r.title)}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pick(r.body)}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
