import React, { useState } from 'react';
import Lesson from '../components/Lesson-Row';
import Card from '../components/Card'; 
import QuizSmall from '../components/QuizSmall';
import Quiz from '../components/Quiz';
import '../styles/Technology.css';

// Questions for the final quiz
const sensoryQuestions = [
  {
    question: "What is the name given to a person who struggles with too much sensory input?",
    options: ["Hyposensitive", "Hypersensitive", "Autistic", "Supersensitive"],
    correctAnswer: "Hypersensitive",
  },
  {
    question: "What is the name given to a person who struggles with not enough input?",
    options: ["Hypersensitive", "Hyposensitive", "Autistic", "Subsensitive"],
    correctAnswer: "Hyposensitive",
  },
  {
    question: "Which of the following is a symptom of someone suffering from Hypersensitivity?",
    options: ["Covering ears or eyes", "Jumping or spinning around", "Making lots of noise", "Touching lots of things"],
    correctAnswer: "Covering ears or eyes",
  },
  {
    question: "Which of the following is a symptom of someone suffering from Hyposensitivity",
    options: ["Jumping or spinning around", "Minimising movement", "Covering ears or eyes", "avoiding touching anything"],
    correctAnswer: "Jumping or spinning around",
  },
  {
    question: "What is it called when someone suffering from hypersensitivity receives too much sensory input?",
    options: ["Sensory Shutdown", "Sensory Eruption", "Sensory Overload", "Sensory Meltdown"],
    correctAnswer: "Sensory Overload",
  },
  {
    question: "What is it called when someone suffering from hyposensitivity enters a state of searching for sensory input?",
    options: ["Stimming", "Sensory Searching", "Sensory Seeking", "Sensory Meltdown"],
    correctAnswer: "Sensory Seeking",
  },
  {
    question: "Which of the following is a symptom of sensory overload?",
    options: ["Lack of movement", "Escalating and overwhelming emotions", "Seizures", "Lack of communication"],
    correctAnswer: "Escalating and overwhelming emotions",
  },
  {
    question: "What is a way in which you can help someone suffering from a problem stemming from Hypersensitivity?",
    options: ["Ear defenders or other apparatus to reduce noise", "Weighted blankets or clothing that provide more pressure", "Frequent movement breaks", "Do nothing"],
    correctAnswer: "Ear defenders or other apparatus to reduce noise",
  },
  {
    question: "What is a way in which you can help someone suffering from a problem stemming from Hyposensitivity?",
    options: ["Offering fidget or chew toys", "Sunglasses or other eye covers", "Soft clothing", "Ignore them"],
    correctAnswer: "Offering fidget or chew toys",
  },
  {
    question: "What is stimming?",
    options: ["Frequent use of stimulants", "Actions taken to increase sensory stimulation", "Actions taken to reduce sensory stimulation", "Actions taken to increase mental stimulation"],
    correctAnswer: "Actions taken to increase sensory stimulation",
  },
];


const evaluationMessage = (score) => {
  if (score === 0) return "Better luck next time!";
  if (score === sensoryQuestions.length) return "Excellent!";
  return "Good job!";
};

