import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link from React Router
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our Autism Awareness Website! 💙💛</h1>
      <p className="home-description">
        Explore various topics about autism, from sensory challenges to the role of technology.
      </p>
      <div className="home-content">
        <p className="home-text">
          Our goal is to provide resources, support, and a deeper understanding of autism.
          Click on the topics below to learn more!
        </p>
      </div>

      <ul className="nav-links">
        <li><Link to="/sports" className="nav-button sports">🏀 Sports</Link></li>
        <li><Link to="/technology" className="nav-button technology">💻 Technology</Link></li>
        <li><Link to="/sensory" className="nav-button sensory">🧩 Sensory</Link></li>
        <li><Link to="/language" className="nav-button language">🗣️ Language</Link></li>
      </ul>
    </div>
  );
}

export default Home;