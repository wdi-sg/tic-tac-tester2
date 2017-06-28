var grid = ['','','','','','','','','']
var currentPlayer = 1

function restart () {
  grid = ['','','','','','','','','']
  currentPlayer = 1
}

function isGameOver (){
  if
  (
   (grid[0] === 1 && grid[1] === 1 && grid[2] === 1 ) ||
   (grid[3] === 1 && grid[4] === 1 && grid[5] === 1 ) ||
   (grid[6] === 1 && grid[7] === 1 && grid[8] === 1 ) ||
   (grid[0] === 1 && grid[3] === 1 && grid[6] === 1 ) ||
   (grid[1] === 1 && grid[4] === 1 && grid[7] === 1 ) ||
   (grid[2] === 1 && grid[5] === 1 && grid[8] === 1 ) ||
   (grid[0] === 1 && grid[4] === 1 && grid[8] === 1 ) ||
   (grid[2] === 1 && grid[4] === 1 && grid[6] === 1 ) ||
   (grid[0] === 2 && grid[1] === 2 && grid[2] === 2 ) ||
   (grid[3] === 2 && grid[4] === 2 && grid[5] === 2 ) ||
   (grid[6] === 2 && grid[7] === 2 && grid[8] === 2 ) ||
   (grid[0] === 2 && grid[3] === 2 && grid[6] === 2 ) ||
   (grid[1] === 2 && grid[4] === 2 && grid[7] === 2 ) ||
   (grid[2] === 2 && grid[5] === 2 && grid[8] === 2 ) ||
   (grid[0] === 2 && grid[4] === 2 && grid[8] === 2 ) ||
   (grid[2] === 2 && grid[4] === 2 && grid[6] === 2 ) ||
   grid.filter(function (num) { return num === '' }).length === 0
 ) {
   return true
 } else {
   return false
 }
}

function whoWon (){
  if (isGameOver() === true) {
    if (grid.filter(function(num) { return num === ''}).length === 0) {
      return 3
    } else if (currentPlayer === 1) {
      return 2
    } else if (currentPlayer === 2) {
      return 1
    }
  } else {
      return 0
  }
}


function playTurn(index){
  if (isGameOver() === false) {
    if (grid[index] !== '') {
      return false
    } else {
      grid[index] = currentPlayer
      if (currentPlayer === 1) {
        currentPlayer = 2
      } else {
        currentPlayer = 1
      }
      return true
    }
  } else {
    return false
  }
}
