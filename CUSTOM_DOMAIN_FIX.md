# Custom Domain Sorunu ve Çözümü

## Sorun
Custom domain (www.vizerotasi.com) kullanıldığında site beyaz gözüküyor.

## Sebep
Vite build sırasında base path `/vizedanismanlik/` olarak ayarlanıyor. Custom domain kullanıldığında base path `/` olmalı.

## Çözüm

### 1. Runtime Base URL Kontrolü
`src/utils/baseUrl.js` dosyası eklendi. Bu dosya:
- Runtime'da `window.location.hostname` kontrolü yapar
- Eğer hostname `github.io` içermiyorsa (custom domain), base URL'i `/` yapar
- GitHub Pages için base URL'i `/vizedanismanlik/` olarak kullanır

### 2. Model Path Düzeltmesi
`ModelViewer.jsx` artık `getAssetPath()` helper'ını kullanıyor:
- Otomatik olarak doğru base URL'i belirler
- Custom domain ve GitHub Pages için çalışır

### 3. Build Stratejisi
**Tek build ile her iki domain çalışır:**
- Build: `npm run build` (base path: `/vizedanismanlik/`)
- Runtime'da hostname kontrolü ile custom domain için base path `/` olur
- GitHub Pages için base path `/vizedanismanlik/` kalır

## Test

### GitHub Pages
```
https://halilctl.github.io/vizedanismanlik/
```
✅ Çalışmalı

### Custom Domain
```
https://www.vizerotasi.com
```
✅ Çalışmalı

## Notlar

1. **Tek Build Yeterli**: İki farklı build yapmanıza gerek yok
2. **Runtime Kontrolü**: Base URL runtime'da belirleniyor
3. **Asset Path'leri**: Tüm asset path'leri `getAssetPath()` ile oluşturulmalı

## Sorun Devam Ederse

1. Browser console'da hataları kontrol edin
2. Network tab'da 404 hatalarını kontrol edin
3. Base URL'in doğru olduğundan emin olun:
   ```javascript
   console.log(import.meta.env.BASE_URL)
   console.log(window.location.hostname)
   ```

