import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  const { t, pick } = useLang()
  return (
    <Section id="experience" title={t('section.experience')}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.1 }}
        className="space-y-6"
      >
        {experience.map((job, i) => (
          <motion.article key={i} variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8 group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{pick(job.role)}</h3>
                <p className="text-blue-400 text-sm mt-0.5">
                  {pick(job.company)}
                  <span className="text-slate-500"> · {pick(job.location)}</span>
                </p>
              </div>
              <div className="flex flex-col md:items-end gap-2 shrink-0">
                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded self-start md:self-end">
                  {job.period}
                </span>
                {job.impact && (
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded self-start md:self-end">
                    {pick(job.impact)}
                  </span>
                )}
              </div>
            </div>

            <ul className="space-y-2 mt-4">
              {job.points.map((pt, j) => (
                <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                  <span className="text-blue-500 mt-1.5 shrink-0">▸</span>
                  <span>{pick(pt)}</span>
                </li>
              ))}
            </ul>

            {job.stack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {job.stack.map((s) => (
                  <span key={s} className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
