$(document).ready(init)
//to initialize the code first before document runs
function init() {
  var $box = $('.box')
  var $title = $('h1')

  // $box.on('click', boxClick)
  setInterval(timer,1000)
  //change title to timer that changes every 5 seconds
  //e.g.: Tic Tac Toe: <5 seconds passed>
}

// var clickCount = 0
// function boxClick() {
//   var $title = $('h1')
//   clickCount ++

  // console.log($title.text())
  // $title.text("Tic Tac Toe: " + clickCount)
  //change the $title into 'tic tac toe: <click count>'


var timercount = 0
function timer() {
  var $title = $('h1')
  timercount += 1
  $title.text("Tic Tac Toe: " + timercount + "seconds")
}
