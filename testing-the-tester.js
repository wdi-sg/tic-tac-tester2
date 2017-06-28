var array = []

function playTurn(index) {
  if(array.includes(index) === true) {
    return false
  } else {
    array.push(index)
    if (isGameOver() === true) {
    return false
  } else {
    return true
    }
  }
}


function isGameOver (){
  return false
}

function whoWon(){
  var winner = ''
  if (winner ==='playerOne') {
    return 1
  } else if (winner ==='playerTwo') {
    return 2
  } else {
    return 0
  }
}

function restart(){

}
