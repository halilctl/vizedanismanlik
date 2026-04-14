import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Process.css'

const Process = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  const steps = [
    {
      number: '01',
      title: 'İlk Görüşme',
      description: 'Ücretsiz danışmanlık görüşmesi ile ihtiyaçlarınızı belirliyoruz',
      icon: '💬'
    },
    {
      number: '02',
      title: 'Belge Hazırlığı',
      description: 'Gerekli tüm belgeleri birlikte hazırlıyor ve kontrol ediyoruz',
      icon: '📄'
    },
    {
      number: '03',
      title: 'Başvuru Hazırlığı',
      description: 'Başvuru formunuzu dolduruyor ve eksiksiz bir dosya oluşturuyoruz',
      icon: '✍️'
    },
    {
      number: '04',
      title: 'Başvuru ve Takip',
      description: 'Başvurunuzu yapıyor ve süreç boyunca sizi bilgilendiriyoruz',
      icon: '📤'
    },
    {
      number: '05',
      title: 'Sonuç',
      description: 'Vize sonucunuzu alıyor ve seyahat planlarınızı yapıyorsunuz',
      icon: '✅'
    }
  ]

  return (
    <section id="process" className="process-section" ref={ref}>
      <div className="process-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Vize Süreci</h2>
          <p className="section-subtitle">
            Başvurunuzun her adımında yanınızdayız
          </p>
        </motion.div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="step-connector"></div>
              <motion.div
                className="step-card glassy"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

