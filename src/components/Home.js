// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <img src="/pfp.jpg" alt="Vishal Desh" className="profile-pic"/>
        <h1>Vishal's Leadership Journey</h1>
        <p>Exploring the Past, Present, and Future of Leadership</p>
      </header>
      <div className="links">
        <Link to="/past" className="home-link">Explore the Past</Link>
        <Link to="/present" className="home-link">Explore the Present</Link>
      </div>
    </div>
  );
};

export default Home;
