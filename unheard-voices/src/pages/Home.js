import React from 'react';
import '../styles/Home.css';
import holder from '../images/infinity-logo.jpg'

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our Autism Awareness Website! 💙💛</h1>
      <p className="home-description">
        Explore various topics about autism, from sensory challenges to the role of technology.
      </p>
      <div className="home-content">
        <img 
          /*src={holder} alt="holder"*/
          className="home-image"
        />
        <p className="home-text">
          Our goal is to provide resources, support, and a deeper understanding of autism.
          Click on the topics below to learn more!
        </p>
      </div>

      <ul className="nav-links">
        <li><a href="/sports" className="nav-button sports">🏀 Sports</a></li>
        <li><a href="/technology" className="nav-button technology">💻 Technology</a></li>
        <li><a href="/sensory" className="nav-button sensory">🧩 Sensory</a></li>
        <li><a href="/language" className="nav-button language">🗣️ Language</a></li>
      </ul>
    </div>
  );
}

export default Home;
