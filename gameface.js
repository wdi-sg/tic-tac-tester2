function makeSq () {
  console.log('crap');
  var gameBoard = document.getElementById('gameBoard')
  for (var i=0; i<9; i++){
    var eachDiv = document.createElement('div')
    eachDiv.textContent = '-'
    eachDiv.id = i
    eachDiv.classList.add('box')
    gameBoard.appendChild(eachDiv)
  }
}

makeSq ()
