import React from 'react'
import Navbar from './components/Navbar'
import DotGrid from './components/DotGrid'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import FAQ from './components/FAQ'
import Process from './components/Process'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <DotGrid />
      <Hero />
      <Services />
      <About />
      <Process />
      <FAQ />
      <Contact />
      <BackToTop />
    </div>
  )
}

export default App

