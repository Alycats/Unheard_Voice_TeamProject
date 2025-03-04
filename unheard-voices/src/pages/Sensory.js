import React from 'react';
import Quiz from '../components/Quiz';

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

function Sensory() {
  return (
    <div>
      <h1 style={{backgroundColor: 'red'}}>Sensory Challenges and Autism</h1>
      <p>Learn about the sensory processing challenges that many individuals with autism face and how to address them.</p>

      <p>Sensory Difficulties in people with autism fall into two categories: Hypersensitivity and Hyposensitivity</p>

      <br></br>

      <h3><u>Hypersensitivity</u></h3>
      <div class="sensory-card-wrapper">
        <div class="sensory-card-body">
          <div class="sensory-card-front">
      <p>People suffering from Hypersensitivity struggle with an excess of sensory input. People suffering with this largely tend
        to employ sensory avoidance to sensory data that most people can easily tune out. This includes sensory input such as:
      </p>
      </div>
      <div class="sensory-card-back">
      <ul class="sensoryBP">
        <li>Sights such as bright lights</li>
        <li>Loud or unpredictable sounds</li>
        <li>Potent smells</li>
        <li>Certain textures</li>
        <li>Strong tastes</li>
      </ul>
      </div>
      </div>
      </div>

      <br></br>

      <p>Hypersensitive people tend to use a technique called sensory avoidance. This generally mainfests itself as techniques
        that limit sensory input e.g. covering eyes/ears/nose to reduce the respective sensory input. Other ways in which sensory
        avoidance manifests itself is when a person struggling with hypersensitivity reduces any movement and/or avoids physical
        contact with anyone or anything.
      </p>

      <br></br>

      <p>Too much sensory input or a failure to successfully avoid said input can result in sensory overload. This is when there is too 
        much sensory input which overwhelms a person’s ability to cope with it. This can result from a single intense instance of 
        sensory data or a gradual buildup of sensory data leading to a point at which it becomes too much to self-regulate. Sensory 
        overload can feel like intense anxiety or need to escape from the present environment. This can result in the person entering a 
        shutdown or meltdown state. Shutdown is when the brain has to suddenly put all resources into processing and regulating sensory 
        information and as a result shuts off other functions within it. This includes functions such as communication, the ability to 
        make decisions or the ability to process information. Pushing someone in this state to ignore it or work through it can result 
        in increased levels of stress and anxiety and if it gets bad enough, can result in the person entering meltdown state. This is 
        when the person has reached a point at which the sensory overload is causing escalating and overwhelming emotional input, 
        coupled with a need to escape. 
      </p>

      <br></br>

      <p>When attempting to help someone experiencing a sensory issue related to hypersensitivity, there are a number of accommodations
        that can be made, such as:
      </p>

      <ul class="sensoryBP">
        <li>Sunglasses or other eye covers to shut out excessive light</li>
        <li>Ear plugs/defenders or headphones when in loud environments</li>
        <li>Avoiding products with potent smells or strong tastes, such as spices</li>
        <li>Soft, comfortable clothing</li>
        <li>Designing schedules which avoid large crowds whenever possible</li>
      </ul>

      <br></br>
      <br></br>

      <h3><u>Hyposensitivity</u></h3>

      <p>Hyposensitivity is when a person with sensory difficulties suffers from a lack of sensory input and displays an attraction to 
        sensory input, as opposed to having an excess of it. This can display itself as having an attraction to things such as bright 
        lights or loud sounds (or other types of sensory data). The types of sensory input that hyposensitive people struggle with is 
        largely the same as those who are hypersensitive, however they suffer from not enough of it as opposed to having too much.</p>

      <br></br>

      <p>Many autistic people suffering from hyposensitivity employ the use of techniques such as sensory seeking or stimming. Sensory 
        seeking is when the person makes use of ways to increase their sensory input from their environment. This includes things which 
        will stimulate the person’s senses, such as making loud noises, maximising physical contact with the environment or increasing 
        movement such as by rocking or spinning. Stimming is also a form of this which is used to help a hyposensitive autistic person 
        to stay calm or relieve stress by keeping their sensory systems in balance by moving, making noise or fidgeting.</p>

      <br></br>

      <p>Like when a hypersensitive autistic experiences to much of an excess of sensory data, if a hyposensitive autistic does not get 
        enough sensory input (such as by repress their stimming to fit in in their environment) leads to sensory overload and then 
        either shutdown or meltdown as described above.</p>
      
      <br></br>

      <p>When a hyposensitive person is suffering from a sensory issue, it can manifest itself very differently than that of a 
        hypersensitive person. This causes the person to react or behave in certain ways such as:</p>

      <ul class="sensoryBP">
        <li>Increased movement, such as spinning, numping around or hand flapping</li>
        <li>Increased levels of noise, such as by making repetitive loud noises</li>
        <li>Difficulties recognising internal sensations such as hunger or pain</li>
        <li>Insisiting on certain types of food or clothing</li>
        <li>Frequent chewing on non-food items</li>
        <li>Frequent touching of others</li>
      </ul>

      <br></br>

      <p>When attempting to help a person suffering from hyposensitivity, there are a number of accommodations that can be made:</p>

      <ul class="sensoryBP">
        <li>Fidget toys, chew toys or other sensory tools</li>
        <li>Arranging furniture to create safe, open rooms</li>
        <li>Foods with strong flavours and mixed textures</li>
        <li>Taking frequent movement breaks throughout the day</li>
        <li>Weighted blankets or clothing that provides a deep pressure</li>
      </ul>

      <br></br>
      <br></br>
      <br></br>
      
      <p>Now let's see how much you learned:</p>

      <Quiz questions={sensoryQuestions} />
    </div>
  );
}

export default Sensory;