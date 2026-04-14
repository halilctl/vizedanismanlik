# Custom Domain Kurulum Rehberi

## Sorun
Custom domain (www.vizerotasi.com) kullanıldığında site beyaz gözüküyor.

## Çözüm

### Yöntem 1: Custom Domain için Ayrı Build (Önerilen)

Custom domain için özel build alın:

```bash
npm run build:custom
```

Bu komut `VITE_USE_CUSTOM_DOMAIN=true` ile build alır ve base path'i `/` yapar.

**Deploy:**
```bash
npm run deploy:custom
```

### Yöntem 2: Tek Build (Runtime Kontrolü)

Normal build alın (base path: `/vizedanismanlik/`):

```bash
npm run build
```

Runtime'da `src/utils/baseUrl.js` dosyası hostname kontrolü yaparak:
- `github.io` içeriyorsa → base URL: `/vizedanismanlik/`
- Custom domain ise → base URL: `/`

**Not:** Bu yöntem çoğu durumda çalışır, ancak bazı asset'ler için sorun olabilir.

## GitHub Pages Ayarları

1. **Settings > Pages** bölümüne gidin
2. **Custom domain** alanına `www.vizerotasi.com` yazın
3. **Enforce HTTPS** seçeneğini aktif edin

## DNS Ayarları

DNS kayıtlarınız şu şekilde olmalı:

```
Type: CNAME
Name: www
Value: halilctl.github.io
```

veya

```
Type: A
Name: @
Value: GitHub Pages IP adresleri (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
```

## Test

### GitHub Pages
```
https://halilctl.github.io/vizedanismanlik/
```

### Custom Domain
```
https://www.vizerotasi.com
```

## Sorun Giderme

### Site hala beyaz gözüküyor

1. **Browser Console kontrolü:**
   - F12 > Console
   - 404 veya CORS hatalarını kontrol edin

2. **Network Tab kontrolü:**
   - F12 > Network
   - Hangi dosyalar yüklenemiyor?
   - Script ve CSS dosyalarının path'lerini kontrol edin

3. **Base URL kontrolü:**
   ```javascript
   console.log('Base URL:', import.meta.env.BASE_URL)
   console.log('Hostname:', window.location.hostname)
   ```

4. **Cache temizleme:**
   - Hard refresh: Ctrl+Shift+R (Windows) veya Cmd+Shift+R (Mac)
   - Browser cache'i temizleyin

### Model yüklenmiyor

1. Model dosyasının `public/3d_model.glb` konumunda olduğundan emin olun
2. Browser console'da model path'ini kontrol edin
3. Network tab'da model dosyasının yüklenip yüklenmediğini kontrol edin

## Önerilen Yaklaşım

**Her iki domain için ayrı build:**

1. **GitHub Pages için:**
   ```bash
   npm run build
   npm run deploy
   ```

2. **Custom domain için:**
   ```bash
   npm run build:custom
   # Sonra dist klasörünü custom domain'e deploy edin
   ```

Veya GitHub Actions workflow'unu güncelleyerek her iki domain için otomatik deploy yapabilirsiniz.

