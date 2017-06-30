document.addEventListener('DOMContentLoaded', init)
var anyDiv = document.querySelectorAll('div')
var ttt = tttModule()
function init() {

  anyDiv.forEach(function (div) {
    div.addEventListener('click', clickRegister)
  })
}

var div = document.querySelector('div')

function clickRegister(event) {
  var select = event.target
  var value = event.target.id

  console.log(player)

  if (!ttt.playTurn(value)) {
    return ttt.whoWon()
  } else if (player === 1) {
      select.textContent = ('X')
      grid[value] = 1
    } else {
      select.textContent = ('O')
      grid[value] = 2
      }
}

console.log(ttt.whoWon())
