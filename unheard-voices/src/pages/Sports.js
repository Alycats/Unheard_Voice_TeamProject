import React from 'react';
import Quiz from '../components/Quiz';

// Default Sports Quiz Questions
const sportsQuestions = [
  {
    question: "What should you do before a training session?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "What will happen if you tell the child all the information of the lesson all at once?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "When teaching the child, what teaching approach should you go by?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "Which one of these sports DON'T require a high level of communication?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "Which swimming stroke uses both arms moving together on the same side?",
    options: ["Butterfly", "Breaststroke", "Sidestroke", "Trudgen"],
    correctAnswer: "Butterfly",
  },
  {
    question: "What is '3 strikes in a row' called in bowling?",
    options: ["A turkey", "Hambone", "Double", "Golden Turkey"],
    correctAnswer: "A turkey",
  },
  {
    question: "Which country has the most Olympic gold medals in swimming?",
    options: ["China", "The USA", "The UK", "Australia"],
    correctAnswer: "The USA",
  },
  {
    question: "What is the name of the area on which the game of tennis is played?",
    options: ["Pitch", "Court", "Field", "Rink"],
    correctAnswer: "Court",
  },
  {
    question: "In which district of London is a very famous tennis tournament held each year?",
    options: ["Barking", "Wimbledon", "Chelsea", "Walthamstow"],
    correctAnswer: "Wimbledon",
  },
  {
    question: "Who holds the men’s world record for the 100 meters sprint?",
    options: ["Usain Bolt", "Carl Lewis", "Justin Gatlin", "Noah Lyles"],
    correctAnswer: "Usain Bolt",
  },
];

function Sports() {
  return (
    <div>
      <h1>Sports and Autism</h1>
      <p>Explore how sports can help children with autism develop social skills, improve motor coordination, and more.</p>

      {/* Quiz component with the sportsQuestions */}
      <Quiz questions={sportsQuestions} />
    </div>
  );
}

export default Sports;