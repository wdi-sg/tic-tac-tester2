$(document).ready(init)

function init() {
  var $ball = $('.ball')
  var $body = $('body')

  // $body.on('click',moveBall)
  // $ball.on('mouseover',moveBall)
  $ball.hover(moveBall)
// alert('moveball')

function moveBall() {
  // $ball.css("top",randomTop())
  // $ball.css("left",randomLeft())
  $ball.css({
  'top':randomTop(),
  'left':randomLeft(),
})
  }
  function randomTop() {
  return Math.floor(Math.random()*600) + 'px'
  }
  function randomLeft() {
  return Math.floor(Math.random()*1200) + 'px'
  }
}
