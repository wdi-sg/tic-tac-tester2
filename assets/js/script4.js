var grid = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
]

var players = ""

// var result = ""

var winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

if(players === 1) {
  players = 2
} else {
  players = 1
}

function playTurn (index) {
  if(grid[index] === 0) {
    grid[index] = players
     return true
  } else {
     return false
  }
}

function isGameOver () {
  if (whoWon !== 0) {

    //logic that checks if game is over or not
    return false
  } else {
    return true
  }

}

function whoWon (score) {
  for(var j = 0; j <= winningCondition.length-1; j++) {
  for(var k = 0; k <= grid.length-1; k++) {

    // if game is still in progress
    // if game is a draw
    if (grid[k] === 0) {
      if (grid[k] === 0) {
        return 0
        // var result = 0
        // result.push(score)
      } else {
        return 3
        // var result = 3
        // result.push(score)
      }
    }
    // if player 1 or 2 wins
    else if (grid[winningCondition[j][0]] === grid[winningCondition[j][1]] && grid[winningCondition[j][1]] === grid[winningCondition[j][2]]) {
      if (grid[winningCondition[j][0]] = 1) {
        return 1
        // var result = 1
        // result.push(score)
      } else if (grid[winningCondition[j][0]] = 2) {
        return 2
        // var result = 2
        // result.push(score)
      }
    }
  }
  }
}

function restart() {
  // function whoWon() {
    // for(var i = 1; i <= 3; i++) {
      grid = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
        ]

      moves = 0

      result = " "

}

console.log("restart")
