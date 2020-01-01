import React from 'react'
import placeholder from './images/placeholder.png'

const MainBlog = () => {
  return (
    <div className="card horizontal">
      <img src={placeholder} alt="placeholder"/>
      <div className="text-container">
        <p>Latest post</p>
        <p>Title</p>
        <p>short description</p>
      </div>
    </div>
  )
}

const SubBlog = () => {
  return (
    <div className="card sub-blog">
      <div className="text-container">
        <p>Title</p>
        <p>short description</p>
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
        <SubBlog />
        <SubBlog />
      </div>
    </div>
  )
}

export default Blog
