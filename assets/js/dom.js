$(document).ready(init)

function init() {
  //this point onward

  //target the element
  var $box = $(".box")

  //add event
  $box.on("click", boxClick)

  setInterval(everyFiveSeconds, 5000)

  function everyFiveSeconds() {
    startTimer++
    var $title = $("h1")
    $title.text("Tic Tac Toe: " + startTimer + " seconds passed") //can only take in one argument
    // console.log("hey")
  }
  //change the title to timer
  //that changes every 5 seconds
  //tic tac toe: <5 seconds passed>
  //hint: doesnt need box click & timer is indenpendent on the clicking

}

var startTimer = 0

function boxClick() {
  $title.text("Tic Tac Toe: " + startTimer + " seconds passed") //can only take in one argument
  console.log($title.text())
  //hint: need to know how to set the title content

  //change the @title into "tic tac toe: <click count>"
}
