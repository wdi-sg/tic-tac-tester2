$(document).ready(init)
var clicks = 0
var timer = 0

function init(){
//everything runs from this point on.

//target the element
  var $box = $('.box')
  // var $title = $('.h1')
// add event
  // $box.on('click', boxClick)
  $box.on('click', secondsTimer)

  //change the title to timer
  //changes every 5 second  (need set intervals)
  //tic tac toe: <5 seconds passed (need to get title content, and set the title content)
}

function boxClick() {
  var $title = $('h1')
  clicks++
  console.log($title.text("Tic Tac Toe :"+clicks))

}

function secondsTimer() {
  var $title = $('h1')
  setInterval(everySecond, 1000)

  function everySecond() {
    timer++
    console.log($title.text("Tic Tac Toe :"+timer))
  }
}
