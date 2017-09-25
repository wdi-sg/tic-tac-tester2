//need to run first

$(document).ready(init)



function init() {
  //jquery runs from this point on.
  var $box = $('.box')
  //add event to element
  $box.on('click', boxClick)
  setInterval(timer, 3000)
}

function boxClick() {
  count = 0
  var $title = $('h1')
  $title.text("Tic Tac Tock! : " + Num.timer()) //here need to put the func at "oo:" + timer
}   //title text cannot us ',' that one only for console.log

function timer () {
  var $title = $('h1')
  count += 1
  $title.text("Tic Tac Tock! :" + count)

}












  // console.log($title.text() )
  //change the $title to Tic Tac Toe : <click count> //this is another function?
//


// function timer() {
//   for (var i = 0; i < 100; i++)
//   if (i%5 ===0) return i
//   return byFiveSec()
// }
//
// function byFiveSec () {
//   setInterval(timer, 5000)
// }
//change the title to timer
//that changes every 500.
// Tic Tac Toe: 00:05




//hint - need setIntervals and set text.
