$(document).ready(init)

function init () {
  //this point onward
    var $box = $('.box')
    // var $title = $('h1')
  // add event
$box.on('click', boxClick)

// change the title to timer that changes every second
// Tic Tac Toe: < 5 seconds passed>
setInterval(boxClick, 4000)
}

var count = 0

function boxClick() {
  var $title = $('h1')
  var $para = $('p')
  count++;
  $para.text(count)
  // console.log($title.text())
  //change the $title into 'Tic Tac Toe : <click count>'
  // $title.text()
  $title.text("Tic Tac Toe :" + count);
}
