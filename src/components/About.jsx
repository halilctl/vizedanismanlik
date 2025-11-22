import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-title">Neden Bizi Seçmelisiniz?</h2>
            <p className="about-description">
              10 yılı aşkın deneyimimizle, binlerce başarılı vize başvurusuna imza attık. 
              Müşteri memnuniyetini ön planda tutarak, her adımda yanınızdayız.
            </p>
            <div className="about-features">
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Deneyimli Ekip</h4>
                  <p>Alanında uzman danışmanlar</p>
                </div>
              </motion.div>
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Hızlı Çözüm</h4>
                  <p>Kısa sürede başvuru hazırlığı</p>
                </div>
              </motion.div>
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Güvenilir Hizmet</h4>
                  <p>%98 başarı oranı</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="visual-card glassy">
              <div className="visual-content">
                <div className="visual-number">10+</div>
                <div className="visual-label">Yıllık Deneyim</div>
              </div>
            </div>
            <div className="visual-card glassy">
              <div className="visual-content">
                <div className="visual-number">10K+</div>
                <div className="visual-label">Mutlu Müşteri</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

