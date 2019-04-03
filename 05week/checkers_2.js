'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let playerTurn = 'B';

class Checker {
  constructor(color) {
    if (color === 'red') {
      this.symbol = 'R'
    } else {
      color === 'black'
      this.symbol = 'B'
    }
  }
}

class Board {
  constructor() {
    this.checkers = [];
    this.grid = [];
    // this.piece = whichPiece 
    this.black = 'B'
    this.red = 'R'
    this.turn = this.black;
  }
  //attributes for the whole board and the array where the pieces are located
  setBoard() {
    const redPieces = [
      [0, 1],
      [0, 3],
      [0, 5],
      [0, 7],
      [1, 0],
      [1, 2],
      [1, 4],
      [1, 6],
      [2, 1],
      [2, 3],
      [2, 5],
      [2, 7]
    ];
    for (let i = 0; i < 12; i++) {
      const redRow = redPieces[i][0];
      //running through the nested array, i stands for each array, 0 is the position of the number I am looking for
      const redColumn = redPieces[i][1];
      //again i runs each of the nested array and returns them in the 1 position
      const red = new Checker('red');
      // new instance of checker.piece
      this.checkers.push(red);
      //pushing the correct piece into the array
      this.grid[redRow][redColumn] = red;
      //now we are using the stored data to put the pieces into the board array
    }
    const blackPieces = [
      [5, 0],
      [5, 2],
      [5, 4],
      [5, 6],
      [6, 1],
      [6, 3],
      [6, 5],
      [6, 7],
      [7, 0],
      [7, 2],
      [7, 4],
      [7, 6]
    ];
    for (let i = 0; i < 12; i++) {
      const blackRow = blackPieces[i][0];
      const blackColumn = blackPieces[i][1];
      const black = new Checker('black');
      this.checkers.push(black);
      this.grid[blackRow][blackColumn] = black;

    }
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {

          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        }
        // else if (this.grid[row]+[column] % 2 === 0){
        //   rowOfCheckers.push(this.blackPiece)
        // }
        else {
          // just push in a blank space

          rowOfCheckers.push('')
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

}


class Game {
  constructor() {
    this.board = new Board;
    // this.black = 'B'
    // this.red = 'R'
    this.black = 'B'
    this.red = 'R'
    this.turn = this.black;
    this.blackAmount = 12;
    this.redAmount = 12

  }

  start() {

    this.board.createGrid();
    this.board.setBoard();

  }

  moveChecker(whichPiece, toWhere) {
    let number = parseInt(whichPiece)
    let start = whichPiece.split('')
    let startRow = start[0]
    let startCol = start[1]
    let endSpot = toWhere.split('')
    let endColumn = endSpot[1]
    let endRow = endSpot[0]
    const movingPiece = this.board.grid[startRow][startCol]


    let numberStart = Number(whichPiece)
    let numberEnd = Number(toWhere)


    /////////////////////////////////
    //for jumping purpose
    ////////////
    let blackLeft = numberStart - 9
    let blackLeftKill = blackLeft.toString().split('').map(Number)
    let blackKillRowLeft = blackLeftKill[0]
    let blackKillColumnLeft = blackLeftKill[1]
    /////////////
    let blackRight = numberStart - 11
    let blackRightKill = blackRight.toString().split('').map(Number)
    let blackKillRowRight = blackRightKill[0]
    let blackKillColumnRight = blackRightKill[1]
    /////////////
    let redLeft = numberStart + 9
    let redLeftKill = redLeft.toString().split('').map(Number)
    let redKillRowLeft = redLeftKill[0]
    let redKillColumnLeft = redLeftKill[1]
    //////////////////
    let redRight = numberStart + 11
    let redRightKill = redRight.toString().split('').map(Number)
    let redKillRowRight = redRightKill[0]
    let redKillColumnRight = redRightKill[1]

    if (validInput()) {
      // console.log(1)
      if (this.turn === this.black) {
        // console.log(2)
        // console.log('TEST: ', this.board.grid[endRow, endColumn]);
        blackRules()
      } else {
        // console.log(3)
        redRules()
      }
      
    }

    function validInput() {
      let reg = new RegExp(/[0-7]{2}/g)
      let testing = reg.test(whichPiece)
      if (testing) {
        return true
      } else {
        console.log('incorrect input')
        return false
      }
    }

    function movePiece() {
      this.board.grid[endRow][endColumn] = movingPiece;
      this.board.grid[startRow][startCol] = null;
      switchPlayer()
    }

    function switchPlayer() {
      this.turn === this.black ? this.red : this.black;
    }

    function blackRules() {
  
      if ((numberEnd === numberStart - 9) || (numberEnd === numberStart - 11)) {
        console.log(1)
        movePiece()
      } else {
        console.log(2)
        blackJumpRules()
      }
    }

    function blackJumpRules() {
      if (numberEnd === numberStart - 18) {
        if (this.board.grid[blackKillRowLeft][blackKillColumnLeft] === this.red) {
          this.board.grid[blackKillRowLeft][blackKillColumnLeft] = null;
          this.redAmount--
          movePiece()
        }
      } else if (numberEnd === numberStart - 22) {
        if (this.board.grid[blackKillRowRight][blackKillColumnRight] === this.red) {
          this.board.grid[blackKillRowLeft][blackKillColumnLeft] = null;
          this.redAmount--
          movePiece()
        }
      } else {
        return false
      }
    }

    function redRules() {
      if ((numberEnd === numberStart + 9) || (numberEnd === numberStart + 11)) {
        movePiece()
      } else {
        redJumpRules()
      }
    }

    function redJumpRules() {
      if (numberEnd === numberStart + 18) {
        if (this.board.grid[redKillRowLeft][redKillColumnLeft] === this.black) {
          this.board.grid[redKillRowLeft][redKillColumnLeft] = null;
          this.blackAmount--
          movePiece()
        }
      } else if (numberEnd === numberStart + 22) {
        if (this.board.grid[redKillRowRight][redKillColumnRight] === this.black) {
          this.board.grid[redKillRowRight][redKillColumnRight] = null;
          this.blackAmount--
          movePiece()
        }
      } else {
        return false
      }

    }

  }







  //! if black use black rules... use an if else to see if its a single space move, if its a double space move then we need to use jumpRules
  // if (validInput(whichPiece)) {
  //   if ((numberEnd === numberStart - 9) || (numberEnd === numberStart - 11)) {
  //     this.board.grid[endRow][endColumn] = movingPiece;
  //     this.board.grid[startRow][startCol] = null;
  //     this.switchPlayer()
  //   } else if ((numberEnd === numberStart + 9) || (numberEnd === numberStart + 11)) {
  //     this.board.grid[endRow][endColumn] = movingPiece;
  //     this.board.grid[startRow][startCol] = null;
  //     this.switchPlayer()
  //   } else if ((numberEnd === numberStart + 18) || (numberEnd === numberStart + 22)) {
  //     this.board.grid[endRow][endColumn] = movingPiece;
  //     this.board.grid[startRow][startCol] = null;
  //     this.board.grid[blackKillRowLeft][blackKillColumnLeft] = null;
  //     this.redAmount--
  //     this.switchPlayer()

  //   }
  // moveChecker(whichPiece, toWhere) {
  //     let number = parseInt(whichPiece)
  //     let start = whichPiece.split('')
  //     let startRow = start[0]
  //     let startCol = start[1]
  //     let endSpot = toWhere.split('')
  //     let endColumn = endSpot[1]
  //     let endRow = endSpot[0]
  //     const movingPiece = this.board.grid[startRow][startCol]
  //     let numberStart = parseInt(whichPiece)
  //     let numberEnd = parseInt(toWhere)
  //     if (this.validInput(whichPiece)) {
  //       if (this.board.grid[endRow][endColumn] === null) {
  //         if (this.turn === this.black) {
  //           if ((numberEnd === numberStart - 9) || (numberEnd === numberStart - 11)) {
  //             this.board.grid[endRow][endColumn] = movingPiece;
  //             this.board.grid[startRow][startCol] = null;
  //             this.switchPlayer()
  //           } else if (this.turn === this.red) {
  //             if ((numberEnd === numberStart + 9) || (numberEnd === numberStart + 11)) {
  //               this.board.grid[endRow][endColumn] = movingPiece;
  //               this.board.grid[startRow][startCol] = null;
  //             }
  //           }

  //         }

  //         validInput(whichPiece) {
  //           let reg = new RegExp(/[0-7]{2}/g)
  //           let testing = reg.test(whichPiece)
  //           if (testing) {
  //             return true
  //           } else {
  //             console.log('incorrect input')
  //             return false
  //           }
  //         }

  //         rules(whichPiece, toWhere) {
  //           let numberStart = parseInt(whichPiece)
  //           let numberEnd = parseInt(toWhere)
  //           if (this.turn === this.black) {
  //             if ((numberEnd === numberStart - 9) || (numberEnd === numberStart - 11)) {
  //               return true //! i want to put the acual movment in here
  //             } else if ((numberEnd === numberStart - 18) || (numberEnd === numberStart - 22)) {
  //               return true
  //             }
  //           } else if (this.turn === this.red) {
  //             if ((numberEnd === numberStart + 9) || (numberEnd === numberStart + 11)) {
  //               return true
  //             } else if ((numberEnd === numberStart + 18) || (numberEnd === numberStart + 22)) {
  //               return true
  //             }

  //           } else {
  //             return false
  //           }
  //         }



}



function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}