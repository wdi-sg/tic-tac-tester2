var box = document.querySelectorAll('.grid')
var player = 1

function tttModule () {
  var grid = [null, null, null, null, null, null, null, null, null]
  var winner = document.querySelector('.winner')

  function playTurn (index) {
    if (grid[index] || isGameOver()) {
      return false
    } else {
      grid[index] = player
      if (player === 1) player = 2
      else player = 1
      return true
    }
  }

  function isGameOver () {
    if (whoWon() === 1) {
      winner.textContent = 'X is the winner!'
      winner.classList.add('transform')
      document.querySelector('.wrapper').style.opacity = 0.1
      restart()
      return true
    } else if (whoWon() === 2) {
      winner.textContent = 'O is the winner!'
      winner.classList.add('transform')
      document.querySelector('.wrapper').style.opacity = 0.1
      restart()
      return true
    } else if (whoWon() === 3) {
      winner.textContent = 'Draw!'
      winner.classList.add('transform')
      document.querySelector('.wrapper').style.opacity = 0.1
      restart()
      return true
    } else {
      return false
    }
  }

  function whoWon () {
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

  function restart () {
    restartButton = document.createElement('button')
    restartButton.textContent = 'Start New Game'
    document.body.appendChild(restartButton)
    restartButton.addEventListener('click', newGame)
  }

  function newGame () {
    restartButton.parentNode.removeChild(restartButton)
    document.querySelector('.wrapper').style.opacity = 1
    winner.classList.remove('transform')
    winner.textContent = ''
    for (var i = 0; i < 9; i++) {
      box[i].innerHTML = ''
    }
    grid = [null, null, null, null, null, null, null, null, null]
    player = 1
  }

  return {
    playTurn: playTurn,
    isGameOver: isGameOver,
    whoWon: whoWon,
    restart: restart,
    newGame: newGame
  }
}
