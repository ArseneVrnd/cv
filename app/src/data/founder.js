// Founder Track / Side Projects — highlighted section. Bilingual FR/EN.
export const founderProjects = [
  {
    name: 'CoachGPT.fit',
    href: 'https://coachgpt.fit',
    role: { en: 'Solo Founder & Builder', fr: 'Solo Founder & Builder' },
    period: '2024 – present',
    badge: { en: 'AI Fitness SaaS', fr: 'SaaS Fitness IA' },
    featured: true,
    tagline: {
      en: 'AI-powered fitness coaching SaaS — macro-aware meal & workout programming.',
      fr: 'SaaS de coaching fitness IA — programmation repas & entraînement pilotée par les macros.',
    },
    points: [
      {
        en: 'Solo-founded AI fitness coaching SaaS ($10.99/mo) targeting the French consumer market; subject of my Master’s thesis on AI value-creation levers.',
        fr: 'SaaS de coaching fitness IA solo-fondé (10,99 $/mois) ciblant le marché grand public français ; sujet de ma thèse de Master sur les leviers de création de valeur de l’IA.',
      },
      {
        en: 'Proprietary macro-matching algorithm (95%+ accuracy) with deliberate AI-cost optimization sustaining ~90% gross margins.',
        fr: 'Algorithme propriétaire de macro-matching (95%+ de précision) avec optimisation délibérée des coûts IA maintenant ~90% de marge brute.',
      },
      {
        en: 'End-to-end marketing operations: brand identity and design system from scratch, landing page, acquisition funnel, pricing & packaging, and an internal analytics cockpit (channel attribution, cohort retention, CAC/LTV/MRR).',
        fr: 'Opérations marketing de bout en bout : identité de marque et design system from scratch, landing page, funnel d’acquisition, pricing & packaging, et cockpit analytics interne (attribution par canal, rétention par cohorte, CAC/LTV/MRR).',
      },
    ],
    stack: ['Next.js 15', 'NestJS', 'GraphQL', 'PostgreSQL', 'Supabase Auth', 'Stripe', 'Claude Haiku'],
    highlight: { value: '~90%', label: { en: 'Gross margin', fr: 'Marge brute' } },
  },
  {
    name: 'CompCard.app',
    href: 'https://compcard.app',
    role: { en: 'Founder & Builder', fr: 'Founder & Builder' },
    period: '2025 – present',
    badge: { en: 'SaaS for Models', fr: 'SaaS pour mannequins' },
    featured: true,
    tagline: {
      en: 'Auto-generates professional comp cards from a model’s photo library.',
      fr: 'Génère automatiquement des comp cards professionnelles à partir de la photothèque d’un mannequin.',
    },
    points: [
      {
        en: 'Designed a fully deterministic chromatic-selection pipeline: K-Means++ palette extraction, Matsuda harmony scoring and DPP (Determinantal Point Process) subset selection — formal mathematical specification reviewed by a PhD collaborator.',
        fr: 'Conception d’un pipeline de sélection chromatique entièrement déterministe : extraction de palette K-Means++, scoring d’harmonie Matsuda et sélection de sous-ensemble par DPP (Determinantal Point Process) — spécification mathématique formelle relue par un collaborateur docteur (PhD).',
      },
      {
        en: 'Authored the full agent-side UX specification (swipe-based discovery, saved-search alerts, comparison & shortlist sharing).',
        fr: 'Rédaction de la spécification UX complète côté agences (découverte par swipe, alertes de recherches sauvegardées, comparaison & partage de shortlist).',
      },
    ],
    stack: ['Turborepo', 'Next.js', 'Expo (RN)', 'Hono.js', 'Drizzle ORM', 'Meilisearch', 'Stripe Connect', 'Cloudflare R2'],
    highlight: { value: 'DPP', label: { en: 'Deterministic pipeline', fr: 'Pipeline déterministe' } },
  },
  {
    name: 'VoxPi',
    role: { en: 'Open-Source Voice Agent OS', fr: 'OS d’agent vocal open-source' },
    period: '2026',
    badge: { en: 'Open Source', fr: 'Open Source' },
    featured: false,
    tagline: {
      en: 'Raspberry Pi 5 voice agent — a privacy-first Alexa alternative.',
      fr: 'Agent vocal Raspberry Pi 5 — alternative à Alexa, privacy-first.',
    },
    points: [
      {
        en: 'Async Python pipeline: OpenWakeWord → faster-whisper STT → Ollama / Claude API (hybrid routing) → Piper TTS.',
        fr: 'Pipeline Python asynchrone : OpenWakeWord → STT faster-whisper → Ollama / Claude API (routage hybride) → TTS Piper.',
      },
      {
        en: 'Hybrid AI routing — simple queries stay local for privacy, complex ones hit the Claude API. ~€120 BOM, full systemd installer, web config dashboard, YAML-driven config.',
        fr: 'Routage IA hybride — les requêtes simples restent locales (confidentialité), les complexes appellent l’API Claude. BOM ~120 €, installeur systemd complet, dashboard de configuration web, config pilotée par YAML.',
      },
    ],
    stack: ['Python (async)', 'OpenWakeWord', 'faster-whisper', 'Ollama', 'Claude API', 'Piper TTS', 'systemd'],
    highlight: { value: '€120', label: { en: 'Full BOM', fr: 'BOM complet' } },
  },
  {
    name: 'TheWatch',
    role: { en: 'Resale Market Analytics', fr: 'Analytics du marché de la revente' },
    period: '2024',
    badge: { en: 'Data Tool', fr: 'Outil data' },
    featured: false,
    tagline: {
      en: 'Async scraper + REST API for streetwear / sneaker resale market analytics.',
      fr: 'Scraper asynchrone + API REST pour l’analytics du marché de la revente streetwear / sneakers.',
    },
    points: [
      {
        en: 'Sales tracking, price trends and designer-level statistics (Grailed-based).',
        fr: 'Suivi des ventes, tendances de prix et statistiques par créateur (basé sur Grailed).',
      },
    ],
    stack: ['FastAPI', 'aiohttp', 'BeautifulSoup', 'SQLModel', 'pandas'],
    highlight: null,
  },
]
