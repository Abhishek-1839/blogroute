// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import Filter from './components/Filter';
import blogData from './Data/blogData.json';
import './App.css';
import Navbar from './components/Navbar';
import BlogDetails from './components/BlogDetails';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const categories = [...new Set(blogData.map((blog) => blog.category))];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <Router>
    <div className="App">
      <Navbar />
      <h1>Blog Page</h1>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <Routes>
          <Route path="/" element={<BlogList blogs={filteredBlogs} />} />
          <Route path="/blogs/:id" element={<BlogDetails blogs={blogs} />} />
        </Routes>
    </div>
    </Router>
  );
};

export default App;
