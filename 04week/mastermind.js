'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  let myStr = Math.random().toString(36).substr(2, 4)
  let letters = myStr.replace('\/d/g','\[a-z]/g')

}

// function getRandomInt(min, max) {
//   // return Math.floor(Math.random() * (max - min)) + min;
// }

function generateHint() {
  // your code here
}


const acceptableGuess = (guess) => {
  let letterReg = new RegExp(/[a-z]{4}/is)
  if(letterReg.test(guess)){
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }


//   if(guess.length === 4){
//   let allLettersLegal = true;
//   const guessArr = guess.split('');
//   guessArr.forEach((letter) => {
//     if(letters.indexOf(letter) == -1){
//       allLettersLegal = false
//     }
//   })
//   return allLettersLegal
// }

}

function mastermind(guess) {
 
 if(acceptableGuess(guess)){
  console.log('made it')
 } else {
   console.log('fail')
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
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
