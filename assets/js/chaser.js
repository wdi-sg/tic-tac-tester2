$(function(){
   var $ball = $(".ball")
   var $body = $("body")

   $body.on("keydown",moveBall)

  function moveBall(){
    // alert("Move ball")
    $ball.css('top',randomTop)
    $ball.css('left',randomLeft)

  }
  function randomTop(){
      return Math.floor(Math.random()*600)
  }

  function randomLeft(){
    return Math.floor(Math.random()*1200)
  }
  




})
