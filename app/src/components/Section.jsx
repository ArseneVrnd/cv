import { motion } from 'framer-motion'

// Shared section shell: animated heading with the original gradient rule.
export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`relative z-10 py-20 px-6 scroll-mt-20 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/60 to-transparent" />
        </motion.div>
        {children}
      </div>
    </section>
  )
}

// Standard fade-in-up variant reused across cards.
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
