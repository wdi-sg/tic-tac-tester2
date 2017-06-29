var grid = [null, null, null, null, null, null, null, null, null]
var player = 1
var turn = document.querySelector('.selectTurn')
// target the grids
var board = document.querySelectorAll('.board')
board
board.forEach(function (square) {
  square.addEventListener('click', function () {
    if (playTurn(square.id)) {
      var x = document.createElement('p')
      if (turn.textContent === 'X turn') {
        x.textContent = 'O'
      } else {
        x.textContent = 'X'
      }
      square.appendChild(x)
    } else {
      alert('Please make a valid move')
    }
    isGameOver()
  })
})
// target whose turn is it
// target restart button
var restartButton = document.querySelector('.playButton')
restartButton.addEventListener('click', restart)

function playTurn (index) {
  if (grid[index] || isGameOver()) {
    return false
  } else {
    grid[index] = player
    if (player === 1) {
      turn.textContent = 'X turn'
      player = 2
    } else {
      turn.textContent = 'O turn'
      player = 1
    }
    return true
  }
}

function isGameOver () {
  if (whoWon()) return true
  return false
}

function whoWon () {
  if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) {
    alert('The winner is Player ' + grid[0] + '!')
    return grid[0]
  }
  if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) {
    alert('The winner is Player ' + grid[3] + '!')
    return grid[3]
  }
  if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) {
    alert('The winner is Player ' + grid[6] + '!')
    return grid[6]
  }
  if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) {
    alert('The winner is Player ' + grid[0] + '!')
    return grid[0]
  }
  if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) {
    alert('The winner is Player ' + grid[1] + '!')
    return grid[1]
  }
  if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) {
    alert('The winner is Player ' + grid[2] + '!')
    return grid[2]
  }
  if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) {
    alert('The winner is Player ' + grid[0] + '!')
    return grid[0]
  }
  if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) {
    alert('The winner is Player ' + grid[2] + '!')
    return grid[2]
  }
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
    grid[5] && grid[6] && grid[7] && grid[8]) {
    alert("It's a DRAW!")
    return 3
  }
  return 0
}

function restart () {
  grid = [null, null, null, null, null, null, null, null, null]
  for (var i = 0; i < grid.length; i++) {
    board[i].textContent = ''
  }
}
