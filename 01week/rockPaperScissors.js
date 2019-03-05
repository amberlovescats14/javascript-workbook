const assert = require('chai').assert;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// module.exports = 
function rockPaperScissors(hand1, hand2) {
  if (hand1 === hand2) {
    return "Tie"
  } else if (hand1 === 'rock') {
    if (hand2 === 'scissor') {
      return "Player1 Wins"
    } else  {
      hand2 === 'paper'
      return "Player2 Wins"
    } 
 
  } else if (hand1 === 'paper') {
    if (hand2 === 'scissor') {
      return "Player2 Wins"
    } else  {
      hand2 === 'rock'
      return "Player1 Wins"
    }
  } else if (hand1 === 'scissor') {
    if (hand2 === 'rock') {
      return "Player2 Wins"
    } else {
      hand2 === 'paper'
      return "Player1 Wins"
    } 
  } else {
    return "incorrect input"
  }





function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}
}
//////////////////////// THIS WORKS
// function sayHello() {
//   return 'hello'
// }

// describe('hello', function(){
//   it('should say hello', function(){
//     assert.equal(sayHello(), 'hello')
//   })
// })
//////////////////////////

// describe('rockPaperScissors', function(){
//   it('should return Tie', function(){
//     if(hand1 === hand2){
//       assert.equal(rockPaperScissors(), "Tie")
//     }
//   })
// })
// Tests////////////////////

// if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "Tie");
      assert.equal(rockPaperScissors('paper', 'paper'), "Tie");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "Tie");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Player2 Wins");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Player2 Wins");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Player1 Wins");
    });
    it('should reply incorrect input', () => {
      assert.typeOf(rockPaperScissors(), 'string')
    })
    // it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
    //   assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
    //   assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
    //   assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    // });
  });
// }
//  else {

//   getPrompt();

// }
