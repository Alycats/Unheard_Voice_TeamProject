import React from 'react';
import Quiz from '../components/Quiz';

const sensoryQuestions = [
  {
    question: "What is the name given to a person who struggles with too much sensory input?",
    options: ["Hyposensitive", "Hypersensitive", "Autistic", "Supersensitive"],
    correctAnswer: "Hypersensitive",
  },
  {
    question: "What is the name given to a person who struggles with not enough input?",
    options: ["Hypersensitive", "Hyposensitive", "Autistic", "Subsensitive"],
    correctAnswer: "Hyposensitive",
  },
  {
    question: "Which of the following is a symptom of someone suffering from Hypersensitivity?",
    options: ["Covering ears or eyes", "Jumping or spinning around", "Making lots of noise", "Touching lots of things"],
    correctAnswer: "Option A",
  },
  {
    question: "Which of the following is a symptom of someone suffering from Hyposensitivity",
    options: ["Jumping or spinning around", "Minimising movement", "Covering ears or eyes", "avoiding touching anything"],
    correctAnswer: "",
  },
  {
    question: "What is it called when someone suffering from hypersensitivity receives too much sensory input?",
    options: ["Sensory Shutdown", "Sensory Eruption", "Sensory Overload", "Sensory Meltdown"],
    correctAnswer: "Sensory Overload",
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