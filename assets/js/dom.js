$(document).ready(init)

function init() {
  //this point onward

  //target the element
  var $box = $('.box')
  //var $title = $('h1')
  //add event
  //$box.on('click', boxClick)
  var timer = 0
  var $title = $('h1')
  setInterval(function(){ timer += 1
    $title.text('Tic-Tac-Toe: ' + timer); }, 1000);
  //change title to timer
  //that changes every second
  //Tic Tac Toe: <5 seconds passed>
}
var clickCounter = 0

function boxClick() {
  clickCounter += 1
  $title.text('Tic-Tac-Toe: ' + clickCounter)
  //console.log($title.text())

  //change the $title into 'Tic Tac Toe: <click count>'
}
