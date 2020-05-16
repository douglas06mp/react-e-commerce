import React from 'react';
import { withRouter } from 'react-router-dom';
import './Category.scss';

const Category = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`category ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(Category);
