var grid = [null, null, null, null, null, null, null, null, null]
var ttt = tttModule()
var player = 1

function tttModule() {

  return {
    playTurn: function (index) {
      console.log('current player on ttt is', player);
      if (grid[index] || ttt.isGameOver()) {
        // alert('game is over! stop clicking')
        return false
      } else {
        grid[index] = player
        // if (player === 1) player = 2
        // else player = 1
        return true
      }
    },

    isGameOver: function () {
      if (ttt.whoWon()) return true
      return false
    },

    whoWon: function () {
      if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
      if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
      if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
      if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
      if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
      if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
      if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
      if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
      if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
        grid[5] && grid[6] && grid[7] && grid[8]) return 3
      return 0
    },

    restart: function () {
      grid = [null, null, null, null, null, null, null, null, null]
      player = 1
    }
  }
}
