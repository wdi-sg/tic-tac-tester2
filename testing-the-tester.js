var grid = ['','','','','','','','','']
var currentPlayer = 1
var tttBox = document.querySelectorAll('.box')
console.log(tttBox)
tttBox.forEach(function(element) {
  element.addEventListener('click', move)
})

function restart () {
  grid = ['','','','','','','','','']
  currentPlayer = 1
  tttBox.forEach(function(element) {
    element.textContent = ''
  })
}

function isGameOver (){
  if
  (
   (grid[0] === 1 && grid[1] === 1 && grid[2] === 1 ) ||
   (grid[3] === 1 && grid[4] === 1 && grid[5] === 1 ) ||
   (grid[6] === 1 && grid[7] === 1 && grid[8] === 1 ) ||
   (grid[0] === 1 && grid[3] === 1 && grid[6] === 1 ) ||
   (grid[1] === 1 && grid[4] === 1 && grid[7] === 1 ) ||
   (grid[2] === 1 && grid[5] === 1 && grid[8] === 1 ) ||
   (grid[0] === 1 && grid[4] === 1 && grid[8] === 1 ) ||
   (grid[2] === 1 && grid[4] === 1 && grid[6] === 1 ) ||
   (grid[0] === 2 && grid[1] === 2 && grid[2] === 2 ) ||
   (grid[3] === 2 && grid[4] === 2 && grid[5] === 2 ) ||
   (grid[6] === 2 && grid[7] === 2 && grid[8] === 2 ) ||
   (grid[0] === 2 && grid[3] === 2 && grid[6] === 2 ) ||
   (grid[1] === 2 && grid[4] === 2 && grid[7] === 2 ) ||
   (grid[2] === 2 && grid[5] === 2 && grid[8] === 2 ) ||
   (grid[0] === 2 && grid[4] === 2 && grid[8] === 2 ) ||
   (grid[2] === 2 && grid[4] === 2 && grid[6] === 2 ) ||
   grid.filter(function (num) { return num === '' }).length === 0
 ) {
   return true
 } else {
   return false
 }
}

function whoWon (){
  if (isGameOver() === true) {
    if (grid.filter(function(num) { return num === ''}).length === 0) {
      alert ('it is a draw')
      restart()
      return 3
    } else if (currentPlayer === 1) {
      alert ('Player 2 Won')
      restart()
      return 2
    } else if (currentPlayer === 2) {
      alert ('Player 1 Won')
      restart()
      return 1
    }
  } else {
      return 0
  }
}

function move () {
  playTurn(this.getAttribute('id'))
}

function playTurn(index){
  if (isGameOver() === false) {
    if (grid[index] !== '') {
      alert ('Box is filled!')
      return false
    } else {
      grid[index] = currentPlayer
      if (currentPlayer === 1) {
        document.getElementById(index).textContent = 'O'
        currentPlayer = 2
      } else {
        document.getElementById(index).textContent = 'X'
        currentPlayer = 1
      }
      whoWon()
      return true
    }
  } else {
    return false
  }
}
