var grid = [0,0,0,0,0,0,0,0,0]
var currentPlayer = 1

var toCount = 0
function playTurn (index) {
  if(grid[index] === 0) {
    if(currentPlayer=== 1) {
      grid[index] = 1
      currentPlayer = 2
    } else {
      grid[index] = -1
      currentPlayer = 1
    }
    toCount += 1 
    return true
  } else {
    return false
  }
}


function isGameOver () {
  if(whoWon() !== 0) {
    return true
  } else {
    return false
  }
}


function whoWon() {

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
    break
    case rowOne === -3 || rowTwo === -3 || rowThree === -3 || columnOne === -3 || columnTwo === -3 || columnThree === -3 || diagOne === -3 || diagTwo === -3:
    return 2
    break
    case toCount === 9:
    return 3
    break
    default:
    return 0
    break
    }
  }

function restart () {
  if (isGameOver() === true) {
    grid = [0,0,0,0,0,0,0,0,0]
    currentPlayer = 1
    toCount = 0
  }
}



//  how to functions interact. because i get an undefined value for my countto
