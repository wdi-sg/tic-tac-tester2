document.addEventListener('DOMContentLoaded', init)

function init () {
  var b0 = document.querySelector('.b0')
  var b1 = document.querySelector('.b1')
  var b2 = document.querySelector('.b2')
  var b3 = document.querySelector('.b3')
  var b4 = document.querySelector('.b4')
  var b5 = document.querySelector('.b5')
  var b6 = document.querySelector('.b6')
  var b7 = document.querySelector('.b7')
  var b8 = document.querySelector('.b8')

  b0.addEventListener('click', playSquare)
  b1.addEventListener('click', playSquare)
  b2.addEventListener('click', playSquare)
  b3.addEventListener('click', playSquare)
  b4.addEventListener('click', playSquare)
  b5.addEventListener('click', playSquare)
  b6.addEventListener('click', playSquare)
  b7.addEventListener('click', playSquare)
  b8.addEventListener('click', playSquare)
}

function playSquare (event) {
  var elem = event.target.classList

  for (i = 0; i < 9; i++) {
    if (elem.contains('b' + i)) {
      console.log(playTurn(i))
    }
  }
}

function fillSquare () {

}

  // console.log(elem)
