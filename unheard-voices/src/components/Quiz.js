import React, { useState } from 'react';
import '../styles/Quiz.css';

const Quiz = ({ questions }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [quizActive, setQuizActive] = useState(false); // Controls quiz visibility
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { question, options, correctAnswer } = questions[activeQuestion];

  const startQuiz = () => {
    setQuizActive(true); // Show the quiz when button is clicked
  };

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 10,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer === correctAnswer);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const progressPercentage = ((activeQuestion + 1) / questions.length) * 100;

  return (
    <div>
      {/* Button to start the quiz */}
      {!quizActive && (
        <button className="start-quiz-btn" onClick={startQuiz}>
          Start Final Quiz
        </button>
      )}

      {/* Quiz will only show when quizActive is true */}
      {quizActive && (
        <div className="quiz-wrapper">
          <div className="quiz-container">
            {!showResult ? (
              <div>
                {/* Progress Bar */}
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>

                <div>
                  <span className="active-question-no">
                    {addLeadingZero(activeQuestion + 1)}
                  </span>
                  <span className="total-question">
                    /{addLeadingZero(questions.length)}
                  </span>
                </div>
                <h2>{question}</h2>
                <ul>
                  {options.map((answer, index) => (
                    <li
                      key={answer}
                      onClick={() => onAnswerSelected(answer, index)}
                      className={selectedAnswerIndex === index ? 'selected-answer' : null}
                    >
                      {answer}
                    </li>
                  ))}
                </ul>
                <div className="flex-right">
                  <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                    {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="result">
                <h3>Final Score</h3>
                <p>Points: <span>{result.score}</span></p>
                <p>Grade: <span>{calculateGrade(result.score)}</span></p>
                <button onClick={() => setQuizActive(false)}>Close Quiz</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Function to calculate letter grade
const calculateGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
};

export default Quiz;
