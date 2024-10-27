const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result h1");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
let cScore = 0;
let pScore = 0;
function playerSelection() {
  rock.addEventListener("click", () => {
    playRound("rock");
  });
  paper.addEventListener("click", () => {
    playRound("paper");
  });
  scissors.addEventListener("click", () => {
    playRound("scissors");
  });
}

function playRound(playerSelection) {
  const choices = ["rock", "paper", "scissors"];
  const randomChoise = choices[Math.floor(Math.random() * choices.length)];
  if (playerSelection === "rock" && randomChoise === "paper") {
    result.innerHTML = "You Lose 😓! ";
    cScore += 1;
    computerScore.innerHTML = cScore;
  } else if (playerSelection === "paper" && randomChoise === "scissors") {
    result.innerHTML = "You Lose 😓! ";
    cScore += 1;
    computerScore.innerHTML = cScore;
  } else if (playerSelection === "scissors" && randomChoise === "rock") {
    result.innerHTML = "You Lose 😓! ";
    cScore += 1;
    computerScore.innerHTML = cScore;
  } else if (playerSelection === "rock" && randomChoise === "scissors") {
    result.innerHTML = `You Win 🎉!`;
    pScore += 1;
    playerScore.innerHTML = pScore;
  } else if (playerSelection === "paper" && randomChoise === "rock") {
    result.innerHTML = `You Win 🎉!`;
    pScore += 1;
    playerScore.innerHTML = pScore;
  } else if (playerSelection === "scissors" && randomChoise === "paper") {
    result.innerHTML = `You Win 🎉!`;
    pScore += 1;
    playerScore.innerHTML = pScore;
  } else {
    result.innerHTML = `It's Tie 👻!`;
  }
}

playerSelection();
