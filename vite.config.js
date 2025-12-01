import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages için repo adını buraya yazın
// Repo: halilctl/vizedanismanlik
// Site: https://halilctl.github.io/vizedanismanlik/ adresinde olacak
// Custom domain: www.vizerotasi.com
const REPO_NAME = 'vizedanismanlik'

// Custom domain için build kontrolü
// VITE_USE_CUSTOM_DOMAIN=true olduğunda base path '/' olur
const USE_CUSTOM_DOMAIN = process.env.VITE_USE_CUSTOM_DOMAIN === 'true'

export default defineConfig({
  plugins: [react()],
  // Base path yönetimi:
  // - Custom domain build: '/' (www.vizerotasi.com için)
  // - GitHub Pages build: '/vizedanismanlik/' (halilctl.github.io/vizedanismanlik için)
  // - Development: '/'
  base: USE_CUSTOM_DOMAIN 
    ? '/' 
    : (process.env.NODE_ENV === 'production' && REPO_NAME 
      ? `/${REPO_NAME}/` 
      : '/'),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Source maps production'da kapalı (güvenlik ve performans)
    sourcemap: false,
    // Chunk size uyarı limiti
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Asset dosya isimlerini optimize et
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
})

