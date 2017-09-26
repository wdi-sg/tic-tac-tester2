var grid = [0,0,0,
            0,0,0,
            0,0,0]
var player = 1

function restart() {
  grid = []
}

function isGameOver() {
  if (whoWon() === 0)
  return false;
}
  else {
  return true;
  }


function whoWon() {
  if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
  if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
  if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
  if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
  if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
  if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
  if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
  if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
  grid[5] && grid[6] && grid[7] && grid[8]) return 3
  return 0
}


function playTurn(index) {
  console.log('playTurn')
  if (grid[index] === 0) {
    grid[index] = 0;
    count++;
      if (grid[index] === 1)
      player =2

    return true;
  }
  else {
    return false
  }
}
