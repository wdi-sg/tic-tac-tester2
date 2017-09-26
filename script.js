function restart(){
  turnCounter = 0
  grid = [0,0,0,
          0,0,0,
          0,0,0]

players = 1
 console.log('restart')
}

function isGameOver() {
  return false
}


function whoWon() {
  console.log(grid)
  switch(true) {
    case turnCounter < 5:
        return 0;
    case grid[0]===grid[1] && grid[0] === grid[2]:
       return grid[0];
    case grid[3]===grid[4] && grid[3]===grid[5]:
      return grid[3];
    case grid[6]===grid[7] && grid[6]===grid[8]:
      return grid[6];
    case grid[1]===grid[4] && grid[1]===grid[7]:
      return grid[1];
    case grid[0]===grid[3] && grid[0]===grid[6]:
      return grid[0];
    case grid[2]===grid[5] && grid[2]===grid[8]:
      return grid[2];
    case grid[0]===grid[4] && grid[0]===grid[8]:
      return grid[0];
    case grid[2]===grid[4] && grid[2]===grid[6]:
      return grid[2];
    default:
      return 3;
  }
}

var grid = [0,0,0,
            0,0,0,
            0,0,0]
var turnCounter = 0
var players = 1
function playTurn(index) {
  if (grid[index] === 0) {
    grid[index] = players;
    turnCounter ++
    if (players === 1) {
      players = 2;
    } else {
      players = 1
    }
    return true
  } else {
    return false
  }
  console.log(grid)
}
