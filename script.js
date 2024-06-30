// References stored for elements
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const results = document.getElementById("results");
const choiceBtns = document.querySelectorAll(".choiceBtns");

// Initialize variables to store the player/computer choice and score
let playerChoice;
let playerScore;
let computerChoice;
let computerScore;

// Event listener handles player and computer choices using buttons 
choiceBtns.forEach(button => {
  button.addEventListener("click", () => {
    playerChoice = button.textContent;
    playerText.textContent = `Player chose: ${playerChoice}`;
    computerChoice = getComputerChoice();
    computerText.textContent = `Computer chose: ${computerChoice}`;
    console.log(computerChoice);
  });
});

// Returns one of the following computer choices at random
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  
  switch (randomNumber) {
    case 0:
      computerChoice = "🪨";
      break;
    case 1:
      computerChoice = "📄";
      break;
    case 2:
      computerChoice = "✂️";
      break;
  }
return computerChoice;
};


