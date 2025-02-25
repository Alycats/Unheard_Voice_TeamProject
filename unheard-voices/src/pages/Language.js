import React, { useState } from 'react';
import AnimalFlashcardGame from './AnimalFlashcardGame'; // Import the AnimalFlashcardGame component

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

function Language() {
  const [userAnswers, setUserAnswers] = useState(Array(languageQuestions.length).fill(null));
  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    languageQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setShowResults(true);
  };

  const evaluationMessage = (score) => {
    if (score === languageQuestions.length) {
      return "Excellent! Your child is hitting all the key milestones.";
    } else if (score >= languageQuestions.length / 2) {
      return "Good job! Your child is progressing well, but some areas may need attention.";
    } else {
      return "It seems there might be some delays in language development. Consider discussing with a pediatrician.";
    }
  };

  return (
    <div>
      <h1>Understanding Language Development in Autism</h1>
      <p>A fun and interactive quiz to help you see if your child is reaching important language milestones! 😊</p>

      {/* Quiz Section */}
      {languageQuestions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={userAnswers[index] === option}
                onChange={() => handleAnswerChange(index, option)}
                disabled={showResults}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit} disabled={showResults}>Submit Quiz</button>

      {/* Quiz Results Section */}
      {showResults && (
        <div>
          <h3>Your Score: {score} / {languageQuestions.length}</h3>
          <p>{evaluationMessage(score)}</p>
          <h4>Review Your Answers:</h4>
          {languageQuestions.map((question, index) => (
            <div key={index}>
              <p><strong>{question.question}</strong></p>
              <p>Your Answer: <strong>{userAnswers[index]}</strong></p>
              <p>
                {userAnswers[index] !== question.correctAnswer ? (
                  <span style={{ color: 'red' }}>Incorrect (Correct Answer: {question.correctAnswer})</span>
                ) : (
                  <span style={{ color: 'green' }}>Correct</span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Flashcard Game Section */}
      <h2 style={{ marginTop: '40px' }}>Interactive Game</h2>
      <p>Flip the cards to learn about animals and hear their sounds! 🐯🦁🐶🐱🐦</p>
      <AnimalFlashcardGame />
    </div>
  );
}

export default Language;