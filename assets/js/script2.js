//make the document ready

//on click, the box will change color
//on click the clicked box will return the data number
//the data number will be used into the array
$(function() {
  $body = $('body')
  $box = $('.box')

  $box.on('click', function () {
  var index = ($(this).data('value'))
  playTurn(index)
  //$(this).css("background-color", "red")

  })


var grid = [null, null, null, null, null, null, null, null, null]
var player = 1


function playTurn (index) {

  if (grid[index] || isGameOver()) {
    return false
  } else {
    grid[index] = player

    if (player === 1) {
    player = 2
    changeBoxNum()
  }
    else {
      player = 1
      changeBoxNum()
    }
    console.log(grid)
    return true
  }
}

function isGameOver () {
  if (whoWon()) { // returns 1, 2 or 3 (which are true)
    winnerNumber()
   return true
 }
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

function winnerNumber() {
  var winningPlayer = whoWon()
  var $winner = $("<h2 class = 'winner'>")
  $('.winner').append($winner)
  $winner.text(`Player ${(winningPlayer)} won!`)
  //need to change the text to the grid[index] that is returned from whoWon
}

//add a <h4> in the boxes with the player number
changeBoxNum = () => {
  var $printBox = $("<h4 class = 'boxNum'>")
  $box.append($printBox) //need to target the specific box. How?
  $printBox.text(`${player}`)
}


})
