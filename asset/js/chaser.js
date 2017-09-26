$(function(){
  var $ball = $('.ball')
  var $body = $('body')

  // $body.on('mouseover',moveBall)

  setInterval(moveBall, 1000)

  function moveBall(){
    $ball.css('top', randomTop)
    $ball.css('left', randomLeft)
  }

  function randomTop(){
    return Math.floor(Math.random()*600) + "px"

  }

  function randomLeft(){
    return Math.floor(Math.random()*1200) + "px"
  }
})
