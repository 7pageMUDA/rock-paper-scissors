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

    switch (playerSelection) {
        case computerSelection:
            console.log("It's a draw!");
            break;
        case "rock":
            if (computerSelection === "paper") {
                console.log("You Lose! Paper beats Rock");
            } else {
                console.log("You Win! Rock beats Scissors");
            }
            break;
        case "paper":
            if (computerSelection === "scissors") {
                console.log("You Lose! Scissors beats Paper");
            } else {
                console.log("You Win! Paper beats Rock");
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                console.log("You Lose! Rock beats Scissors");
            } else {
                console.log("You Win! Scissors beats Paper");
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
