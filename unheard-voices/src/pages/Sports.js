import React, { useState } from 'react';
import Lesson from '../components/Lesson-Row';
import Card from '../components/Card';
import QuizSmall from '../components/QuizSmall';
import Quiz from '../components/Quiz';
import '../styles/Sport.css';
import VideoClip from '../components/Youtube-Video';
import MovingDot from '../components/RedDot';



// Questions for the final quiz
const sportsQuestions = [
  {
    question: "What should you do before a training session?",
    options: ["Meet the child before the first lesson showing the sports equipment that will be used", "Play with the equipment till everyone arrives", "Set everything up and wait", "Stretch"],
    correctAnswer: "Meet the child before the first lesson showing the sports equipment that will be used",
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


const evaluationMessage = (score) => {
  if (score === 0) return "Better luck next time!";
  if (score === sportsQuestions.length) return "Excellent!";
  return "Good job!";
};

// Lessons Data with two Cards per lesson
const lessons = [
  {
    title: "Lesson 1",
    sections: [
      {
        title: "What is Autism?",
        content: "Autism is a developmental disorder that affects communication, behavior, and social interaction."
      },
      {
        title: "Sports and Autism",
        content: "Explore how sports can help children with autism develop social skills, improve motor coordination, and more."
      }
    ],
    cards: [
      {
        title: "Sports & Autism: Building Skills Through Play",
        content: "Sports can enhance social and motor skills for kids with autism.",
        listItems: ["Structured Routines", "Visual Schedules", "Adaptive Equipment"],
        isFlippable: true
      },
      {
        title: "Teaching Sports to Kids with Autism",
        content: "Modified approaches can make sports enjoyable and accessible.",
        listItems:  ["Sensory-Friendly Gear", "Clear Instructions", "Repetitive Drills"],
        isFlippable: true
      }
    ],
    quizSmall: [
      {
        question: "Which tool helps kids with autism follow sports routines?",  
        options: ["Whistle", "Visual schedule", "Stopwatch", "Jersey"],
        correctAnswer: "Visual schedule",
      },
      {
        question: "What equipment can help reduce sensory overload in sports?",
        options:  ["Soft balls", "Loudspeakers", "Bright lights", "Metal whistles"],
        correctAnswer: "Soft balls",
      }
    ]
  },
  {
    title: "Lesson 2",
    sections: [
      {
        title: "Teaching sports with children with Autism",
        content: "Before you start to coach a child that has autism, not every child is the same and what may work for one child doesn't mean it will work for the other child."
      },
      {
        title: "Teaching sports with children with Autism PT2",
        content: "Giving a child a series of steps to take in all at once will be difficult for them and quite overwhelming."
      }
    ],
    cards: [
      {
        title: "Sports Benefits for Kids with Autism",
        content: "Physical activity supports focus, coordination, and social skills.",
        listItems: ["Improved Motor Skills", "Teamwork Development", "Sensory Regulation"],
        isFlippable: true
      },
      {
        title: "Coaching Strategies for Autism in Sports",
        content: "Using visual aids and structured guidance boosts learning.",
        listItems: ["Picture-Based Instructions", "Step-by-Step Demonstrations", "Predictability"],
        isFlippable: true
      }
    ],
    quizSmall: [
      {
        question: "Which strategy helps children with autism stay engaged in sports?",
        options: ["Random drills", "Consistent routines", "Sudden rule changes", "Unstructured play"],
        correctAnswer: "Consistent routines",
      },
      {
        question: "Which sport is often recommended for children with autism?",
        options:  ["Swimming", "Hockey", "Wrestling", "Football"],
        correctAnswer: "Swimming",
      }
    ]
  },
  {
    title: "Lesson 3",
    sections: [
      {
        title: "Teaching the child PT1",
        content: "To teach a child with autism sports to make things easier for the child to settle in meeting the child before the first lesson and showing the child the sports equipment that's about to be used ahead of time will also help. "
      },
      {
        title: "Teaching the child PT2",
        content: "That way the child isn't hit with all the information all at once and shown the equipment which they could be unfamiliar with and told to repeat the action.  "
      }
    ],
    cards: [
      {
        title: "Making Sports Fun for Kids with Autism",
        content: "Customizing activities helps children stay engaged.",
        listItems: ["Sensory Breaks", "Preferred Activities", "Positive Reinforcement"],
        isFlippable: true
      },
      {
        title: "Sports & Sensory Processing in Autism",
        content: "Adjusting sports environments reduces sensory overload.",
        listItems:  ["Quiet Practice Spaces", "Noise-Canceling Headphones", "Soft Equipment"],
        isFlippable: true
      }
    ],
    quizSmall: [
      {
        question: "What can coaches use to give clear instructions to autistic children?",
        options: ["Hand signals", "Visual aids", "Shouting", "Complex strategies"],
        correctAnswer: "Visual aids",
      },
      {
        question: "Which item can help an autistic child cope with noisy sports environments?",
        options:  ["Earplugs", "Heavy shoes", "Baseball cap", "Flashlight"],
        correctAnswer: "Earplugs",
      }
    ]
  },
  {
    title: "Lesson 4",
    sections: [
      {
        title: "Final Lessons",
        content: "Linking back to the not all children with autism are the same some may like the social aspect of team sports but other may dislike it and find it difficult make sure as a coach or a teacher you don't force it open them. And lastly stay positive, be patient the child will hopefully improve and through your positivity it can potentially motivate the child into becoming more into the sport. Remember to make it fun for the child as they will need to be motivated to take part or find interest in it. "
      },
      {
        title: "Picking a sport to teach",
        content: "Some sports don't require a high level of communication or even team play so certain sports will be more effective and similar to teach to children with autism which will also allow them to have fun. These sports are swimming, track and field, bowling, Horseback Riding, Hiking and Fishing, Biking and lastly martial arts."
      }
    ],
    cards: [
      {
        title: "Parental Support in Autism & Sports",
        content: "Parents play a crucial role in sports engagement for autistic children.",
        listItems: ["Practice at Home", "Advocating for Accommodations", "Celebrating Small Wins"],
        isFlippable: true
      },
      {
        title: "The Impact of Sports on Autism Development",
        content: "Sports enhance physical, emotional, and cognitive growth.",
        listItems:  ["Better Coordination", "Emotional Regulation", "Increased Confidence"],
        isFlippable: true
      }
    ],
    quizSmall: [
      {
        question: "Which factor is important for kids with autism in sports?",
        options: ["Predictability", "Crowded stadiums", "Loud whistles", "Complex rules"],
        correctAnswer: "Predictability",
      },
      {
        question: "Which sport provides repetitive movements that help autistic kids?",
        options: ["Basketball", "Martial arts", "Hockey", "Rugby"],
        correctAnswer: "Martial arts",
      }
    ]
  }
];

function Sports() {
  const [openLesson, setOpenLesson] = useState(null);

  const toggleLesson = (index) => {
    setOpenLesson(openLesson === index ? null : index);
  };

  return (
    <div>
      <h1>Sports and Autism</h1>
      <VideoClip />
      <p>Explore how sports can help children with autism develop social skills, improve motor coordination, and more.</p>

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
      <h2 style={{ marginTop: "40px" }}>Final Quiz: Sports and Autism</h2>
      <Quiz questions={sportsQuestions} />
      <MovingDot/>
    </div>
  );
}

export default Sports;
