import React from 'react'
import placeholder from './images/placeholder.png'

const ProjectItem = ({ title, description, link }) => {
  return (
    <div className="card">
      <img className="project-item-image" src={placeholder} alt="placeholder-image"/>
      <div className="text-container">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <a className="link" href={link}><p>See more</p></a>
      </div>
    </div>
  )
}

export default ProjectItem
