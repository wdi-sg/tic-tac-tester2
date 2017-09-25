function restart() {
  turnCounter = 0
  grid = [0,0,0,
              0,0,0,
              0,0,0]
  players = 1
  console.log('restart')

}

function isGameOver () {
  //this is logic that checks if game is over
  return false
}

function whoWon() {
console.log(grid)

switch(true) {
  case turncounter < 5:
  return 0;

  case grid [0] === grid[1] && grid[0] === grid[2]:
    return grid[0];
  case grid [3] === grid [4] && grid[3] === grid[5]:
    return grid[3];
  case grid[6] === grid[7] && grid[6] === grid[8]:
    return grid[6];

  case grid[0] === grid[3] && grid[0] === grid[6]:
    return grid[0];

  case grid[1] === grid[4] && grid[1] === grid[7]:
    return grid[1];

  case grid[2] === grid[5] && grid[2] === grid[8]:
    return grid[2];

  case grid[0] === grid[4] && grid[0] === grid[8]:
    return grid[0];

  case grid[2] === grid [4] && grid[2] === grid[6]
    return grid[2];

  default:
    return 3

}

}

var grid = [0,0,0,
            0,0,0,
            0,0,0]

var players = 1
var turnCounter = 0

function playTurn(index) {
    if (grid[index] === 0) {
      grid[index] = players // if no one has clicked. change the grid to be the input of player number
      turnCounter ++

      if (grid[index] === 1) { //if it has been clicked by 1, switch turn to player 2
    players = 2

        } else {
            players = 1 //no one has clicked and it is not filled by 1 or 2, enter
          }
          return true
          } else {
            return false
          }
      }
