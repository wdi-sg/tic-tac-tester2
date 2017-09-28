$(function() {
  let $ball = $(".ball")
  // let $body = $("body")

  $ball.on("mouseover", moveBall) //calls moveBall function on mouseover

  function moveBall() {
    $ball.css("top", getVert())
    $ball.css("left", getHorz())
  }

  const getVert = () => Math.floor(Math.random() * 600)
  const getHorz = () => Math.floor(Math.random() * 600)
})
