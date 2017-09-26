var grid = [0,0,0,0,0,0,0,0,0]
var currentPlayer = 1

function restart() {
  if(isGameOver(true)) {
  // if(whoWon() !==0) {
    grid = [0,0,0,0,0,0,0,0,0]
    currentPlayer = 1
    count = 0
  }
}

function isGameOver () {
  if (whoWon() !==0) {
    return true
  } else {
    return false
  }
// should give true or false if game is over
}




function whoWon () {

  var rowOne = grid[0] + grid[1] + grid[2]
  var rowTwo = grid[3] + grid[4] + grid[5]
  var rowThree = grid[6] + grid[7] + grid[8]
  var columnOne = grid[0] + grid[3] + grid[6]
  var columnTwo = grid[1] + grid[4] + grid[7]
  var columnThree = grid[2] + grid[5] + grid[8]
  var diagOne = grid[0] + grid[4] + grid[8]
  var diagTwo = grid[2] + grid[4] + grid[6]

switch(true) {
  case rowOne === 3 || rowTwo === 3 || rowThree === 3 || columnOne === 3 || columnTwo === 3 || columnThree === 3 || diagOne === 3 || diagTwo === 3:
  return 1
  case rowOne === -3 || rowTwo === -3 || rowThree === -3 || columnOne === -3 || columnTwo === -3 || columnThree === -3 || diagOne === -3 || diagTwo === -3:
  return 2
  case count === 9:
  return 3
  default:
  return 0
  }
}

var count = 0
function playTurn (index) {
  if (grid[index] === 0) {
    if (currentPlayer === 1) {
      grid[index] = 1
      currentPlayer = 2
    } else {
      grid[index] = -1
      currentPlayer = 1
    }
    count ++
    return true
  }
  return false
}
  // check if anyone have taken the grid.

// return a boolean - true if can move. false if can't
