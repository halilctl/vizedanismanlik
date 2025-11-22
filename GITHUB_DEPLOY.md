# GitHub Pages Deployment - Adım Adım Rehber

**Repository:** `halilctl/vizedanismanlik`  
**Site URL:** `https://halilctl.github.io/vizedanismanlik/`

## 🚀 Hızlı Başlangıç

### 1. Git Kurulumu (Eğer yüklü değilse)

Git yüklü değilse önce yükleyin:
- Windows: https://git-scm.com/download/win
- Kurulumdan sonra terminali yeniden başlatın

### 2. Projeyi GitHub'a Yükleme

Terminal'de (PowerShell veya CMD) şu komutları sırayla çalıştırın:

```bash
# Proje klasörüne gidin
cd C:\Users\youtu\Desktop\hob

# Git repository başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: Visa consulting website"

# Main branch'e geç
git branch -M main

# GitHub repository'ye bağla
git remote add origin https://github.com/halilctl/vizedanismanlik.git

# GitHub'a push et
git push -u origin main
```

**Not:** İlk push'ta GitHub kullanıcı adı ve şifre isteyebilir. Personal Access Token kullanmanız gerekebilir.

### 3. GitHub Pages Ayarları

1. GitHub'da repository'nize gidin: https://github.com/halilctl/vizedanismanlik
2. **Settings** sekmesine tıklayın
3. Sol menüden **Pages** seçeneğine gidin
4. **Source** kısmında **"GitHub Actions"** seçin
5. **Save** butonuna tıklayın

### 4. Otomatik Deploy

Artık her `main` branch'e push yaptığınızda otomatik olarak site deploy edilecek:

```bash
# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Update website"

# Push et (otomatik deploy başlar)
git push
```

### 5. Deployment'ı Kontrol Etme

1. GitHub'da repository'nize gidin
2. **Actions** sekmesine tıklayın
3. Deployment işlemini görebilirsiniz
4. Birkaç dakika sonra site yayında olacak: `https://halilctl.github.io/vizedanismanlik/`

## 📝 Manuel Deploy (Alternatif)

Eğer GitHub Actions kullanmak istemiyorsanız:

```bash
# Bağımlılıkları yükle (eğer yapmadıysanız)
npm install

# Deploy et
npm run deploy
```

Sonra GitHub'da Settings > Pages > Source: "gh-pages branch" seçin.

## ✅ Yapılandırma Kontrolü

`vite.config.js` dosyasında repo adı doğru ayarlanmış:
```javascript
const REPO_NAME = 'vizedanismanlik'
```

## 🔗 Site URL'i

Deploy sonrası siteniz şu adreste olacak:
- **https://halilctl.github.io/vizedanismanlik/**

## ⚠️ Sorun Giderme

### Git komutları çalışmıyor
- Git'in yüklü olduğundan emin olun
- Terminal'i yeniden başlatın
- PATH değişkenini kontrol edin

### Push hatası alıyorum
- GitHub'da Personal Access Token oluşturun
- Token ile authentication yapın
- Veya SSH key kullanın

### 404 hatası
- `vite.config.js`'deki `REPO_NAME` değerini kontrol edin
- GitHub Pages settings'te doğru source seçildiğinden emin olun
- Birkaç dakika bekleyin (deploy zaman alabilir)

### Assets yüklenmiyor
- Browser console'da hataları kontrol edin
- Base path'in doğru olduğundan emin olun (`/vizedanismanlik/`)
- Hard refresh yapın (Ctrl+F5)

## 📞 Yardım

Sorun yaşarsanız:
1. GitHub Actions loglarını kontrol edin
2. Browser console'da hataları kontrol edin
3. `npm run build` komutunu local'de test edin

