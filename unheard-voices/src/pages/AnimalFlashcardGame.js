import React, { useState } from 'react';

// Animal data with image URLs and sound URLs
const animalData = [
    {
      name: 'Tiger',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg',
      sound: '', // Tiger Roar
    },
    {
      name: 'Lion',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
      sound: ''  // Lion Roar
    },
    {
      name: 'Dog',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg',
      sound: './src/sounds/dog.wav', // Dog Barking
    },
    {
      name: 'Cat',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg',
      sound: '', // Cat Meow
    },
    {
      name: 'Bird',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bird_Diversity_2013_Cropped.jpg/640px-Bird_Diversity_2013_Cropped.jpg',
      sound: '', // Bird Chirping
    },
    {
        name: 'Zebra',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Equus_zebra_hartmannae_-_Etosha_2015.jpg/640px-Equus_zebra_hartmannae_-_Etosha_2015.jpg',
        sound: '', // Bird Chirping
      },
  // Add more animals here
];

function AnimalFlashcardGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showName, setShowName] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % animalData.length);
    setShowName(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + animalData.length) % animalData.length);
    setShowName(false);
  };

  const handleFlip = () => {
    setShowName(!showName);
    // Play the animal sound
    const audio = new Audio(animalData[currentIndex].sound);
    audio.play();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Animal Flashcard Game</h2>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          margin: '10px auto',
          width: '300px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        }}
        onClick={handleFlip}
      >
        {showName ? (
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{animalData[currentIndex].name}</p>
        ) : (
          <img
            src={animalData[currentIndex].image}
            alt={animalData[currentIndex].name}
            style={{ width: '100%', borderRadius: '10px' }}
          />
        )}
      </div>
      <button onClick={handlePrevious} style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
        Previous
      </button>
      <button onClick={handleNext} style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
        Next
      </button>
    </div>
  );
}

export default AnimalFlashcardGame;