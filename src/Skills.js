import React from 'react'
import js from './images/js.png'
import redux from './images/redux.png'
import node from './images/node.png'
import react from './images/react.png'
import docker from './images/docker.png'
import firebase from './images/firebase.jpg'

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="LHS">
        <p className="skills-heading">Skills</p>
        <p className="skills-description">Here is a list of languages and frameworks I have experience in</p>
      </div>
      <div className="RHS">
        <div className="row">
          <div className="column">
            <img src={js} alt="placholder"/>
            <p className="javascript">JavaScript</p>
          </div>
          <div className="column second">
            <img src={react} alt="placholder"/>
            <p className="react">React</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src={redux} alt="placholder"/>
            <p className="redux">Redux</p>
          </div>
          <div className="column second">
            <img src={node} alt="placholder"/>
            <p className="node">Node</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src={docker} alt="placholder"/>
            <p className="docker">Docker</p>
          </div>
          <div className="column second">
            <img src={firebase} alt="placholder"/>
            <p className="firebase">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
