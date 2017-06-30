// DOM MANIPULATION JS CODES
document.addEventListener('DOMContentLoaded', init)

var ttt = ttt()
function init () {
  var b0 = document.querySelector('.b0')
  var b1 = document.querySelector('.b1')
  var b2 = document.querySelector('.b2')
  var b3 = document.querySelector('.b3')
  var b4 = document.querySelector('.b4')
  var b5 = document.querySelector('.b5')
  var b6 = document.querySelector('.b6')
  var b7 = document.querySelector('.b7')
  var b8 = document.querySelector('.b8')

  b0.addEventListener('click', playSquare)
  b1.addEventListener('click', playSquare)
  b2.addEventListener('click', playSquare)
  b3.addEventListener('click', playSquare)
  b4.addEventListener('click', playSquare)
  b5.addEventListener('click', playSquare)
  b6.addEventListener('click', playSquare)
  b7.addEventListener('click', playSquare)
  b8.addEventListener('click', playSquare)

  var button = document.querySelector('.button')
  button.addEventListener('click', resetButton)
}

function playSquare (event) {
  var elem = event.target.classList
  var moveAllowed = false
  for (i = 0; i < 9; i++) {
    if (elem.contains('b' + i)) {
      if (ttt.playTurn(i)) {
        // player1 starts as blue(X)
        if (playerTurn % 2 == 0) {
          elem.add('X')
        } else elem.add('O')
      }
    }
  }
  if (ttt.whoWon() == 1) {
    setTimeout(function () {
      alert('Player 1 wins! Game will restart now.')
    }, 200)
  } else if (ttt.whoWon() == 2) {
    setTimeout(function () {
      alert('Player 2 wins! Game will restart now.')
    }, 200)
  } else if (ttt.whoWon() == 3) {
    setTimeout(function () {
      alert('Game Tied Game will restart now.')
    }, 200)
  } if (ttt.isGameOver()) {
    ttt.restart()
    setTimeout(function () {
      window.location.reload(true)
    }, 6000)
  }
}

function resetButton () {
  ttt.restart()
  setTimeout(function () {
    window.location.reload(true)
  })
}
