import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages için repo adını buraya yazın
// Repo: halilctl/vizedanismanlik
// Site: https://halilctl.github.io/vizedanismanlik/ adresinde olacak
// Custom domain: www.vizerotasi.com
const REPO_NAME = 'vizedanismanlik'

export default defineConfig({
  plugins: [
    react(),
    // HTML transform plugin - custom domain için path düzeltmesi
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        // Runtime'da custom domain kontrolü için script ekle
        const customDomainScript = `
  <script>
    // Custom domain için base path düzeltmesi
    (function() {
      const hostname = window.location.hostname;
      const isCustomDomain = hostname && !hostname.includes('github.io');
      const basePath = '/${REPO_NAME}/';
      
      if (isCustomDomain) {
        // URL path'ini düzelt
        const currentPath = window.location.pathname;
        if (currentPath.startsWith(basePath)) {
          const newPath = currentPath.replace(basePath, '/');
          if (newPath !== currentPath && newPath !== currentPath + '/') {
            window.history.replaceState({}, '', newPath);
          }
        }
        
        // Sayfa yüklendikten sonra script ve link path'lerini düzelt
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', fixPaths);
        } else {
          fixPaths();
        }
        
        function fixPaths() {
          // Script tag'lerini düzelt
          document.querySelectorAll('script[src]').forEach(function(script) {
            if (script.src.includes(basePath)) {
              script.src = script.src.replace(basePath, '/');
            }
          });
          
          // Link tag'lerini düzelt
          document.querySelectorAll('link[href]').forEach(function(link) {
            if (link.href.includes(basePath)) {
              link.href = link.href.replace(basePath, '/');
            }
          });
          
          // Module preload'ları düzelt
          document.querySelectorAll('link[rel="modulepreload"]').forEach(function(link) {
            if (link.href.includes(basePath)) {
              link.href = link.href.replace(basePath, '/');
            }
          });
        }
      }
    })();
  </script>`
        
        // </head> tag'inden önce script'i ekle
        return html.replace('</head>', customDomainScript + '\n</head>')
      }
    }
  ],
  // Base path: GitHub Pages için /vizedanismanlik/
  // Custom domain için runtime'da '/' olacak (yukarıdaki script ile)
  base: process.env.NODE_ENV === 'production' 
    ? (REPO_NAME ? `/${REPO_NAME}/` : '/')
    : '/',
})

