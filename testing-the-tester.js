
var grid = [] // what has been played so far
var counter = 0 // to check whose turn is it

function restart () {
  grid = []
  counter = 0
  allDivs.forEach(function (el) {
    el.innerText = '' // removes the innertext from previous moves
  })
}

function isGameOver () {
  if (whoWon() !== 0) { // if winner !== 0, game is over. return true
    return true
  } else return false // if winner is still 0, fn returns false.
}

function whoWon () {
  var winner = 0
  var player1Moves = []
  var player2Moves = []
  var winningCombi = ['012', '345', '678', '036', '147', '258', '246', '048']

  // split into two player arrays
  for (var i = 0; i < grid.length; i++) {
    if (i % 2 === 0) {
      player1Moves.push(grid[i])
    } else player2Moves.push(grid[i])
  }

  // sort player's moves numerically from smallest to largest
  player1sorted = player1Moves.sort(function (a, b) {
    return a - b
  })
  player2sorted = player2Moves.sort(function (a, b) {
    return a - b
  })

  // make arr a string and check if present in winningCombi
  if (winningCombi.includes(player1sorted.join(''))) { // need to sort player moves from 0-8
    winner = 1
  }
  if (winningCombi.includes(player2sorted.join(''))) { // need to sort player moves from 0-8
    winner = 2
  }

  // check if draw
  if (grid.length === 9) {
    winner = 3
  }
  return winner
}

function playTurn (index) {
  if (grid.includes(index) || isGameOver()) {
    return false
  } else {
    grid.push(index)
    return true
  }
}

// DOM manipulation
var allDivs = document.querySelectorAll('div div')
allDivs.forEach(function (el) {
  el.addEventListener('click', function () {
    var thisIndex = parseInt(this.id) // find index of board

    if (playTurn(thisIndex)) { // if move is allowed, assign 'X' or 'O'. playturn is alrdy called
      if (counter % 2) {
        this.innerText = 'O'
      } else {
        this.innerText = 'X'
      }
      counter++
    }
    whoWon()

    if (isGameOver()) {
      alert(whoWon()) // if game is over alert which player won/draw
    }
  })
})

// reset the board
var h1 = document.querySelector('h1')
h1.addEventListener('click', restart)
