import React from "react";


import "./Portfolio.css";
const Portfolio = () => (
  <div className="portfolio">
    <h1>Portfolio</h1>
    <div className="card-container">
    <div className="card">
        <div className="card-image">
          <img className="profile-photo" src= "images/myResume.jpg" alt= "Resume React" />
        </div>
        <div className="card-content">
          <p>React</p>
          <p>Built using React</p>
          <button className="btn card_btn">View</button>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img className="profile-photo" src= "images/wordpress.jpg" alt= "Wordpress website" />
        </div>
        <div className="card-content">
          <p>Wordpress</p>
          <p>This website was built with Wordpress</p>
          <button className="btn card_btn">View</button>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img className="profile-photo" src= "images/serverHomePageAPI.jpg" alt= "Built with frontend and server api" />
        </div>
        <div className="card-content">
          <p>My Blog</p>
          <p>Built with Frontend technologies!</p>
          <button className="btn card_btn">View</button>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img className="profile-photo" src= "images/frontendPortfolio.jpg" alt= "Portfolio website" />
        </div>
        <div className="card-content">
          <p>Portfolio</p>
          <p>Built with Frontend technologies!</p>
          <button className="btn card_btn">View</button>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img className="profile-photo" src= "images/project1.jpg" alt= "To-Do List app" />
        </div>
        <div className="card-content">
          <p>To-Do List App</p>
          <p>Built HTML, CSS, JavaScript!</p>
          <button className="btn card_btn">View</button>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img className="profile-photo" src= "images/project5.jpg" alt= "Carmel Cafe website" />
        </div>
        <div className="card-content">
          <p>Carmel Cafe</p>
          <p>Built HTML, CSS, JavaScript</p>
          <button className="btn card_btn">View</button>
        </div>
      </div>
    </div>
  </div>
);
export default Portfolio;