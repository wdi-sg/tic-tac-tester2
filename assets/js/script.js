var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var player = 1;
var count = 0;

function restart() {
  grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  player = 1;
}

function isGameOver() {
  // logic that test if game is over.

  return false
}

function whoWon () {
  switch(true) {
    case count < 5:
      return 0;
    case grid[0] === grid[1] && grid[0] === grid[2]:
      return grid[0];
    case grid[3] === grid[4] && grid[3] === grid[5]:
      return grid[3];
    case grid[6] === grid[7] && grid[6] === grid[8]:
      return grid[6];
    case grid[1] === grid[4] && grid[1] === grid[7]:
      return grid[1];
    case grid[0] === grid[3] && grid[0] === grid[6]:
      return grid[0];
    case grid[2] === grid[5] && grid[2] === grid[8]:
      return grid[2];
    case grid[0] === grid[4] && grid[0] === grid[8]:
      return grid[0];
    case grid[2] === grid[4] && grid[2] === grid[6]:
      return grid[2];
    default:
      return 3;
  }
}

function playTurn(index) {
  if (grid[index] === 0) {
    grid[index] = player;
    count++;
      if (player === 1) {
        player = 2;
        } else {
          player = 1;
        }
          return true
        } else {
          return false;
        }
}
