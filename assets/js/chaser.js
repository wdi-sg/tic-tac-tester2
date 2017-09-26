//$(document).ready(init)

$(function() {
  var $ball = $('.ball')
  var $body = $('body')

  //$body.on('click', moveBall)
  $ball.on('mouseover', moveBall)

  function moveBall() {
    //alert('move ball')
    $ball.css('top', randomTop)
    $ball.css('left', randomLeft)
  }

  function randomTop() {
    return Math.floor(Math.random() * 600) + 'px'
  }

  function randomLeft() {
    return Math.floor(Math.random() * 1200) +'px'
  }

})
