// // src/components/Blog.js
// import React from 'react';

// const Blog = ({ title, content }) => {
//   return (
//     <div className="blog" onClick={{}}>
//       <h2>{title}</h2>
//       <p>{content}</p>
//     </div>
//   );
// };

// export default Blog;
import React from 'react';
import { Link } from 'react-router-dom';


const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <p>Category: {blog.category}</p>
      <Link to={`/blogs/${blog.id}`}>Read More</Link>
    </div>
  );
};
export default BlogCard;