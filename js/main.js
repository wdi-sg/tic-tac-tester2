// ALL DOM manipulations here

document.addEventListener('DOMContentLoaded', init)

function init () {
  var ttt = tttModule()
  console.log(ttt)


  var allSquares = document.querySelectorAll('.aSquare')
  var restartButton = document.querySelector('button')
  var turn = document.querySelector('#turn')
  var h2 = document.querySelector('h2')

  for (var i = 0; i < allSquares.length; i++) {
    allSquares[i].addEventListener('click', runWhenClicked)
  }


  restartButton.addEventListener('click', function(){
    ttt.restart()
    for (var i = 0; i < allSquares.length; i++) {
      allSquares[i].innerHTML =''
      h2.textContent =''
    }
  })

  turn.textContent = 'Turn: Player ' + player


  function runWhenClicked (event) {
    var squareThatWasClicked = event.target
    // var indexOfSquare = allSquares.indexOf(squareThatWasClicked)
    // console.log(indexOfSquare)
    var squareNumber = squareThatWasClicked.id
    // console.log(squareNumber)
    if (!ttt.playTurn(squareNumber)) {
      return ttt.whoWon()
    } else {
      if (player === 1) {
        var shapeXElement = document.createElement('p')
        shapeXElement.textContent = 'x'
        squareThatWasClicked.appendChild(shapeXElement)
        if(ttt.whoWon()===1 || ttt.whoWon()===2){
          h2.textContent = 'Player ' + ttt.whoWon() + ' wins!'
        }
        else if(ttt.whoWon() ===3){
          h2.textContent = 'DRAW!'
        }
        else{
        player = 2
        turn.textContent = 'Turn: Player ' + player}
      }
      else {
        var shapeOElement = document.createElement('p')
        shapeOElement.textContent = 'o'
        squareThatWasClicked.appendChild(shapeOElement)
        if(ttt.whoWon()===1 || ttt.whoWon()===2){
            h2.textContent = 'Player ' + ttt.whoWon() + ' wins!'
          }
          else if(ttt.whoWon() ===3){
            h2.textContent = 'DRAW!'
          }
          else{
          player = 1
          turn.textContent = 'Turn: Player ' + player}
        }

    console.log(grid)
    console.log(ttt.whoWon())
  }
}
}
