import React from 'react'
import placeholder from './images/placeholder.png'

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="LHS">
        <p>Skills</p>
        <p>Here is a list of languages and frameworks I have experience in</p>
      </div>
      <div className="RHS">
        <div className="first-row">
          <img src={placeholder} alt="placholder"/>
          <img src={placeholder} alt="placholder"/>
          <img src={placeholder} alt="placholder"/>
          <img src={placeholder} alt="placholder"/>
        </div>
        <div>
          <img src={placeholder} alt="placholder"/>
          <img src={placeholder} alt="placholder"/>
          <img src={placeholder} alt="placholder"/>
          <img src={placeholder} alt="placholder"/>
        </div>
      </div>
    </div>
  )
}

export default Skills
