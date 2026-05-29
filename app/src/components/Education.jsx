import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { education } from '../data/education.js'

export default function Education() {
  const { t, pick } = useLang()
  return (
    <Section id="education" title={t('section.education')}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.1 }}
        className="space-y-6"
      >
        {education.map((ed, i) => (
          <motion.article key={i} variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-7">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-semibold text-white">{pick(ed.degree)}</h3>
                <p className="text-blue-400 text-sm mt-0.5">{ed.school}</p>
              </div>
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded self-start shrink-0">
                {ed.period}
              </span>
            </div>

            {ed.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 my-3">
                {ed.badges.map((b) => (
                  <span key={b} className="text-[10px] font-mono uppercase tracking-wide text-purple-300 bg-purple-500/10 px-2 py-1 rounded">
                    {b}
                  </span>
                ))}
              </div>
            )}

            {ed.details.length > 0 && (
              <ul className="space-y-2 mt-3">
                {ed.details.map((d, j) => (
                  <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="text-blue-500 mt-1.5 shrink-0">▸</span>
                    <span>{pick(d)}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
