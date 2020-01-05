import React from 'react'
import githubImage from './images/github-32-FFFFFF.png'
import envelopeImage from './images/envelope-32-FFFFFF.png'
import twitterImage from './images/t-32-FFFFFF.png'

const NavFooter = () => {
  return (
    <div className='navfooter-container'>
      <p>Wilfred Mulenga</p>
      <div>
        <img src={githubImage} alt="github"/>
        <img src={twitterImage} alt="mail"/>
        <img src={envelopeImage} alt="mail"/>
      </div>
    </div>
  )
}

export default NavFooter
