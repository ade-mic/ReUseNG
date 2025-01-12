import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        </Routes>
      <div className="container">
        </div>
        <Footer />
    </Router>

  )
}

export default App
