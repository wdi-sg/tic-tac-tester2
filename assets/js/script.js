var grid = [0,0,0,0,0,0,0,0,0]
var playGrid
var currentPlayer = 1
function restart () {
  grid = [0,0,0,0,0,0,0,0,0]
  currentPlayer = 1
  console.log('restart')
}

function isGameOver() {
  //logic that checks if game is over or not
  return false
}

function whoWon() {
  if (grid === [0,0,0,0,0,0,0,0,0]) {
    return 0
}
  else if (grid[0] === grid[1] && grid[1] === grid[2]){
    return grid[0]
  }
  else if (grid[3] === grid[4] && grid[4] === grid[5]) {
    return grid[3]
  }
  else if (grid[6] === grid[7] && grid[7] === grid[8]) {
    return grid[6]
  }
  else if (grid[0] === grid[3] && grid[3] === grid[6]) {
    return grid[0]
  }
  else if (grid[1] === grid[4] && grid[4] === grid[7]) {
    return grid[1]
  }
  else if (grid[2] === grid[5] && grid[5] === grid[8]) {
    return grid[2]
  }
  else if (grid[0] === grid[4] && grid[4] === grid[8]) {
    return grid[0]
  }
  else if (grid[2] === grid[4] && grid[4] === grid[6]) {
    return grid[2]
  }
  else {
    return 3
  }
}
function playTurn(index) {
  if (grid[index] === 0) {
    grid[index] = currentPlayer
    if (currentPlayer === 1) {
      currentPlayer = 2
      return true
    }

    else {
      currentPlayer = 1
      return true
    }
  }
  else if (grid[index] !== "null" || isGameover() === true) {
    return false
  }
}
