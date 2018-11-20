//import letter.js containing Hangman constructor
var Letters = require("./letter");

//word bank for secret word
const wordList = ["car","bird","book","tree","coffee","pond","dog","cat","glass","speaker","mouse","laptop","picture","screen","key","forest","fish","why","weather","lightning","thunder","phone","guitar"];

//Generates a random number to select a word from wordlist
function pickSecret(wordList) {
   let randNum = Math.floor(Math.random() * (wordList.length))
   return wordList[randNum];
}

var secret = pickSecret(wordList).toUpperCase();
var word = new Letters(secret);


module.exports = word;

