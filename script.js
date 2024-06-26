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
const playRound = (playerChoice, computerChoice, playerScore, computerScore) => {
    const roundTie = playerChoice === computerChoice;
    const playerWin = (playerChoice === "rock" && computerChoice === "scissors") ||
                      (playerChoice === "paper" && computerChoice === "rock") ||
                      (playerChoice === "scissors" && computerChoice === "paper");
  
    if (roundTie) {
        console.log(`It's a tie. You both chose: ${computerChoice.toUpperCase()}` );
    } else if (playerWin) {
        playerScore += 1;
        console.log(`You win. ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`);
    } else {
        computerScore += 1;
        console.log(`You lose. ${computerChoice.toUpperCase()} beat ${playerChoice.toUpperCase()}!`);
  }
    return [playerScore, computerScore];
}

// Plays 5 rounds of the game, keeps track of the scores, and declares a winner


const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round < 6; round ++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    [playerScore, computerScore] = playRound(playerSelection, computerSelection, playerScore, computerScore);
    
    console.log(`The score at the end of Round ${round} is Player (${playerScore}) Computer (${computerScore}).`);
  }

  if (playerScore > computerScore) {
    console.log(`You won the match by a score of ${playerScore}-${computerScore}!`);
  } else if (playerScore < computerScore) {
    console.log(`You lost the match by a score of ${computerScore}-${playerScore}!`);
  } else {
    console.log(`The match ended in a ${computerScore}-${computerScore} tie!`);
  }
  
}

playGame()

