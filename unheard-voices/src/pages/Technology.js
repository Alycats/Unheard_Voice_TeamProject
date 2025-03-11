import React, { useState } from 'react';
import Lesson from '../components/Lesson-Row';
import Card from '../components/Card'; 
import QuizSmall from '../components/QuizSmall';
import Quiz from '../components/Quiz';
import '../styles/Technology.css';

// Questions for the final quiz
const technologyQuestions = [
  {
    question: "What is the primary goal of assistive technology in autism therapy?",
    options: ["Entertainment", "Improved communication", "Social media use", "Video gaming"],
    correctAnswer: "Improved communication",
  },
  {
    question: "Which of these technologies is often used for speech therapy?",
    options: ["Virtual reality", "AAC devices", "Fitness trackers", "Smart TVs"],
    correctAnswer: "AAC devices",
  },
  {
    question: "How does virtual reality help individuals with autism?",
    options: ["Enhances learning in a controlled environment", "Increases stress", "Replaces social interactions", "None of the above"],
    correctAnswer: "Enhances learning in a controlled environment",
  },
  {
    question: "Which of the following can help children with autism develop daily life skills?",
    options: ["Task management apps", "Gaming consoles", "Books", "Board games"],
    correctAnswer: "Task management apps",
  },
  {
    question: "What is the role of AI in autism support?",
    options: ["Predicting behaviors", "Replacing therapists", "Reducing social interactions", "None of the above"],
    correctAnswer: "Predicting behaviors",
  },
];

const evaluationMessage = (score) => {
  if (score === 0) return "Better luck next time!";
  if (score === technologyQuestions.length) return "Excellent!";
  return "Good job!";
};

