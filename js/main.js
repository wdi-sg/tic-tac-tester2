// ALL DOM MANIPULATION JS CODES
document.addEventListener('DOMContentLoaded', init)

function init () {

  var ttt = tttModule()

  restartButton = document.createElement('button')
  restartButton.textContent = 'Start New Game'
  document.body.appendChild(restartButton)
  restartButton.style.display = 'none'

  for (var i = 0; i < 9; i++) {
    box[i].addEventListener('click', function () {
      if (ttt.playTurn(event.target.id)) {
        if (player === 2) {
          this.textContent = 'X'
        } else if (player === 1) {
          this.textContent = 'O'
        }
        ttt.isGameOver()
      }
    })
  }
}
