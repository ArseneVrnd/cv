import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

// Subtle drifting-particle background, matching the original dark accent theme.
export default function ParticleBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 40, density: { enable: true, area: 900 } },
        color: { value: ['#3b82f6', '#8b5cf6'] },
        links: {
          enable: true,
          distance: 140,
          color: '#3b82f6',
          opacity: 0.12,
          width: 1,
        },
        move: { enable: true, speed: 0.5, outModes: { default: 'out' } },
        opacity: { value: 0.25 },
        size: { value: { min: 1, max: 2.5 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: 'grab' } },
        modes: { grab: { distance: 160, links: { opacity: 0.25 } } },
      },
    }),
    [],
  )

  if (!ready) return null

  return (
    <Particles
      id="particles"
      options={options}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
