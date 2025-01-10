import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <h1>
          Men at Work
        </h1>
        </div>
    </Router>

  )
}

export default App
