// ALL DOM manipulations here

document.addEventListener('DOMContentLoaded', init)

function init () {
  var ttt = ttt()
  console.log(ttt)
}

var allSquares = document.body.querySelectorAll('.aSquare')

for (var i = 0; i < allSquares.length; i++) {
  allSquares[i].addEventListener('click', runWhenClicked)
}

function runWhenClicked (event) {
  var squareThatWasClicked = event.target
  // var indexOfSquare = allSquares.indexOf(squareThatWasClicked)
  // console.log(indexOfSquare)
  var squareNumber = squareThatWasClicked.id
  // console.log(squareNumber)
  if (!ttt().playTurn(squareNumber)) {
    return ttt().whoWon()
  } else {
    if (player === 1) {
      var shapeXElement = document.createElement('p')
      shapeXElement.textContent = 'x'
      squareThatWasClicked.appendChild(shapeXElement)
      grid[squareNumber] = 1
    } else {
      var shapeOElement = document.createElement('p')
      shapeOElement.textContent = 'o'
      squareThatWasClicked.appendChild(shapeOElement)
      grid[squareNumber] = 2
    }
  }
  console.log(grid)
  console.log(ttt().whoWon())
}
