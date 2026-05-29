// Post-build: remove stale hashed assets at the repo root that the freshly
// generated index.html no longer references. Runs after `vite build`.
import { readFileSync, readdirSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'

const repoRoot = resolve(import.meta.dirname, '..', '..')
const assetsDir = join(repoRoot, 'assets')
const html = readFileSync(join(repoRoot, 'index.html'), 'utf8')

const referenced = new Set([...html.matchAll(/assets\/([^"']+\.(?:js|css))/g)].map((m) => m[1]))

for (const file of readdirSync(assetsDir)) {
  if (!referenced.has(file)) {
    rmSync(join(assetsDir, file))
    console.log('removed stale asset:', file)
  }
}
