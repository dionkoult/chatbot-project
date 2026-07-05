import { useEffect, useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { ChatMessage } from './components/ChatMessage';
import './App.css';
import { Chatbot } from 'supersimpledev';

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  useEffect(() => {
    Chatbot.addResponses({
      hello: "Hello! How can I help you today?",
      hi: "Hi there!",
      hey: "Hey!",
      goodbye: "Goodbye! Have a great day!",
      thanks: "You're welcome!",
      thankyou: "Happy to help!",
      creator: "Koult",
      name: "I'm your AI assistant.",
      age: "I don't have an age.",
      planet: "Earth",
      color: "Blue",
      studies: "Computer Science",
      language: "I can communicate in many languages.",
      hobby: "Helping people solve problems.",
      bestfood: "Electricity.",
      music: "I enjoy every genre equally.",
      joke: "Why do programmers hate nature? It has too many bugs.",
      quote: "Success is the sum of small efforts repeated daily.",
      motivation: "Every expert was once a beginner.",
      weather: "I can't check live weather unless connected to an API.",
      time: "I can't know the current time unless you provide it.",
      date: "I don't know today's date unless it's provided.",
      ai: "Artificial Intelligence is the simulation of human intelligence by machines.",
      ml: "Machine Learning allows computers to learn from data.",
      llm: "A Large Language Model predicts text based on patterns learned during training.",
      javascript: "JavaScript is a programming language used for web development.",
      typescript: "TypeScript adds static typing to JavaScript.",
      react: "React is a JavaScript library for building user interfaces.",
      vue: "Vue is a progressive JavaScript framework.",
      angular: "Angular is a framework for building web applications.",
      node: "Node.js lets JavaScript run outside the browser.",
      express: "Express is a web framework for Node.js.",
      python: "Python is known for its readability and versatility.",
      java: "Java is a popular object-oriented programming language.",
      cpp: "C++ offers high performance and low-level control.",
      csharp: "C# is commonly used for .NET applications and Unity games.",
      rust: "Rust focuses on performance and memory safety.",
      go: "Go is designed for simplicity and concurrency.",
      html: "HTML defines the structure of web pages.",
      css: "CSS styles web pages.",
      sql: "SQL is used to query relational databases.",
      mongodb: "MongoDB is a NoSQL document database.",
      mysql: "MySQL is a relational database.",
      postgres: "PostgreSQL is a powerful open-source SQL database.",
      git: "Git is a version control system.",
      github: "GitHub hosts Git repositories online.",
      api: "An API allows different software to communicate.",
      json: "JSON is a lightweight data format.",
      http: "HTTP is the protocol used to transfer web data.",
      https: "HTTPS is HTTP with encryption.",
      frontend: "Frontend development focuses on what users see.",
      backend: "Backend development handles servers, databases, and logic.",
      fullstack: "A full-stack developer works on both frontend and backend.",
      algorithm: "An algorithm is a sequence of steps to solve a problem.",
      datastructure: "Data structures organize information efficiently.",
      array: "Arrays store ordered collections.",
      object: "Objects store key-value pairs.",
      function: "Functions group reusable code.",
      loop: "Loops repeat code.",
      variable: "Variables store values.",
      promise: "Promises represent future asynchronous results.",
      async: "Async functions simplify asynchronous code.",
      await: "Await pauses execution until a Promise resolves.",
      bug: "A bug is an error in software.",
      debug: "Debugging is the process of finding and fixing bugs.",
      compiler: "A compiler converts source code into machine code.",
      interpreter: "An interpreter executes code line by line.",
      binary: "Binary uses only 0 and 1.",
      cpu: "The CPU executes instructions.",
      gpu: "The GPU specializes in parallel processing.",
      ram: "RAM stores temporary working memory.",
      storage: "Storage keeps data permanently.",
      internet: "The Internet is a global network of computers.",
      wifi: "Wi-Fi provides wireless network access.",
      math: "Mathematics is the language of patterns.",
      pi: "Pi is approximately 3.14159.",
      gravity: "Gravity attracts objects toward one another.",
      physics: "Physics studies matter, energy, and forces.",
      chemistry: "Chemistry studies substances and reactions.",
      biology: "Biology studies living organisms.",
      dna: "DNA contains genetic instructions.",
      atom: "Atoms are the building blocks of matter.",
      sun: "The Sun is the star at the center of our solar system.",
      moon: "The Moon orbits Earth.",
      mars: "Mars is known as the Red Planet.",
      earth: "Earth is the third planet from the Sun.",
      galaxy: "Our galaxy is the Milky Way.",
      universe: "The universe contains billions of galaxies.",
      speedoflight: "The speed of light is about 299,792,458 meters per second.",
      coffee: "Coffee contains caffeine which helps many people stay alert.",
      tea: "Tea is one of the world's most popular drinks.",
      water: "Humans need water to survive.",
      sleep: "Adults generally benefit from around 7–9 hours of sleep.",
      exercise: "Regular exercise improves physical and mental health.",
      book: "Reading expands knowledge and vocabulary.",
      movie: "There are thousands of great movies across many genres.",
      game: "Games can be entertaining and educational.",
      chess: "Chess improves strategic thinking.",
      musictheory: "Music theory explains how music works.",
      languagelearning: "Practice every day for the best results.",
      study: "Consistency beats cramming.",
      exam: "Prepare early and review regularly.",
      success: "Success comes from consistent effort.",
      failure: "Failure is an opportunity to learn.",
      confidence: "Confidence grows with experience.",
      happiness: "Meaningful relationships often contribute to happiness.",
      kindness: "Kindness costs nothing but means a lot.",
      friendship: "Good friends support each other.",
      love: "Love is a complex human emotion.",
      travel: "Travel helps people experience new cultures.",
      food: "Balanced nutrition supports good health.",
      pizza: "Pizza is one of the world's favorite foods.",
      burger: "Burgers are a classic fast-food meal.",
      fruit: "Fruit contains vitamins and fiber.",
      vegetables: "Vegetables are an important part of a healthy diet.",
      cat: "Cats are curious and independent animals.",
      dog: "Dogs are loyal companions.",
      elephant: "Elephants are the largest land animals.",
      lion: "Lions are known as the kings of the jungle.",
      ocean: "Oceans cover about 71% of Earth's surface.",
      mountain: "Mountains form through tectonic processes.",
      forest: "Forests are home to diverse ecosystems.",
      desert: "Deserts receive very little rainfall.",
      rain: "Rain forms from condensed water vapor.",
      snow: "Snow forms when temperatures are cold enough.",
      cloud: "Clouds are made of tiny water droplets or ice crystals.",
      rainbow: "Rainbows form from sunlight refracting through water droplets.",
      random: "Here's a random fact: Honey never spoils.",
      fact: "Bananas are berries, but strawberries are not.",
      help: "Ask me about programming, science, technology, math, or general knowledge.",
      whoareyou: "I'm an AI chatbot created to assist users.",
      howareyou: "I'm doing great! Thanks for asking.",
      yes: "Great!",
      no: "No problem.",
      maybe: "That's possible.",
      idk: "That's okay. We can figure it out together."
    });
  }, []);

  return (
    <div className = "app-container">
      <ChatMessages 
        chatMessages = {chatMessages}
      />
      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  );
}

export default App