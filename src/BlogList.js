import React from 'react'

export default function BlogList(props) {
  const blogs = props.blogs
  const title = props.title

  return (
    <div>
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((item) => (
          <div className="blog-preview" key={item.id}>
            <h2>{item.attributes.title}</h2>
            <p>Written by {item.attributes.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
