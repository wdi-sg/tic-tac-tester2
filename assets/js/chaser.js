// $(document).ready(init)

$(function() {
  var $ball = $(".ball")
  var $body = $("body") //body is not a class. cannot use .body

  // $body.on("click", moveBall)
  // $ball.on("mouseover", moveBall)

  setInterval(moveBall, 2000)

  function moveBall() {
    // alert("move ball")
    $ball.css("top", randomTop)
    $ball.css("left", randomLeft)
  }

  function randomTop() {
    return Math.floor(Math.random() * 650) + "px"
  }

  function randomLeft() {
    return Math.floor(Math.random() * 1250) + "px"
  }

})
