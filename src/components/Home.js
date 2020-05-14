import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="menu">
        <div className="category">
          <div className="category--content">
            <h1 className="category--title">HATS</h1>
            <span className="category--subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="category">
          <div className="category--content">
            <h1 className="category--title">JACKETS</h1>
            <span className="category--subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="category">
          <div className="category--content">
            <h1 className="category--title">SHOES</h1>
            <span className="category--subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="category">
          <div className="category--content">
            <h1 className="category--title">WOMENS</h1>
            <span className="category--subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="category">
          <div className="category--content">
            <h1 className="category--title">MENS</h1>
            <span className="category--subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
