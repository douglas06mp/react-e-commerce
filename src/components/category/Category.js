import React from 'react';
import './Category.scss';

const Category = ({ title, imageUrl, size }) => {
  return (
    <div className={`category ${size}`}>
      <div
        className="category--background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category--content">
        <h1 className="category--title">{title.toUpperCase()}</h1>
        <span className="category--subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default Category;
