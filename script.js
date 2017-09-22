


function restart() {
  console.log("restart");
}

function isGameOver () {
  //logic that checks if game is over or not
 return false
}

function whoWon () {
 return 0
}

//playTurn
//check if it is ataken up or not
//so if the
var grid = [0,0,0,
0,0,0,
0,0,0]

var moves = []


function playTurn(num){
  var chosenGrid = grid[num] //num being the index of the grid
  if (chosenGrid == 0) { //if the particular
    //moves.push(num) //pushing in the moves array //remove coz no need
    grid[num] = 1
    return true
  }
  else {
    return false
  }
}
