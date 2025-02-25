import React from 'react';
import Quiz from '../components/Quiz';
import VideoClip from '../components/Youtube-Video';
import Lesson from '../components/Lesson-Row';

// Default Sports Quiz Questions
const sportsQuestions = [
  {
    question: "What should you do before a training session?",
    options: ["Meet the child before the first lesson showing the sports equiptment that will be used", "Play with the equiptment till everyone arrives", "Set everything up and wait", "Stretch"],
    correctAnswer: "Meet the child before the first lesson showing the sports equiptment that will be used",
  },
  {
    question: "What will happen if you tell the child all the information of the lesson all at once?",
    options: ["They will take the information and know what to do instantly", "They will understand everything first time", "They wont listen", "They will be overwhelmed"],
    correctAnswer: "They will be overwhelmed",
  },
  {
    question: "When teaching the child, what teaching approach should you go by?",
    options: ["Demonstrate what's about to happen and what you need to be done and show it in small segments", "Speak and they will follow based on what you said", "Show and they will just copy what you done", "Just put the stuff out and expect them to make a guess"],
    correctAnswer: "Demonstrate what's about to happen and what you need to be done and show it in small segments",
  },
  {
    question: "Which one of these sports DON'T require a high level of communication?",
    options: ["Football", "Basketball", "Ice Hockey", "Tennis(Singles)"],
    correctAnswer: "Tennis(Singles)",
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
      <h2>Teaching sports with children with Autism</h2>
      <Lesson/>
      <VideoClip/>

      {/* Quiz component with the sportsQuestions */}
      <Quiz questions={sportsQuestions} />
    </div>
  );
}

export default Sports;

