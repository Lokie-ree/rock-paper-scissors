// Step 1: Create variables to keep track of Human/Computer scores
let humanScore = 0;
let computerScore = 0;


// Step 2: Write the logic to get the computer's choice

// Function that returns one of the following choices: rock, paper, scissors 
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
        let computerChoice = "";

        if (randomNumber === 1) {
            computerChoice += "Rock";
        } else if (randomNumber === 2) {
            computerChoice += "Paper";
        } else {
            computerChoice += "Scissors";
        }
    return computerChoice;
};

// Step 3: Write the logic to get the human's choice

// Function that returns one of the valid choices based on user input
const getHumanChoice = () => {
      let humanDecision = window.prompt("Which will you choose: rock, paper, or scissors?");
      return humanDecision.toLowerCase();
};