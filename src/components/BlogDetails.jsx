import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  // const navigate = useNavigate();

  // const handleblg = () => {
  //   navigate(blog.url);
  // };

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-details"> 
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <p>Category: {blog.category}</p>
      {/* <button onClick={handleblg}>Read More</button> */}
      <a href={blog.url} target="_self" rel="noopener noreferrer">Read More</a>
    </div>
  );
};

export default BlogDetails;
