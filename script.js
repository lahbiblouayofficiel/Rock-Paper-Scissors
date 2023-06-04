// Get computer choice randomly
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
  }
  
  // Function to Play a single round 
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Draw";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
      
    } else {
        
        return "You lose!";
    }
  }
  
  // Function to play the game
  function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    let drawGame=0;
    let roundsPlayed = 0;
  
//  play the game 5 time 

    while (roundsPlayed < 5) {
      let playerSelection = prompt("Enter your choice: rock, paper, or scissors");
      playerSelection = playerSelection.toLowerCase();
  
//  Correct intensive inputs       
      while (
        playerSelection !== "rock" &&
        playerSelection !== "paper" &&
        playerSelection !== "scissors"
      ) {
        playerSelection = prompt(
          "Invalid choice. Please enter rock, paper, or scissors"
        );
        playerSelection = playerSelection.toLowerCase();
      }
  
      const computerSelection = getComputerChoice();

//  this is how i know the result is false    

      console.log('this is the computer selection '+computerSelection );
      console.log('this is the playerSelection '+playerSelection);

      const result = playRound(playerSelection, computerSelection);
      console.log(result);
//  Calculate each score 
      if (result === "You win!") {
        scorePlayer++;
      } else if (result === "You lose!") {
        scoreComputer++;
      }else {
        drawGame++ ;
      }
  
      roundsPlayed++;
    }
  //  throw Final scoore 
    console.log(
      `Final Score - Player: ${scorePlayer}, Computer: ${scoreComputer}`
    );
    //  throw the winerrrrr
    if (scorePlayer > scoreComputer) {
      console.log("Congratulations, you win the game!");
    } else if (scorePlayer < scoreComputer) {
      console.log("Oops, you lost the game!");
    } else {
      console.log("The game ended in a draw!");
    }
  }
  
  // Start the game
// Button click event listener
document.getElementById("startButton").addEventListener("click", function() {
    game();
  });