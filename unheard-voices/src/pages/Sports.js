import React from 'react';
import Quiz from '../components/Quiz';

// Default Sports Quiz Questions
const sportsQuestions = [
  {
    question: "What should you do before a training session?",
    options: ["Meet the child before the first lesson showing the sports equiptment that will be used", "Play with the equiptment till everyone arrives", "Set everything up and wait", "Stretch"],
    correctAnswer: "Meet the child before the first lesson showing the sports equiptment that will be used",
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

function Sports() {
  return (
    <div>
      <h1>Sports and Autism</h1>
      <p>Explore how sports can help children with autism develop social skills, improve motor coordination, and more.</p>
      <h2>Teaching sports with children with Autism</h2>
      <p>Before you start to coach a child that has autism, not every child is the same and what may work for one child doesn't mean it will work for the other child. Giving a child a series of steps to take in all at once will be difficult for them and quite overwhelming.</p>
      <h3>     </h3>
      <p3>To teach a child with autism sports to make things easier for the child to settle in meeting the child before the first lesson and showing the child the sports equipment that's about to be used ahead of time will also help. That way the child isn't hit with all the information all at once and shown the equipment which they could be unfamiliar with and told to repeat the action.  </p3>
      <h4>     </h4>
      <p4>The next step can apply with teaching all children, rather than just giving orders to the child and expecting them to know demonstrate what's about to happen and what you need to be done. And do so in small segments not all at once so it will be easier to learn the sequence.  </p4>
      <h5>     </h5>
      <p5>For each practice make sure to have a repeated routine you do every time so that the child gets used to that order and not having to adjust to change every session. When teaching a child with autism refrain from using sarcasm, metaphors and some humour as they could take it literal, and it may confuse them. </p5>
      <h6>     </h6>
      <p6>And linking back to the not all children with autism are the same some may like the social aspect of team sports but other may dislike it and find it difficult make sure as a coach or a teacher you don't force it open them. And lastly stay positive, be patient the child will hopefully improve and through your positivity it can potentially motivate the child into becoming more into the sport.</p6>
      <h7>     </h7>
      <h8>Picking a sport to teach</h8>
      <p8>Some sports don't require a high level of communication or even team play so certain sports will be more effective and similar to teach to children with autism which will also allow them to have fun. These sports are swimming, track and field, bowling, Horseback Riding, Hiking and Fishing, Biking and lastly martial arts.</p8>
      <h9>     </h9>
      <p9>Remember to make it fun for the child as they will need to be motivated to take part or find interest in it.</p9>

      {/* Quiz component with the sportsQuestions */}
      <Quiz questions={sportsQuestions} />
    </div>
  );
}

export default Sports;