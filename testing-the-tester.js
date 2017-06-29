
var grid = [] // what has been played so far

function restart () {
  grid = []
}

function isGameOver () {
  if (whoWon()) {
    alert('won')
  } else return false
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
// if grid.length = 9 assign winner = 3. means draw.
// no need for conditional cuz if either player 1 or 2 won,
// it would have returned earlier

function playTurn (index) {
  if (grid.includes(index) || isGameOver()) {
    return false
  } else {
    grid.push(index)
    return true
  }
}

var counter = 0;

var allDivs = document.querySelectorAll('div div')
allDivs.forEach(function(el) {
  el.addEventListener('click', function() {
    var thisClass = this.className
    var thisIndex = parseInt(thisClass.charAt(thisClass.length - 1)) //find index of board

    if  (playTurn(thisIndex)) { //if move is allowed, assign 'X' or 'O'
      if (counter % 2) {
          this.innerText = 'O'
      } else this.innerText = 'X'
      counter ++
    }
    playTurn(thisIndex) //playturn pushes to grid
    whoWon()
    console.log(grid)
  })
})
