import React, { lazy, Suspense, memo } from 'react'
import Navbar from './components/Navbar'
import DotGrid from './components/DotGrid'
import BackToTop from './components/BackToTop'
import './App.css'

// Lazy load heavy components for better performance
const Hero = lazy(() => import('./components/Hero'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Process = lazy(() => import('./components/Process'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))

// Loading fallback component
const ComponentLoader = () => (
  <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #667eea', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

const App = memo(() => {
  return (
    <div className="app">
      <Navbar />
      <DotGrid />
      <Suspense fallback={<ComponentLoader />}>
        <Hero />
        <Services />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </Suspense>
      <BackToTop />
    </div>
  )
})

App.displayName = 'App'

export default App

