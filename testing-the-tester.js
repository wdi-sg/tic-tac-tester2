var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]

var playerOne1 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var playerTwo1 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var turnCounter = 0
var playerTurn = 1

var winArr = [
  [9, 9, 9, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 9, 9, 9, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 9, 9, 9],
  [9, 0, 0, 9, 0, 0, 9, 0, 0],
  [0, 9, 0, 0, 9, 0, 0, 9, 0],
  [0, 0, 9, 0, 0, 9, 0, 0, 9],
  [9, 0, 0, 0, 9, 0, 0, 0, 9],
  [0, 0, 9, 0, 9, 0, 9, 0, 0]
]

// pass one test at a time
function restart () {
  grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  playerOne1 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  playerTwo1 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turnCounter = 0
  playerTurn = 1
}

function ArrEqual (arr1, arr2) {
  var isEqual = true
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        isEqual = false
        break
      }
    }
  } else {
    isEqual = false
  }
  return isEqual
}

function isGameOver () {
  if (whoWon() === 1 || whoWon() === 2 || whoWon() === 3) {
    return true
  }
  return false
}

function whoWon () {
  var gameStatus = 0
  var noWinnerYet = true
  var TestWinScenarios = 0
  if (turnCounter === 9) {
    gameStatus = 3
  } else {
    while (noWinnerYet && TestWinScenarios < 8) {
      // console.log('p1 '+TestWinScenarios)
      if (ArrEqual(playerOne1, winArr[TestWinScenarios])) {
        gameStatus = 1
        noWinnerYet = false
      }
      TestWinScenarios += 1
    }
    if (noWinnerYet) {
      TestWinScenarios = 0
      while (noWinnerYet && TestWinScenarios < 8) {
        // console.log('p2 '+TestWinScenarios)
        if (ArrEqual(playerTwo1, winArr[TestWinScenarios])) {
          gameStatus = 2
          noWinnerYet = false
        }
        TestWinScenarios += 1
      }
    }

    //  for (var i = 0; i < winArr.length; i++) {
    //    if (ArrEqual(playerOne1, winArr[i])) {
    //      GameStatus = 1
    //      break
    //    } else if (ArrEqual(playerTwo1, winArr[i])) {
    //      GameStatus = 2
    //      break
    //  }
  }
  return gameStatus
}

function playTurn (index) {
  var isAllowed = true
  if (grid[index] === 0) {
    grid[index] = 9
    turnCounter += 1
    if (playerTurn === 1) {
      playerOne1[index] = 9
      playerTurn = 2
    } else {
      playerTwo1[index] = 9
      playerTurn = 1
    }
  } else {
    isAllowed = false
  }
  return isAllowed
}
