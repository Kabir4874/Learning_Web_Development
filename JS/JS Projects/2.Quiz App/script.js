const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri-Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Arctic", correct: false },
      { text: "Australia", correct: true },
      { text: "Africa", correct: false },
    ],
  },
];

const qusEl = document.getElementById("question");
const ansBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQusIndex = 0;
let score = 0;

function startQuiz() {
  currentQusIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQus();
}

function showQus() {
  resetState();
  let currentQus = questions[currentQusIndex];
  let qusNo = currentQusIndex + 1;
  qusEl.innerHTML = qusNo + ". " + currentQus.question;

  currentQus.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAns);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (ansBtn.firstChild) {
    ansBtn.removeChild(ansBtn.firstChild);
  }
}

function selectAns(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(ansBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}


function showScore(){
  resetState();
  qusEl.innerHTML= `Your Scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML="Play Again";
  nextBtn.style.display= "block";
}


function handleNextButton(){
  currentQusIndex++;
  if(currentQusIndex < questions.length){
    showQus();
  }
  else{
    showScore();
  }
}

nextBtn.addEventListener("click", ()=>{
  if(currentQusIndex < questions.length){
    handleNextButton();
  }
  else
  {
    startQuiz();
  }
})
startQuiz();
