import React from 'react';
import Quiz from '../components/Quiz';

const languageQuestions = [
  {
    question: "At what age should a child typically start saying simple words like mama or dada with meaning",
    options: ["6 months", "12 months", "18 months", "24 months"],
    correctAnswer: "Option B",
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

function Language() {
  return (
    <div>
      <h1>Language Development and Autism</h1>
      <p>Understand how language development differs in children with autism and the strategies that can support their communication skills.</p>

      <Quiz questions={languageQuestions} />
    </div>
  );
}

export default Language;