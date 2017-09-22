var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var move = 0
var currentPlayer= 1

//restart the condition to default setting
function restart() {
  grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  move = 0
  currentPlayer = 1
}

//return false when game is still on
function isGameOver(){
  if (whoWon() === 0)
    return false
  return true
}

function whoWon(){
// create references value that we can compare
  var rowOne = grid[0] + grid[1] + grid[2]
  var rowTwo = grid[3] + grid[4] + grid[5]
  var rowThree = grid[6] + grid[7] + grid[8]
  var columnOne = grid[0] + grid[3] + grid[6]
  var columnTwo = grid[1] + grid[4] + grid[7]
  var columnThree = grid[2] + grid[5] + grid[8]
  var digOne = grid[0] + grid[4] + grid[8]
  var digTwo = grid[2] + grid[4] + grid[6]
// if either of the var have 3 (playerOne) or -3(playerTwo), it will return the winner
  switch (true) {
    case (rowOne === 3 || rowTwo === 3 || rowThree === 3 || columnOne === 3 || columnTwo === 3 || columnThree === 3 || digOne === 3 || digTwo  === 3 ):
    return 1;
    case (rowOne === -3 || rowTwo === -3|| rowThree === -3 || columnOne === -3 || columnTwo === -3 || columnThree === -3 || digOne === -3 || digTwo  === -3):
    return 2;
    case (move === 9):
    return 3;
    default:
    return 0
  }
}
//make sure that the player are not allow to move to same square; record the marker
// marker: playerOne: 1, playerTwo: -1
function playTurn(index){
  if (grid[index] === 0){
    if(currentPlayer===1){
      grid[index]+= 1
      currentPlayer = 2
    } else {
      grid[index]+= -1
      currentPlayer = 1
    }
    move += 1
    return true
  }
  return false
}
