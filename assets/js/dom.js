$(document).ready(init)

var clickCount = 0
var timer = 0

function init () {
  var $box = $('.box')
  var $title = $('h1')
  // add event
  $box.on('click', boxClick)
  // change tilte to timer that changes every second
  // Tic Tac Toe : <5 seconds>

// setInterval(timeAlert, 1000)
  setInterval(function () {
    timer += 5
    $title.text('Tic Tac Toe: ' + timer)
  }, 5000)
}

// function timeAlert(){
//   var $title = $('h1')
//   timer += 1
//   $title.text("Tic Tac Toe: " + timer)
//
// }

function boxClick () {
  var $title = $('h1')

  clickCount += 1
  $title.text('Tic Tac Toe: ' + clickCount)
  // alert('Box is clicked')
  // change to tic tac toe: <click count>
}
