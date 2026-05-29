import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { languages, certifications, interests } from '../data/extras.js'

export function LanguagesAndCerts() {
  const { t, pick } = useLang()
  return (
    <Section id="extras" title={`${t('section.languages')} · ${t('section.certifications')}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Languages */}
        <motion.div variants={fadeUp} className="space-y-3">
          {languages.map((l, i) => (
            <div key={i} className="glass-card rounded-xl p-4 flex items-center justify-between">
              <span className="font-medium text-white">{pick(l.lang)}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-400">{pick(l.level)}</span>
                <span className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6">
          <ul className="space-y-3">
            {certifications.map((c, i) => (
              <li key={i} className="flex items-center justify-between gap-3 text-sm">
                <span className="flex gap-2.5 text-slate-300">
                  <span className="text-blue-500">▸</span>
                  {pick(c.name)}
                </span>
                {c.status && (
                  <span className="text-[10px] font-mono uppercase tracking-wide text-amber-300 bg-amber-500/10 px-2 py-1 rounded shrink-0">
                    {pick(c.status)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export function Interests() {
  const { t, pick } = useLang()
  return (
    <Section id="interests" title={t('section.interests')}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.06 }}
        className="flex flex-wrap gap-3"
      >
        {interests.map((it, i) => (
          <motion.span
            key={i}
            variants={fadeUp}
            className="glass-card rounded-full px-4 py-2 text-sm text-slate-300"
          >
            {pick(it)}
          </motion.span>
        ))}
      </motion.div>
    </Section>
  )
}
