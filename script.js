let quizQuestions = ''
const questionPageEl = document.querySelector('#questionPage')
const startPageEl = document.querySelector('.startPage')
const answer1Btn = document.querySelector('#answer1')
const answer2Btn = document.querySelector('#answer2')
const answer3Btn = document.querySelector('#answer3')
const answer4Btn = document.querySelector('#answer4')
const startQuizBtn = document.querySelector('#startQuiz')
const questionEl = document.querySelector('#question')
const resultsEl = document.querySelector('#results')
let quizTracker = 0
let timer = 75

const quizQuestionsList = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ['javascript', 'script', 'scripting', 'js'],
    answer: 'script'
  },
  {
    question: "How does a FOR loop start?",
    choices: ['for(i <= 5; i++', 'for( i = 0; i<=5', 'for(i = 0; i<=5; i++', 'for i = 1 to 5'],
    answer: 'for(i = 0; i<=5; i++'
  },
  {
    question: "How do you add a comment in JavaScript?",
    choices: ['<!--with arrows-->', '"with double quotations"', "'with single quotations'", '// with two backslashes'],
    answer: '// with two backslashes'
  },
  {
    question: "Which operator is used to assign value to a variable?",
    choices: ['*', '-', '=', 'x'],
    answer: '='
  },
  {
    question: "How to write and IF statement in JavaScript",
    choices: ['if (i==5)', 'if i=5', 'if i=5 then', 'if i==5 then'],
    answer: 'if (i==5)'
  }
]


startQuizBtn.addEventListener('click', startQuizGame)

function startQuizGame() {
  startPageEl.classList.add('hide')
  questionPageEl.classList.remove('hide')

  quizTracker = 0
  showQuestion(quizTracker)
}

function showQuestion(question) {
  resultsEl.textContent = ''
  questionEl.textContent = quizQuestionsList[question].question
  answer1Btn.textContent = quizQuestionsList[question].choices[0]
  answer2Btn.textContent = quizQuestionsList[question].choices[1]
  answer3Btn.textContent = quizQuestionsList[question].choices[2]
  answer4Btn.textContent = quizQuestionsList[question].choices[3]

}

answer1Btn.addEventListener('click', checkAnswer)
answer2Btn.addEventListener('click', checkAnswer)
answer3Btn.addEventListener('click', checkAnswer)
answer4Btn.addEventListener('click', checkAnswer)

function checkAnswer(event) {
  event.preventDefault()
  if (event.target.innerText == quizQuestionsList[quizTracker].answer) {
    //if choice is correct
    resultsEl.textContent= `Correct!`
  } else { 
    //if choice is incorrect
    resultsEl.textContent= `Incorrect.`
  }
  quizTracker++

  console.log(event)
  // if (choices == )
}

function setNextQuestion() {
  showQuestion
}


// document.getElementById('startQuiz').addEventListener('click', () => {
//   startQuizBtn.classList.add('hide')
//   quizQuestions = quizQuestionsList[0].question 
//   console.log(quizQuestions)
// })

// document.getElementById('question').textContent.display
// console.log(question)





































// let countdown = 75;
// let countdownTimer = setInterval( function () {
//   document.getElementById('timer').innerHTML = countdown ;
//   if (countdown <= 0){
//     document.getElementById('timer').textContent = 'No more time left'
//   } else {
//     countdown-- || clearInterval(countdownTimer);
//   }
// },1000);


