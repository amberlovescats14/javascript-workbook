'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
    let block = stacks[startStack].pop()
    
    stacks[endStack].push(block)
  
}

function isLegal(startStack, endStack) {
  console.log(stacks[startStack][stacks[startStack].length-1])
  console.log(stacks[endStack][stacks[endStack].length-1])
  if((startStack === 'a' || startStack === 'b' || startStack === 'c') && (endStack === 'a' || endStack === 'b'|| endStack === 'c')
  ){
    if((stacks[startStack][stacks[startStack].length-1] > stacks[endStack][stacks[endStack].length-1]) || (stacks[endStack][stacks[endStack].length] === undefined)){
      console.log('legal move')
      return true
    }  else if((stacks[startStack][stacks[startStack].length-1]) <(stacks[endStack][stacks[endStack].length-1])){
      console.log('not legal')
      return false
    }
  } else {
    console.log('incorrect input')
    return false
  }
}

function checkForWin(stacks) {
  // console.log(stacks)
  if (stacks === { a: [], b: [], c: [4, 3, 2, 1] }){
    return true
  } else {
    return false
  }


}

function towersOfHanoi(startStack, endStack) {
  if(isLegal(startStack, endStack)){
      movePiece(startStack, endStack)
   if(checkForWin(stacks)){
     console.log('WINNER')
   }
  } else {
    console.log('illegal move')
  }


}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
