import React from 'react'
import PropTypes from 'prop-types'

const ProjectItem = ({ title, description, link, img }) => {
  return (
    <div className="card">
      <img className="project-item-image" src={img} alt="project-item"/>
      <div className="text-container">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <a target="_blank" rel="noopener noreferrer" className="link" href={link}><p>See more</p></a>
      </div>
    </div>
  )
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default ProjectItem
