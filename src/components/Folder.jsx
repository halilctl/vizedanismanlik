import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Folder.css'

const Folder = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  const [activeFolder, setActiveFolder] = useState(0)

  const folders = [
    {
      id: 0,
      title: 'Başarı Hikayeleri',
      items: [
        { name: 'ABD Vize Başvurusu', status: 'Onaylandı', date: '2024' },
        { name: 'Schengen Vize', status: 'Onaylandı', date: '2024' },
        { name: 'İngiltere Vize', status: 'Onaylandı', date: '2024' },
        { name: 'Kanada Vize', status: 'Onaylandı', date: '2023' }
      ]
    },
    {
      id: 1,
      title: 'Müşteri Yorumları',
      items: [
        { name: 'Ahmet Y.', comment: 'Çok profesyonel ve hızlı hizmet!', rating: 5 },
        { name: 'Ayşe K.', comment: 'Tüm süreç boyunca çok yardımcı oldular.', rating: 5 },
        { name: 'Mehmet D.', comment: 'Vize red temyizinde başarılı olduk.', rating: 5 },
        { name: 'Zeynep S.', comment: 'Kesinlikle tavsiye ederim!', rating: 5 }
      ]
    },
    {
      id: 2,
      title: 'Vize Türleri',
      items: [
        { name: 'Turist Vizesi', countries: '50+ Ülke' },
        { name: 'Öğrenci Vizesi', countries: '30+ Ülke' },
        { name: 'Çalışma Vizesi', countries: '25+ Ülke' },
        { name: 'İş Vizesi', countries: '40+ Ülke' }
      ]
    }
  ]

  return (
    <section id="folder" className="folder-section" ref={ref}>
      <div className="folder-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Portföyümüz</h2>
          <p className="section-subtitle">
            Başarılarımız ve müşteri deneyimleri
          </p>
        </motion.div>

        <div className="folders-wrapper">
          {folders.map((folder, index) => (
            <motion.div
              key={folder.id}
              className={`folder ${activeFolder === folder.id ? 'active' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setActiveFolder(folder.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="folder-header">
                <div className="folder-icon">📁</div>
                <h3 className="folder-title">{folder.title}</h3>
              </div>

              <AnimatePresence>
                {activeFolder === folder.id && (
                  <motion.div
                    className="folder-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="folder-items">
                      {folder.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="folder-item glassy"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                        >
                          <div className="item-name">{item.name}</div>
                          {item.status && (
                            <div className="item-status status-approved">{item.status}</div>
                          )}
                          {item.comment && (
                            <div className="item-comment">{item.comment}</div>
                          )}
                          {item.countries && (
                            <div className="item-countries">{item.countries}</div>
                          )}
                          {item.rating && (
                            <div className="item-rating">
                              {'⭐'.repeat(item.rating)}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
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

export default Folder

