var tiles = [0,0,0,0,0,0,0,0,0];
var currentPlayer = 1;
var count = 0;


function restart(){
  tiles = [0,0,0,0,0,0,0,0,0];
  currentPlayer = 1;
  count = 0;
}

function isGameOver(){
if(whoWon() === 0){
  return false;
}
  return true;

  //logic if game is over anot
  return false;
}

function whoWon(){
  var rowOne = tiles[0]+tiles[1]+tiles[2]
  var rowTwo = tiles[3]+tiles[4]+tiles[5]
  var rowThree = tiles[6]+tiles[7]+tiles[8]
  var colOne = tiles[0]+tiles[3]+tiles[6]
  var colTwo = tiles[1]+tiles[4]+tiles[7]
  var colThree = tiles[2]+tiles[5]+tiles[8]
  var diagOne = tiles[0]+tiles[4]+tiles[8]
  var diagTwo = tiles[2]+tiles[4]+tiles[6]

  switch(true){
    case (rowOne === 3 || rowTwo === 3 || rowThree === 3 || colOne === 3|| colTwo === 3|| colThree === 3 || diagOne === 3 || diagTwo === 3):
      return 1;
    case (rowOne === -3 || rowTwo === -3 || rowThree === -3 || colOne === -3|| colTwo === -3 || colThree === -3 || diagOne === -3 || diagTwo === -3):
      return 2;
    case (count === 9):
      return 3;
    default:
      return 0;
  }

}

function playTurn(index){

    if(tiles[index] === 0){
      if(currentPlayer === 1){
        tiles[index] = 1;
        currentPlayer = 2;
      }else{
        tiles[index] = -1;
        currentPlayer = 1;
      }
      count++;
      return true;
    }else {

      return false;
    }


}
