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
    correctAnswer: "Covering ears or eyes",
  },
  {
    question: "Which of the following is a symptom of someone suffering from Hyposensitivity",
    options: ["Jumping or spinning around", "Minimising movement", "Covering ears or eyes", "avoiding touching anything"],
    correctAnswer: "Jumping or spinning around",
  },
  {
    question: "What is it called when someone suffering from hypersensitivity receives too much sensory input?",
    options: ["Sensory Shutdown", "Sensory Eruption", "Sensory Overload", "Sensory Meltdown"],
    correctAnswer: "Sensory Overload",
  },
  {
    question: "What is it called when someone suffering from hyposensitivity enters a state of searching for sensory input?",
    options: ["Stimming", "Sensory Searching", "Sensory Seeking", "Sensory Meltdown"],
    correctAnswer: "Sensory Seeking",
  },
  {
    question: "Which of the following is a symptom of sensory meltdown?",
    options: ["Lack of movement", "Escalating and overwhelming emotions", "Seizures", "Lack of communication"],
    correctAnswer: "Escalating and overwhelming emotions",
  },
  {
    question: "What is a way in which you can help someone suffering from a problem stemming from Hypersensitivity?",
    options: ["Ear defenders or other apparatus to reduce noise", "Weighted blankets or clothing that provide more pressure", "Frequent movement breaks", "Do nothing"],
    correctAnswer: "Ear defenders or other apparatus to reduce noise",
  },
  {
    question: "What is a way in which you can help someone suffering from a problem stemming from Hyposensitivity?",
    options: ["Offering fidget or chew toys", "Sunglasses or other eye covers", "Soft clothing", "Ignore them"],
    correctAnswer: "Offering fidget or chew toys",
  },
  {
    question: "What is stimming?",
    options: ["Frequent use of stimulants", "Actions taken to increase sensory stimulation", "Actions taken to reduce sensory stimulation", "Actions taken to increase mental stimulation"],
    correctAnswer: "Actions taken to increase sensory stimulation",
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