# Vize Danışmanlık Web Sitesi

Modern ve etkileşimli vize danışmanlık şirketi web sitesi. React.js kullanılarak geliştirilmiştir.

## Özellikler

- ✨ **Etkileşimli Dot Grid Arka Plan** - Fare hareketine tepki veren animasyonlu nokta ağı
- 🎭 **Scroll Reveal Animasyonları** - Sayfa kaydırıldığında içerikler yumuşakça görünür
- 📝 **Split Text Efekti** - Metinler harf harf animasyonlu görünür
- 🎴 **Stack Efekti** - 3D perspektifli kart yığını
- 💎 **Glassy Look (Cam Efekti)** - Modern cam görünümlü kartlar
- 📁 **Folder Bileşeni** - Açılır/kapanır klasör animasyonları
- 🎨 **Modern Renk Paleti** - Beyaz, Navy Blue ve Gold/Amber tonları

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda `http://localhost:5173` adresini açın

## Kullanılan Teknolojiler

- **React 18** - UI kütüphanesi
- **Vite** - Build tool ve dev server
- **Framer Motion** - Animasyon kütüphanesi
- **React Intersection Observer** - Scroll reveal için

## Proje Yapısı

```
src/
├── components/
│   ├── DotGrid.jsx      # Etkileşimli nokta ağı arka planı
│   ├── Hero.jsx         # Ana başlık bölümü (Split Text)
│   ├── Services.jsx     # Hizmetler (Stack & Glassy)
│   ├── About.jsx         # Hakkımızda bölümü
│   ├── Folder.jsx       # Klasör bileşeni
│   └── Contact.jsx      # İletişim formu
├── App.jsx              # Ana uygulama bileşeni
├── main.jsx             # Giriş noktası
└── index.css            # Global stiller
```

## Özellikler Detayı

### Dot Grid
Canvas API kullanılarak oluşturulan etkileşimli arka plan. Fare hareketine tepki verir ve noktalar arasında bağlantılar çizer.

### Scroll Reveal
React Intersection Observer kullanılarak, içerikler görünür alana girdiğinde animasyonlu olarak görünür.

### Split Text
Hero bölümündeki başlık, her harf için ayrı animasyonla görünür.

### Stack
3D perspektifli kart yığını efekti, Services bölümünde kullanılmıştır.

### Glassy Look
Backdrop filter kullanılarak modern cam görünümlü kartlar oluşturulmuştur.

### Folder
Açılır/kapanır klasör animasyonları ile içerik gösterimi.

## Renk Paleti

- **Beyaz (White)**: `#ffffff` - Ana arka plan
- **Navy Blue**: `#1e3a5f` - Ana metin rengi
- **Gold/Amber**: `#d4af37` / `#ffb84d` - Vurgu renkleri

## Build

Production build için:
```bash
npm run build
```

Build dosyaları `dist/` klasörüne oluşturulur.

