var total = 0
// var moves = []
// var totalMoves = moves.length
var grid = [0,0,0,
0,0,0,
0,0,0]


function restart() {
  for (i = 0; i < grid.length; i ++) {
    //for every run of the grid, replace the grid[i] with 0
    grid[i] = 0
        total += grid[i]
        isGameOver ()
        }
}

function isGameOver () {
  if (whoWon == true) {
    return true
  }
  else {
    return false
  }
    }



function playTurn(num){
  var chosenGrid = grid[num] //num being the index of the grid
  if (chosenGrid === 0) { //if the particular
    //moves.push(num) //pushing in the moves array //remove coz no need
    grid[num] = 1
    return true
  }
  else {
    return false
  }
}


function whoWon (winner) {
  if (winner == false) {
  return 0
  // this part still doesnt work. How to write such that
  //if there is no winner yet, just move along.
}
else {
  return winner

}
}
  //if the moves array length is 5, winner is playerOne
  //if the moves array length is 6, winner is playerTwo


  // }
  //       // console.log ('total' + " " + total)

  //logic that checks if game is over or not
  //the game is over only wheennnn
  //the game is NOT over when the grid array values are all '0'


  //game DEFINITELY not finished if the grid.length less than 5
  //this one return 0
  //if winner = playerOne, return 1
  //if winner = playerTwo, return 2
  //if winner = playerDraw, return 3


  //playTurn
  //check if it is ataken up or not
  //so if the


  //moves.length is not defined because it's not global. It works within the loop but not when restart game
