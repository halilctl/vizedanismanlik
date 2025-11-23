import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './DotGrid.css'

const DotGrid = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dots = []
    const mouse = { x: 0, y: 0 }
    const dotCount = 50
    const connectionDistance = 150

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      
      // Redistribute dots if needed
      dots.forEach(dot => {
        dot.x = Math.min(dot.x, canvas.width / dpr)
        dot.y = Math.min(dot.y, canvas.height / dpr)
      })
    }

    resizeCanvas()
    
    let resizeTimeout
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 100)
    }
    
    window.addEventListener('resize', handleResize)

    // Create dots - daha fazla nokta ve daha büyük
    for (let i = 0; i < dotCount * 1.5; i++) {
      dots.push({
        x: Math.random() * (canvas.width / (window.devicePixelRatio || 1)),
        y: Math.random() * (canvas.height / (window.devicePixelRatio || 1)),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 2
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw dots
      dots.forEach((dot, i) => {
        // Update position
        dot.x += dot.vx
        dot.y += dot.vy

        // Canvas boyutlarını dpr'ye göre ayarla
        const canvasWidth = canvas.width / (window.devicePixelRatio || 1)
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1)
        
        // Bounce off edges
        if (dot.x < 0 || dot.x > canvasWidth) dot.vx *= -1
        if (dot.y < 0 || dot.y > canvasHeight) dot.vy *= -1

        // Keep in bounds
        dot.x = Math.max(0, Math.min(canvasWidth, dot.x))
        dot.y = Math.max(0, Math.min(canvasHeight, dot.y))

        // Mouse interaction
        const dx = mouse.x - dot.x
        const dy = mouse.y - dot.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          const force = (100 - distance) / 100
          dot.x -= (dx / distance) * force * 2
          dot.y -= (dy / distance) * force * 2
        }

        // Draw dot - daha görünür
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(30, 58, 95, 0.6)'
        ctx.fill()

        // Draw connections - daha görünür
        dots.slice(i + 1).forEach(otherDot => {
          const dx = otherDot.x - dot.x
          const dy = otherDot.y - dot.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(otherDot.x, otherDot.y)
            ctx.strokeStyle = `rgba(30, 58, 95, ${0.4 * (1 - distance / connectionDistance)})`
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div 
      className="dot-grid-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="dot-grid-canvas" />
    </motion.div>
  )
}

export default DotGrid

