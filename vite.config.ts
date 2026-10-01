import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Repo name for GitHub Pages project site (https://<user>.github.io/<repo>/).
// Only relevant if you deploy WITHOUT a custom domain. Not used below since
// USE_CUSTOM_DOMAIN is true, but kept here in case you ever remove the
// custom domain and need to fall back to the github.io project URL.
const REPO_NAME = 'nicy-collection'

// Set to true once you're serving from your own domain (see public/CNAME).
// A custom domain is served from the root, so base must be '/'.
const USE_CUSTOM_DOMAIN = true

export default defineConfig(({ mode }) => ({
  base: USE_CUSTOM_DOMAIN ? '/' : mode === 'production' ? `/${REPO_NAME}/` : '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
}))
