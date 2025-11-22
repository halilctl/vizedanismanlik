# GitHub Pages Deployment Guide

Bu projeyi GitHub Pages'te yayınlamak için iki yöntem kullanabilirsiniz:

**Repository:** `halilctl/vizedanismanlik`  
**Site URL:** `https://halilctl.github.io/vizedanismanlik/`

## Yöntem 1: GitHub Actions (Önerilen - Otomatik)

Bu yöntem otomatik olarak her push'ta siteyi günceller.

### Adımlar:

1. **GitHub'da repository'ye bağlayın**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Visa consulting website"
   git branch -M main
   git remote add origin https://github.com/halilctl/vizedanismanlik.git
   git push -u origin main
   ```

2. **GitHub Repository Settings'e gidin:**
   - Settings > Pages
   - Source: "GitHub Actions" seçin
   - Save

3. **Kod değişikliklerini push edin:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push
   ```

4. **Actions sekmesinden deployment'ı kontrol edin**
   - GitHub Actions otomatik olarak build ve deploy yapacak
   - Birkaç dakika sonra site yayında olacak

## Yöntem 2: Manuel Deploy (gh-pages)

### Adımlar:

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Deploy edin:**
   ```bash
   npm run deploy
   ```

3. **GitHub Repository Settings'e gidin:**
   - Settings > Pages
   - Source: "gh-pages branch" seçin
   - Save

## Önemli Notlar:

### Repo Adı
Repo adı `vizedanismanlik` olarak yapılandırılmıştır. `vite.config.js` dosyasında:
```javascript
const REPO_NAME = 'vizedanismanlik'
```

### Custom Domain
Eğer custom domain kullanıyorsanız, `vite.config.js`'de base path'i `/` olarak değiştirin:

```javascript
base: '/',
```

### Root Repository Deploy
Eğer repository adı `KULLANICI_ADI.github.io` formatındaysa (root repository), base path'i `/` yapın.

## Site URL'i

Deploy sonrası siteniz şu adreste olacak:
- `https://halilctl.github.io/vizedanismanlik/`

## Sorun Giderme

### 404 Hatası
- `vite.config.js`'deki `repoName` değerini kontrol edin
- GitHub Pages settings'te doğru branch seçildiğinden emin olun

### Build Hatası
- `npm install` komutunu çalıştırın
- Node.js versiyonunuz 18+ olduğundan emin olun

### Assets Yüklenmiyor
- Base path'in doğru olduğundan emin olun
- Browser console'da hataları kontrol edin

