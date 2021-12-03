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
const timerEl = document.querySelector('#timer')
const highscoreEl = document.querySelector('#highscore')
const addHighscoreEl = document.querySelector('#addHighscore')

let quizTracker = 0
let timer = 75
// let points = timer
let highscore = JSON.parse(localStorage.getItem('scores')) || []

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

function startQuizGame() {
  startPageEl.classList.add('hide')
  questionPageEl.classList.remove('hide')
  startTimer()
  quizTracker = 0
  showQuestion(quizTracker)
}

function startTimer() {
  let timerInterval = setInterval(() => {
    timer--
    timerEl.textContent = "Timer: " + timer
    if (timer <= 0 || quizTracker == quizQuestionsList.length) {
      clearInterval(timerInterval)
     showGameOver()
    } else {
      showQuestion(quizTracker)
    }
  }, 1000);
}

function showGameOver() {
  questionPageEl.classList.add('hide')
  highscoreEl.classList.remove('hide')
  document.getElementById('myScore').innerHTML = timer

  // addHighscoreEl.classList.remove('hide')
}

function showQuestion(question) {
  resultsEl.textContent = ''
  questionEl.textContent = quizQuestionsList[question].question
  answer1Btn.textContent = quizQuestionsList[question].choices[0]
  answer2Btn.textContent = quizQuestionsList[question].choices[1]
  answer3Btn.textContent = quizQuestionsList[question].choices[2]
  answer4Btn.textContent = quizQuestionsList[question].choices[3]
}

function checkAnswer(event) {
  event.preventDefault()
  if (event.target.innerText == quizQuestionsList[quizTracker].answer) {
    //if choice is correct
    resultsEl.textContent= `Correct!`
  } else { 
    //if choice is incorrect
    resultsEl.textContent= `Incorrect.`
    timer -= 5
  }
  quizTracker++
}

document.getElementById('submitScore').addEventListener('click', event => {
  event.preventDefault()
  const record = {
    enterInitials: document.getElementById('enterInitials').value,
    score: timer
  }
  highscore.push(record)
  localStorage.setItem('highscore', JSON.stringify(highscore))
  document.getElementById('addHighscore').style.display = 'none'
  document.getElementById('displayScore').style.display = 'block'
  highscore = highscore.sort((a, b) => b.score - a.score)
  highscore.forEach(score => {
    let scoreElem = document.createElement('div')
    scoreElem.innerHTML= `<h6>Username: ${record.enterInitials} | Score: ${record.score}</h6><hr>`
    document.getElementById('displayScore').append(scoreElem)
  })
})


startQuizBtn.addEventListener('click', startQuizGame)
answer1Btn.addEventListener('click', checkAnswer)
answer2Btn.addEventListener('click', checkAnswer)
answer3Btn.addEventListener('click', checkAnswer)
answer4Btn.addEventListener('click', checkAnswer)