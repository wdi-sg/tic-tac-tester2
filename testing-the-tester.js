document.addEventListener('DOMContentLoaded', ttt().init())

function ttt () {
  // variables private to ttt but accessible to all functions
  var movesMade = [9]
  var winningCombi = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
  ]
  var play1moves = []
  var play2moves = []
  var gameWinner = 0 // 0 for playing, 1 or 2 if won, 3 if draw
  var gameOver = false // false for not game over, true if 1,2,3 above

  // functions
    function init () {
      // console.log('init ran')
      // targeting all the divs
      var allBox = document.querySelectorAll('.box')
        // console.log(allBox);
        allBox.forEach(function (div) {
        div.addEventListener('click', color)
        div.addEventListener('click', whoWon)
      })
      // allBox: allBox
    }

    // to change color and run playTurn
    function color(event) {
          var elem = event.target
          playTurn(elem.id)
          // console.log(movesMade)
          if (movesMade.length % 2 == 0) {
            elem.style.backgroundColor = 'orange'
            elem.textContent = 'X'
          }
          if (movesMade.length % 2 == 1) {
            elem.style.backgroundColor = 'green'
            elem.textContent = 'O'
          }
        }

    function restart() {
      gameWinner = 0
      movesMade = [9]
      play1moves = []
      play2moves = []
      gameOver = false
    }

    function isGameOver () {
      if (gameWinner == 1 ||
      gameWinner == 2 ||
      gameWinner == 3) { gameOver = true } else if (gameWinner == 0) { gameOver = false }
      return gameOver
    }

    function whoWon () {
      gameWinner = 0
      // splitting player
      for (var i = 0; i < movesMade.length; i += 2) {
        for (var j = 1; j < movesMade.length; j += 2) {
          play2moves.push(parseInt(movesMade[i]))
          play1moves.push(parseInt(movesMade[j]))
        }
      }
      // changing gameWinner
      for (var i = 0; i < 8; i++) {
        if (play1moves.includes(winningCombi[i][0])
            && play1moves.includes(winningCombi[i][1])
            && play1moves.includes(winningCombi[i][2])) {
          gameWinner = 1
          alert('player1wins')
        // restart()
        } else if (play2moves.includes(winningCombi[i][0])
          && play2moves.includes(winningCombi[i][1])
          && play2moves.includes(winningCombi[i][2])) {
          gameWinner = 2
          alert('player2wins')
        // restart()
        } else if (movesMade.length > 7) {
          gameWinner = 3
          alert('draw')
        // restart()
        }
      }
      return gameWinner
    }

    function playTurn (index) {
      var ans = true
      if (movesMade.includes(index)) {
        ans = false
        // console.log(movesMade)
      } else {
        movesMade.push(index)
        // console.log(movesMade)
      }
      return ans
    }
    return {
      playTurn: playTurn,
      whoWon: whoWon,
      isGameOver: isGameOver,
      restart: restart,
      color: color,
      init: init
    }
    console.log('ttt module NEVER runs, we call ttt init, not ttt!')
  }
