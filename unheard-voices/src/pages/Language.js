// LanguagePage.js
import React from 'react';
import QuizSmall from '../components/QuizSmall';
import Lesson from '../components/Lesson-Row';
import Quiz from '../components/Quiz';
import AnimalFlashcardGame from '../components/AnimalFlashcardGame'

// Dropdown Content for Milestone Explanation
const lessons = [
  {
    title: "What is Language Development?",
    content: "Language development refers to the process by which children learn to understand and use language. For children with autism, this process may occur differently or at a different pace. Early intervention and support can help improve communication skills."
    
  },
  {
    title: "Common Language Challenges in Autism",
    content: "Autistic children may experience challenges such as delayed speech, difficulty understanding social cues, repetitive language, or trouble with conversational skills. Speech therapy and tailored educational programs can help address these challenges."
  },
  {
    title: "How to Support Language Development",
    content: "To support language development, engage your child in interactive activities, use visual aids, encourage imitation, and provide a language-rich environment. Working with speech therapists and educators can also be beneficial."
  },
  {
    title: "Signs of Language Delays",
    content: "Signs of language delays include limited vocabulary, difficulty forming sentences, lack of response to their name, and trouble following simple instructions. If you notice these signs, consult a pediatrician or speech therapist for evaluation."
  }
];
const languageQuestions = [
  {
    question: "At what age should a child typically start saying simple words like mama or dada with meaning?",
    options: ["6 months", "12 months", "18 months", "24 months"],
    correctAnswer: "12 months",
  },
  {
    question: "By age 2, how many words should a child's vocabulary typically include?",
    options: ["10-20 words", "50+ words", "100+ words", "200+ words"],
    correctAnswer: "50+ words",
  },
  {
    question: "Which of the following is a key sign that a 3-year-old is developing language skills appropriately?",
    options: ["Can put together 2-3 word sentences", "Only babbles and gestures instead of using words", "Rarely responds to their name when called", "Struggles to imitate sounds or words"],
    correctAnswer: "Can put together 2-3 word sentences",
  },
  {
    question: "By what age should a child be able to follow simple one-step instructions, such as give me the ball?",
    options: ["14 months", "16 months", "18 months", "12 months"],
    correctAnswer: "12 months",
  },
  {
    question: "When should a child begin to use pronouns like I, you, and me?",
    options: ["12-18 months", "18-24 months", "2-3 years", "3-4 years"],
    correctAnswer: "2-3 years",
  },
];

// Smaller Quiz Questions
const smallerQuizQuestions = [
  {
    question: "At what age should a child typically say their first word?",
    options: ["6 months", "12 months", "18 months"],
    correctAnswer: "12 months",
  },
  {
    question: "By age 2, a child should be able to use how many words?",
    options: ["10-20 words", "30-50 words", "100+ words"],
    correctAnswer: "30-50 words",
  },
  {
    question: "At what age should a child combine two words together?",
    options: ["18-24 months", "2-3 years", "3-4 years"],
    correctAnswer: "18-24 months",
  },
];

// Evaluation message function for the smaller quiz
const evaluationMessage = (score) => {
  if (score === smallerQuizQuestions.length) {
    return "Great job! You're on track with the language milestones.";
  } else if (score >= smallerQuizQuestions.length / 2) {
    return "Good effort! Some areas may need more attention.";
  } else {
    return "It seems there might be some language development delays. Consider consulting a pediatrician.";
  }
};

function LanguagePage() {
  return (
    <div>
      <h1>Understanding Language Milestones</h1>
      <p>A quick quiz to test your knowledge of early language milestones!</p>

      {/* Dropdowns for detailed information */}
      <Lesson lessons={lessons} />

      {/* Render the smaller quiz here */}
      <h2>Quick Quiz: Early Language Milestones</h2>
      <QuizSmall questions={smallerQuizQuestions} evaluationMessage={evaluationMessage} />
      <h2 style={{ marginTop: '40px' }}>Animal Flashcard Game</h2>
      <p>Flip the cards to learn about animals and hear their sounds! 🐯🦁🐶🐱🐦</p>
      <AnimalFlashcardGame />
      <Quiz questions={languageQuestions} />
    </div>
  );
}

export default LanguagePage;
