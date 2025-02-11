import React from 'react';
import Quiz from '../components/Quiz';

const sensoryQuestions = [
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

function Sensory() {
  return (
    <div>
      <h1>Sensory Challenges and Autism</h1>
      <p>Learn about the sensory processing challenges that many individuals with autism face and how to address them.</p>

      <Quiz questions={sensoryQuestions} />
    </div>
  );
}

export default Sensory;