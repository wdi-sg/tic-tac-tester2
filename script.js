var currentPlayer = 1
var grid = [0,0,0,0,0,0,0,0,0,0] //create 10 spaces on grid, first will always be 0
var moves = [[],[],[]], moves1 = [], moves2 = [] //moves1.length = player 1's moves count
var wins = [[1,2,3], [4,5,6], [7,8,9],[1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
var whoWon = 0

for (var round = 1; round < 10; round++) {
  if (isGameOver) {
     console.log(whoWon);
  }else{
    var move = Math.floor((Math.random() * 9)+1);
    console.log('move', move);
    if(playTurn(move)){
      moves[currentPlayer].push(move)
      //changePlayer() in next code improvement
    }else {
      var move = Math.floor((Math.random() * 9)+1);
      console.log('move', move);
    }//this code needs fixing, only does it once if slot is taken.


  }

}


// function restart() {
//   grid = [0,0,0,0,0,0,0,0,0]
//   moves = []
//   moves1 = []
//   moves2 = []
//   //changePlayer()
//   console.log('restart')
// }
function isGameOver() {
  if(whoWon===0 && round <10){
      return false
  }else {
//    restart() //restart if game over.coulb be elsewhere
     return true;
   }
}
   //return ends functions, improve logic here.
function whoWon() {
  wins.forEach(function(win){
    if(moves1.includes(win)){
      whoWon = 1
    }else if (moves2.includes(win)) {
      whoWon = 2
    }else {whoWon = 3}
  })
    console.log('winner is ', whoWon);
      return whoWon
}
//move is the same as index-1 passed into playturn
function playTurn(index) {
  if(grid[index] === 0){ //can write checkgrid function and call to return T/F
    grid[index] = 1 // change value on grid to 1.
    return true;
  }else {
    return false;
  }
}
//if else logic:  playturn(move)? moves1/moves2.push(move), changePlayer()

function changePlayer(){
  currentPlayer === 1? currentPlayer=2:currentPlayer=1
}
