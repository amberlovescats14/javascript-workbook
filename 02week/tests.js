const assert = require('chai').assert
const rps = require('../01week/rockPaperScissors')

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
  });
  it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
    assert.equal(rockPaperScissors('rOcK', ' paper '), "incorrect input");
    assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "incorrect input");
    assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "incorrect input");
  });
});
