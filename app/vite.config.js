import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Source lives in /app ; the production build is emitted to the repo root
// (index.html + assets/) so GitHub Pages keeps serving from the gh-pages root.
export default defineConfig({
  base: '/cv/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '..',
    emptyOutDir: false,
    assetsDir: 'assets',
  },
})
