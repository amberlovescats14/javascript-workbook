'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    // console.log(board[i]);
  }
}

function generateSolution() {
  let myStr = Math.random().toString(36).substr(2, 4)
  letters = myStr.replace('\/d/g','\[a-z]/g')

}
////VARIABLES 
let letters = ""
let correctLetters = 0
let correctSpot = 0
let numberOfGuesses = 0
//////

function generateHint(guess) {
  correctLetters = 0
  correctSpot = 0
  for(let i = 0; i < letters.length; i++){
    for(let g = 0; g < guess.length; g++){
      if(guess[g] === letters[i]){
        correctLetters++
      } 
    }
    if(letters[i] === guess[i]){
      correctSpot++
    }
  }
  return `Hints: CorrectSpot: ${correctSpot} , CorrectLetters: ${correctLetters}`
}


const acceptableGuess = (guess) => {
  let letterReg = new RegExp(/[a-z]{4}/is)
  if(letterReg.test(guess)){
    return true
  } else {
    return false
  }

}

function mastermind(guess) {
 
 if(acceptableGuess(guess)){
  generateHint(guess)
  if(guess === letters){
    console.log('You guessed it!')
    return 'You guessed it!'
  } else {
    numberOfGuesses++
    if(numberOfGuesses === 10){
      console.log('Sorry you lost')
    }
  }
 } else {
   console.log('Unacceptable guess')
 }
 

}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  letters = 'abcd';
  
  describe('#generateHint(guess)', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(generateHint("aebf"), `Hints: CorrectSpot: 1 , CorrectLetters: 2`);
    });
  });

  describe('#mastermind()', () => {
    it('should detect a win', () => {
      assert.equal(mastermind('abcd'), 'You guessed it!');
    });
    

  });

} else {

  generateSolution();
  getPrompt();
}
