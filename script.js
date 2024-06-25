/* Step 2: Write the logic to get the computer's choice
    > Create a function named getComputerChoice that will randomly return
      one of the following random strings: "rock, paper, or scissors" */

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
}


