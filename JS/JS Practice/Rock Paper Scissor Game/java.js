const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const btn = document.querySelectorAll(".btn");

let playerTurn;
let computerTurn;
let mainResult;

btn.forEach((button) => {
  button.addEventListener("click", () => {
    playerTurn = button.textContent;
    player.textContent = `Player: ${playerTurn}`;
    computerValue();
    computer.textContent = `Computer: ${computerTurn}`;
    result.textContent = checkWinner();
  });
});

function computerValue() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  switch (randomNum) {
    case 1:
      computerTurn = "Rock";
      break;
    case 2:
      computerTurn = "Paper";
      break;
    case 3:
      computerTurn = "Scissor";
      break;
  }
}


function checkWinner(){
    if(playerTurn==computerTurn){
        return "Draw!";
    }
    else if(playerTurn=="Rock"){
        return (computerTurn=="Paper")?"You Lose!":"You Win!";
    }
    else if(playerTurn=="Paper"){
        return (computerTurn=="Scissor")? "You Lose!":"Your Win!";
    }
    else if(playerTurn=="Scissor"){
        return (computerTurn="Rock")?"You Lose!": "Your Win!";
    }
}