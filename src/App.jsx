import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhiteLabel from './components/WhiteLabel'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <WhiteLabel />
      <Footer />
    </div>
  )
}

export default App
