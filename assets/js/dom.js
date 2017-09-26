$(document).ready(init)

function init(){
  //this point onward
  //target the element
  var $box = $('.box')
  var $title = $('h1')
  //add event
  $('.box').on('click',boxClick)



  //change the title to timer
  //$('h1').
  setInterval(timer,1000)

  //that changes every 5 second
  //Tic tac toe  : <5 seconds passed>
}

var count = 0

function boxClick(){
  var $title = $('h1')
  console.log($title.text());

  //change the $title into 'Tic Tac Toe: <click count>'
  $title.text("Tic Tac Toe : " + count)
  count++
}

var timerValue = 0
function timer(){
  var $title = $('h1')
  //console.log($title.text());

  //change the $title into 'Tic Tac Toe: <click count>'
  $title.text("Tic Tac Toe : " + timerValue)
  timerValue++
  //timerValue++
}
