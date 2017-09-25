var currentPlayer = 1
var grid = [0,0,0,0,0,0,0,0,0]
var moves = 0

function restart () {
  var grid = [0,0,0,0,0,0,0,0,0]
  var currentPlayer = 1
  var moves = 0
}

function isGameOver () {
    if(whoWon() === 0)
    {
    return false
    }
    else
    {
    return true
    }
}

function whoWon() {

if(grid[0] && grid[0] === grid[1] && grid[0] === grid[2]){
  return grid[0]
}

else if(grid[3] && grid[3] === grid[4] && grid[3] === grid[5]){
  return grid[3]
}

else if(grid[6] && grid[6] === grid[7] && grid[6] === grid[8]){
  return grid[6]
}

else if(grid[0] && grid[0] === grid[3] && grid[4] === grid[6]){
  return grid[0]
}

else if(grid[1] && grid[1] === grid[4] && grid[1] === grid[7]){
  return grid[1]
}

else if(grid[2] && grid[2] === grid[5] && grid[2] === grid[8]){
  return grid[2]
}

else if(grid[0] && grid[0] === grid[4] && grid[0] === grid[8]){
  return grid[0]
}

else if(grid[2] && grid[2] === grid[4] && grid[2] === grid[6]){
  return grid[2]
}


else if(moves === 9){

  return 3
}

else {
  return 0
}
}

function playTurn(index){
if(grid[index] === 0 && isGameOver() === false)
{
  if(currentPlayer === 1)
  {
  grid[index] = 1
  currentPlayer = 2
  }
  else{
      grid[index] = 2
      currentPlayer = 1
      }
      moves ++
return true
}
else {
return false
}
}
