// Step 1: Create variables to keep track of Human/Computer scores
let playerScore = 0;
let computerScore = 0;

// Function that returns one of the following choices: rock, paper, scissors 
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

// Function that returns one of the valid choices based on user input
const getPlayerChoice = () => {
      let playerChoice = window.prompt("Which will you choose: rock, paper, or scissors?").toLowerCase();
      return playerChoice;
};

// Function that determines the round winner, increments score, and displays the winning message
const playRound = (playerChoice, computerChoice) => {
    const roundTie = playerChoice === computerChoice;
    const playerWin = (playerChoice === "rock" && computerChoice === "scissors") ||
                      (playerChoice === "paper" && computerChoice === "rock") ||
                      (playerChoice === "scissors" && computerChoice === "paper");
    
    if (roundTie) {
      console.log("It's a tie. Both of you chose " + computerChoice + "." );
    } else if (playerWin) {
      playerScore += 1;
      console.log("You won! " + playerChoice + " beats " + computerChoice + "!");
    } else {
      computerScore += 1;
      console.log("You lose! " + computerChoice + " beats " + playerChoice + "!");
    }
}


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);