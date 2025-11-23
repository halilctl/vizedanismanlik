# 3D Model Kurulum Rehberi

## ✅ Yapılan Değişiklikler

1. ✅ `@react-three/fiber` - Three.js için React wrapper eklendi
2. ✅ `@react-three/drei` - 3D model yükleme ve kontroller için helper'lar eklendi
3. ✅ `three` - Three.js kütüphanesi eklendi
4. ✅ `ModelViewer` component'i oluşturuldu
5. ✅ About bölümüne 3D viewer entegre edildi

## 📁 3D Model Dosyasını Yerleştirme

### Adım 1: Dosyayı Kopyalayın

Blender'dan export ettiğiniz `3d_model.glb` dosyasını şu klasöre kopyalayın:

```
C:\Users\youtu\Desktop\hob\public\3d_model.glb
```

### Adım 2: Dosya Kontrolü

Dosyanın doğru yerde olduğundan emin olun:
- ✅ Klasör: `public/`
- ✅ Dosya adı: `3d_model.glb` (tam olarak bu isim)
- ✅ Format: GLB (GLTF değil)

## 🎮 Özellikler

3D Viewer şu özelliklere sahip:

- ✅ **Otomatik Döndürme**: Model yavaşça otomatik döner
- ✅ **Mouse Kontrolü**: Sürükleyerek modeli döndürebilirsiniz
- ✅ **Zoom**: Mouse scroll ile zoom in/out
- ✅ **Işıklandırma**: Otomatik ambient ve directional lighting
- ✅ **Environment**: Sunset preset ile güzel görünüm
- ✅ **Responsive**: Mobil uyumlu
- ✅ **Loading State**: Model yüklenirken spinner gösterir

## 🔧 Özelleştirme

### Model Boyutunu Ayarlama

`ModelViewer.jsx` dosyasında:

```jsx
<primitive 
  object={scene} 
  scale={1}        // ← Bu değeri değiştirin (örn: 0.5 veya 2)
  position={[0, 0, 0]}  // ← X, Y, Z pozisyonu
/>
```

### Döndürme Hızını Ayarlama

```jsx
meshRef.current.rotation.y += delta * 0.2  // ← 0.2 değerini değiştirin
```

### Kamera Açısını Ayarlama

```jsx
<Canvas
  camera={{ position: [0, 0, 5], fov: 50 }}  // ← position ve fov değerlerini değiştirin
>
```

### Zoom Sınırları

```jsx
<OrbitControls
  minDistance={3}   // ← Minimum zoom
  maxDistance={10}  // ← Maximum zoom
/>
```

## 🐛 Sorun Giderme

### Model Görünmüyor

1. **Dosya kontrolü:**
   - `public/3d_model.glb` dosyasının var olduğundan emin olun
   - Dosya adının tam olarak `3d_model.glb` olduğunu kontrol edin

2. **Browser Console kontrolü:**
   - F12 tuşuna basın
   - Console sekmesinde hataları kontrol edin
   - 404 hatası görüyorsanız dosya yolu yanlıştır

3. **Development server:**
   ```bash
   npm run dev
   ```
   Server'ın çalıştığından emin olun

### Model Çok Büyük/Küçük

`ModelViewer.jsx` dosyasında `scale` değerini ayarlayın:
- Daha küçük: `scale={0.5}`
- Daha büyük: `scale={2}`

### Performans Sorunları

1. **Model optimizasyonu:**
   - Blender'da gereksiz geometrileri temizleyin
   - Texture boyutlarını küçültün
   - Compression kullanın

2. **Dosya boyutu:**
   - Web için önerilen: < 5MB
   - Daha büyük dosyalar için optimizasyon gerekir

### Loading Spinner Görünmüyor

Model çok hızlı yükleniyorsa normal. Yavaş internet bağlantısında görünecektir.

## 📱 Responsive Tasarım

3D viewer otomatik olarak:
- Desktop: 500px yükseklik
- Tablet: 400px yükseklik  
- Mobil: 350px yükseklik

## 🎨 Stil Özelleştirme

`ModelViewer.css` dosyasında stilleri değiştirebilirsiniz:
- Container arka plan rengi
- Border radius
- Shadow efektleri
- Control hint pozisyonu

## ✅ Test Etme

1. Development server'ı başlatın:
   ```bash
   npm run dev
   ```

2. Tarayıcıda açın:
   ```
   http://localhost:5173
   ```

3. "Neden Bizi Seçmelisiniz?" bölümüne scroll edin

4. 3D modeli kontrol edin:
   - Otomatik döndüğünü görün
   - Mouse ile sürükleyin
   - Scroll ile zoom yapın

## 🚀 Production Build

Build alırken model dosyası otomatik olarak `dist` klasörüne kopyalanacak:

```bash
npm run build
```

## 📝 Notlar

- Model dosyası `public` klasöründe olmalı (Vite otomatik olarak serve eder)
- GLB formatı önerilir (GLTF'den daha optimize)
- Dosya adı büyük/küçük harf duyarlıdır
- Model yükleme asenkron olduğu için Suspense kullanılıyor

