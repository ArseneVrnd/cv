import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { founderProjects } from '../data/founder.js'

function ProjectCard({ project }) {
  const { pick } = useLang()
  const TitleTag = project.href ? 'a' : 'span'
  const titleProps = project.href
    ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.article
      variants={fadeUp}
      className={`glass-card rounded-2xl p-6 md:p-7 h-full flex flex-col ${
        project.featured ? 'ring-1 ring-blue-500/30' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <TitleTag
          {...titleProps}
          className={`text-xl font-bold ${
            project.href
              ? 'text-gradient hover:opacity-80 transition-opacity'
              : 'text-white'
          }`}
        >
          {project.name}
        </TitleTag>
        <span className="text-[10px] font-mono uppercase tracking-wide text-blue-300 bg-blue-500/10 px-2 py-1 rounded shrink-0">
          {pick(project.badge)}
        </span>
      </div>

      <p className="text-blue-400 text-xs font-mono mb-1">
        {pick(project.role)} · {project.period}
      </p>
      <p className="text-slate-300 text-sm font-medium mb-4">{pick(project.tagline)}</p>

      <ul className="space-y-2 mb-5">
        {project.points.map((pt, j) => (
          <li key={j} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
            <span className="text-blue-500 mt-1.5 shrink-0">▸</span>
            <span>{pick(pt)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        {project.highlight && (
          <div className="mb-4 inline-flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gradient">{project.highlight.value}</span>
            <span className="text-xs text-slate-400">{pick(project.highlight.label)}</span>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function FounderTrack() {
  const { t } = useLang()
  return (
    <Section id="founder" title={t('section.founder')}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {founderProjects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </motion.div>
    </Section>
  )
}
