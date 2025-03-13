import React, { useState } from 'react';
import Lesson from '../components/Lesson-Row';
import Card from '../components/Card';
import QuizSmall from '../components/QuizSmall';
import Quiz from '../components/Quiz';


// Questions for the final quiz
const languageQuestions = [
  {
    question: "What is the primary goal of language development tools in autism therapy?",
    options: ["Entertainment", "Improved communication", "Social media use", "Video gaming"],
    correctAnswer: "Improved communication",
  },
  {
    question: "Which of these tools is often used for language development in non-verbal children?",
    options: ["Virtual reality", "AAC devices", "Fitness trackers", "Smart TVs"],
    correctAnswer: "AAC devices",
  },
  {
    question: "How do language development apps help children with autism?",
    options: ["Enhance vocabulary and sentence structure", "Increase stress", "Replace social interactions", "None of the above"],
    correctAnswer: "Enhance vocabulary and sentence structure",
  },
  {
    question: "Which of the following is a key feature of language development tools?",
    options: ["Task management", "Visual supports", "Gaming", "None of the above"],
    correctAnswer: "Visual supports",
  },
  {
    question: "What role does repetition play in language development for autism?",
    options: ["It reinforces learning", "It reduces engagement", "It replaces human interaction", "None of the above"],
    correctAnswer: "It reinforces learning",
  },
  // New questions added below
  {
    question: "What is the purpose of using visual supports in language development?",
    options: ["To replace verbal communication", "To provide visual cues and structure", "To increase screen time", "None of the above"],
    correctAnswer: "To provide visual cues and structure",
  },
  {
    question: "Which of the following is an example of a low-tech AAC device?",
    options: ["Tablet with a communication app", "Picture exchange system", "Speech-generating device", "None of the above"],
    correctAnswer: "Picture exchange system",
  },
  {
    question: "How can social stories help children with autism?",
    options: ["By teaching social skills through narratives", "By replacing human interaction", "By increasing screen time", "None of the above"],
    correctAnswer: "By teaching social skills through narratives",
  },
  {
    question: "What is a common feature of language development apps for autism?",
    options: ["High-speed gaming", "Interactive and repetitive activities", "Complex mathematical problems", "None of the above"],
    correctAnswer: "Interactive and repetitive activities",
  },
  {
    question: "Why is early intervention important for language development in autism?",
    options: ["It delays progress", "It maximizes the child's learning potential", "It replaces the need for therapy", "None of the above"],
    correctAnswer: "It maximizes the child's learning potential",
  }
];


const evaluationMessage = (score) => {
  if (score === 0) return "Better luck next time!";
  if (score === languageQuestions.length) return "Excellent!";
  return "Good job!";
};

