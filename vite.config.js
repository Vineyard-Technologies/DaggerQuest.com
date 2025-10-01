import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    // Enable Terser for advanced minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific console methods
        passes: 2 // Run compression twice for better results
      },
      mangle: {
        safari10: true // Fix Safari 10 compatibility
      },
      format: {
        comments: false // Remove all comments
      }
    },
    // Additional build optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          news: ['./src/data/newsData.js'],
          utils: ['./src/hooks/useScrollAnimation.js']
        }
      }
    }
  },
  // Preserve existing assets and game directory (public/ folder is never processed by Vite)
  publicDir: 'public'
})