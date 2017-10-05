$(function(){
   var $ball = $(".ball")
   var $body = $("body")

   $body.on("keydown",moveBall)

  function moveBall(){
    // alert("Move ball")
    $ball.css('top',"400px")
    $ball.css('left',"400px")

  }
  // function randomTop(){
  //     return Math.floor(Math.random()*600)
  // }
  //
  // function randomLeft(){
  //   return Math.floor(Math.random()*1200)
  // }
  //




})
