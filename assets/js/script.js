$(function() {
  let $box = $(".box")
  let $restart = $("#restart")
  let $info = $("#info")
  let grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  let turns = 0
  let currentPlayer = 1

  $box.on("click", play)
  $restart.on("click", restart)

  function play() {
    let $thisBox = $(this).css("background-color")
    let boxId = parseInt($(this).attr("id"))
    if (isGameOver() === false) {
      if (playTurn(boxId)) {
        $info.text(`Turn: Player ${currentPlayer}`)
      } else alert("Illegal Move")
    } else if (whoWon() !== 3) {
      alert(`Player ${whoWon()} won!`)
      $info.text(`Player ${whoWon()} won!`)
    } else {
      alert(`It's a Draw!`)
      $info.text(`It's a Draw.`)
    }
  }

  function whoWon() {
    if (turns === 0) return 0
    else if (grid[0] === grid[1] && grid[1] === grid[2]) return grid[0]
    else if (grid[3] === grid[4] && grid[4] === grid[5]) return grid[3]
    else if (grid[6] === grid[7] && grid[7] === grid[8]) return grid[6]
    else if (grid[0] === grid[3] && grid[3] === grid[6]) return grid[0]
    else if (grid[1] === grid[4] && grid[4] === grid[7]) return grid[1]
    else if (grid[2] === grid[5] && grid[5] === grid[8]) return grid[2]
    else if (grid[0] === grid[4] && grid[4] === grid[8]) return grid[0]
    else if (grid[2] === grid[4] && grid[4] === grid[6]) return grid[2]
    else if (turns === 9) return 3
    else return 0
  }

  function isGameOver() {
    if (whoWon() === 0) return false
    else return true
  }

  function restart() {
    grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    $box.css("background-color", "white")
    currentPlayer = 1
    turns = 0
    $info.text(`Turn: Player ${currentPlayer}`)
    console.log("Restart")
  }

  function playTurn(moves) {
    // console.log(moves)
    // console.log(grid)
    if (grid[moves] === 0) {
      grid[moves] = currentPlayer
      turns++
      if (currentPlayer === 1) {
        $box.eq(moves).css("background-color", "red")
      } else $box.eq(moves).css("background-color", "blue")
      if (currentPlayer === 1) currentPlayer = 2
      else currentPlayer = 1
      return true
    } else return false
  }
})
