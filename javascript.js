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
            if (computerSelection === "paper") {
                return "You Lose! Paper beats Rock";
            } else {
                return "You Win! Rock beats Scissors";
            }
        case "paper":
            if (computerSelection === "scissors") {
                return "You Lose! Scissors beats Paper";
            } else {
                return "You Win! Paper beats Rock";
            }
        case "scissors":
            if (computerSelection === "rock") {
                return "You Lose! Rock beats Scissors";
            } else {
                return "You Win! Scissors beats Paper";
            }
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    let playerSelection = prompt("Enter your choice");
    let computerSelection = getComputerChoice();
    let roundOutcome = playRound(playerSelection, computerSelection);
    if (roundOutcome.startsWith("You Win!")) {
        playerScore++;
    } else if (roundOutcome.startsWith("You Lose!")) {
        computerScore++;
    }
    console.log(roundOutcome);

    playerSelection = prompt("Enter your choice");
    computerSelection = getComputerChoice();
    roundOutcome = playRound(playerSelection, computerSelection);
    if (roundOutcome.startsWith("You Win!")) {
        playerScore++;
    } else if (roundOutcome.startsWith("You Lose!")) {
        computerScore++;
    }
    console.log(roundOutcome);

    playerSelection = prompt("Enter your choice");
    computerSelection = getComputerChoice();
    roundOutcome = playRound(playerSelection, computerSelection);
    if (roundOutcome.startsWith("You Win!")) {
        playerScore++;
    } else if (roundOutcome.startsWith("You Lose!")) {
        computerScore++;
    }
    console.log(roundOutcome);

    playerSelection = prompt("Enter your choice");
    computerSelection = getComputerChoice();
    roundOutcome = playRound(playerSelection, computerSelection);
    if (roundOutcome.startsWith("You Win!")) {
        playerScore++;
    } else if (roundOutcome.startsWith("You Lose!")) {
        computerScore++;
    }
    console.log(roundOutcome);

    playerSelection = prompt("Enter your choice");
    computerSelection = getComputerChoice();
    roundOutcome = playRound(playerSelection, computerSelection);
    if (roundOutcome.startsWith("You Win!")) {
        playerScore++;
    } else if (roundOutcome.startsWith("You Lose!")) {
        computerScore++;
    }
    console.log(roundOutcome);

    if (playerScore < computerScore) {
        console.log(`You Lose! You won ${playerScore} times and the computer won ${computerScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`You Win! You won ${playerScore} times and the computer won ${computerScore}.`);
    } else {
        console.log(`It's a draw! Both players won ${playerScore} times.`);
    }
}