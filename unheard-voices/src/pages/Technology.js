import React, { useState } from 'react';
import Lesson from '../components/Lesson-Row';
import Card from '../components/Card'; 
import QuizSmall from '../components/QuizSmall';
import Quiz from '../components/Quiz';
import '../styles/Technology.css';

// Questions for the final quiz
const technologyQuestions = [
  {
    question: "What is the primary benefit of video games for autistic individuals?",
    options: ["Improves cognitive and social skills", "Replaces traditional therapy", "Encourages isolation", "Has no educational value"],
    correctAnswer: "Improves cognitive and social skills",
  },
  {
    question: "How can parents ensure healthy gaming habits for autistic children?",
    options: ["Allow unlimited screen time", "Encourage breaks and set time limits", "Discourage gaming completely", "Only allow non-digital activities"],
    correctAnswer: "Encourage breaks and set time limits",
  },
  {
    question: "Which type of technology is commonly used to assist with communication for non-verbal autistic individuals?",
    options: ["Smart TVs", "AAC Devices", "Gaming Consoles", "Fitness Trackers"],
    correctAnswer: "AAC Devices",
  },
  {
    question: "How does gamification help children with autism?",
    options: ["Improves engagement and learning", "Increases stress levels", "Eliminates the need for social interaction", "None of the above"],
    correctAnswer: "Improves engagement and learning",
  },
  {
    question: "What is the purpose of educational apps for autistic individuals?",
    options: ["To provide structured and interactive learning", "To replace classroom education", "To limit social interaction", "To increase screen time"],
    correctAnswer: "To provide structured and interactive learning",
  },
  {
    question: "What role does AI play in autism support?",
    options: ["Predicting behaviors and providing personalized learning", "Replacing therapists", "Encouraging social withdrawal", "None of the above"],
    correctAnswer: "Predicting behaviors and providing personalized learning",
  },
  {
    question: "How does virtual reality support autism therapy?",
    options: ["Creates a controlled learning environment", "Replaces human interaction", "Increases sensory overload", "None of the above"],
    correctAnswer: "Creates a controlled learning environment",
  },
  {
    question: "Which tool can help autistic children develop daily routines?",
    options: ["Task Management Apps", "Gaming Consoles", "Books", "Board Games"],
    correctAnswer: "Task Management Apps",
  },
  {
    question: "Which device can help manage sensory overload?",
    options: ["Noise-canceling headphones", "Tablets", "Virtual reality headsets", "Gaming consoles"],
    correctAnswer: "Noise-canceling headphones",
  },
  {
    question: "What is one way social skill development apps help autistic individuals?",
    options: ["Teach social cues in a structured way", "Eliminate the need for face-to-face interaction", "Encourage isolation", "None of the above"],
    correctAnswer: "Teach social cues in a structured way",
  }
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
        title: "What is Autism Spectrum Disorder?",
        content: "Autidm spectrum disorder is a neurological and developmental disorder that affects how people interact with others, communincate, learn, and behave. Autism is often diagnosed when a person is younger which is why it can be described as a developmental disorder."
      },
      {
        title: "Technology's Role",
        content: "Numerous studies have shown that individuals with autism are often drawn to technology, and many of them possess the ability to use computers and learn effectively through their use. Some research suggests that this is because computers offer a sense of predictability and structure which helps people with autism to feel more secure in that they can know what to expect. They may also engage in repetitive behaviors when using technology which is a characteristic of autism spectrum disorder."
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
      title: "Lesson 3: Gaming and Learning for Autism",
      sections: [
        {
          title: "Educational Games",
          content: "Video games and educational apps have become powerful tools in supporting the development of children with autism. Many games are designed to enhance cognitive functions, such as memory, attention, and problem-solving. Interactive learning experiences allow children to engage with content in a structured, predictable manner, making it easier for them to retain information. Games that incorporate social elements can also help autistic individuals practice communication skills in a low-pressure environment."
        },
        {
          title: "Healthy Gaming Habits",
          content: "While gaming offers many cognitive and social benefits, it is important to encourage a balanced approach to screen time. Excessive gaming can lead to disrupted sleep, increased anxiety, and difficulties with social interactions in the real world. Parents and caregivers should guide children in setting time limits, taking regular breaks, and choosing age-appropriate and educational games. Moderation and structured playtime ensure that gaming remains a positive and beneficial tool rather than a distraction from other important activities like physical exercise and face-to-face communication."
        }
      ],
      cards: [
        {
          title: "Benefits of Gaming",
          content: "Gaming provides a structured and engaging way to build essential life skills. Many games designed for autistic individuals focus on strengthening cognitive, motor, and social skills in a way that feels natural and enjoyable. For example, puzzle games improve logical thinking, while role-playing games (RPGs) can teach problem-solving and strategic planning. Multiplayer games can also help autistic individuals develop teamwork and social communication skills in a controlled environment.",
          listItems: ["Problem-Solving", "Creativity Boost", "Social Interaction", "Cognitive Skill Development"],
          isFlippable: true
        },
        {
          title: "Healthy Gaming Tips",
          content: "To maximize the benefits of gaming while avoiding potential drawbacks, it is important to establish healthy gaming habits. Encouraging structured playtime and setting clear boundaries can help autistic individuals enjoy gaming without it interfering with other aspects of their daily routine. Parents and caregivers should also be mindful of the types of games children play, ensuring they promote positive learning experiences.",
          listItems: ["Set Time Limits", "Encourage Breaks", "Monitor Content", "Choose Educational Games"],
          isFlippable: false
        }
      ],
      quizSmall: [
        {
          question: "How can gaming benefit autistic individuals?",
          options: ["Improve problem-solving", "Increase stress", "Reduce learning ability", "None of the above"],
          correctAnswer: "Improve problem-solving",
        },
        {
          question: "Why is it important to set gaming time limits?",
          options: ["To ensure a balanced routine", "To stop children from having fun", "Because games have no benefits", "To eliminate screen time completely"],
          correctAnswer: "To ensure a balanced routine",
        },
        {
          question: "What type of games can help autistic individuals develop social skills?",
          options: ["Single-player puzzle games", "Role-playing and multiplayer games", "First-person shooter games", "None of the above"],
          correctAnswer: "Role-playing and multiplayer games",
        },
        {
          question: "Which of the following is a healthy gaming habit?",
          options: ["Skipping meals to play longer", "Playing for 10 hours straight", "Taking regular breaks", "Avoiding all video games"],
          correctAnswer: "Taking regular breaks",
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
