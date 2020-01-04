import React from 'react'
import placeholder from './images/placeholder.png'

const MainBlog = () => {
  return (
    <div className="card horizontal">
      <img src={placeholder} alt="placeholder"/>
      <div className="text-container">
        <p>Latest post</p>
        <p>My Experience at the F8 2019 Hackathon</p>
        <p>A re-cap of my experience at the F8 2019 Hackathon that took place in San Francisco.
        It was a life-changing experience where I got to make new friends and have fun coding.</p>
      </div>
    </div>
  )
}

const SubBlog = ({ title, description }) => {
  return (
    <div className="card sub-blog">
      <div className="text-container">
        <p>{title}</p>
        <p>{description}</p>
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
        />
        <SubBlog
          title="Coming soon"
          description="Cooking a new blog soon"
        />
      </div>
    </div>
  )
}

export default Blog
