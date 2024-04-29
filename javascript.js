function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const roundOutcome = document.createElement("div");
const score = document.createElement("div");
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    switch (playerSelection) {
        case computerSelection:
            roundOutcome.textContent = "It's a draw!";
            score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
            break;
        case "rock":
            if (computerSelection === "paper") {
                computerScore++;
                roundOutcome.textContent = "You Lose! Paper beats Rock";
                score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
            } else {
                playerScore++;
                roundOutcome.textContent = "You Win! Rock beats Scissors";
                score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
            }
            break;
        case "paper":
            if (computerSelection === "scissors") {
                computerScore++;
                roundOutcome.textContent = "You Lose! Scissors beats Paper";
                score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
            } else {
                playerScore++;
                roundOutcome.textContent = "You Win! Paper beats Rock";
                score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                computerScore++;
                roundOutcome.textContent = "You Lose! Rock beats Scissors";
                score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
            } else {
                playerScore++;
                roundOutcome.textContent = "You Win! Scissors beats Paper";
                score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
            }
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
    element.addEventListener("click", (event) => {
        switch (event.target.id) {
            case "rock":
                playRound("rock", getComputerChoice());
                break;
            case "paper":
                playRound("paper", getComputerChoice());
                break;
            case "scissors":
                playRound("scissors", getComputerChoice());
        }
    })
})

const body = document.querySelector("body");
body.append(roundOutcome, score);

