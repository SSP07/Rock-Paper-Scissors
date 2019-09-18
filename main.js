

var playerName = prompt("What is your name?");
      var CPU = "computer";

      

     var isGamePlaying = true
    while (isGamePlaying) {
        // put code in here
function generateComputerMove() {
var randomMove;
var randomNumber = Math.random();
if (randomNumber <= 0.33) {
  randomMove = 'rock';
}
else if (randomNumber <= 0.66) {
  randomMove = 'scissors';
}
else { 
  randomMove = 'paper'; 
}
return randomMove;
}

var playerMove = prompt("Choose your move - rock, paper or scissors");

     //compare rock and scissors
     
var computerMove = generateComputerMove();

function checkResult(computerMove, playerMove) {
    console.log({computerMove,playerMove})
     if (computerMove == playerMove) {
         console.log("draw");
     } 
     
     else if (computerMove === "rock") {
         if (playerMove === "paper") {
         console.log("player wins");
            } else { console.log("computer wins");
         }
     }
     else if (computerMove === "paper") {
         if (playerMove === "scissors") {
         console.log("player wins");
            } else { console.log("computer wins");
         } 
     } 
     else if (computerMove === "scissors")  {
         if (playerMove === "rock") {
             console.log("player wins");
         } else { console.log("computer wins");
         }
     } 
}
     checkResult(computerMove, playerMove);
     isGamePlaying = confirm("play again?")
    }

