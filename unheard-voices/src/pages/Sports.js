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
    question: "What will happen if you tell the child all the informationi at once?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "When teaching the childwhat teaching approach should you go by?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "Which one of these sports DON'T require a high level of communication?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "Question Herie",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "Question Here",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "Question Here",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "Question Here",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "Question Here",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
  },
  {
    question: "Question Here",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: "Option A",
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