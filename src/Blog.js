import React from 'react'
import PropTypes from 'prop-types'
import facebookBlog from './images/f-blog.jpeg'

const MainBlog = () => {
  return (
    <div className="card horizontal">
      <img src={facebookBlog} alt="f-blog"/>
      <div className="text-container">
        <div>
          <p className="title">My Experience at the F8 2019 Hackathon</p>
          <p className="date">May 6, 2019</p>
          <p className="description">A re-cap of my experience at the F8 2019 Hackathon that took place in San Francisco.
        It was a life-changing experience where I got to make new friends and have fun coding.</p>
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/developer-circles-lusaka/my-experience-at-the-f8-2019-hackathon-2e0b9a34daaa"><p className="read-more">Read More &gt;</p></a>
        </div>
      </div>
    </div>
  )
}

const SubBlog = ({ title, description, date, readMore }) => {
  return (
    <div className="card sub-blog">
      <div className="text-container">
        <div>
          <p className="title">{title}</p>
          <p className="date">{date}</p>
          <p className="description">{description}</p>
          { readMore ? <a target="_blank" rel="noopener noreferrer" href={readMore}><p className="read-more">Read More &gt;</p></a> : null }
        </div>
      </div>
    </div>
  )
}

const Blog = () => {
  return (
    <div className="blog-container">
      <p className="heading">Blogs</p>
      <MainBlog />
      <div className="sub-blog-container">
        <SubBlog
          title="Tips for a Junior Dev"
          description="A list of insightful tips for junior developers in the software development industry
          based on my own personal experience."
          date="October 6, 2019"
          readMore="https://dev.to/willzmu/tips-for-a-junior-dev-3olh"
        />
        <SubBlog
          title="Coming soon"
          description="Cooking a new blog soon"
        />
      </div>
    </div>
  )
}

SubBlog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readMore: PropTypes.string.isRequired
}

export default Blog
