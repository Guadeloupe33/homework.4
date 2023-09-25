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
