var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var currentPlayer = 1
var whoWonValue = 0
var isGameOverValue = ''
var playTurnValue = false

var curTurn = 1;

var row1 = grid[0] + grid[1] + grid[2] // 0
var row2 = grid[3] + grid[4] + grid[5] // 0
var row3 = grid[6] + grid[7] + grid[8]
var column1 = grid[0] + grid[3] + grid[6]
var column2 = grid[1] + grid[4] + grid[7]
var column3 = grid[2] + grid[5] + grid[8]
var diagonal1 = grid[0] + grid[4] + grid[8]
var diagonal2 = grid[2] + grid[4] + grid[6]


function playTurn (index) {

  playTurnValue = false


  console.log(curTurn)

  if (grid[index] === 0) {
    if (currentPlayer === 1) {
      grid[index] = 1
      currentPlayer++
      playTurnValue = true
    }
    else {
      grid[index] = -1
      currentPlayer--
      playTurnValue = true
    }
    curTurn++
  }
  isGameOver() // after every turn, check for win
  return playTurnValue // after each turn playTurn should =true
}

function isGameOver () {

  row1 = grid[0] + grid[1] + grid[2] // 0
  row2 = grid[3] + grid[4] + grid[5] // 0
  row3 = grid[6] + grid[7] + grid[8]
  column1 = grid[0] + grid[3] + grid[6]
  column2 = grid[1] + grid[4] + grid[7]
  column3 = grid[2] + grid[5] + grid[8]
  diagonal1 = grid[0] + grid[4] + grid[8]
  diagonal2 = grid[2] + grid[4] + grid[6]

  // console.log(grid)
  // console.log('===>>>', row1)
  // console.log('===>>>', row2)
  // console.log('===>>>', row3)
  // console.log('===>>>', column1)
  // console.log('===>>>', column2)
  // console.log('===>>>', column3)
  // console.log('===>>>', diagonal1)
  // console.log('===>>>', diagonal2)

    switch (true) {
      case (row1 === 3 || row1 === -3):
        console.log('GAMEOVER')
        playturnTrueOrFalse = false
        if(row1 === 3) {
          whoWonValue = 1
        } else {
          whoWonValue = 2
        }
        break
      case (row2 === 3 || row2 === -3):
        console.log('GAMEOVER')
        playturnTrueOrFalse = false
        if(row2 === 3) {
          whoWonValue = 1
        } else {
          whoWonValue = 2
        }
        break
      case (row3 === 3 || row3 === -3):
        console.log('GAMEOVER')
        playturnTrueOrFalse = false
        if(row3 === 3) {
          whoWonValue = 1
        } else {
          whoWonValue = 2
        }
        break
      case (column1 === 3 || column1 === -3):
        console.log('GAMEOVER')
        playturnTrueOrFalse = false
        if(column1 === 3) {
          whoWonValue = 1
        } else {
          whoWonValue = 2
        }
        break
      case (column2 === 3 || column2 === -3):
        console.log('GAMEOVER')
        playturnTrueOrFalse = false
        if(column2 === 3) {
          whoWonValue = 1
        } else {
          whoWonValue = 2
        }
        break
      case (column3 === 3 || column3 === -3):
        console.log('GAMEOVER')
        playturnTrueOrFalse = false
        if(column3 === 3) {
          whoWonValue = 1
        } else {
          whoWonValue = 2
        }
        break
      case (diagonal1 === 3 || diagonal1 === -3):
        console.log('GAMEOVER')
        playturnTrueOrFalse = false
        if(diagonal1 === 3) {
          whoWonValue = 1
        } else {
          whoWonValue = 2
        }
        break
      case (diagonal2 === 3 || diagonal2 === -3):
        console.log('GAMEOVER')
        playturnTrueOrFalse = false
        if(diagonal2 === 3) {
          whoWonValue = 1
        } else {
          whoWonValue = 2
        }
        break
      default:
        if (curTurn === 9) {
          curTurn = 1;
          whoWonValue = 3
          console.log('DRAW')
        }
    }
    isGameOverValue = false
    return isGameOverValue
}

function whoWon () {
  // row1 = grid[0] + grid[1] + grid[2] // 0
  // row2 = grid[3] + grid[4] + grid[5] // 0
  // row3 = grid[6] + grid[7] + grid[8]
  // column1 = grid[0] + grid[3] + grid[6]
  // column2 = grid[1] + grid[4] + grid[7]
  // column3 = grid[2] + grid[5] + grid[8]
  // diagonal1 = grid[0] + grid[4] + grid[8]
  // diagonal2 = grid[2] + grid[4] + grid[6]
  return whoWonValue
}

function restart () {

  grid = [0, 0, 0, 0, 0, 0, 0, 0, 0] // reset board
  isGameOverValue = false // isGameOver should return false at start
  whoWonValue = 0 // whoWon should return 0 at start of game
}
