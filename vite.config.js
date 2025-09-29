import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Preserve the original structure for static assets
    rollupOptions: {
      input: {
        main: './src/index.html'
      }
    }
  },
  // Preserve existing assets and game directory
  publicDir: 'public'
})