var total = 0;
var numOfMoves = 0;
var moves = []
var grid = [0,0,0,
0,0,0,
0,0,0]


function restart() {
  for (i = 0; i < grid.length; i ++) {
        total += grid[i]
        continue
  }
  isGameOver()
  whoWon()
}

function isGameOver (){
  if (total === 0 ) {
          return false
          }
          else {
            return 0
          }
    }
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


function whoWon () {
  switch (moves.length) {
  case (5) :
    winner = playerOne
    console.log (playerOne)
    break;
  case (6) :
    winner = playerTwo
    break;
  case (9) :
    winner = playerDraw
    break;
  default:
  return 0
}
}



  //if the moves array length is 5, winner is playerOne
  //if the moves array length is 6, winner is playerTwo
