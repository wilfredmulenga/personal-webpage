import React from 'react'
import githubImage from './images/github-32-FFFFFF.png'
import envelopeImage from './images/envelope-32-FFFFFF.png'
import twitterImage from './images/t-32-FFFFFF.png'

const NavFooter = () => {
  return (
    <div className='navfooter-container'>
      <p>Wilfred Mulenga</p>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/WillzMu"><img src={githubImage} alt="github"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/MulengaWilfred"><img src={twitterImage} alt="mail"/></a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:willzmu@yahoo.com"><img src={envelopeImage} alt="mail"/></a>
      </div>
    </div>
  )
}

export default NavFooter
