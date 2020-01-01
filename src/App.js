import React from 'react'
import NavFooter from './NavFooter'
import LandingPage from './LandingPage'
import Projects from './Projects'
import Skills from './Skills'
import Blog from './Blog'
import './App.scss'

function App () {
  return (
    <div className="app-container">
      <NavFooter />
      <LandingPage />
      <Projects />
      <Skills />
      <Blog />
      <NavFooter />
    </div>
  )
}

export default App
