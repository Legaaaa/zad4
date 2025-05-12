** start of script.js **

let questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Math",
    question: "What is 5 + 3?",
    choices: ["5", "8", "12"],
    answer: "8"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "Who invented the telephone?",
    choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"],
    answer: "Alexander Graham Bell"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
const result = getResults(randomQuestion, computerChoice);

console.log(result);


** end of script.js **

