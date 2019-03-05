var assert = require('chai').assert
var tools = require('../../01week/rockPaperScissors').rockPaperScissors

describe('rockPaperScissors', function(){
  it('should return string', function(){
    let result = rockPaperScissors();
    assert.typeOf(result, "string")
  })
})

// describe('rockPaperScissors', function(){
//   if (typeof describe === 'function') {

//     describe('rockPaperScissors()', () => {
//       it('should detect a tie', () => {
//         assert.typeOf(rockPaperScissors(), 'string')
//         // assert.equal(rockPaperScissors(hand1 === hand2), "Tie")
//         // assert.equal(rockPaperScissors('rock', 'rock'), "Tie");
//         // assert.equal(rockPaperScissors('paper', 'paper'), "Tie");
//         // assert.equal(rockPaperScissors('scissors', 'scissors'), "Tie");
//       });
//       it('should detect which hand won', () => {
//         assert.equal(rockPaperScissors('rock', 'paper'), "Player2 Wins");
//         assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
//         assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
//       });
//       it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
//         assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
//         assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
//         assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
//       });
//     });
//   } else {
  
//     getPrompt();
  
//   }
  
// })