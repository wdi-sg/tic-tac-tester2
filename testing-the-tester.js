function restart() {
  grid = [];
}

function isGameOver() {
  return false
}

function whoWon() {
    var player1Moves = []
    var player2Moves = []
    var winner = 0
  for (var i = 0; i < grid.length; i++) {
    if (i % 2 === 0) {
      player1Moves.push(grid[i])
    } else player2Moves.push(grid[i])
  }
  if (player1Moves.join("") == "012") { // need to sort player moves from 0-8
    winner = 1
  }
  return winner
}

var grid = [] //what has been played so far
// var player1moves =
// var player2moves =
function playTurn(index) {
  if (grid.includes(index)) {
    return false
  } else {
    grid.push(index)
    return true
  }
}
