const quizQuestionsList = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ['javascript', 'scripting', 'script', 'js'],
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
    answer: '//with two backlashes'
  },
  {
    question: "Which operator is used to assign value to a variable?",
    choices: ['*', '-', '=', 'x'],
    answer: '='
  },
  {
    question: "How to write and IF statement in JavaScript",
    choices: ['if i=5', 'if i=5 then', 'if (i==5)', 'if i==5 then'],
    answer: 'if (i==5)'
  }
]
let quizQuestions = ''
const startQuizBtn = document.getElementById('startQuiz')

startQuizBtn.addEventListener('click', startQuizGame)

function startQuizGame() {
  startQuizBtn.classList.add('hide')
  setNextQuestion
}

function setNextQuestion() {
  showQuestion(question[0])
}

function showQuestion(question) {

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


