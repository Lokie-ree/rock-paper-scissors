// Keeps track of player and computer scores
let playerScore = 0;
let computerScore = 0;


// Returns one of the following choices at random
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
        let computerChoice;

        if (randomNumber === 1) {
            computerChoice = "rock";
        } else if (randomNumber === 2) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
    return computerChoice;
};

// Returns one of the valid choices based on user input
const getPlayerChoice = () => {
    let playerChoice = window.prompt("Which will you choose: rock, paper, or scissors?").toLowerCase();
    return playerChoice;
};

// Determines the round winner, increments score, and displays the winning message
const playRound = (playerChoice, computerChoice) => {
    const roundTie = playerChoice === computerChoice;
    const playerWin = (playerChoice === "rock" && computerChoice === "scissors") ||
                      (playerChoice === "paper" && computerChoice === "rock") ||
                      (playerChoice === "scissors" && computerChoice === "paper");
  
    if (roundTie) {
        console.log(`It's a tie. You both chose: ${computerChoice.toUpperCase()}` );
    } else if (playerWin) {
        playerScore += 1;
        console.log(`You won! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`);
    } else {
        computerScore += 1;
        console.log("You lose! " + computerChoice.toUpperCase() + " beats " + playerChoice.toUpperCase() + "!");
  }
  
}

// Displays the score at the end of each round
const displayScore = (playerScore, computerScore) => {
    console.log("The current score is Player: " + playerScore + " and Computer: " + computerScore + ".");
}

// Plays 5 rounds of the game, keeps track of the scores, and declares a winner

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);