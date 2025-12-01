import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Services.css'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  const services = [
    {
      id: 1,
      title: 'Turist Vizesi',
      description: 'Schengen, ABD, İngiltere ve daha birçok ülke için turist vize başvuruları',
      icon: '✈️',
      color: 'var(--navy-blue)'
    },
    {
      id: 2,
      title: 'Öğrenci Vizesi',
      description: 'Yurtdışı eğitim hayalleriniz için öğrenci vize danışmanlığı',
      icon: '🎓',
      color: 'var(--gold)'
    },
    {
      id: 6,
      title: 'Vize Red Temyizi',
      description: 'Reddedilen vize başvuruları için temyiz ve yeniden başvuru desteği',
      icon: '📋',
      color: 'var(--gold)'
    }
  ]

  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="section-subtitle">
            Tüm vize ihtiyaçlarınız için kapsamlı danışmanlık hizmetleri
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card glassy"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <motion.div
                className="service-hover-effect"
                initial={{ scale: 0 }}
                animate={hoveredId === service.id ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services

