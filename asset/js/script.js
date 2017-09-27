var board = [0,0,0,0,0,0,0,0,0]
var currPlayer = 1
var counter = 0

var row1count
var row2count
var row3count

var col1count
var col2count
var col3count

var dig1count
var dig2count

function updateScore(){
  row1count = board[0] + board[1] +board[2]
  row2count = board[3] + board[4] +board[5]
  row3count = board[6] + board[7] +board[8]

  col1count = board[0] + board[3] +board[6]
  col2count = board[1] + board[4] +board[7]
  col3count = board[2] + board[5] +board[8]

  dig1count = board[0] + board[4] +board[8]
  dig2count = board[2] + board[4] +board[6]
}

function isGameOver() {

  updateScore();

  switch(true){
    case (counter === 0):
      return false;
    case (row1count === 3 || row1count === -3):
    case (row2count === 3 || row2count === -3):
    case (row3count === 3 || row3count === -3):
    case (col1count === 3 || col1count === -3):
    case (col2count === 3 || col2count === -3):
    case (col3count === 3 || col3count === -3):
    case (dig1count === 3 || dig1count === -3):
    case (dig2count === 3 || dig2count === -3):
      return true
    default:
      return false
  }
}

function whoWon(){

  updateScore();

  if(counter===0){
    return 0
  }
  else if(row1count===3 || row2count===3 || row3count===3 ||col1count===3 ||col2count===3 || col3count===3 || dig1count===3 || dig2count===3 ){
    return 1
  }else if(row1count===-3 || row2count===-3 || row3count===-3 ||col1count===-3 ||col2count===-3 || col3count===-3 || dig1count===-3 || dig2count===-3 ){
    return 2
  }
  else{
    return 3
  }
}


function playTurn(index){
  if (board[index] === 0){
    if (currPlayer == 1){
      board[index] = 1
      currPlayer = 2
    }else{
      board[index]= -1
      currPlayer = 1
    }
    counter++
    return true
  }else{
    return false
  }
  return isGameOver();
}

function restart(){
  board = [0,0,0,0,0,0,0,0,0]
  counter = 0
  currPlayer = 1
}
