import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad gereklidir'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon gereklidir'
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Geçerli bir telefon numarası giriniz'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj gereklidir'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      // Form submission logic here
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', message: '' })
      }, 3000)
    }
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">İletişime Geçin</h2>
          <p className="section-subtitle">
            Ücretsiz danışmanlık için hemen bize ulaşın
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="info-card glassy">
              <div className="info-icon">📞</div>
              <h3>Telefon</h3>
              <p>+90 (212) 123 45 67</p>
            </div>
            <div className="info-card glassy">
              <div className="info-icon">✉️</div>
              <h3>E-posta</h3>
              <p>info@vizedanismanlik.com</p>
            </div>
            <div className="info-card glassy">
              <div className="info-icon">📍</div>
              <h3>Adres</h3>
              <p>İstanbul, Türkiye</p>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glassy"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            {submitted && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Mesajınız başarıyla gönderildi!
              </motion.div>
            )}
            <div className="form-group">
              <label htmlFor="name">Ad Soyad *</label>
              <input
                type="text"
                id="name"
                placeholder="Adınız ve Soyadınız"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta *</label>
              <input
                type="email"
                id="email"
                placeholder="ornek@email.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon *</label>
              <input
                type="tel"
                id="phone"
                placeholder="+90 5XX XXX XX XX"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız *</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Mesajınızı buraya yazın..."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <motion.button
              type="submit"
              className="btn-submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={submitted}
            >
              {submitted ? 'Gönderiliyor...' : 'Gönder'}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vize Danışmanlık</h3>
            <p>Profesyonel vize danışmanlık hizmetleri ile hayallerinize açılan kapıyı aralıyoruz.</p>
          </div>
          <div className="footer-section">
            <h4>Hızlı Linkler</h4>
            <a href="#services">Hizmetlerimiz</a>
            <a href="#about">Hakkımızda</a>
            <a href="#faq">SSS</a>
            <a href="#contact">İletişim</a>
          </div>
          <div className="footer-section">
            <h4>İletişim</h4>
            <p>📞 +90 (212) 123 45 67</p>
            <p>✉️ info@vizedanismanlik.com</p>
            <p>📍 İstanbul, Türkiye</p>
          </div>
          <div className="footer-section">
            <h4>Sosyal Medya</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Vize Danışmanlık. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact

