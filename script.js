const questions=[
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers:[
            {text:"//", correct: true},
            {text:"#", correct: false},
            {text:"/* */", correct: false},
            {text:"--", correct: false},
        ],
    },
    {
        question: "What does HTML stand for?",
        answers:[
            {text:"Hyper Text Markup Language", correct: true},
            {text:"High Tech Modern Language", correct: false},
            {text:"Hyper Transfer Markup Language", correct: false},
            {text:"Home Tool Markup Language", correct: false},
        ],
    },
    {
        question: "Which CSS property changes the text color?",
        answers:[
            {text:"text-color", correct: false},
            {text:"font-color", correct: false},
            {text:"color", correct: true},
            {text:"text-style", correct: false},
        ],
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers:[
            {text:"String", correct: false},
            {text:"Boolean", correct: false},
            {text:"Integer", correct: true},
            {text:"Object", correct: false},
        ],
    },
    {
        question: "What does CSS stand for?",
        answers:[
            {text:"Creative Style Sheets", correct: false},
            {text:"Computer Style Sheets", correct: false},
            {text:"Cascading Style Sheets", correct: true},
            {text:"Colorful Style Sheets", correct: false},
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
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
    answerButton.innerHTML ="";
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
// alert("question is"+questionElement);
