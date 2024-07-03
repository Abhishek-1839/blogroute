// src/components/Filter.js
import React from 'react';

const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter">
      <select value={selectedCategory} onChange={onCategoryChange}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
