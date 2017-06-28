var arr = [true, true, true, true, true, true, true, true, true ]
var counter = 0
var winner = 0
var winningMoves = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]]
var player1 = []
var player2 = []

function restart () {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = true
  }
  counter = 1
  player1 = []
  player2 = []
  winner = 0
}

function isGameOver () {
  if (player1.length + player2.length === 9) {
    winner = 3
    return true
  }
  for (var i = 0; i < winningMoves.length; i++) {
    if (player1.sort().toString() === winningMoves[i].toString()) {
      winner = 1
      return true
    } else if (player2.sort().toString() === winningMoves[i].toString()) {
      winner = 2
      return true
    }
  }
  return false
}

function whoWon () {
  if (isGameOver() === true) {
    if (winner === 1) {
      return 1
    } else if (winner === 2) {
      return 2
    } else if (winner === 3) {
      return 3
    }
  } else {
    return 0
  }
}

function playTurn (index) {
  if (arr[index] === false) {
    return false
  } else if (arr[index] === true) {
    arr[index] = false
    if ((counter - 1) % 2 === 0) {
      player1.push(index)
    } else {
      player2.push(index)
    }
    counter += 1
    return true
  }
}
