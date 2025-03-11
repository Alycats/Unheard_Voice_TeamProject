import React, { useState } from "react";
import "../styles/Technology.css"; // Ensure this is imported

function QuizSmall({ questions, evaluationMessage }) {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setShowResults(true);
  };

  return (
    <div className="quiz-container">
      {questions.map((question, index) => (
        <div key={index} className="quiz-question-container">
          <p className="quiz-question">{question.question}</p>
          <div className="quiz-options">
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} className="quiz-option">
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
        </div>
      ))}

      <button className="quiz-submit-btn" onClick={handleSubmit} disabled={showResults}>
        Submit Quiz
      </button>

      {showResults && (
        <div className="quiz-results">
          <h3>Your Score: {score} / {questions.length}</h3>
          <p>{evaluationMessage(score)}</p>
          <h4>Review Your Answers:</h4>
          {questions.map((question, index) => (
            <div key={index} className="quiz-review">
              <p><strong>{question.question}</strong></p>
              <p>Your Answer: <strong>{userAnswers[index]}</strong></p>
              <p>
                {userAnswers[index] !== question.correctAnswer ? (
                  <span className="incorrect-answer">Incorrect (Correct Answer: {question.correctAnswer})</span>
                ) : (
                  <span className="correct-answer">Correct</span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizSmall;
