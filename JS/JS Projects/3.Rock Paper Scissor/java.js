const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtn.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    playerText.textContent= `Player: ${player}`;
    computerText.textContent= `Computer: ${computer}`;
    resultText.textContent= checkWinner();
    computerTurn();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissor";
      break;
  }
}

function checkWinner(){
    if(player==computer){
        return "Draw!";
    }
    else if(computer=="Rock"){
        return (player== "Paper")?"You Win!":"You Lose!"
    }
    else if(computer=="Paper"){
        return (player== "Scissor")?"You Win!":"You Lose!"
    }
    else if(computer=="Scissor"){
        return (player== "Rock")?"You Win!":"You Lose!"
    }
}
