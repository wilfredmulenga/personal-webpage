import React from 'react'
import githubImage from './images/github-64-FF0BAC.png'
import envelopeImage from './images/envelope-64-FF0BAC.png'

const NavFooter = () => {
  return (
    <div className='navfooter-container'>
      <p>Wilfred Mulenga</p>
      <div>
        <img src={githubImage} alt="github"/>
        <img src={envelopeImage} alt="mail"/>
      </div>
    </div>
  )
}

export default NavFooter
