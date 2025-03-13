import React from 'react';
import Quiz from '../components/Quiz';
import '../styles/Sensory.css';
import Card from '../components/Card';  // Import the Card component
import Lesson from '../components/Lesson-Row';


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
    question: "Which of the following is a symptom of sensory meltdown?",
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

const lessons = [
  {
    title: "Lesson 1 - Sensory Difficulties and Autism",
    content: "XXXX"
    
  },
  {
    title: "Lesson 2 - Hypersensitivity",
    content: "XXXX"
  },
  {
    title: "Lesson 3 - Hyposensitivity",
    content: "XXXX"
  },
  {
    title: "Lesson 4 - Sensory Overload and Stimming",
    content: "XXXX"
  }
];

function Sensory() {
  return (
    <div className="body">
      <h1>Sensory Challenges and Autism</h1>
      <p>Learn about the sensory processing challenges that many individuals with autism face and how to address them.</p>

      <Lesson lessons={lessons} />

      <p>Sensory Difficulties in people with autism fall into two categories: Hypersensitivity and Hyposensitivity</p>

      <br />

      <h2><u>Hypersensitivity</u></h2>

      {/* Reusable Card for Hypersensitivity Explanation */}
      <Card
        title="What is Hypersensitivity?"
        content="People suffering from Hypersensitivity struggle with an excess of sensory input. People suffering with this tend to employ sensory avoidance to sensory data that most people can easily tune out."
        listItems={[
          'Sights such as bright lights',
          'Loud or unpredictable sounds',
          'Potent smells',
          'Certain textures',
          'Strong tastes',
        ]}
        isFlippable={true}  // This card will flip
      />

      <br />

      <p>Hypersensitive people tend to use a technique called sensory avoidance...</p>

      <br />

      {/* Reusable Card for How to Help Hypersensitive People */}
      <Card
        title="How to Help a Hypersensitive Person"
        content="When attempting to help someone experiencing a sensory issue related to hypersensitivity, there are a number of accommodations that can be made."
        listItems={[
          'Sunglasses or other eye covers to shut out excessive light',
          'Ear plugs/defenders or headphones when in loud environments',
          'Avoiding products with potent smells or strong tastes',
          'Soft, comfortable clothing',
          'Designing schedules which avoid large crowds whenever possible',
        ]}
        isFlippable={true}  // This card will flip as well
      />

      <br />

      <h3><u>Hyposensitivity</u></h3>

      <p>Hyposensitivity is when a person with sensory difficulties suffers from a lack of sensory input...</p>

      <br />

      {/* Reusable Card for Hyposensitivity Explanation */}
      <Card
        title="What is Hyposensitivity?"
        content="When a hyposensitive person is suffering from a sensory issue, it can manifest itself very differently than that of a hypersensitive person."
        listItems={[
          'Increased movement, such as spinning, jumping around or hand flapping',
          'Increased levels of noise, such as by making repetitive loud noises',
          'Difficulties recognising internal sensations such as hunger or pain',
          'Insisting on certain types of food or clothing',
          'Frequent chewing on non-food items',
          'Frequent touching of others',
        ]}
        isFlippable={true}  // This card will flip
      />

      <br />

      {/* Reusable Card for How to Help Hyposensitive People */}
      <Card
        title="How to Help a Hyposensitive Person"
        content="When attempting to help a person suffering from hyposensitivity, there are a number of accommodations that can be made."
        listItems={[
          'Fidget toys, chew toys or other sensory tools',
          'Arranging furniture to create safe, open rooms',
          'Foods with strong flavours and mixed textures',
          'Taking frequent movement breaks throughout the day',
          'Weighted blankets or clothing that provides a deep pressure',
        ]}
        isFlippable={true}  // This card will flip too
      />

      <br />
      <p>Now let's see how much you learned:</p>

      <Quiz questions={sensoryQuestions} />
    </div>
  );
}

export default Sensory;