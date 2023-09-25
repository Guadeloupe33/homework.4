const questions = [
    {
        question: "What does 'JS' stand for?",
        choices: ["Java Source", "JavaScript", "Just Script", "JScript"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What is the purpose of 'document.getElementById()' in JavaScript?",
        choices: ["Retrieve an element by its ID", "Create a new element", "Remove an element", "Change the page's title"],
        correctAnswer: "Retrieve an element by its ID"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const timerContainer = document.getElementById("timer");
const scoreContainer = document.getElementById("score");
const startButton = document.getElementById("start-button");
const gameOverContainer = document.getElementById("game-over-container");
const finalScoreContainer = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const saveScoreButton = document.getElementById("save-score");

function startQuiz() {
    startButton.style.display = "none";
    nextQuestion();
    startTimer();
}
function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;

        choicesContainer.innerHTML = "";
        currentQuestion.choices.forEach((choice) => {
            const choiceButton = document.createElement("button");
            choiceButton.textContent = choice;
            choiceButton.addEventListener("click", () => checkAnswer(choice, currentQuestion.correctAnswer));
            choicesContainer.appendChild(choiceButton);
        });
    } else {
        endQuiz();
    }
}
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
        scoreContainer.textContent = score;
    } else {
        
        timer -= 10;  
    }
    currentQuestionIndex++;
    nextQuestion();
}
