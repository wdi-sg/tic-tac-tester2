var grid = [0,1,2,3,4,5,6,7,8]
var playerOne = []
var playerTwo = []
var turns = []

var winningCombis = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

// # restart()
// It should restart the game so it can be played again.
function restart(){
}

// # isGameOver()
// It should return a true or false if the game is over.
function isGameOver(){
  var gameOver =  whoWon()
  if (gameOver === 0){
    return false}
    else{
      return true
    }
  }


  function playerArr(){
    for (var i = 0; i< turns.length; i++){
      if(i%2===0){
        playerOne.push(turn[i])
      }
      else {
        playerTwo.push(turn[i])
      }
    }
  }

  //algo for winning
function Win(){
  for (var i= 0; i<winningCombis.length; i++){
      if (sortArr[0]=== winningCombis[i][0] && sortArr[1]=== winningCombis[i][1] && sortArr[2]=== winningCombis[i][2]){
        return true
      }
      else{
        return false
      }
}

function playerWon(){
  playerArr()
var playerOneSort= playerOne.sort()
var playerTwoSort = playerTwo.sort()

if(Win(playerOneSort)){
  return 1
}
else if (Win(playerTwoSort)){
  return 2
}
else {
  return 0
}
}

// # whoWon()
// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.

  function whoWon(){
    if(playerWon()){
      return playerWon()
    }
    else if (turns.length === 9){
      return 3
    }
    else{
      return 0
    }

  }

  // # playTurn(index)
  // It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played.
  // It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.

  function playTurn(index){
    var moveGameOver= isGameOver()
    if (moveGameOver || turns.includes(index)){
      return false
    }
    else{
      turns.push(index)
      return true
    }
  }
}
