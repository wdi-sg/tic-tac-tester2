var grid = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
]

var players = ""

// var result = ""

var winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]



function playTurn (index) {
  if(grid[index] === 0) {
    grid[index] = players
    if(players === 1) {
      players = 2
    } else {
      players = 1
    }

    console.log(players)
    console.log(grid)
     return true
  } else {
     return false
  }


}

function isGameOver () {

  var checker = whoWon();

  if (checker !== 0) {
    //logic that checks if game is over or not
    return false
  } else {
    return true
  }

}

function whoWon (score) {
  for(var j = 0; j <= winningCondition.length-1; j++) {
    for(var k = 0; k <= grid.length-1; k++) {

      // if game is still in progress
      // if game is a draw
      if (grid[k] === 0) {
        if (grid[k] === 0) {
          return 0
          // var result = 0
          // result.push(score)
        } else {
          return 3
          // var result = 3
          // result.push(score)
        }
      }
      // if player 1 or 2 wins
      else if (grid[winningCondition[j][0]] === grid[winningCondition[j][1]] && grid[winningCondition[j][1]] === grid[winningCondition[j][2]]) {
        if (grid[winningCondition[j][0]] = 1) {
          return 1
          // var result = 1
          // result.push(score)
        } else if (grid[winningCondition[j][0]] = 2) {
          return 2
          // var result = 2
          // result.push(score)
        }
      }
    }
  }
}

function restart() {
  // function whoWon() {
    // for(var i = 1; i <= 3; i++) {
      grid = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
        ]

      moves = 0

}

console.log("restart")

    // switch (true) {
    //   case grid[winningCondition[j][k]] !== 0:
    //     return 3
    //     break;
    //   case grid[winningCondition[j][0]] === grid[winningCondition[j][1]] && grid[winningCondition[j][1]] === grid[winningCondition[j][2]]:
    //     if (grid[winningCondition[j][0]] = 1) {
    //       return 1
    //     } else if (grid[winningCondition[j][0]] = 2) {
    //       return 2
    //     }
    //     break;
    //   // if player 1 or 2 wins
    //   case grid[winningCondition[j][0]] === grid[winningCondition[j][1]] && grid[winningCondition[j][1]] !== grid[winningCondition[j][2]]:
    //     return 3
    //     break;
    //   // if game is a draw
    //   case grid[winningCondition[j][0]] === grid[winningCondition[j][2]] && grid[winningCondition[j][2]] !== grid[winningCondition[j][1]]:
    //     return 3
    //     break;
    //   // if game is a draw
    //   case grid[winningCondition[j][1]] === grid[winningCondition[j][2]] && grid[winningCondition[j][2]] !== grid[winningCondition[j][0]]:
    //     return 3
    //     break;
    //   // if game is a draw
    //   // case moves.length < 9:
    //   //   return 1
    //   //   break;
    //   // if game is still in progress
    //     default:
    //     return
    // }


// if (grid[0] == grid[1] && grid[1] == grid[2]) {
//   return grid[0]
// }

// function restart() {
//     grid = [
//       0, 0, 0,
//       0, 0, 0,
//       0, 0, 0
//       ]
//
//     moves = 0
//
//       // for(var k = 0; k <= grid.length-1; k++) {
//       //   grid[k] = " "
//       //   moves = " "
//       // }
//
//     console.log("restart")
// }
//  if (isGameOver === true || whoWon === 1 || whoWon === 2) {
  //  grid = [
  //   0, 0, 0,
  //   0, 0, 0,
  //   0, 0, 0
  //   ]
//     moves = 0;
//   }
//     // $('.tac').text("0");
//     // gameOn = false;
//     // $(".box3").fadeOut();
//     // $(".box1").fadeIn();
// // }
//   console.log("restart")
// }


// TicTacToe.prototype.empty = function() {
// 	// Go through all columns and empty them
// 	for(var i = 0; i < this.columns.length; i++) {
// 		this.columns[i].innerHTML = '';
// 		this.columns[i].classList.remove(this.marks.1);
// 		this.columns[i].classList.remove(this.marks.2);
//
// 	}
// 	// Reset the count
// 	this.marks.count = 0;
// };
//
// TicTacToe.prototype.reset = function() {
// 	this.empty();
// 	this.scores = {
// 		X: 0,
// 		O: 0
// 	};
// };
