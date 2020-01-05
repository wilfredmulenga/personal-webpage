import React from 'react'
import NavFooter from './NavFooter'
import LandingPage from './LandingPage'
import Projects from './Projects'
import Skills from './Skills'
import Blog from './Blog'
import Icons8Tribute from './Icons8Tribute'
import Underline from './Underline'
import './App.scss'

function App () {
  return (
    <div className="app-container">
      <NavFooter />
      <LandingPage />
      <Underline />
      <Projects />
      <Skills />
      <Underline />
      <Blog />
      <NavFooter />
      <Icons8Tribute />
    </div>
  )
}

export default App
