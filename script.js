// You will need to declare the following functions in the global scope:
//
// ### playTurn(index)
// It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played.
// It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.

function playTurn (index) {
  console.log('entered');
  if (grid[index] || isGameOver()){
    return false
  }else{
    grid[index] = player
    if (player === 1) player = 2
    else player = 1
    return true
}
}

// ### isGameOver()
// It should return a true or false if the game is over.
function isGameOver (){
  if (whoWon()) return true
  return false
}

// ### whoWon()
// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.

// method 1: 343 passed 16 failed feels right: error message "[FAIL] whoWon should return 1 at end of the game but it was 0"
function whoWon (){
  if (grid[0] === grid[1] === grid[2]) return grid[0]
  if (grid[3] === grid[4] === grid[5]) return grid[3]
  if (grid[6] === grid[7] === grid[8]) return grid[6]
  if (grid[0] === grid[3] === grid[6]) return grid[0]
  if (grid[1] === grid[4] === grid[7]) return grid[1]
  if (grid[2] === grid[5] === grid[8]) return grid[2]
  if (grid[0] === grid[4] === grid[8]) return grid[0]
  if (grid[2] === grid[4] === grid[6]) return grid[2]
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
    grid[5] && grid[6] && grid[7] && grid[8])
    return 3
  return 0
}

//method 2: 342 passed 17 DO NOT UNDERSTAND: error message "[FAIL] whoWon should return 0 at start of the game but it was null"
// function whoWon (){
//   if (grid[0] === grid [0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
//   if (grid[3] === grid [3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
//   if (grid[6] === grid [6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
//   if (grid[0] === grid [0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
//   if (grid[1] === grid [1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
//   if (grid[2] === grid [2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
//   if (grid[0] === grid [0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
//   if (grid[2] === grid [2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
//   if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
//     grid[5] && grid[6] && grid[7] && grid[8]) return 3
//   return 0
// }

// ### restart()
// It should restart the game so it can be played again.
//
// It is assumed that the turns of the player will be automatically changed after an allowed move.
//
// The application will console log all the passed or failed test.
function restart (){
  grid = [null, null, null, null, null, null, null, null, null]
  player = 1
  console.log ("restart")
}
