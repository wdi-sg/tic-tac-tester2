// var grid =[]
function restart () {
// The application will console log all the passed or failed test.
}

function whoWon () {
  var result = ''
  if (movesMade.length === 1) {
    result = 0
  } else if (movesMade.length === 10) {
    result = 3
  } else if (movesMade.length % 2 === 1) {
    result = 2
  } else if (movesMade.length % 2 === 0) {
    result = 1
  }
  if (result > 0) {
    isGameOver(result)
  }
  return result
}

var movesMade = [9]
function playTurn (index) {
  var ans = true
  if (movesMade.includes(index)) {
    ans = false
  } else {
    movesMade.push(index)
  }
  console.log((movesMade))
  return ans
}

function isGameOver (input) {
  var ans = false
  if (input > 0) {
    ans = true
    movesMade = [9]
  }
  return ans
}
