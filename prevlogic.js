
var grid = [null, null, null, null, null, null, null, null, null]
var player = 1


function playTurn (index) {
  if (grid[index] || isGameOver()) {
    return false
  } else {
    grid[index] = player
    if (player === 1) player = 2
    else player = 1
    return true
  }
}

function isGameOver () {
  if (whoWon()) return true
  return false
}

function whoWon () {
  if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
  if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
  if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
  if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
  if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
  if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
  if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
  if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
    grid[5] && grid[6] && grid[7] && grid[8]) return 3
  return 0
}

function restart () {
  grid = [null, null, null, null, null, null, null, null, null]
  player = 1
}

document.addEventListener('DOMContentLoaded', ttt().restart())

var allSquares = document.body.querySelectorAll(".aSquare")

for (var i=0;i<allSquares.length;i++) {
  allSquares[i].addEventListener('click', runWhenClicked)
}
function runWhenClicked(event) {
  var squareThatWasClicked = event.target
  // var indexOfSquare = allSquares.indexOf(squareThatWasClicked)
  // console.log(indexOfSquare)
  var squareNumber = squareThatWasClicked.id
  // console.log(squareNumber)
  if (!ttt().playTurn(squareNumber)) {

    return ttt().whoWon()
  }
  else {
    if (player === 1) {
      var shapeXElement = document.createElement("p")
      shapeXElement.textContent = "x"
      squareThatWasClicked.appendChild(shapeXElement)
      grid[squareNumber] = 1
    }
    else {
      var shapeOElement = document.createElement("p")
      shapeOElement.textContent = "o"
      squareThatWasClicked.appendChild(shapeOElement)
      grid[squareNumber] = 2
    }
  }
  //console.log(grid)
  console.log(whoWon())
}
