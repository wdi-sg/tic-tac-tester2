$(document).ready(init)

function init() {
  // this point onwards

  // target element
  let $box = $(".box")
  let $title = $("h1")
  // add event
  $box.on("click", boxClick)

  // change the title to timer
  // that changes every 5 second
  // Tic Tac Toe: <5 seconds passed>
  setInterval(printTimer, 1000)
}

let timer = 0

function printTimer() {
  let $title = $("h1")
  timer++
  $title.text("Tic Tac Toe: " + timer + " seconds passed")
}

let clicked = 0

function boxClick() {
  let $title = $("h1")
  $title.text("Tic Tac Toe: Clicked " + clicked)
  clicked++
}