// Lessons Data with two Cards per lesson
const lessons = [
  {
    title: "Lesson 1: Introduction to Language Development in Autism",
    sections: [
      {
        title: "What is Autism?",
        content: "Autism is a developmental disorder that affects communication, behavior, and social interaction."
      },
      {
        title: "Language Development Challenges",
        content: "Children with autism often face challenges in developing language and communication skills."
      }
    ],
    cards: [
      {
        title: "Language Development Tools",
        content: "Innovative tools have been developed to support language acquisition in children with autism.",
        listItems: ["Communication Apps", "AAC Devices", "Visual Supports"],
        isFlippable: true
      },
      {
        title: "Communication Strategies",
        content: "Strategies like visual aids and repetition are used to enhance language skills.",
        listItems: ["Visual Schedules", "Social Stories", "Repetition Techniques"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "Which tool is commonly used for language development in autism?",
        options: ["Smart TVs", "AAC Devices", "Gaming Consoles", "Tablets"],
        correctAnswer: "AAC Devices",
      },
      {
        question: "What is a key strategy for language development?",
        options: ["Visual Supports", "Gaming", "Music", "None of the above"],
        correctAnswer: "Visual Supports",
      }
    ],
    
  },
  {
    title: "Lesson 2: Augmentative and Alternative Communication (AAC)",
    sections: [
      {
        title: "What is AAC?",
        content: "AAC refers to tools and strategies that help non-verbal individuals communicate effectively."
      },
      {
        title: "Types of AAC Devices",
        content: "AAC devices range from simple picture boards to advanced speech-generating devices."
      }
    ],
    cards: [
      {
        title: "Popular AAC Tools",
        content: "AAC tools are designed to support communication in various ways.",
        listItems: ["Picture Exchange Systems", "Speech-Generating Devices", "Tablet-Based Apps"],
        isFlippable: true
      },
      {
        title: "Benefits of AAC",
        content: "AAC devices help individuals express themselves and engage with others.",
        listItems: ["Improved Communication", "Increased Independence", "Enhanced Social Interaction"],
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
        question: "Which of these is an example of an AAC device?",
        options: ["Tablet-Based Apps", "Smartphones", "Video Games", "None of the above"],
        correctAnswer: "Tablet-Based Apps",
      }
    ]
  },
  {
    title: "Lesson 3: Language Development Apps",
    sections: [
      {
        title: "Role of Apps in Language Development",
        content: "Language development apps provide interactive and engaging ways to build communication skills."
      },
      {
        title: "Features of Effective Apps",
        content: "Effective apps use visual supports, repetition, and interactive activities to enhance learning."
      }
    ],
    cards: [
      {
        title: "Top Language Development Apps",
        content: "Apps designed to support language development in children with autism.",
        listItems: ["Proloquo2Go", "Language Therapy for Kids", "Endless Alphabet"],
        isFlippable: true
      },
      {
        title: "How Apps Help",
        content: "Apps provide structured and engaging ways to learn language skills.",
        listItems: ["Interactive Activities", "Visual Supports", "Progress Tracking"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "Which app is designed for language development?",
        options: ["Proloquo2Go", "Netflix", "Spotify", "None of the above"],
        correctAnswer: "Proloquo2Go",
      },
      {
        question: "What feature is common in language development apps?",
        options: ["Visual Supports", "Gaming", "Music", "None of the above"],
        correctAnswer: "Visual Supports",
      }
    ]
  },
  {
    title: "Lesson 4: Social Communication and Language",
    sections: [
      {
        title: "Social Communication Challenges",
        content: "Children with autism often struggle with understanding social cues and conversational skills."
      },
      {
        title: "Tools for Social Communication",
        content: "Tools like social stories and role-playing apps help children learn social communication skills."
      }
    ],
    cards: [
      {
        title: "Social Communication Tools",
        content: "Tools designed to help children with autism develop social communication skills.",
        listItems: ["Social Stories", "Role-Playing Apps", "Visual Scripts"],
        isFlippable: true
      },
      {
        title: "Benefits of Social Communication Tools",
        content: "These tools help children understand and engage in social interactions.",
        listItems: ["Improved Social Skills", "Better Conversational Abilities", "Enhanced Understanding of Social Cues"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "What tool helps children understand social cues?",
        options: ["Social Stories", "Gaming Consoles", "Books", "None of the above"],
        correctAnswer: "Social Stories",
      },
      {
        question: "Which of these is a benefit of social communication tools?",
        options: ["Improved Social Skills", "Reduced Engagement", "Replaces Human Interaction", "None of the above"],
        correctAnswer: "Improved Social Skills",
      }
    ]
  }
];

function Language() {
  const [openLesson, setOpenLesson] = useState(null);

  const toggleLesson = (index) => {
    setOpenLesson(openLesson === index ? null : index);
  };

  return (
    <div>
      <h1>Language Development in Autism</h1>
       
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BtadnbcbrXk?si=ye5bdrcmNpAao-BO" // Replace VIDEO_ID with the actual video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    
      <p>Explore tools and strategies to support language and communication development in children with autism.</p>

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

              {/* Embedded YouTube Video */}
              {lesson.videoEmbed && (
                <div className="video-embed">
                  <h3>Watch this video to learn more:</h3>
                  {lesson.videoEmbed}
                </div>
              )}

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
      <h2 style={{ marginTop: "40px" }}>Final Quiz: Language Development in Autism</h2>
      <Quiz questions={languageQuestions} />
    </div>
  );
}

export default Language;