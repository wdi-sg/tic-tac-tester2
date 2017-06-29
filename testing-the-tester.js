var counter = 0
var turns = []
var playerone = []
var playertwo = []
var winningCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

function playTurn (index) {
  if (turns.includes(index)) {
    return false
  } else if (!turns.includes(index) && counter % 2 === 0) {
    playerone.push(index)
    turns.push(index)
    counter++
    return true
  } else if (!turns.includes(index) && counter % 2 !== 0) {
    playertwo.push(index)
    turns.push(index)
    counter++
    return true
  }
}

function isGameOver () {
  if (whoWon === 1 || whoWon === 2 || whoWon === 3) {
    return true
  } else {
    return false
  }
}

function whoWon () {
  for (var i = 0; i < winningCombo.length; i++) {
    if (playerone.sort().join('') === winningCombo[i].join('')) {
      return 1
    } else if (playertwo.sort().join('') === winningCombo[i].join('')) {
      return 2
    }
  }
  if (turns.length === 9) {
    return 3
  } else {
    return 0
  }
}

function restart () {
  counter = 0
  turns = []
  playerone = []
  playertwo = []
}
