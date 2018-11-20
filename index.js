var word = require("./word");
var inquirer = require("inquirer");

function gameStart() {
   console.log(`Welcome to Word Guess!`);
   console.log(`Guess a Letter to Play!`);
   console.log(`You Get 5 Wrong Guesses.`);
}

function display() {
   console.log("Number of Wrong Guesses: " + word.wrongGuess);
   console.log(`Guessed Letters: ${word.guesses.join(",")}`);
   console.log(word.wordArray.join(" "));
   console.log();
}

function gameplay() {
   inquirer.prompt({
      type: "input",
      message: "Guess A Letter",
      name: "guess"
   })
   .then((inquirerResponse) => {
      word.userGuess(inquirerResponse.guess.toUpperCase());
      display();
      checkWin();
   });
}

function checkWin() {
   if(word.wordArray.includes("_") === false && word.wrongGuess < 6) {
      console.log("You Win!");
     playAgain();
   } else if (word.wrongGuess >= 5) {
     console.log("Sorry You Lose!");
     console.log(`The word was: ${word.secret}`);
     playAgain();
   } 
   gameplay();
 }


 function playAgain() {
   delete require.cache[require.resolve('./word')];
   word = require("./word");
   main();
 }

function main() {
   gameStart();
   display();
   gameplay();
   
}

main();