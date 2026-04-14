# 📧 EmailJS Kurulum Rehberi

## ✅ Yapılan İşlemler

1. ✅ `@emailjs/browser` paketi `package.json`'a eklendi
2. ✅ `Contact.jsx` component'ine EmailJS entegrasyonu eklendi
3. ✅ Form validasyonu mevcut (tüm alanlar zorunlu)
4. ✅ Hata yönetimi ve başarı mesajları eklendi

---

## 🔧 EmailJS Dashboard Kurulumu

### Adım 1: EmailJS Hesabı Oluşturma
1. **EmailJS**'e gidin: https://www.emailjs.com/
2. **Sign Up** (Kayıt Ol) butonuna tıklayın
3. Ücretsiz hesap oluşturun (200 email/ay ücretsiz)

### Adım 2: Email Service Oluşturma
1. EmailJS dashboard'da **"Email Services"** sekmesine gidin
2. **"Add New Service"** butonuna tıklayın
3. E-posta sağlayıcınızı seçin (Gmail önerilir)
4. Gmail seçerseniz:
   - Google hesabınızla bağlantı kurun
   - İzinleri onaylayın
5. Service'e bir isim verin (örn: "Vize Rotası Contact Form")
6. **Service ID**'yi kopyalayın (örn: `service_abc123`)

### Adım 3: Email Template Oluşturma
1. **"Email Templates"** sekmesine gidin
2. **"Create New Template"** butonuna tıklayın
3. Template'i şu şekilde yapılandırın:

**Subject (Konu):**
```
Yeni İletişim Formu Mesajı - {{from_name}}
```

**Content (İçerik):**
```
Yeni bir iletişim formu mesajı aldınız:

Ad Soyad: {{from_name}}
E-posta: {{from_email}}
Telefon: {{phone}}

Mesaj:
{{message}}

---
Bu mesaj www.vizerotasi.com sitesinden gönderilmiştir.
```

4. **"To Email"** alanına: `vizerotasi@gmail.com` yazın (Sadece size mail gidecek)
5. **"From Name"** alanına: `Vize Rotası Web Sitesi` yazın
6. **"From Email"** alanına: EmailJS'in verdiği default email'i kullanın (genellikle service email'iniz)
7. **"Reply To"** alanına: `vizerotasi@gmail.com` yazın (Müşteriye otomatik mail göndermeyeceğiz, sadece yanıtlamak isterseniz kullanırsınız)
8. Template'i kaydedin
9. **Template ID**'yi kopyalayın (örn: `template_xyz789`)

**ÖNEMLİ:** 
- Template zorunludur (EmailJS template kullanmadan çalışmaz)
- Template sadece size mail gönderecek şekilde yapılandırılmıştır
- Müşteriye otomatik geri mail gönderilmeyecek
- Müşterinin bilgileri sadece size iletilecek

### Adım 4: Public Key (User ID) Kontrolü
1. **"Account"** veya **"Integration"** sekmesine gidin
2. **"Public Key"** veya **"User ID"** değerini kontrol edin
3. Bu değer: `eQ7pZLFNU4V5w7j3O` olmalı (zaten kodda var)

---

## 💻 Kod Güncellemesi

### Contact.jsx Dosyasını Güncelleyin

`src/components/Contact.jsx` dosyasında şu satırları bulun:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID' // EmailJS dashboard'dan alın
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // EmailJS dashboard'dan alın
```

Bu değerleri EmailJS dashboard'unuzdan aldığınız değerlerle değiştirin:

```javascript
const EMAILJS_SERVICE_ID = 'service_abc123' // EmailJS dashboard'dan aldığınız Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789' // EmailJS dashboard'dan aldığınız Template ID
```

---

## 🧪 Test Etme

### 1. Paketi Yükleyin
```bash
npm install
```

### 2. Development Server'ı Başlatın
```bash
npm run dev
```

### 3. Formu Test Edin
1. Tarayıcıda `http://localhost:5173` adresine gidin
2. İletişim formuna gidin
3. Tüm alanları doldurun:
   - ✅ Ad Soyad
   - ✅ E-posta
   - ✅ Telefon
   - ✅ Mesaj (en az 10 karakter)
4. **"Gönder"** butonuna tıklayın
5. E-posta kutunuzu kontrol edin (`vizerotasi@gmail.com`)

### 4. Hata Kontrolü
- Browser Console'u açın (F12)
- Hata mesajları varsa kontrol edin
- EmailJS dashboard'da **"Logs"** sekmesinden gönderim geçmişini kontrol edin

---

## ✅ Form Validasyonu

Form şu validasyonları içerir:

1. **Ad Soyad**: Boş olamaz
2. **E-posta**: 
   - Boş olamaz
   - Geçerli e-posta formatında olmalı
3. **Telefon**: 
   - Boş olamaz
   - Geçerli telefon formatında olmalı
4. **Mesaj**: 
   - Boş olamaz
   - En az 10 karakter olmalı

**Tüm alanlar doldurulmadan form gönderilemez!**

---

## 🚀 Deploy

Değişiklikleri production'a deploy etmek için:

```bash
npm run build:custom
git add .
git commit -m "EmailJS entegrasyonu eklendi"
git push origin main
```

---

## 🔍 Sorun Giderme

### E-posta gelmiyor
1. EmailJS dashboard'da **"Logs"** sekmesini kontrol edin
2. Hata mesajlarını okuyun
3. Service ID ve Template ID'nin doğru olduğundan emin olun
4. Gmail bağlantısının aktif olduğunu kontrol edin

### "Service ID bulunamadı" hatası
- `EMAILJS_SERVICE_ID` değerinin doğru olduğundan emin olun
- Service ID'nin `service_` ile başladığından emin olun

### "Template ID bulunamadı" hatası
- `EMAILJS_TEMPLATE_ID` değerinin doğru olduğundan emin olun
- Template ID'nin `template_` ile başladığından emin olun

### Form gönderilmiyor
- Browser Console'u kontrol edin (F12)
- Network tab'ında EmailJS isteğini kontrol edin
- Tüm form alanlarının doldurulduğundan emin olun

### Rate Limit (Kota Aşımı)
- Ücretsiz plan: 200 email/ay
- Daha fazla email için ücretli plana geçin
- EmailJS dashboard'da kullanımı kontrol edin

---

## 📊 EmailJS Dashboard Özellikleri

### Logs (Günlükler)
- Tüm gönderilen e-postaları görüntüleyin
- Başarılı/başarısız gönderimleri kontrol edin
- Hata mesajlarını inceleyin

### Analytics (İstatistikler)
- Aylık e-posta sayısını görün
- Kullanım istatistiklerini takip edin

### Settings (Ayarlar)
- Public Key'i görüntüleyin
- Hesap ayarlarını yönetin

---

## 🎯 Özet

1. ✅ EmailJS hesabı oluşturun
2. ✅ Email Service ekleyin (Gmail)
3. ✅ Email Template oluşturun
4. ✅ Service ID ve Template ID'yi kopyalayın
5. ✅ `Contact.jsx` dosyasındaki değerleri güncelleyin
6. ✅ Test edin
7. ✅ Deploy edin

**Not**: Public Key (`eQ7pZLFNU4V5w7j3O`) zaten kodda mevcut. Sadece Service ID ve Template ID'yi güncellemeniz yeterli!

---

## 📞 Yardım

Sorun yaşıyorsanız:
1. EmailJS dokümantasyonu: https://www.emailjs.com/docs/
2. Browser Console'u kontrol edin
3. EmailJS dashboard'daki Logs'u inceleyin

