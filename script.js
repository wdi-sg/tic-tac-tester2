let grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let turns = 0
let currentPlayer = 1

function restart() {
  grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  currentPlayer = 1
  turns = 0
  // console.log("Restart")
}

function isGameOver() {
  // console.log("Game Over")
  if (whoWon() === 0) return false
  else return true
}

function whoWon() {
  if (turns === 0) return 0
  else if (grid[0] === grid[1] && grid[1] === grid[2]) return grid[0]
  else if (grid[3] === grid[4] && grid[4] === grid[5]) return grid[3]
  else if (grid[6] === grid[7] && grid[7] === grid[8]) return grid[6]
  else if (grid[0] === grid[3] && grid[3] === grid[6]) return grid[0]
  else if (grid[1] === grid[4] && grid[4] === grid[7]) return grid[1]
  else if (grid[2] === grid[5] && grid[5] === grid[8]) return grid[2]
  else if (grid[0] === grid[4] && grid[4] === grid[8]) return grid[0]
  else if (grid[2] === grid[4] && grid[4] === grid[6]) return grid[2]
  else if (turns === 9) return 3
  else return 0
}

function playTurn(moves) {
  if (grid[moves] === 0) {
    grid[moves] = currentPlayer
    turns++
    if (currentPlayer === 1) currentPlayer = 2
    else currentPlayer = 1
    return true
  } else return false
}
