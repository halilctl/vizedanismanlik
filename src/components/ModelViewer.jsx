import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three'
import './ModelViewer.css'

// 3D Model Component
function Model3D({ url }) {
  const { scene } = useGLTF(url)
  const groupRef = useRef()
  const { camera } = useThree()

  useEffect(() => {
    if (!scene || !groupRef.current) return

    // Scene'i clone et
    const clonedScene = scene.clone()
    
    // Bounding box hesapla
    const box = new THREE.Box3().setFromObject(clonedScene)
    
    if (box.isEmpty()) {
      groupRef.current.add(clonedScene)
      return
    }

    // Boyut ve merkez hesapla
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())
    const maxDimension = Math.max(size.x, size.y, size.z)

    // Modeli merkeze taşı
    clonedScene.position.set(-center.x, -center.y, -center.z)

    // Scale hesapla - camera ve FOV'a göre
    const fov = camera.fov * (Math.PI / 180)
    const distance = camera.position.z
    const visibleHeight = 2 * Math.tan(fov / 2) * distance
    const scale = (visibleHeight * 0.8) / maxDimension // %80 görünür alan

    // Scale uygula
    clonedScene.scale.setScalar(scale)

    // Y ekseninde aşağı kaydır (modelin alt kısmı görünsün)
    const scaledHeight = size.y * scale
    clonedScene.position.y -= scaledHeight * 0.25 // %25 aşağı

    // Scene'i ekle
    groupRef.current.add(clonedScene)

    // Cleanup
    return () => {
      if (clonedScene) {
        clonedScene.traverse((child) => {
          if (child.isMesh) {
            child.geometry?.dispose()
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => mat.dispose())
            } else {
              child.material?.dispose()
            }
          }
        })
      }
    }
  }, [scene, camera])

  // Otomatik döndürme
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return <group ref={groupRef} />
}

// Loading Component
function LoadingSpinner() {
  return (
    <Html center>
      <div className="model-loader">
        <div className="loader-spinner"></div>
        <p>3D Model yükleniyor...</p>
      </div>
    </Html>
  )
}

// Main ModelViewer Component
const ModelViewer = ({ modelPath = '/3d_model.glb' }) => {
  return (
    <div className="model-viewer-container">
      <Canvas
        camera={{ 
          position: [0, 0, 4], 
          fov: 45,
          near: 0.1,
          far: 100
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          {/* Lighting Setup */}
          <ambientLight intensity={0.6} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1.2}
            castShadow={false}
          />
          <directionalLight 
            position={[-5, 3, -5]} 
            intensity={0.4}
          />
          <pointLight 
            position={[0, -5, 0]} 
            intensity={0.3}
          />

          {/* Environment */}
          <Environment preset="sunset" />

          {/* 3D Model */}
          <Model3D url={modelPath} />

          {/* Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            minDistance={2}
            maxDistance={8}
            autoRotate={false}
            target={[0, 0, 0]}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ModelViewer
