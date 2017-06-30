document.addEventListener('DOMContentLoaded', init)
var ttt = tttModule()

function init () {
  // target the whole grid to be selectable
  var grid = document.querySelectorAll('.grid')
  grid.forEach(function (elem) {
    elem.addEventListener('click', function () {
      if (ttt.playTurn(parseInt(event.target.id)) === true) {
        if (counter % 2 === 0) {
          this.textContent = 'X'
        } else {
          this.textContent = 'O'
        }
        counter++
        console.log(chosen)
        ttt.whoWon()
        if (ttt.isGameOver() === true) {
          alert('Winner is ' + ttt.whoWon())
          ttt.restart()
        }
      }
    })
  })
}
