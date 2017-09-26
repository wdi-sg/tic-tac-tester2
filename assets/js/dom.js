$(document).ready(init)



function init() {
  //this point onward
  //target the element

  var $box =$('.box')


  //add event
  $box.on('click', boxClick)


  //change the title to timer
  //that changes every 5 seconds

  setInterval(everyFiveSeconds,1000)
}

var count = 0

function boxClick() {
  var $title = $('h1')
  $title.text('Tic Tac Toe:' + count)
  count++

  //console.log($title.text())
  //setInterval ($title.text(), 5000)
  //alert('changing text')
  //console.log($title.text())
}

function everyFiveSeconds() {
  var $title = $('h1')
  $title.text('Tic Tac Toe:' + count)
  count++
}
