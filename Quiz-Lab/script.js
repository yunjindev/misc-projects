//CONSOLE PROGRAM ONLY

const questions = [
  {
    category: "Geography",
    question: "Where is the Empire State Building?",
    choices: ["New York", "Oregon", "Ohio"],
    answer: "New York"
  },
  {
    category: "Geography",
    question: "Where is the Grand Canyon?",
    choices: ["Arizona", "California", "Colorado"],
    answer: "Arizona"
  },
  {
    category: "Movies",
    question: "What is the top grossing movie of all time?",
    choices: ["Avatar", "Avengers: End Game", "Titanic"],
    answer: "Avatar"
  },
  {
    category: "Video Games",
    question: "What is the cube-based survival game?",
    choices: ["League of Legends", "Minecraft", "Fortnite"],
    answer: "Minecraft"
  },
  {
    category: "Trivia",
    question: "Who painted the Mona Lisa?",
    choices: ["E.E. Cummings", "Van Gogh", "Da Vinci"],
    answer: "Da Vinci"
  }
];

function getRandomQuestion(questions) {
  const randomQuestion = Math.floor(Math.random() * questions.length);
  return questions[randomQuestion];
}

function getRandomComputerChoice(choices) {
  const randomAnswer = Math.floor(Math.random() * choices.length);
  return choices[randomAnswer];
}

function getResults(question, choices) {
  if (choices == question.answer){
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}
const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);
const result = getResults(question, computerChoice);

console.log(question);
console.log(computerChoice);
console.log(result);
