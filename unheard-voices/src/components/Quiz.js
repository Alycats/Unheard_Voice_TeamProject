import React, { useState } from 'react';
import '../styles/Quiz.css';

const Quiz = ({ questions }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { question, options, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
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
            <h3>Quiz Completed!</h3>
            <p>Total Questions: <span>{questions.length}</span></p>
            <p>Total Score: <span>{result.score}</span></p>
            <p>Correct Answers: <span>{result.correctAnswers}</span></p>
            <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
