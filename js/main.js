document.addEventListener('DOMContentLoaded', init)

function init() {
  var ttt = tttModule()
  
  // DOM manipulation
  var allDivs = document.querySelectorAll('div div')
  allDivs.forEach(function (el) {
    el.addEventListener('click', function () {
      var thisIndex = parseInt(this.id) // find index of board

      if (ttt.playTurn(thisIndex)) { // if move is allowed, assign 'X' or 'O'. playturn is alrdy called
        if (counter % 2) {
          this.innerText = 'O'
        } else {
          this.innerText = 'X'
        }
        counter++
      }
      ttt.whoWon()
      if (ttt.isGameOver()) {
        alert(ttt.whoWon()) // if game is over alert which player won/draw
      }
    })
  })

  // reset the board
  var h1 = document.querySelector('h1')
  h1.addEventListener('click', ttt.restart)
}