// Lessons Data with two Cards per lesson
const lessons = [
  {
    title: "Lesson 1: Introduction to Sensory Difficulties and Autism",
    sections: [
      {
        title: "What is Autism?",
        content: "Autism is a developmental disorder that affects communication, behavior, and social interaction."
      },
      {
        title: "Types of Sensory Difficulties",
        content: "Sensory difficulties in people with autism generally fall into one of two categories: Hypersensitivity and Hyposensitivity"
      }
    ],
    cards: [
      {
        title: "What is Hypersensitivity",
        content: "Learn the definition of Hypersensitivity",
        listItems: ["Hypersensitivity is a variant of sensory difficulties in people with autism. People who suffer from this experience an excess of sensory input and tend to employ a technique called sensory avoidance to reduce exposure to sensory input that most people can easily tune out"],
        isFlippable: true
      },
      {
        title: "What is Hyposensitivity?",
        content: "Learn the definition of Hyposensitivity",
        listItems: ["Hyposensitivity is a variant of sensory difficulties in people with autism. People who suffer from this experience an extreme lack of sensory input and tend to employ a technique called sensory seeking to increase their sensory input"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "Which of the following decribes someone who suffers from too little sensory input?",
        options: ["Hypersensitive", "Hyposensitive", "Autistic", "Subsensitive"],
        correctAnswer: "Hyposensitive",
      },
      {
        question: "Which of the following descibes someone who suffers from too mcuh sensory input?",
        options: ["Hypersensitive", "Hyposensitive", "Autistic", "Supersensitive"],
        correctAnswer: "Hypersensitive",
      }
    ]
  },
  {
    title: "Lesson 2: Struggles with Hypersensitivity",
    sections: [
      {
        title: "What is Hypersensitivity?",
        content: "Hypersensitivity is a variant of sensory difficulties in people with autism. People who suffer from this experience an excess of sensory input which most people can easily tune out"
      },
      {
        title: "How do people with Hypersensitivity cope?",
        content: "Those suffering with Hypersensitivity tend to employ a technique called Sensory Avoidance. This means they take actions to reduce their sensory input so they can cope with excessive amounts"
      }
    ],
    cards: [
      {
        title: "Difficulties with Hypersensitivity",
        content: "Stimuli which cause people with Hypersensitivty to experience difficulty",
        listItems: ["Bright lights", "Loud or unpredictable sounds", "Potent smells", "Certain textures", "Strong tastes"],
        isFlippable: true
      },
      {
        title: "Helping Hypersensitive people",
        content: "Ways in which you can aid someone struggling with Hypersensitivity",
        listItems: ["Sunglasses to shut out bright light", "Ear plugs/defenders or headphones in loud environments", "Avoiding products with strong smells or tastes", "Soft, comfortable clothing", "Avoiding large crowds whenever possible"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "Which of the following are stimuli causing difficulty for Hypersensitive people?",
        options: ["Bright lights", "Loud noises", "Potent smells", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "Which of the following is a way in which you can help someone suffering from Hypersensitivity?",
        options: ["Weighted blankets or heavy clothing", "Fidget toys or other sensory tools", "Foods with strong flavours", "Ear defenders/plugs or headphones in loud environments"],
        correctAnswer: "Ear defenders/plugs or headphones in loud environments",
      }
    ]
  },
  {
    title: "Lesson 3: Struggles with Hyposensitivity",
    sections: [
      {
        title: "What is Hyposensitivity",
        content: "Hyposensitivity is a variant of sensory difficulties in people with autism. People who suffer from this experience a reduced sensitivity to sensory input as well as a lack of awareness of certain bodily functions such as pain or temperature"
      },
      {
        title: "How do people with Hyposensitivity cope?",
        content: "People sufferinf from Hyposensitivity generally employ a technique called Sensory Seeking to cope. This causes them to crave and actively seek out sensory input to compensate for their lack thereof"
      }
    ],
    cards: [
      {
        title: "What does Hyposensitivity look like?",
        content: "Typical behaviour that can help to identify Hyposensitivity",
        listItems: ["Increased movement, such as jumping or spinning", "Making loud and/or repetitive noises", "Difficulty recognising internal sensations such as hunger or pain", "Insisting on certain types of clothing", "Frequent chewing of non-food items", "Frequent touching of others"],
        isFlippable: true
      },
      {
        title: "How to help with Hyposensitivity",
        content: "How to help someone suffering from Hyposensitivity",
        listItems: ["Sensory tools, such as Fidget or chew toys", "Arranging furniture to create safe, open rooms", "Foods with strong flavours and mixed textures", "Taking frequent movement breaks", "Weighted blankets or heavy clothing"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "Which of these is a typical behaviour of Hyposensitivity?",
        options: ["Covering eyes or ears", "Jumping or spinning", "Limiting movement", "Avoidng contact with others"],
        correctAnswer: "Jumping or spinning",
      },
      {
        question: "Which of these is a way in which you can help someone with Hyposensitivity?",
        options: ["Headphone to reduce noise", "Sunglasses or other eye covers", "Sensory tools such as fidget toys", "Avoiding crowds"],
        correctAnswer: "Sensory tools such as fidget toys",
      }
    ]
  },
  {
    title: "Lesson 4: Sensory Overload & Stimming",
    sections: [
      {
        title: "What is Sensory Overload?",
        content: "Sensory overload is when a person suffering from sensory difficulties recieve an extreme of sensory input. This can feel like an intense need to escape from the current environment and can be completely overwhelming"
      },
      {
        title: "What is Stimming?",
        content: "Stimming refers to repetitive movements, sounds, or actions that people suffering from sensory difficulties use to self-regulate, express emotions or cope with sensory overload"
      }
    ],
    cards: [
      {
        title: "Sensory Overload Symptoms",
        content: "What to look for to tell if a hypersensitive or hyposensitive person is experiencing sensory overload",
        listItems: ["Entering a shutdown state", "Lack of communication", "Escalating and overwhelming emotions"],
        isFlippable: true
      },
      {
        title: "Stimming Symptoms",
        content: "What to look for to tell if a hyposensitive person is stimming",
        listItems: ["Rocking or spinning", "Repetitive noises", "Staring at moving objects", "Rubbing hands on specific textures"],
        isFlippable: false
      }
    ],
    quizSmall: [
      {
        question: "Which of the following is a symptom of stimming?",
        options: ["Rocking or spinning", "Covering eyes or ears", "Lack of communication", "None of the above"],
        correctAnswer: "Rocking or spinning",
      },
      {
        question: "Which of the following is a symptom of sensory overload?",
        options: ["Entering a shutdown state", "Lack of communication", "Escalating and overwhelming emotions", "All of the above"],
        correctAnswer: "All of the above",
      }
    ]
  }
];

function Sensory() {
  const [openLesson, setOpenLesson] = useState(null);

  const toggleLesson = (index) => {
    setOpenLesson(openLesson === index ? null : index);
  };

  return (
    <div>
      <h1>Sensory Difficulties and Autism</h1>
      <p>Learn about the sensory processing challenges that many individuals with autism face and how to address them.</p>

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
      <h2 style={{ marginTop: "40px" }}>Final Quiz: Sensory Difficulties and Autism</h2>
      <Quiz questions={sensoryQuestions} />
    </div>
  );
}

export default Sensory;