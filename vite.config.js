import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages için repo adını buraya yazın
// Repo: halilctl/vizedanismanlik
// Site: https://halilctl.github.io/vizedanismanlik/ adresinde olacak
// Eğer custom domain kullanıyorsanız veya root repository (halilctl.github.io) ise '/' yapın
const REPO_NAME = 'vizedanismanlik'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? (REPO_NAME ? `/${REPO_NAME}/` : '/')
    : '/',
})

