// References stored for all buttons
const playBtn = document.getElementById("playBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const playAgainBtn = document.getElementById("playAgainBtn");

// Generates a random number and intializes scores
const randomNumber = Math.floor(Math.random() * 3);
let playerScore;
let computerScore;

// Returns one of the following computer choices at random
const getComputerChoice = (randomNumber) => {
  
  let computerChoice;

  switch (randomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  
  return computerChoice;
};

playBtn.addEventListener("mousedown", () => {
  console.log("Play Button Selected!");
});

rockBtn.addEventListener("mousedown", () => {
  console.log("Rock Button Selected!");
});

paperBtn.addEventListener("mousedown", () => {
  console.log("Paper Button Selected!");
});

scissorsBtn.addEventListener("mousedown", () => {
  console.log("Scissors Button Selected!");
});

playAgainBtn.addEventListener("mousedown", () => {
  console.log("Play Again Button Selected!");
});