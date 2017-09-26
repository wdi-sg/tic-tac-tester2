$(document).ready(init);

var boxClicks = 0;
var timer = 0;

function init() {
  // target element
  var $box = $('.box');
  // add event listener
  // $box.on('click', boxClick);
  $box.on('click', titleTimer);
}

function boxClick() {
  var $title = $('h1');
  boxClicks++;
  console.log($title.text("Tic Tac Toe: "+boxClicks));
}

function titleTimer() {
  var $title = $('h1');
  console.log("timer activated");
  setInterval(printTimer, 1000);

  function printTimer() {
    timer += 1;
    console.log($title.text("Tic Tac Toe: " + timer));
  }
}
