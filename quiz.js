const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "A",
  },
  {
    question: "What is the square root of 16?",
    options: ["2", "4", "6", "8"],
    answer: "B",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "B",
  },
  {
    question: "Which ocean is the largest?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "C",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "CO2", "H2O", "N2"],
    answer: "C",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

// Load the current question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  // Clear previous options
  optionsEl.innerHTML = "";

  // Display options
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "option";
    button.setAttribute("data-answer", ["A", "B", "C", "D"][index]);
    optionsEl.appendChild(button);
  });

  feedbackEl.textContent = ""; // Clear feedback when loading a new question
}

// Check the answer and update score
function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    feedbackEl.textContent = "Incorrect!";
  }
  scoreEl.textContent = `Score: ${score}`;
}

// Move to the next question
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    quizContainer.innerHTML = `<h2>Quiz Over! Your score is ${score} out of ${questions.length}.</h2>`;
  }
});

// Event listener for answer options
optionsEl.addEventListener("click", (e) => {
  const selectedOption = e.target.getAttribute("data-answer");
  checkAnswer(selectedOption);
});

// Load the first question
loadQuestion();
