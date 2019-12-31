import React from 'react'

const MainBlog = () => {
  return (
    <div>
      <img src="" alt=""/>
      <p>Latest post</p>
      <p>Title</p>
      <p>short description</p>
    </div>
  )
}

const SubBlog = () => {
  return (
    <div>
      <p>Title</p>
      <p>short description</p>
    </div>
  )
}

const Blog = () => {
	return(
    <div>
      <p>Blogs</p>
    <MainBlog />
    <SubBlog />
    <SubBlog />
    </div>
	)
}

export default Blog