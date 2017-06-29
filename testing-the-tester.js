
// ==================================<DECLARATIONS>
var grid = ['','','','','','','','','']
var currentPlayer = 1
var gameOver = false
var isDraw = ''
var zero = document.querySelector('#zero')
var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var box = document.querySelector('.box')
var reset = document.querySelector('#reset')
var quit = document.querySelector('#quit')
var divIndex = [zero.textContent, one.textContent, two.textContent, three.textContent, four.textContent, five.textContent, six.textContent, seven.textContent, eight.textContent]


// ==================================<BUTTONS>

zero.addEventListener('click', createX)
one.addEventListener('click', createX)
two.addEventListener('click', createX)
three.addEventListener('click', createX)
four.addEventListener('click', createX)
five.addEventListener('click', createX)
six.addEventListener('click', createX)
seven.addEventListener('click', createX)
eight.addEventListener('click', createX)
reset.addEventListener('click', restart)
quit.addEventListener('click', closeCurrentWindow)

function close_window() {
  if (confirm("Close Window?")) {
    window.location.href="http://memeshappen.com/media/created/Awwww-Sad-TO-see-you-go-BOO-HOO-meme-29494.jpg"
  }
}

function restart () {
  // zero.textContent = ''
  // one.textContent = ''
  // two.textContent = ''
  // three.textContent = ''
  // four.textContent = ''
  // five.textContent = ''
  // six.textContent = ''
  // seven.textContent = ''
  // eight.textContent = ''
  var boxes = document.querySelectorAll('.box')
  boxes.forEach(function(elem) {
  elem.textContent = '' })
  currentPlayer = 1
  gameOver = false
}

function isGameOver (){
  if
  (
    //top row
   (divIndex[0] === 'X' && divIndex[1] === 'X' && divIndex[2] === 'X' ) ||
   // mid row
   (divIndex[3] === 'X' && divIndex[4] === 'X' && divIndex[5] === 'X' ) ||
   //bottom row
   (divIndex[6] === 'X' && divIndex[7] === 'X' && divIndex[8] === 'X' ) ||
   //left col
   (divIndex[0] === 'X' && divIndex[3] === 'X' && divIndex[6] === 'X' ) ||
   //mid col
   (divIndex[1] === 'X' && divIndex[4] === 'X' && divIndex[7] === 'X' ) ||
   //right col
   (divIndex[2] === 'X' && divIndex[5] === 'X' && divIndex[8] === 'X' ) ||
   // tl to br
   (divIndex[0] === 'X' && divIndex[4] === 'X' && divIndex[8] === 'X' ) ||
   //tr to bl
   (divIndex[2] === 'X' && divIndex[4] === 'X' && divIndex[6] === 'X' ) ||
   // top row
   (divIndex[0] === 'O' && divIndex[1] ==='O' && divIndex[2] ==='O' ) ||
   // mid row
   (divIndex[3] ==='O' && divIndex[4] ==='O' && divIndex[5] ==='O' ) ||
   // Bottom row
   (divIndex[6] ==='O' && divIndex[7] ==='O' && divIndex[8] ==='O' ) ||
   // left col
   (divIndex[0] ==='O' && divIndex[3] ==='O' && divIndex[6] ==='O' ) ||
   // mid col
   (divIndex[1] ==='O' && divIndex[4] ==='O' && divIndex[7] ==='O' ) ||
   // right col
   (divIndex[2] ==='O' && divIndex[5] ==='O' && divIndex[8] ==='O' ) ||
   // tl to br
   (divIndex[0] ==='O' && divIndex[4] ==='O' && divIndex[8] ==='O' ) ||
   // tr to bl
   (divIndex[2] ==='O' && divIndex[4] ==='O' && divIndex[6] ==='O' )
 ) {
   isDraw = false
   gameOver = true
   return true
 } else if (divIndex.filter(function (num) { return num === '' }).length === 0) { gameOver = true
   isDraw = true
    return true
    } else {
    return false
 }
}

function whoWon (){
  if (isGameOver() === true) {
    if (isDraw) {
      setTimeout(function() { alert("Draw!"); }, 400)
      return 3
    } else if (currentPlayer === 1) {
      setTimeout(function() { alert("Player 2 Won!"); }, 400)
      return 2
    } else if (currentPlayer === 2) {
      setTimeout(function() { alert("Player 1 Won!"); }, 400)
      return 1
    }
  } else {
      return 0
  }
}

function playTurn (index) {
  if (gameOver === false) {
    if (divIndex[index] !== '') {
      return false
    } else {
      divIndex[index] = currentPlayer
      if (currentPlayer === 1) {
        currentPlayer = 2
      } else {
        currentPlayer = 1
      }
      return true
    }
  }

}

function createX () {
  if (this.textContent === '') {
    if (currentPlayer === 1) {
      this.textContent = 'X'
      currentPlayer = 2
    } else {
      this.textContent = 'O'
      currentPlayer = 1
    }
    divIndex = [zero.textContent, one.textContent, two.textContent, three.textContent, four.textContent, five.textContent, six.textContent, seven.textContent, eight.textContent]
    whoWon()
  } else {
    alert ('box is filled')
  }
}
