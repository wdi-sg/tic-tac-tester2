// ctrl option F to lint
function tttModule () {
  // define all functions
  function isGameOver () {
    if (whoWon() !== 0) { // if winner !== 0, game is over. return true
      return true
    } else return false // if winner is still 0, fn returns false.
  }
  function playTurn (index) {
    if (grid.includes(index) || isGameOver()) {
      return false
    } else {
      grid.push(index)
      return true
    }
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
    console.log(player1Moves)
    console.log(player2Moves)

    // check if player wins
    if (player1Moves.indexOf(0) > -1 && player1Moves.indexOf(1) > -1 && player1Moves.indexOf(2) > -1) {
      winner = 1
    }
    if (player2Moves.indexOf(0) > -1 && player2Moves.indexOf(1) > -1 && player2Moves.indexOf(2) > -1) {
      winner = 2
    }
    if (player1Moves.indexOf(3) > -1 && player1Moves.indexOf(4) > -1 && player1Moves.indexOf(5) > -1) {
      winner = 1
    }
    if (player2Moves.indexOf(3) > -1 && player2Moves.indexOf(4) > -1 && player2Moves.indexOf(5) > -1) {
      winner = 2
    }
    if (player1Moves.indexOf(6) > -1 && player1Moves.indexOf(7) > -1 && player1Moves.indexOf(8) > -1) {
      winner = 1
    }
    if (player2Moves.indexOf(6) > -1 && player2Moves.indexOf(7) > -1 && player2Moves.indexOf(8) > -1) {
      winner = 2
    }
    if (player1Moves.indexOf(0) > -1 && player1Moves.indexOf(3) > -1 && player1Moves.indexOf(6) > -1) {
      winner = 1
    }
    if (player2Moves.indexOf(0) > -1 && player2Moves.indexOf(3) > -1 && player2Moves.indexOf(6) > -1) {
      winner = 2
    }
    if (player1Moves.indexOf(1) > -1 && player1Moves.indexOf(4) > -1 && player1Moves.indexOf(7) > -1) {
      winner = 1
    }
    if (player2Moves.indexOf(1) > -1 && player2Moves.indexOf(4) > -1 && player2Moves.indexOf(7) > -1) {
      winner = 2
    }
    if (player1Moves.indexOf(2) > -1 && player1Moves.indexOf(5) > -1 && player1Moves.indexOf(8) > -1) {
      winner = 1
    }
    if (player2Moves.indexOf(2) > -1 && player2Moves.indexOf(5) > -1 && player2Moves.indexOf(8) > -1) {
      winner = 2
    }
    if (player1Moves.indexOf(2) > -1 && player1Moves.indexOf(4) > -1 && player1Moves.indexOf(6) > -1) {
      winner = 1
    }
    if (player2Moves.indexOf(2) > -1 && player2Moves.indexOf(4) > -1 && player2Moves.indexOf(6) > -1) {
      winner = 2
    }
    if (player1Moves.indexOf(0) > -1 && player1Moves.indexOf(4) > -1 && player1Moves.indexOf(8) > -1) {
      winner = 1
    }
    if (player2Moves.indexOf(0) > -1 && player2Moves.indexOf(4) > -1 && player2Moves.indexOf(8) > -1) {
      winner = 2
    }

    // check if draw
    if (grid.length === 9) {
      winner = 3
    }
    return winner
  }
  function restart () {
    grid = []
    counter = 0 //reset 'x' or 'o' tracker
    allDivs.forEach(function (el) {
      el.innerText = '' // removes the innertext from previous moves
    })
  } // end of restart fn

  return {
    restart: restart,
    isGameOver: isGameOver,
    playTurn: playTurn,
    whoWon: whoWon
  } // close return
}

//global variables
var ttt = tttModule()
var grid = [] // what has been played so far
var counter = 0 // to check whose turn is it
var allDivs = document.querySelectorAll('div div')
