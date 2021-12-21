import { Question } from "./question";

export const QUESTIONS: Question[] = [
  { category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    text: "In the TV show &#039;M*A*S*H&#039;, what was the nickname of Corporal Walter O&#039;Reilly?",
    correct_answer: "Radar",
    answers: ["Hawkeye", "Hot Lips","Trapper"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    text: "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    answers: ["512MB","5GB","Unlimited"]
  },
  {
    category: "History",
    type: "History",
    difficulty: "medium",
    text: "Which of the following ancient Near Eastern peoples still exists as a modern ethnic group?",
    correct_answer: "Assyrians",
    answers: ["Babylonians","Hittites","Elamites"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    text: "What did the first vending machines in the early 1880&#039;s dispense?",
    correct_answer: "Post cards",
    answers: ["Alcohol","Cigarettes","Sodas "]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    text: "In Animal Crossing, who is the manager of the town shop?",
    correct_answer: "Tom Nook",
    answers: ["Mr. Resetti","Gracie","K.K. Slider"]
  },
  {
    category: "Science & Nature",
    type: "boolean",
    difficulty: "easy",
    text: "Water always boils at 100&deg;C, 212&deg;F, 373.15K, no matter where you are.",
    correct_answer: "False",
    answers: ["True"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    text: "What is the first track on the Dave Matthews Band album &quot;Before These Crowded Streets&quot;?",
    correct_answer: "Pantala Naga Pampa",
    answers: ["Stay (Wasting Time)","Rapunzel","Don&#039;t Drink The Water"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    text: "What is the name of the talking cat in Persona 5?",
    correct_answer: "Morgana",
    answers: ["Teddie","Marie","Ryuji"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    text: "What is the molecular formula of the active component of chili peppers(Capsaicin)?",
    correct_answer: "C18H27NO3",
    answers: ["C21H23NO3","C6H4Cl2","C13H25NO4"]
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    text: "What caused Jake Lloyd who played Anakin Skywalker in The Phantom Menace to quit acting?",
    correct_answer: "Bullying",
    answers: ["Criminal Record","Nomination for Worst Actor","Racism"]
  }
]