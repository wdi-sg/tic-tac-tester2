var movesTest =[0,0,0,0,0,0,0,0,0]
var wins = [7, 56, 448, 73, 146, 292, 273, 84]
var currentPlayer = 2
var gameEnd = 0
var winner = 0
var points = 0
var points2 = 0

function playTurn(index){

  if (movesTest[index] === 0) //check if position on playing field has been taken
  {
    if(currentPlayer ===1){

    movesTest[index]= currentPlayer
    points += Math.pow(2,index)
    console.log("player",currentPlayer);
    console.log("P1 Points",points)
    currentPlayer = 2

    return true
  }
  else {


      movesTest[index]= currentPlayer
      points2 += Math.pow(2,index)
      console.log("player",currentPlayer);
      console.log("P2 Points",points2)
      currentPlayer = 1

      return true
    }


}
  else {
    return false
  }
  // return true if moves[i] is empty, else return false
  console.log("playTurn")
}

function isGameOver () {
//logic to chck if game is over or not
console.log(gameEnd);
if (gameEnd = 0) {

  return true
}
else {
  return false
}

}


function restart () {
  movesTest =[0,0,0,0,0,0,0,0,0]
  gameEnd = 0
  winner = 0
  points = 0
  points2 = 0
  currentPlayer = 1

  //restart the game and
  console.log('restart')
}
function whoWon (){


    for (var i=0;i<=wins.length;i++){

    if(points === wins[i]){//used to be if movesTest[i] === 1

      return 1
    }
      else if (points2 ===  wins[i]) { //used to be if movesTest[i] === 2

      return 2
    }
    else if (points === 282 || points === 229 || points2 === 282 || points2 === 229){
      return 3
    }
    }

if (gameEnd === 0){
  return 0
}

}



// return 0
