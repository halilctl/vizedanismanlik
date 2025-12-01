/**
 * Base URL helper - GitHub Pages ve Custom Domain desteği
 * 
 * GitHub Pages: /vizedanismanlik/
 * Custom Domain (www.vizerotasi.com): /
 * 
 * Bu helper runtime'da hostname kontrolü yaparak doğru base URL'i döndürür.
 */

/**
 * Base URL'i döndürür
 * @returns {string} Base URL path (örn: '/' veya '/vizedanismanlik/')
 */
export const getBaseUrl = () => {
  // Runtime'da hostname kontrolü (browser ortamında)
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    
    // Custom domain kontrolü (github.io içermiyorsa custom domain)
    // www.vizerotasi.com veya vizerotasi.com için '/' döndür
    if (hostname && !hostname.includes('github.io')) {
      return '/'
    }
  }
  
  // Build-time base URL (vite.config.js'den gelir)
  // Bu değer import.meta.env.BASE_URL ile set edilir
  // GitHub Pages için: /vizedanismanlik/
  // Custom domain build için: /
  return import.meta.env.BASE_URL || '/'
}

/**
 * Asset path'ini base URL ile birleştirir
 * @param {string} path - Asset path (örn: '3d_model.glb' veya '/3d_model.glb')
 * @returns {string} Tam asset path
 */
export const getAssetPath = (path) => {
  const baseUrl = getBaseUrl()
  
  // Base URL'i temizle (sondaki / varsa kaldır)
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  
  // Path zaten / ile başlıyorsa direkt ekle
  if (path.startsWith('/')) {
    return `${cleanBaseUrl}${path}`
  }
  
  // Path / ile başlamıyorsa / ekle
  return `${cleanBaseUrl}/${path}`
}

/**
 * Custom domain kontrolü
 * @returns {boolean} Custom domain kullanılıyor mu?
 */
export const isCustomDomain = () => {
  if (typeof window === 'undefined') return false
  const hostname = window.location.hostname
  return hostname && !hostname.includes('github.io')
}

