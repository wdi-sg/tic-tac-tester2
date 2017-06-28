// var grid =[]

function restart () {
  gameWinner = 0
  movesMade = [9]
  play1moves = []
  play2moves = []
  gameOver = false
// The application will console log all the passed or failed test.
}

function isGameOver () {
  if (gameWinner == 1 ||
  gameWinner == 2 ||
  gameWinner == 3) { gameOver = true } else if (gameWinner == 0) { gameOver = false }
  return gameOver
}

var movesMade = [9]
var winningCombi = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]
]
var play1moves = []
var play2moves = []
var gameWinner = 0 // 0 for playing, 1 or 2 if won, 3 if draw
var gameOver = false // false for not game over, true if 1,2,3 above

function whoWon () {
  gameWinner = 0
  // splitting player
  for (var i = 0; i < movesMade.length; i += 2) {
    for (var j = 1; j < movesMade.length; j += 2) {
      play2moves.push(movesMade[i])
      play1moves.push(movesMade[j])
    }
  }
  console.log(play1moves)
  console.log(play2moves)

  // changing gameWinner
  for (var i = 0; i < 8; i++) {
    if (play1moves.includes(winningCombi[i][0])
      && play1moves.includes(winningCombi[i][1])
      && play1moves.includes(winningCombi[i][2])) {
      gameWinner = 1
    // restart()
    } else if (play2moves.includes(winningCombi[i][0])
      && play2moves.includes(winningCombi[i][1])
      && play2moves.includes(winningCombi[i][2])) {
      gameWinner = 2
    // restart()
    } else if (movesMade.length > 7) {
      gameWinner = 3
    // restart()
    }
  }
// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.
  // isGameOver()
  return gameWinner
}

function playTurn (index) {
  var ans = true
  if (movesMade.includes(index)) {
    ans = false
  } else { movesMade.push(index) }
  return ans
}
