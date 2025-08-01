import React from 'react'

const blogs = [
    { title: "Understanding React", author: "John Doe", date: "2024-06-01" },
    { title: "JavaScript Tips and Tricks", author: "Jane Smith", date: "2024-06-05" },
    { title: "CSS Grid Layout", author: "Emily Johnson", date: "2024-06-10" }
];

const BlogDetails = () => {
  return (
    <div className="blog-details">
      <h2>Blog Details</h2>
      <ul className="blog-list">
        {blogs.map((blog, idx) => (
          <li key={idx} className="blog-item">
            <div className="blog-title">{blog.title}</div>
            <div className="blog-author">{blog.author}</div>
            <div className="blog-date">{blog.date}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogDetails
