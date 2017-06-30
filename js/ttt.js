document.addEventListener('DOMContentLoaded', init)

var grid = [null, null, null, null, null, null, null, null, null]
var player = 1
var turn = document.querySelector('.selectTurn')
// target the grids
var board = document.querySelectorAll('.board')
var restartButton = document.querySelector('.playButton')

function init () {
  board.forEach(function (square) {
    square.addEventListener('click', function () {
      if (ttt().playTurn(square.id)) {
        var x = document.createElement('p')
        if (turn.textContent === 'X turn') {
          x.textContent = 'O'
        } else {
          x.textContent = 'X'
        }
        square.appendChild(x)
        setTimeout(function () {
          x.style.opacity = 1
        }, 50)
      } else {
        alert('Please make a valid move')
      }
      ttt().isGameOver()
    })
  })

  // target whose turn is it
  // target restart button
  restartButton.addEventListener('click', ttt().restart)
}

function ttt () {
  return {

    playTurn: function playTurn (index) {
      if (grid[index] || ttt().isGameOver()) {
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
    },

    isGameOver: function isGameOver () {
      if (ttt().whoWon()) return true
      return false
    },

    whoWon: function whoWon () {
      if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) {
        setTimeout(function () { alert('The winner is Player ' + grid[0] + '!') }, 125)
        return grid[0]
      }
      if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) {
        setTimeout(function () { alert('The winner is Player ' + grid[3] + '!') }, 125)
        return grid[3]
      }
      if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) {
        setTimeout(function () { alert('The winner is Player ' + grid[6] + '!') }, 125)
        return grid[6]
      }
      if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) {
        setTimeout(function () { alert('The winner is Player ' + grid[0] + '!') }, 125)
        return grid[0]
      }
      if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) {
        setTimeout(function () { alert('The winner is Player ' + grid[1] + '!') }, 125)
        return grid[1]
      }
      if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) {
        setTimeout(function () { alert('The winner is Player ' + grid[2] + '!') }, 125)
        return grid[2]
      }
      if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) {
        setTimeout(function () { alert('The winner is Player ' + grid[0] + '!') }, 125)
        return grid[0]
      }
      if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) {
        setTimeout(function () { alert('The winner is Player ' + grid[2] + '!') }, 125)
        return grid[2]
      }
      if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
      grid[5] && grid[6] && grid[7] && grid[8]) {
        setTimeout(function () { alert("It's a DRAW!") }, 125)
        return 3
      }
      return 0
    },

    restart: function restart () {
      grid = [null, null, null, null, null, null, null, null, null]
      for (var i = 0; i < grid.length; i++) {
        board[i].textContent = ''
      }
    }
  }
}
