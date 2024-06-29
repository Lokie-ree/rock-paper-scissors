const playBtn = document.getElementById("playBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const playAgainBtn = document.getElementById("playAgainBtn");

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