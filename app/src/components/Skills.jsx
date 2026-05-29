import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { skills } from '../data/skills.js'

export default function Skills() {
  const { t, pick } = useLang()
  return (
    <Section id="skills" title={t('section.skills')}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.08 }}
        className="grid md:grid-cols-2 gap-5"
      >
        {skills.map((group, i) => (
          <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-blue-400 mb-4">
              {pick(group.category)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="text-xs text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
