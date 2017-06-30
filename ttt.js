function tttModule () {

  function restart () {
    chosen = []
    // player1 = [] // clears the player1 array
    // player2 = [] // clears the player2 array
    counter = 0
    var grid = document.querySelectorAll('.grid')
    grid.forEach(function (elem) {
      elem.innerText = ''
    })
  }

  function whoWon () {
    // if game not finished, return 0
    // if player1 wins, return 1
    // if player2 wins, return 2
    // if draw, return 3

    var player1 = []
    var player2 = []

    for (var i = 0; i < chosen.length; i++) {
      if (i % 2 === 0) {
        player1.push(chosen[i])
      } else {
        player2.push(chosen[i])
      }
    }

    console.log(player1)
    console.log(player2)

    // rearrange player 1 arr smallest to highest
    var player1Sorted = player1.sort(function (a, b) {
      return a - b
    })
    var player2Sorted = player2.sort(function (a, b) {
      return a - b
    })

    var winner = 0 // by default, whoWon returns 0 at start/during game

    // check if player1 wins
    if (player1Sorted.toString() === winning1.toString()) {
      winner = 1
    }
    if (player1Sorted.toString() === winning2.toString()) {
      winner = 1
    }
    if (player1Sorted.toString() === winning3.toString()) {
      winner = 1
    }
    if (player1Sorted.toString() === winning4.toString()) {
      winner = 1
    }
    if (player1Sorted.toString() === winning5.toString()) {
      winner = 1
    }
    if (player1Sorted.toString() === winning6.toString()) {
      winner = 1
    }
    if (player1Sorted.toString() === winning7.toString()) {
      winner = 1
    }
    if (player1Sorted.toString() === winning8.toString()) {
      winner = 1
    }
    if (player2Sorted.toString() === winning1.toString()) {
      winner = 2
    }
    if (player2Sorted.toString() === winning2.toString()) {
      winner = 2
    }
    if (player2Sorted.toString() === winning3.toString()) {
      winner = 2
    }
    if (player2Sorted.toString() === winning4.toString()) {
      winner = 2
    }
    if (player2Sorted.toString() === winning5.toString()) {
      winner = 2
    }
    if (player2Sorted.toString() === winning6.toString()) {
      winner = 2
    }
    if (player2Sorted.toString() === winning7.toString()) {
      winner = 2
    }
    if (player2Sorted.toString() === winning8.toString()) {
      winner = 2
    } else if (chosen.length === 9) {
      return 3
    }
    return winner
  }

  function playTurn (index) {
    // index is what player choses
    // if index is in chosen, return false
    for (var i = 0; i < chosen.length; i++) {
      if (index === chosen[i]) {
        return false
      }
    }
    chosen.push(index)
    return true
  }

  function isGameOver () {
    if (whoWon() === 0) {
      return false
    } else {
      return true
    }
  }

  return {
    restart: restart,
    whoWon: whoWon,
    playTurn: playTurn,
    isGameOver: isGameOver
  }
} // end of tttModule

var chosen = []

// winning combinations by row
var winning1 = [0, 1, 2]
var winning2 = [3, 4, 5]
var winning3 = [6, 7, 8]

// winning combinations by column
var winning4 = [0, 3, 6]
var winning5 = [1, 4, 7]
var winning6 = [2, 5, 8]

// winning combinations by diagonal
var winning7 = [0, 4, 8]
var winning8 = [2, 4, 6]

var counter = 0
