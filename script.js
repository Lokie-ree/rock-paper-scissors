// References stored for all buttons
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const results = document.getElementById("results");
const choiceBtns = document.querySelectorAll(".choiceBtns");

// 
let playerChoice;
let playerScore;
let computerChoice;
let computerScore;

choiceBtns.forEach(button => {
  button.addEventListener("click", () => {
    playerChoice = button.textContent;
    playerText.textContent = playerChoice;
    computerChoice = getComputerChoice();
    computerText.textContent = computerChoice;
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


