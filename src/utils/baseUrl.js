/**
 * Base URL helper - GitHub Pages ve Custom Domain desteği
 * 
 * GitHub Pages: /vizedanismanlik/
 * Custom Domain: /
 */

export const getBaseUrl = () => {
  // Runtime'da hostname kontrolü
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    
    // Custom domain kontrolü (github.io içermiyorsa custom domain)
    if (hostname && !hostname.includes('github.io')) {
      return '/'
    }
  }
  
  // Build-time base URL (vite.config.js'den gelir)
  // GitHub Pages için: /vizedanismanlik/
  // Custom domain için: /
  return import.meta.env.BASE_URL || '/'
}

export const getAssetPath = (path) => {
  const baseUrl = getBaseUrl()
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  
  // Path zaten / ile başlıyorsa direkt ekle
  if (path.startsWith('/')) {
    return `${cleanBaseUrl}${path}`
  }
  
  // Path / ile başlamıyorsa / ekle
  return `${cleanBaseUrl}/${path}`
}

