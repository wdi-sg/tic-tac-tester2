// ISSUES:
// (1) Can click on an existing square

document.addEventListener('DOMContentLoaded', init)

function init() {
    var ttt = tttModule()
    console.log(ttt)

    var allSquares = document.querySelectorAll(".aSquare")

    for (var i=0;i<allSquares.length;i++) {
      allSquares[i].addEventListener('click', runWhenClicked)
    }

    function runWhenClicked(event) {
      console.log('A) player on main, before playTurn, is ', player)
      var squareThatWasClicked = event.target
      // var indexOfSquare = allSquares.indexOf(squareThatWasClicked)
      // console.log(indexOfSquare)
      var squareNumber = squareThatWasClicked.id
      // console.log(squareNumber)
      if (!ttt.playTurn(squareNumber)) {
        // console.log('ttt.whoWon is ', ttt.whoWon())
        return ttt.whoWon()
      }
      else {
        if (player === 1) {
          console.log('B) player on main, after playTurn and before appending x, is ', player)
          var shapeXElement = document.createElement("p")
          shapeXElement.textContent = "x"
          squareThatWasClicked.appendChild(shapeXElement)
          player = 2
        }
        else {
          var shapeXElement = document.createElement("p")
          shapeXElement.textContent = "o"
          squareThatWasClicked.appendChild(shapeXElement)
          player = 1
        }
      }
      console.log(grid)
      console.log('Win status: ', ttt.whoWon())

      if(ttt.isGameOver()) {
        alert('take out event listener from all grid')
      }
    }
}
