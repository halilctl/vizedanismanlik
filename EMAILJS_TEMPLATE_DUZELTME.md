# 🔧 EmailJS Template Düzeltme Rehberi

## ❌ Sorun
E-postada sadece mesaj görünüyor, isim, e-posta ve telefon bilgileri gelmiyor.

## ✅ Çözüm: Template'i Düzeltme

### Adım 1: EmailJS Dashboard'a Gidin
1. https://www.emailjs.com/ adresine gidin
2. Giriş yapın
3. **"Email Templates"** sekmesine gidin

### Adım 2: Template'inizi Bulun
- Template ID: `template_mkk19cb` olan template'i bulun
- Üzerine tıklayarak düzenleme moduna geçin

### Adım 3: Template İçeriğini Düzeltin

**Subject (Konu) alanına:**
```
Yeni İletişim Formu - {{from_name}}
```

**Content (İçerik) alanına şunu yazın:**
```
Yeni bir iletişim formu mesajı aldınız:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AD SOYAD: {{from_name}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

E-POSTA: {{from_email}}
TELEFON: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESAJ:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Bu mesaj www.vizerotasi.com sitesinden gönderilmiştir.
Tarih: {{date}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Adım 4: Template Ayarlarını Kontrol Edin

**"To Email"** alanı:
```
vizerotasi@gmail.com
```

**"From Name"** alanı:
```
Vize Rotası Web Sitesi
```

**"From Email"** alanı:
```
(EmailJS'in verdiği default email - değiştirmeyin)
```

**"Reply To"** alanı:
```
{{from_email}}
```
(Böylece müşteriye yanıt verirken direkt e-postasına gönderebilirsiniz)

### Adım 5: Template'i Kaydedin
1. **"Save"** butonuna tıklayın
2. Template kaydedildiğini onaylayın

---

## 🧪 Test Etme

1. Web sitenizdeki iletişim formuna gidin
2. Tüm alanları doldurun:
   - Ad Soyad: Test Kullanıcı
   - E-posta: test@example.com
   - Telefon: +90 555 123 45 67
   - Mesaj: Bu bir test mesajıdır
3. **"Gönder"** butonuna tıklayın
4. E-posta kutunuzu kontrol edin (`vizerotasi@gmail.com`)

**Beklenen Sonuç:**
E-postada şunlar görünmeli:
- ✅ Ad Soyad
- ✅ E-posta
- ✅ Telefon
- ✅ Mesaj

---

## ⚠️ Önemli Notlar

### Template Parametre İsimleri
Kodda kullanılan parametre isimleri:
- `{{from_name}}` - Ad Soyad
- `{{from_email}}` - E-posta
- `{{phone}}` - Telefon
- `{{message}}` - Mesaj

**Bu isimler template'de tam olarak bu şekilde yazılmalı!**

### Parametre İsimleri Eşleşmeli
- Kod: `from_name` → Template: `{{from_name}}`
- Kod: `from_email` → Template: `{{from_email}}`
- Kod: `phone` → Template: `{{phone}}`
- Kod: `message` → Template: `{{message}}`

Eğer template'de farklı isimler kullanırsanız (örn: `{{name}}` yerine `{{from_name}}`), bilgiler gelmez!

---

## 🔍 Sorun Giderme

### Hala bilgiler gelmiyorsa:

1. **Template'deki parametre isimlerini kontrol edin**
   - `{{from_name}}` doğru mu?
   - `{{from_email}}` doğru mu?
   - `{{phone}}` doğru mu?
   - `{{message}}` doğru mu?

2. **EmailJS Dashboard'da Logs'u kontrol edin**
   - "Logs" sekmesine gidin
   - Son gönderilen e-postayı bulun
   - Hata mesajı var mı kontrol edin

3. **Browser Console'u kontrol edin**
   - F12 tuşuna basın
   - Console sekmesine gidin
   - Hata mesajı var mı kontrol edin

4. **Template'i yeniden kaydedin**
   - Bazen template değişiklikleri hemen uygulanmayabilir
   - Template'i tekrar kaydedin ve test edin

---

## 📋 Hızlı Kontrol Listesi

- [ ] Template'de `{{from_name}}` kullanılıyor mu?
- [ ] Template'de `{{from_email}}` kullanılıyor mu?
- [ ] Template'de `{{phone}}` kullanılıyor mu?
- [ ] Template'de `{{message}}` kullanılıyor mu?
- [ ] Template kaydedildi mi?
- [ ] Test e-postası gönderildi mi?
- [ ] E-postada tüm bilgiler görünüyor mu?

---

## ✅ Başarılı Kurulum Sonrası

Template düzeltildikten sonra, e-postalar şu formatta gelecek:

```
Yeni bir iletişim formu mesajı aldınız:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AD SOYAD: Ahmet Yılmaz
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

E-POSTA: ahmet@example.com
TELEFON: +90 555 123 45 67

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESAJ:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Merhaba, vize başvurusu hakkında bilgi almak istiyorum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Bu mesaj www.vizerotasi.com sitesinden gönderilmiştir.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Bu şekilde tüm müşteri bilgilerini görebileceksiniz!

