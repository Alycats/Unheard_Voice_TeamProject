import React from 'react';
import Quiz from '../components/Quiz';

const sensoryQuestions = [
  {
    question: "What is the term used to descibe a person who suffers from too much sensory input?",
    options: ["Hypersensitive", "Hyposensitive", "Supersensitive", "Autistic"],
    correctAnswer: "Hypersensitive",
  },
  {
    question: "What is the term used to describe a person who suffers from not enough sensory input?",
    options: ["Hypersensitive", "Hyposensitive", "Supersensitive", "Autistic"],
    correctAnswer: "Hyposensitive",
  },
  {
    question: "Which of the following is a symptom of someone suffering from Hypersensitivity",
    options: ["Jumping or spinning", "Making loud and repetitive noises", "Covering eyes or ears", "Chewing on non-food items"],
    correctAnswer: "Covering eyes or ears",
  },
  {
    question: "Which of the following is a symptom of someone suffering from Hyposensitivity",
    options: ["Covering eyes or ears", "Reduced movement", "Jumping or spinning", "Avoiding physical contact"],
    correctAnswer: "Jumping or spinning",
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
    question: "What is the term used to describe the state a hypersensitive person enters when they receive too much sensory input?",
    options: ["Sensory Overload", "Sensory Seeking", "Sensory Meltdown", "Sensory Shutdown"],
    correctAnswer: "Sensory Overload",
  },
  {
    question: "What is the term used to describe the state a hyposensitive person enters when they try to get more sensory data?",
    options: ["Sensory Shutdown", "Sensory Searching", "Sensory Seeking", "Sensory Meltdown"],
    correctAnswer: "Sensory Seeking",
  },
  {
    question: "What is stimming?",
    options: ["Frequent use of stimulants", "Actions taken to increase sensory stimulation", "Actions taken to reduce sensory stimulation", "Actions taken to increase mental stimulation"],
    correctAnswer: "Actions taken to increase sensory stimulation",
  },
  {
    question: "Which of the following is a symptom of sensory meltdown?",
    options: ["Lack of movement", "Escalating and overwhelming emotions", "Seizures", "Lack of communication"],
    correctAnswer: "Option A",
  },
];

function Sensory() {
  return (
    <div>
      <h1>Sensory Challenges and Autism</h1>
      <p>Learn about the sensory processing challenges that many individuals with autism face and how to address them.</p>
      
      <p>Sensory Difficulties in people with Autism Syndrome Disorder (ASD) 
        fall into two categories: <u>Hypersensitivity</u> and <u>Hyposensitivity.</u></p>

      <h3><u>Hypersensitivity</u></h3>

      <p>People suffering from Hypersensitivity struggle with an excess of sensory input. People suffering with this largely tend to 
        employ sensory avoidance to sensory data that most people can easily tune out. This includes sensory input such as: </p>

      <ul>
        <li>Sights such as bright lights</li>
        <li>Loud or unpredictable sounds</li>
        <li>Potent smells</li>
        <li>Certain textures</li>
        <li>Strong tastes</li>
      </ul>

      <p>Hypersensitive people tend to use a technique called sensory avoidance. This generally manifests itself as techniques that 
        limit sensory input e.g. covering eyes/ears/nose to reduce the respective sensory input. Other ways in which sensory avoidance 
        manifests itself is when a person struggling with hypersensitivity reduces any movement and/or avoids physical contact with 
        anyone or anything. </p>

      <p>Too much sensory input or a failure to successfully avoid said input can result in sensory overload. This is when there is too 
        much sensory input which overwhelms a person’s ability to cope with it. This can result from a single intense instance of 
        sensory data or a gradual buildup of sensory data leading to a point at which it becomes too much to self-regulate. Sensory 
        overload can feel like intense anxiety or need to escape from the present environment. This can result in the person entering 
        a shutdown or meltdown state. Shutdown is when the brain has to suddenly put all resources into processing and regulating 
        sensory information and as a result shuts off other functions within it. This includes functions such as communication, the 
        ability to make decisions or the ability to process information. Pushing someone in this state to ignore it or work through it 
        can result in increased levels of stress and anxiety and if it gets bad enough, can result in the person entering meltdown 
        state. This is when the person has reached a point at which the sensory overload is causing escalating and overwhelming 
        emotional input, coupled with a need to escape. </p>

      <p>When trying to help someone experiencing a sensory issue related to hypersensitivity, there are a number of accommodations 
          that can be made, such as: </p>

      <ul>
        <li>Sunglasses or other eye covers to shut out excessive light</li>
        <li>Ear plugs or defenders when in loud environments</li>
        <li>Avoiding products with potent smells or tastes such as spices</li>
        <li>Wearing soft, comfortable clothing</li>
        <li>Designing schedules which avoid large or loud crowds whenever possible</li>
      </ul>

      <h3><u>Hyposensitivity</u></h3>
      
      <p>Hyposensitivity is when a person with sensory difficulties suffers from a lack of sensory input and displays an attraction 
        to sensory input, as opposed to having an excess of it. This can display itself as having an attraction to things such as 
        bright lights or loud sounds (or other types of sensory data). The types of sensory input that hyposensitive people struggle 
        with is largely the same as those who are hypersensitive, however they suffer from not enough of it as opposed to having too 
        much.</p>

      <p>Many autistic people suffering from hyposensitivity employ the use of techniques such as sensory seeking or stimming. Sensory 
        seeking is when the person makes use of ways to increase their sensory input from their environment. This includes things which 
        will stimulate the person’s senses, such as making loud noises, maximising physical contact with the environment or increasing 
        movement such as by rocking or spinning. Stimming is also a form of this which is used to help a hyposensitive autistic person 
        to stay calm or relieve stress by keeping their sensory systems in balance by moving, making noise or fidgeting.</p>

      <p>Like when a hypersensitive autistic experiences to much of an excess of sensory data, if a hyposensitive autistic does not get 
        enough sensory input (such as by repress their stimming to fit in in their environment) leads to sensory overload and then 
        either shutdown or meltdown as described above.</p>

      <p>When a hyposensitive person is suffering from a sensory issue, it can manifest itself very differently than that of a 
        hypersensitive person. This causes the person to react or behave in certain ways such as:</p>

      <ul>
        <li>Increased movement such as jumping, spinning around, or hand flapping</li>
        <li>Increased levels of noise, such as by making loud, repetitive noises</li>
        <li>Difficulty recognising internal sensations such as hunger or pain</li>
        <li>Insisting on certain types of food or clothing</li>
        <li>Frequent chewing on non-food items</li>
        <li>Frequent touching of others</li>
      </ul>

      <p>As with hypersensitivity, when attempting to help a person suffering from hyposensitivity, there are a number of 
        accommodations that can be made:</p>

      <ul>
        <li>Use of fidget toys, chew toys, or other sensory tools</li>
        <li>Arranging furniture to create safe, open rooms</li>
        <li>Eating foods with strong tastes and mixed textures</li>
        <li>Taking frequent movement breaks throughout the day</li>
        <li>Weighted blankets that provide a deep pressure</li>
      </ul>
      <Quiz questions={sensoryQuestions} />
    </div>
  );
}

export default Sensory;