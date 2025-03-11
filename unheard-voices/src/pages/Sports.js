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

// Default Sports Lesson Content
const sportsLessons = [
  {
    title: "Lesson 1",
    content: "Before you start to coach a child that has autism, not every child is the same, and what may work for one child doesn't mean it will work for the other child. Giving a child a series of steps to take in all at once will be difficult for them and quite overwhelming."
  },
  {
    title: "Lesson 2",
    content: "To teach a child with autism sports to make things easier for the child to settle in, meet the child before the first lesson and show them the sports equipment that will be used ahead of time. This way, the child isn’t overwhelmed with all the information at once."
  },
  {
    title: "Lesson 3",
    content: "For each practice, make sure to have a repeated routine every time so that the child gets used to the order. Avoid sarcasm, metaphors, and humor as they may confuse children with autism."
  },
  {
    title: "Lesson 4",
    content: "Some sports don't require a high level of communication or even team play, so certain sports like swimming, track and field, bowling, and others will be more effective and enjoyable for children with autism."
  },
];

function Sports() {
  return (
    <div>
      <h1>Sports and Autism</h1>
      <p>Explore how sports can help children with autism develop social skills, improve motor coordination, and more.</p>
      <h2>Teaching sports with children with Autism</h2>
      
      {/* Pass the sportsLessons data as a prop to the Lesson component */}
      <Lesson lessons={sportsLessons} />
      
      <VideoClip />
      
      {/* Quiz component with the sportsQuestions */}
      <p>Need 40% to use Reward below Quiz</p>
      <Quiz questions={sportsQuestions} />
      
      <p>Reward down below</p>
      <p>Down below is a following red dot. It follows the cursor around</p>
      <p></p>
    </div>
  );
}

export default Sports;
