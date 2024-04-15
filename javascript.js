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
            console.log("It's a draw!");
            break;
        case "rock":
            if (computerSelection === "Paper") {
                console.log("You Lose! Paper beats Rock");
            } else {
                console.log("You Win! Rock beats Scissors");
            }
            break;
        case "paper":
            if (computerSelection === "Scissors") {
                console.log("You Lose! Scissors beats Paper");
            } else {
                console.log("You Win! Paper beats Rock");
            }
            break;
        case "scissors":
            if (computerSelection === "Rock") {
                console.log("You Lose! Rock beats Scissors");
            } else {
                console.log("You Win! Scissors beats Paper");
            }
            break;
    }
}