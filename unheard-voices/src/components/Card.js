import React from 'react';
import '../styles/Card.css';

const Card = ({ title, content, listItems, isFlippable = false }) => {
  return (
    <div className={`card-wrapper ${isFlippable ? 'flippable' : ''}`}>
      <div className="card-body">
        {/* Card Front */}
        <div className="card-front">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>

        {/* Card Back (if you have a list to show) */}
        {listItems && (
          <div className="card-back">
            <ul className="card-list">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
