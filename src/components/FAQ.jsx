import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './FAQ.css'

const FAQ = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Vize başvuru süreci ne kadar sürer?',
      answer: 'Vize başvuru süreci ülkeye ve vize türüne göre değişiklik göstermektedir. Genellikle turist vizeleri 2-4 hafta, öğrenci ve çalışma vizeleri ise 4-12 hafta arasında sürebilir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.'
    },
    {
      question: 'Hangi ülkeler için vize danışmanlığı veriyorsunuz?',
      answer: '50\'den fazla ülke için vize danışmanlığı hizmeti sunmaktayız. Schengen bölgesi, ABD, İngiltere, Kanada, Avustralya, Japonya ve daha birçok ülke için profesyonel destek sağlıyoruz.'
    },
    {
      question: 'Vize red durumunda ne yapabilirim?',
      answer: 'Vize red durumunda temyiz başvurusu yapabilir veya yeni bir başvuru hazırlayabiliriz. Uzman ekibimiz red nedenlerini analiz ederek, güçlü bir başvuru dosyası hazırlamanıza yardımcı olur.'
    },
    {
      question: 'Vize başvurusu için hangi belgeler gereklidir?',
      answer: 'Gerekli belgeler ülkeye ve vize türüne göre değişiklik gösterir. Genel olarak pasaport, fotoğraf, başvuru formu, seyahat sigortası, mali belgeler ve seyahat amacınızı gösteren belgeler gereklidir. Detaylı liste için danışmanlarımızla görüşebilirsiniz.'
    },
    {
      question: 'Online başvuru yapabilir miyim?',
      answer: 'Evet, birçok ülke için online başvuru yapabilirsiniz. Biz size başvuru sürecinin her adımında rehberlik eder, belgelerinizi kontrol eder ve başvurunuzu en iyi şekilde hazırlamanıza yardımcı oluruz.'
    },
    {
      question: 'Vize ücretleri ne kadar?',
      answer: 'Vize ücretleri ülkeye ve vize türüne göre değişiklik gösterir. Konsolosluk ücretleri ve danışmanlık hizmet ücretlerimiz hakkında detaylı bilgi almak için ücretsiz danışmanlık randevusu alabilirsiniz.'
    }
  ]

  return (
    <section id="faq" className="faq-section" ref={ref}>
      <div className="faq-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Sıkça Sorulan Sorular</h2>
          <p className="section-subtitle">
            Merak ettiğiniz soruların cevapları
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item glassy"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

