// $(document).ready(function () { // anonymous call-back function
// })
$(document).ready(init)

var count = 0;
var timer =0;

// target the element
function init() {
  var $box = $('.box')
// add event
  $box.on('click', boxClick)

  }

function timeAlert () {
  var $title = $('h1')
  count ++
  $title.text('Tic Tae Toe: ' + count)
}


function boxClick() {
  setInterval(timeAlert , 1000)
}






// function count() {
//   count ++
//   var $box = $('.box')
//   $box.on('click', count++)
//   tabulate count for
//   }

// change title to Tick Tae Toe +
// create a counter
//
