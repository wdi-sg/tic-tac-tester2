


function restart() {
  isGameOver();

}

//logic that checks if game is over or not
//the game is over only wheennnn
//the game is NOT over when the grid array values are all '0'
var total = 0;

var total = 0;

function isGameOver () {
  for (i = 0; i < grid.length; i ++) {
        total += grid[i]
  }
        console.log ('total' + " " + total)
        if (total === 0) {
            console.log (false)
      }
    else
     {
       console.log(true)
     }

}

function whoWon () {
 if (isGameOver == true) {
   return 1
 }
 else {
   return 0
 }
}

//playTurn
//check if it is ataken up or not
//so if the
var grid = [0,0,0,
0,0,0,
0,0,0]



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
