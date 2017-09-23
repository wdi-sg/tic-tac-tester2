var grid = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
var playerOneTurn = true
var playerTwoTurn = false
var turns = 0
var playerOneWins = false
var playerTwoWins = false

function checkWins() {
  // check row wins
  for(var i = 0 ; i <= 6 ; i+=3) {
    switch(true) {
      case (grid[i] > 0 && grid[i+1] > 0 &&  grid[i+2] > 0):
        playerOneWins = true
        return
      case (grid[i] < 0 && grid[i+1] < 0 &&  grid[i+2] < 0):
        playerTwoWins = true
        return
    }
  }
  // check column wins
  for(var j = 0 ; j <= 2 ; j++) {
    switch(true) {
      case (grid[j] > 0 && grid[j+3] > 0 && grid[j+6] > 0):
        playerOneWins = true
        return
      case (grid[j] < 0 && grid[j+3] < 0 && grid[j+6] < 0):
        playerTwoWins = true
        return
    }
  }
  // check diagonal wins
  switch(true) {
    case (grid[0] > 0 && grid[4] > 0 && grid[8] > 0):
      playerOneWins = true
      return
    case (grid[0] < 0 && grid[4] < 0 && grid[8] < 0):
      playerTwoWins = true
      return
    case (grid[2] > 0 && grid[4] > 0 && grid[6] > 0):
      playerOneWins = true
      return
    case (grid[2] < 0 && grid[4] < 0 && grid[6] < 0):
      playerTwoWins = true
      return
  }
}

function restart() {
  console.log('Restart')
  turns = 0
  grid = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  playerOneWins = false
  playerTwoWins = false
  playerOneTurn = true
  playerTwoTurn = false
}

function isGameOver() {
  return false
}

function whoWon() {
  checkWins()
  console.log(grid)

  if(turns < 5) {
    return 0
  }
  else if(playerOneWins) {
    return 1
  }
  else if(playerTwoWins) {
    return 2
  }
  else {
    return 3
  }
}

function playTurn(n) {
  if(playerOneTurn === true) {
    if(grid[n] === 0) {
      grid[n] += 1
      turns++
      playerOneTurn = false
      playerTwoTurn = true
      return true
    }
    else {
      return false
    }
  }
  else {
    if(grid[n] === 0) {
      grid[n] -= 1
      turns++
      playerOneTurn = true
      playerTwoTurn = false
      return true
    }
    else {
      return false
    }
  }
}
