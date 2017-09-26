$(document).ready(function() {

  var $title = $('h1')
  $title.on('click', titleClick)
  var counter = 0
  function titleClick() {
    counter++
    $title.text('Tic Tac Toe: ' + counter)
  }

  var $timer = $('h2')
  var timer = 0
  setInterval(timerStart, 1000)
  function timerStart() {
    timer ++
    $timer.text('Timer: ' + timer)
  }

})
