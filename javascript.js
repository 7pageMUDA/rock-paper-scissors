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

function playRound(playerSelection, computerSelection) {

    switch (playerSelection.toLowerCase()) {
        case computerSelection:
            return "It's a draw!";
        case "rock":
            if (computerSelection === "Paper") {
                return "You Lose! Paper beats Rock";
            } else {
                return "You Win! Rock beats Scissors";
            }
        case "paper":
            if (computerSelection === "Scissors") {
                return "You Lose! Scissors beats Paper";
            } else {
                return "You Win! Paper beats Rock";
            }
        case "scissors":
            if (computerSelection === "Rock") {
                return "You Lose! Rock beats Scissors";
            } else {
                return "You Win! Scissors beats Paper";
            }
    }
}