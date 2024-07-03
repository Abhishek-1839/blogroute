// src/components/BlogList.js
import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list" style={{display : 'flex', gap:'10px'}}>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