// Lessons Data with two Cards per lesson
const lessons = [
  {
    title: "Lesson 1: Introduction to Technology and Autism",
    sections: [
      {
        title: "What is Autism?",
        content: "Autism is a developmental disorder that affects communication, behavior, and social interaction."
      },
      {
        title: "Technology's Role",
        content: "Technology plays an important role in aiding communication and learning for individuals with autism."
      }
    ],
    cards: [
      {
        title: "Technology in Autism Support",
        content: "Innovative solutions have emerged to help individuals with autism.",
        listItems: ["Communication Apps", "Speech Devices", "Virtual Reality"],
        isFlippable: true
      },
      {
        title: "Communication Tools",
        content: "Various tools help non-verbal children communicate more effectively.",
        listItems: ["Speech Apps", "AAC Devices", "Tablets"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "Which technology helps with speech for non-verbal children?",
        options: ["Smart TVs", "AAC Devices", "Gaming Consoles", "Tablets"],
        correctAnswer: "AAC Devices",
      },
      {
        question: "What tool is used to help autistic children learn daily routines?",
        options: ["Task Management Apps", "Books", "Calendars", "None of the above"],
        correctAnswer: "Task Management Apps",
      }
    ]
  },
  {
    title: "Lesson 2: Communication Technologies",
    sections: [
      {
        title: "AAC Devices",
        content: "Augmentative and Alternative Communication (AAC) devices help non-verbal individuals communicate."
      },
      {
        title: "Speech-to-Text Software",
        content: "Speech-to-text software helps those with speech difficulties communicate through text."
      }
    ],
    cards: [
      {
        title: "Top Communication Technologies",
        content: "Assistive technologies have made a huge impact.",
        listItems: ["Text-to-Speech Software", "Wearable Communication Devices", "Voice Assistants"],
        isFlippable: true
      },
      {
        title: "Voice Assistance",
        content: "Voice assistants help people with disabilities perform everyday tasks.",
        listItems: ["Amazon Alexa", "Google Assistant", "Apple Siri"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "What does AAC stand for?",
        options: ["Alternative Autism Care", "Augmentative and Alternative Communication", "Advanced Audio Communication", "None of the above"],
        correctAnswer: "Augmentative and Alternative Communication",
      },
      {
        question: "Which technology helps translate speech into text?",
        options: ["Tablets", "Speech-to-Text Software", "Smartphones", "Video Games"],
        correctAnswer: "Speech-to-Text Software",
      }
    ]
  },
  {
    title: "Lesson 3: Learning Tools",
    sections: [
      {
        title: "Educational Apps",
        content: "Many apps are designed to support learning and engagement for children with autism."
      },
      {
        title: "Gamification in Learning",
        content: "Games can help children with autism develop cognitive and motor skills."
      }
    ],
    cards: [
      {
        title: "Interactive Learning",
        content: "Technology-based learning can be engaging and effective.",
        listItems: ["Interactive Games", "Personalized Learning Plans", "AI Tutors"],
        isFlippable: true
      },
      {
        title: "Personalized Learning",
        content: "Technology enables tailored learning experiences for children with autism.",
        listItems: ["Learning Apps", "Gamification", "Adaptive Learning Programs"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "Which of these is an example of an educational tool?",
        options: ["Gaming consoles", "Augmented reality apps", "Smart TVs", "Music players"],
        correctAnswer: "Augmented reality apps",
      },
      {
        question: "How do games help children with autism?",
        options: ["Improve focus", "Reduce engagement", "Replace human interaction", "None of the above"],
        correctAnswer: "Improve focus",
      }
    ]
  },
  {
    title: "Lesson 4: Sensory and Social Skills Technology",
    sections: [
      {
        title: "Sensory Processing Tools",
        content: "Noise-canceling headphones and other tools help manage sensory overload."
      },
      {
        title: "Social Skill Development Apps",
        content: "These apps help children with autism learn social cues and interactions."
      }
    ],
    cards: [
      {
        title: "Technology for Sensory Support",
        content: "Tools designed to assist with sensory processing and social development.",
        listItems: ["Noise-Canceling Headphones", "Social Story Apps", "Wearable Therapy Devices"],
        isFlippable: true
      },
      {
        title: "Social Skills Enhancement",
        content: "Technology aids children in developing social skills in a structured manner.",
        listItems: ["Virtual Social Scenarios", "Role Play Apps", "AI Companions"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "Which device helps manage sensory overload?",
        options: ["Gaming console", "Noise-canceling headphones", "Books", "TV"],
        correctAnswer: "Noise-canceling headphones",
      },
      {
        question: "What do social skill development apps help with?",
        options: ["Math learning", "Recognizing social cues", "Physical fitness", "None of the above"],
        correctAnswer: "Recognizing social cues",
      }
    ]
  }
];

function Technology() {
  const [openLesson, setOpenLesson] = useState(null);

  const toggleLesson = (index) => {
    setOpenLesson(openLesson === index ? null : index);
  };

  return (
    <div>
      <h1>Technology and Autism</h1>
      <p>Discover how technology is being used to help children with autism communicate, learn, and engage more effectively.</p>

      {/* Loop through lessons */}
      {lessons.map((lesson, index) => (
        <div key={index} className="lesson">
          {/* Lesson Toggle Button */}
          <button 
            onClick={() => toggleLesson(index)} 
            className="lesson-button"
          >
            {lesson.title} {openLesson === index ? "▲" : "▼"}
          </button>

          {/* Lesson Content */}
          {openLesson === index && (
            <div className="lesson-content">
              {/* Sections */}
              <Lesson lessons={lesson.sections || []} />

              {/* Cards - Two cards displayed side by side */}
              <div className="cards-container">
                {lesson.cards && lesson.cards.map((card, i) => (
                  <Card 
                    key={i} 
                    title={card.title} 
                    content={card.content} 
                    listItems={card.listItems} 
                    isFlippable={card.isFlippable}
                  />
                ))}
              </div>

              {/* Small Quiz */}
              <QuizSmall 
                questions={lesson.quizSmall} 
                evaluationMessage={evaluationMessage} 
              />
            </div>
          )}
        </div>
      ))}

      {/* Main Quiz */}
      <h2 style={{ marginTop: "40px" }}>Final Quiz: Technology and Autism</h2>
      <Quiz questions={technologyQuestions} />
    </div>
  );
}

export default Technology;
