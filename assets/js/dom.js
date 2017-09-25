$(document).ready(init)

function init() {
  // this poiny onwards document loaded first then run JS

  // target the element
  var $box = $('.box')

  // add event

$box.on('click', boxClick)

var counter = 0


setInterval(Timer,1000)


  function boxClick() {
    var $title = $('h1')
    counter +=1
    $title.text('Tic Tac Toe: ' + counter)

    // change the $title into 'Tic Tac Toe: <click count>'
  }
}
var timercount = 0
function Timer() {
  timercount +=5
  var $title = $('h1')

  $title.text('Tic Tac Toe: ' + timercount + ' seconds passed')
    //change the title to timer
    // that changes every 5 seconds
    // Tic Tac Toe: <5 seconds passed>
}
