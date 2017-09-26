var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0] // declare empty grid
var currentPlayer = 1 // start with player 1
var whoWonValue = 0 // start at 0, player 1 or player 2, draw is 3
var playTurnValue = false  // boolean value, indicate if move is allowed
var isGameOverValue = false // boolean value, indicate if game is over
var curTurn = 1;  // current turn

// flow of functions: restart() -> playTurn -> isGameOver -> whoWon -> restart -> ...

function restart () {
  grid = [0, 0, 0, 0, 0, 0, 0, 0, 0] // reset board
  isGameOverValue = false // isGameOver should return false at start
  whoWonValue = 0 // whoWon should return 0 at start of game
  currentPlayer = 1 // currentPlayer should start with 1
  curTurn = 1 // currentTurn is reset to 1
}

function playTurn (index) {
  playTurnValue = false
  // console.log(curTurn)
  if (grid[index] === 0) {
    playTurnValue = true //if grid is empty, playTurnValue is true
    if (currentPlayer === 1) {
      grid[index] = 1 // player 1 indicates 1
      currentPlayer++ //change to next player
    } else {
      grid[index] = -1 // player 2 indicates -1
      currentPlayer-- // change to next player
    }
  }
  curTurn ++
  isGameOver() // after every turn, check for win
  return playTurnValue // after each turn playTurn should be true
}

function isGameOver () {
  // win conditions
  row1 = grid[0] + grid[1] + grid[2]
  row2 = grid[3] + grid[4] + grid[5]
  row3 = grid[6] + grid[7] + grid[8]
  column1 = grid[0] + grid[3] + grid[6]
  column2 = grid[1] + grid[4] + grid[7]
  column3 = grid[2] + grid[5] + grid[8]
  diagonal1 = grid[0] + grid[4] + grid[8]
  diagonal2 = grid[2] + grid[4] + grid[6]
    if (row1 === 3 || row1 === -3) {
      playTurnTrueOrFalse = false
        whoWon()
    } else if (row2 === 3 || row2 === 3) {
      playTurnTrueOrFalse = false
        whoWon()
    } else if (row3 === 3 || row3 === 3) {
      playTurnTrueOrFalse = false
        whoWon()
    } else if (column1 === 3 || column1 === 3) {
      playTurnTrueOrFalse = false
        whoWon()
    } else if (column2 === 3 || column2 === 3) {
      playTurnTrueOrFalse = false
        whoWon()
    } else if (column3 === 3 || column3 === 3) {
      playTurnTrueOrFalse = false
        whoWon()
    } else if (diagonal1 === 3 || diagonal1 === 3) {
      playTurnTrueOrFalse = false
        whoWon()
    } else if (diagonal2 === 3 || diagonal2 === 3) {
      playTurnTrueOrFalse = false
        whoWon()
    } else if (curTurn === 9) {
      whoWonValue = 3
    }
    return isGameOverValue
}

function whoWon () { // built into isGameOver()
  if (row1 === 3 || row2 === 3 || row3 === 3 || column1 === 3 || column2 === 3 || column3 === 3 || diagonal1 === 3 || diagonal2 === 3) {
    whoWonValue = 1
  } else if (row1 === -3 || row2 === -3 || row3 === -3 || column1 === -3 || column2 === -3 || column3 === -3 || diagonal1 === -3 || diagonal2 === -3) {
    whoWonValue = 2
  }
  return whoWonValue
}
