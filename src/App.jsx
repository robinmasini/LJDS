import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Features from './components/Features'
import WhiteLabel from './components/WhiteLabel'
import Partners from './components/Partners'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Gallery />
      <Features />
      <WhiteLabel />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
