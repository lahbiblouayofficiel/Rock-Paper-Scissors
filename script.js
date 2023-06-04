

// Get computer choice randomly :~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let answer=["Rock","Scissors","Paper"];

function getComputerChoice( ) {
    
    chose = Math.floor(Math.random() * (3) );

    return answer[chose];
  
}

let computerSelection = getComputerChoice();


//  Test output console.log( getComputerChoice());

// Get Player choice 'Rock', 'Paper', 'Scissors' :~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



let userInput = prompt("Enter your choice: Rock, Paper, or Scissors");

while (!answer.includes(userInput)) {
  userInput = prompt("Invalid choice. Please enter Rock, Paper, or Scissors: plz dont forget lower and UpperCase ");
}






// Function one round game : ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




 
console.log('computerSelection: '+ computerSelection);

function playRound(playerSelection, computerSelection) {

// computer winn condition 

    if ((computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")   ){

               
        return false;

// player win condition 

    } else if ((computerSelection === "Paper" && playerSelection === "Scissors") ||
               (computerSelection === "Rock" && playerSelection === "Paper") ||
               (computerSelection === "Scissors" && playerSelection === "Rock")   ) {

                
         return true;

// the two choice are equal 

    }else  {
        

        return "Draw";
    }
 }

 console.log('Function one round game:  ' + playRound(playerSelection, computerSelection));


//Function to play the Game 5 rounds ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let scoreComputer=0;
let scorePlayer=0;
let scroreDraw=0;




       
    function score(){
     if ( playRound() === true ) {
      
        scorePlayer += 1 ;
         return scorePlayer  ;
     }
     else if  ( playRound() === false ){
        scoreComputer += 1;
         return  scoreComputer  ;

     } else {
        scroreDraw +=1;
         return scroreDraw ;   

     }
    }
    
  
    for ( let i=0 ; i < 5 ; i++){
  score();
    }

function game() {
   
    
    if (scoreComputer > scorePlayer){

        console.log('you lose ! Computer Score : ' + scoreComputer + ' - ' +  scorePlayer + ' Your Score' );
    }
    else if (scoreComputer = scorePlayer){

        console.log('you Win ! Computer Score : ' + scoreComputer + ' - ' +  scorePlayer + ' Your Score' );
    } else {

        console.log('Draw game ! Computer Score : ' + scoreComputer + ' - ' +  scorePlayer + ' Your Score' );
    }

   
     
 }

 console.log(game()); 