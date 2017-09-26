$(document).ready(init)

function init() {
  //everything runs from this point onward

  //target the element
  var $box = $('.box')

  //add event
  $box.on('click', boxClick)
}

var clicks = 0;

//calling boxClick which then calls the timer function every 2seconds
function boxClick() {
  setInterval(timer, 2000);
}

function timer() {
  var $title = $('h1')
  // change the $title into 'Tic Tac Toe: <click count>'
  clicks++
  $title.text("Tic Tac Toe: " + clicks)
  console.log(clicks)
}

  //change the title to timer
  //that changes every 5 seconds
  //Tic Tac Toe: <5 seconds passed>
