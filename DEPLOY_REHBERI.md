# 🚀 GitHub Pages Deploy Rehberi

## ✅ Build Kontrolü

`npm run build:custom` komutunu çalıştırdıktan sonra:

1. **dist klasörünü kontrol edin:**
   ```bash
   # Windows PowerShell
   dir dist
   
   # Veya Git Bash
   ls -la dist
   ```

2. **Kontrol edilmesi gerekenler:**
   - ✅ `dist/index.html` dosyası var mı?
   - ✅ `dist/assets/` klasörü var mı? (CSS ve JS dosyaları)
   - ✅ `dist/CNAME` dosyası var mı? (www.vizerotasi.com içermeli)
   - ✅ `dist/3d_model.glb` dosyası var mı?

---

## 🎯 YÖNTEM 1: GitHub Actions ile Otomatik Deploy (ÖNERİLEN)

Bu yöntem en kolay ve güvenilir olanıdır. `main` branch'e push yaptığınızda otomatik olarak deploy edilir.

### Adımlar:

#### 1. Değişiklikleri Git'e ekleyin:
```bash
# Tüm değişiklikleri ekle
git add .

# Commit yap
git commit -m "Custom domain için build hazırlandı"

# Main branch'e push yap
git push origin main
```

#### 2. GitHub Actions'ı kontrol edin:
- GitHub repository'nize gidin: `https://github.com/halilctl/vizedanismanlik`
- **Actions** sekmesine tıklayın
- Workflow'un çalıştığını göreceksiniz
- Yeşil tik göründüğünde deploy tamamlanmış demektir (2-3 dakika sürebilir)

#### 3. GitHub Pages ayarlarını kontrol edin:
- Repository'de **Settings** > **Pages** bölümüne gidin
- **Source**: "GitHub Actions" seçili olmalı
- **Custom domain**: `www.vizerotasi.com` yazılı olmalı
- ✅ **Enforce HTTPS** seçeneği aktif olmalı

#### 4. Siteyi test edin:
- 5-10 dakika bekleyin (DNS propagation için)
- `https://www.vizerotasi.com` adresini açın
- Site çalışıyorsa başarılı! 🎉

---

## 🛠️ YÖNTEM 2: Manuel Deploy (gh-pages ile)

Eğer GitHub Actions kullanmak istemiyorsanız, manuel olarak deploy edebilirsiniz.

### Ön Hazırlık:

#### 1. Git authentication kontrolü:
```bash
# Git kullanıcı adınızı kontrol edin
git config user.name

# Git email'inizi kontrol edin
git config user.email
```

#### 2. GitHub Personal Access Token (PAT) gerekli:
- GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
- **Generate new token (classic)** tıklayın
- **repo** scope'unu seçin
- Token'ı kopyalayın (bir daha gösterilmeyecek!)

#### 3. Token'ı environment variable olarak ayarlayın:
```powershell
# Windows PowerShell
$env:GITHUB_TOKEN = "ghp_your_token_here"
```

### Deploy Komutu:

```bash
# Tek komutla build + deploy
npm run deploy:custom
```

**VEYA** build zaten yaptıysanız:

```bash
# Sadece deploy
npx gh-pages -d dist
```

### Deploy Sonrası:

1. **gh-pages branch'ini kontrol edin:**
   - GitHub repository'de **gh-pages** branch'ini kontrol edin
   - `dist/` içeriği bu branch'te olmalı

2. **GitHub Pages ayarlarını yapın:**
   - Repository > Settings > Pages
   - **Source**: "Deploy from a branch" seçin
   - **Branch**: `gh-pages` / `/ (root)` seçin
   - **Custom domain**: `www.vizerotasi.com` yazın
   - ✅ **Enforce HTTPS** aktif edin

3. **CNAME dosyasını kontrol edin:**
   - `gh-pages` branch'inde `CNAME` dosyası olmalı
   - İçeriği: `www.vizerotasi.com`

---

## 🔍 Sorun Giderme

### Build başarısız oluyor:
```bash
# Node modules'ı temizle ve yeniden yükle
rm -rf node_modules package-lock.json
npm install
npm run build:custom
```

### Deploy başarısız oluyor:
```bash
# Git remote'u kontrol et
git remote -v

# GitHub token'ı kontrol et (Windows PowerShell)
echo $env:GITHUB_TOKEN

# gh-pages'i global yükle (opsiyonel)
npm install -g gh-pages
```

### Site beyaz sayfa gösteriyor:
1. **Browser Console'u açın** (F12)
2. **Network tab**'ı kontrol edin
3. **404 hatalarını** kontrol edin
4. **Base path**'i kontrol edin:
   ```javascript
   console.log('Base URL:', import.meta.env.BASE_URL)
   ```

### CNAME dosyası kayboldu:
```bash
# public/CNAME dosyasını kontrol edin
cat public/CNAME

# Eğer yoksa oluşturun
echo "www.vizerotasi.com" > public/CNAME

# Yeniden build alın
npm run build:custom
```

---

## 📋 Hızlı Kontrol Listesi

Deploy öncesi:
- [ ] `npm run build:custom` başarılı oldu
- [ ] `dist/` klasöründe dosyalar var
- [ ] `dist/CNAME` dosyası `www.vizerotasi.com` içeriyor
- [ ] Git commit yapıldı
- [ ] GitHub repository'ye push yapıldı

Deploy sonrası:
- [ ] GitHub Actions workflow başarılı (veya gh-pages branch oluştu)
- [ ] GitHub Pages Settings'te custom domain ayarlı
- [ ] HTTPS aktif
- [ ] Site açılıyor (5-10 dakika bekleyin)
- [ ] Console'da hata yok

---

## 🎯 Önerilen Yöntem

**GitHub Actions (Yöntem 1)** kullanmanızı öneriyorum çünkü:
- ✅ Otomatik deploy
- ✅ Her push'ta güncellenir
- ✅ Daha güvenilir
- ✅ Daha az manuel işlem

Sadece ilk kurulumda GitHub Pages ayarlarını yapmanız yeterli!

