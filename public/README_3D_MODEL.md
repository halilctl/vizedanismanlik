# 3D Model Dosyası Yerleştirme

## 📁 Dosya Konumu

3D model dosyanızı (`3d_model.glb`) şu klasöre yerleştirin:

```
public/3d_model.glb
```

## 📝 Adımlar

1. Blender'dan export ettiğiniz `3d_model.glb` dosyasını kopyalayın
2. Proje klasöründe `public` klasörüne yapıştırın
3. Dosya adının tam olarak `3d_model.glb` olduğundan emin olun

## ✅ Doğru Yol Yapısı

```
hob/
├── public/
│   ├── 3d_model.glb  ← Buraya yerleştirin
│   └── ...
├── src/
└── ...
```

## 🔧 Farklı Dosya Adı Kullanıyorsanız

Eğer model dosyanızın adı farklıysa (örneğin `model.glb`), `About.jsx` dosyasında şu satırı güncelleyin:

```jsx
<ModelViewer modelPath="/model.glb" />
```

## ⚠️ Önemli Notlar

- Dosya `public` klasöründe olmalı
- Dosya adı büyük/küçük harf duyarlıdır
- GLB formatında olmalı (GLTF değil)
- Dosya boyutu optimize edilmiş olmalı (web için önerilen: < 5MB)

## 🎨 Model Optimizasyonu

Blender'da export ederken:
- Gereksiz geometrileri temizleyin
- Texture'ları optimize edin
- Compression kullanın
- Unused materials'ları kaldırın

## 🐛 Sorun Giderme

### Model görünmüyor
- Dosyanın `public` klasöründe olduğundan emin olun
- Browser console'da hataları kontrol edin
- Dosya yolunu kontrol edin (`/3d_model.glb`)

### Model çok büyük/küçük
- `ModelViewer.jsx` dosyasında `scale` değerini ayarlayın
- `position` değerlerini değiştirin

### Performans sorunları
- Model dosyasını optimize edin
- Texture boyutlarını küçültün
- Gereksiz detayları azaltın

