import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Plugin to copy news folder to output
function copyNewsFolder() {
  return {
    name: 'copy-news-folder',
    writeBundle() {
      const sourceDir = 'news'
      const targetDir = 'docs/news'
      
      // Create target directory if it doesn't exist
      if (!existsSync(targetDir)) {
        mkdirSync(targetDir, { recursive: true })
      }
      
      // Copy all files from news folder
      const files = readdirSync(sourceDir)
      files.forEach(file => {
        const sourcePath = join(sourceDir, file)
        const targetPath = join(targetDir, file)
        
        if (statSync(sourcePath).isFile()) {
          copyFileSync(sourcePath, targetPath)
          console.log(`Copied ${sourcePath} to ${targetPath}`)
        }
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), copyNewsFolder()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  },
  // Preserve existing assets and game directory
  publicDir: 'public'
})