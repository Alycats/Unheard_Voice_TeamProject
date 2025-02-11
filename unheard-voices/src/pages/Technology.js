import React from 'react';
import Quiz from '../components/Quiz';

// Default Technology Quiz Questions
const technologyQuestions = [
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

function Technology() {
  return (
    <div>
      <h1>Technology and Autism</h1>
      <p>Discover how technology is being used to help children with autism communicate, learn, and engage more effectively.</p>

      {/* Quiz component with the technologyQuestions */}
      <Quiz questions={technologyQuestions} />
    </div>
  );
}

export default Technology;