//$(document).ready(init)

$(function () {
  var $ball = $('.ball')
  var $body = $('body')

  //$body.on('click', moveBall)
$body.on('mouseover', moveBall)

  function moveBall () {
    $ball.css('top', randomTop())
    $ball.css('left', randomLeft())
    //alert('move ball')
  }
  function randomTop () {
    //0 - 600
    return Math.floor(Math.random()*600) + 'px'
  }
  function randomLeft () {
  //0 - 1200
  return Math.floor(Math.random()*1200) + 'px'
  }

})
