import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [stats, setStats] = useState([
    { value: 0, target: 1000, suffix: '+' },
    { value: 0, target: 50, suffix: '+' },
    { value: 0, target: 98, suffix: '%' }
  ])

  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      const duration = 2000
      const steps = 60
      const interval = duration / steps
      const timers = []

      const targets = [
        { target: 1000, suffix: '+' },
        { target: 50, suffix: '+' },
        { target: 98, suffix: '%' }
      ]

      targets.forEach((targetStat, index) => {
        const increment = targetStat.target / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= targetStat.target) {
            current = targetStat.target
            clearInterval(timer)
          }

          setStats(prev => {
            const newStats = [...prev]
            newStats[index] = { ...newStats[index], value: Math.floor(current) }
            return newStats
          })
        }, interval)
        
        timers.push(timer)
      })

      return () => {
        timers.forEach(timer => clearInterval(timer))
      }
    }
  }, [inView])

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.02, duration: 0.5 }}
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))
  }

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="badge-text">Profesyonel Vize Danışmanlığı</span>
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="hero-title-line">
            {splitText('Vize rotanızı biz')}
          </div>
          <div className="hero-title-line">
            {splitText('belirliyoruz')}
          </div>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Dünya çapında vize başvurularınızda yanınızdayız. 
          Deneyimli ekibimizle vize sürecinizi kolaylaştırıyoruz.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            Ücretsiz Danışmanlık
          </motion.button>
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('services')
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            Hizmetlerimiz
          </motion.button>
        </motion.div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="stat-item">
            <div className="stat-number">{stats[0].value.toLocaleString()}{stats[0].suffix}</div>
            <div className="stat-label">Başarılı Vize</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats[1].value}{stats[1].suffix}</div>
            <div className="stat-label">Ülke</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats[2].value}{stats[2].suffix}</div>
            <div className="stat-label">Başarı Oranı</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

