import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './LoadingPage.css'

const LoadingPage = ({ onComplete }) => {
  const [planeBehind, setPlaneBehind] = useState(false)

  useEffect(() => {
    // Uçak dünyaya yaklaştığında (animasyonun %70'inde) arkasında kaybolsun
    const behindTimer = setTimeout(() => {
      setPlaneBehind(true)
    }, 2100) // 3 saniyenin %70'i = 2.1 saniye

    // 3 saniye sonra loading tamamlanır
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => {
      clearTimeout(behindTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className="loading-page">
      <div className="loading-container">
        {/* Dünya */}
        <div className="loading-world">
          🌍
        </div>

        {/* Uçak */}
        <motion.div
          className={`loading-plane ${planeBehind ? 'behind-world' : ''}`}
          initial={{ left: '-10%' }}
          animate={{ 
            left: '75%'
          }}
          transition={{ 
            duration: 3,
            ease: 'easeInOut'
          }}
        >
          ✈︎
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2>Vize Rotası</h2>
          <p>Rotanız belirleniyor...</p>
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingPage

