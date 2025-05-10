const questions=[
    {
        question: "print hello in python",
        answers:[
            {text:"hello", correct: false},
            {text:"hello", correct: false},
            {text:"hello", correct: true},
            {text:"hello", correct: false},
        ],
    },
    {
        question: "print world in python",
        answers:[
            {text:"ello", correct: false},
            {text:"ello", correct: false},
            {text:"ello", correct: true},
            {text:"ello", correct: false},
        ],
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestions();
}
function showQuestions(){
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button= document.createElement("Button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();
// alert("question is"+questionElement);
