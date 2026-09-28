import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Repo name for GitHub Pages project site (https://<user>.github.io/<repo>/).
// Change REPO_NAME below if your GitHub repository has a different name.
// If deploying to a custom domain or a <user>.github.io user/org page, set base to '/'.
const REPO_NAME = 'nicy-collection'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? `/${REPO_NAME}/` : '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
}))
