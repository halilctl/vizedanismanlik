# 🔍 SEO Kurulum Rehberi - Google'da Görünürlük

## Sorun
Google aramalarında "vize rotasi" yazdığınızda siteniz çıkmıyor.

## Çözüm Adımları

### ✅ 1. SEO Meta Tags (TAMAMLANDI)
`index.html` dosyasına şu meta tag'ler eklendi:
- ✅ Description (açıklama)
- ✅ Keywords (anahtar kelimeler)
- ✅ Open Graph tags (sosyal medya paylaşımları için)
- ✅ Twitter Card tags
- ✅ Canonical URL

### ✅ 2. robots.txt (TAMAMLANDI)
`public/robots.txt` dosyası oluşturuldu. Google botlarının siteyi taramasına izin veriyor.

### ✅ 3. sitemap.xml (TAMAMLANDI)
`public/sitemap.xml` dosyası oluşturuldu. Google'a sitenizin yapısını gösteriyor.

---

## 🚀 Google Search Console Kurulumu (ÖNEMLİ!)

### Adım 1: Google Search Console'a Kayıt
1. **Google Search Console**'a gidin: https://search.google.com/search-console
2. Google hesabınızla giriş yapın
3. **"Özellik Ekle"** veya **"Add Property"** butonuna tıklayın
4. **"URL öneki"** seçeneğini seçin
5. Site URL'inizi girin: `https://www.vizerotasi.com`
6. **Devam** butonuna tıklayın

### Adım 2: Site Doğrulama
Google size birkaç doğrulama yöntemi sunar. **Önerilen yöntem: HTML Etiketi**

1. **HTML etiketi** yöntemini seçin
2. Google size bir meta tag verecek, örneğin:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ..." />
   ```
3. Bu meta tag'i `index.html` dosyasının `<head>` bölümüne ekleyin
4. Değişiklikleri commit edip push edin
5. Google Search Console'da **"Doğrula"** butonuna tıklayın

**Alternatif Yöntem: DNS Doğrulama**
- Domain sağlayıcınızdan DNS kayıtlarına erişim varsa bu yöntem daha kolay olabilir

### Adım 3: Sitemap Gönderme
1. Google Search Console'da sol menüden **"Sitemaps"** seçin
2. **"Yeni sitemap ekle"** butonuna tıklayın
3. Sitemap URL'ini girin: `https://www.vizerotasi.com/sitemap.xml`
4. **"Gönder"** butonuna tıklayın

### Adım 4: URL İnceleme (Hızlı Indexleme)
1. Google Search Console'da üstteki arama kutusuna site URL'inizi yazın: `https://www.vizerotasi.com`
2. **"URL'yi İncele"** butonuna tıklayın
3. **"Dizine ekleme isteği gönder"** butonuna tıklayın
4. Bu işlem Google'ın sitenizi hızlıca indexlemesini sağlar

---

## 📊 Indexleme Süreci

### Normal Süreç
- **İlk indexleme**: 1-7 gün
- **Arama sonuçlarında görünme**: 1-4 hafta
- **Tam indexleme**: 2-6 hafta

### Hızlandırma İpuçları
1. ✅ **Google Search Console'a kayıt olun** (en önemli!)
2. ✅ **Sitemap gönderin**
3. ✅ **URL İnceleme ile manuel indexleme isteği gönderin**
4. ✅ **Sosyal medyada paylaşın** (Instagram, Facebook)
5. ✅ **Diğer sitelerden backlink alın**

---

## 🔍 Google'da Kontrol Etme

### Site: Operatörü ile Arama
Google'da şu şekilde arama yaparak sitenizin indexlenip indexlenmediğini kontrol edebilirsiniz:

```
site:vizerotasi.com
```

Eğer sonuçlar çıkıyorsa, site indexlenmiş demektir.

### Tam Site İsmi ile Arama
```
"vize rotasi"
```

Tırnak işareti ile arama yaparak tam eşleşme arayabilirsiniz.

---

## 📝 Yapılacaklar Listesi

- [ ] Google Search Console'a kayıt ol
- [ ] Site doğrulama yap (HTML etiketi veya DNS)
- [ ] Sitemap gönder (`https://www.vizerotasi.com/sitemap.xml`)
- [ ] URL İnceleme ile indexleme isteği gönder
- [ ] 1 hafta sonra `site:vizerotasi.com` ile kontrol et
- [ ] Gerekirse tekrar indexleme isteği gönder

---

## 🛠️ Teknik Kontroller

### robots.txt Kontrolü
Tarayıcıda şu URL'yi açın:
```
https://www.vizerotasi.com/robots.txt
```

Çıktı şöyle olmalı:
```
User-agent: *
Allow: /

Sitemap: https://www.vizerotasi.com/sitemap.xml
```

### sitemap.xml Kontrolü
Tarayıcıda şu URL'yi açın:
```
https://www.vizerotasi.com/sitemap.xml
```

XML formatında sitemap görünmelidir.

### Meta Tags Kontrolü
1. Sitenizi tarayıcıda açın
2. **Sağ tık > Sayfa Kaynağını Görüntüle** (veya Ctrl+U)
3. `<head>` bölümünde meta tag'lerin olduğunu kontrol edin

---

## ⚠️ Önemli Notlar

1. **İlk indexleme zaman alır**: Google'ın sitenizi bulması ve indexlemesi 1-4 hafta sürebilir
2. **Düzenli içerik güncellemesi**: Sitenizi düzenli güncellemek SEO'yu iyileştirir
3. **Backlink önemli**: Diğer sitelerden link almak Google sıralamasını artırır
4. **Mobil uyumluluk**: Siteniz mobil uyumlu olmalı (zaten uyumlu)
5. **Hız**: Site hızı SEO için önemli (Vite ile optimize edilmiş)

---

## 📞 Yardım

Eğer 4 hafta sonra hala Google'da görünmüyorsanız:
1. Google Search Console'da hata mesajlarını kontrol edin
2. `site:vizerotasi.com` ile arama yaparak indexlenip indexlenmediğini kontrol edin
3. robots.txt ve sitemap.xml'in erişilebilir olduğunu kontrol edin
4. Google Search Console'da "Kapsama" raporunu kontrol edin

---

## 🎯 Beklenen Sonuç

Doğru kurulumdan sonra:
- ✅ Google Search Console'da site görünecek
- ✅ 1-7 gün içinde ilk indexleme başlayacak
- ✅ 1-4 hafta içinde arama sonuçlarında görünecek
- ✅ "vize rotasi" aramasında siteniz çıkacak

**Not**: Google'ın algoritması sürekli değişir. İlk indexleme sonrası sıralama zamanla iyileşecektir.

