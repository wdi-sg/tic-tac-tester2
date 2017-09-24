var grid = [null,null,null,
            null,null,null,
            null,null,null]
var player = 1

function restart(){
//restarts the game
    grid = [null, null, null, null, null, null, null, null, null]
    player = 1
}

function isGameOver(){
//logic that checks if game is over or not
  if (whoWon()===0) {
    return false
    }
   else return true
}

function whoWon(){
//check win conditions
  if (grid[0] && grid[0] === grid[1] && grid[1] === grid[2]) {
    return grid[0]
  }
  if (grid[3] && grid[3] === grid[4] && grid[4] === grid[5]) {
    return grid[3]
  }
  if (grid[6] && grid[6] === grid[7] && grid[7] === grid[8]) {
    return grid[6]
  }

  if (grid[0] && grid[0] === grid[3] && grid[3] === grid[6]) {
    return grid[0]
  }
  if (grid[1] && grid[1] === grid[4] && grid[4] === grid[7]) {
    return grid[1]
  }
  if (grid[2] && grid[2] === grid[5] && grid[5] === grid[8]) {
    return grid[2]
  }
  if (grid[2] && grid[2] === grid[4] && grid[4] === grid[6]) {
    return grid[2]
  }
    if (grid[0] && grid[0] === grid[4] && grid[4] === grid[8]) {
    return grid[0]
  }
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
    grid[5] && grid[6] && grid[7] && grid[8]) {
    return 3
  }

  return 0
}

function playTurn(index){
//if player 1
  if (grid[index] === null || isGameOver === false){
    if(player === 1){
      //player 1 moves with a '1'
      grid[index] = 1
      player = 2
    } else {
      //player 2 moves with a '2'
      grid[index] = 2
      player = 1
    }

    return true
  } else {
    return false
  }

}
