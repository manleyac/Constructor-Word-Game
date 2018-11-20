

class Letters {
   constructor(secret) {
     this.secret = secret;
     this.wordArray = this.createBlankArray();
     this.wrongGuess = 0;
     this.guesses = [];
   }
   createBlankArray() {
     let blankArr = [];
     for (let i = 0; i < this.secret.length; i++) {
        blankArr.push("_");
     }
     return blankArr;
   }
   userGuess(guess) {
     if(this.secret.indexOf(guess) !== -1) {
       this.addLetter(guess);
     } else {
       this.wrongGuess++;
       this.guesses.push(guess);
     }
   }
   addLetter(guess) {
     let i = 0;
     while(i < this.secret.length) {
       let index = this.secret.indexOf(guess,i);
       if(index !== -1) {
         this.wordArray[index] = guess;
         i = index +1
       } else {
           break;
       }
     }
   }
 }


module.exports = Letters;