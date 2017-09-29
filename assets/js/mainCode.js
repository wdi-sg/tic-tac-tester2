$(function(){
  $winner = $("#winner")
  $currentplayer = $("#currentplayer")
  $box = $(".box")
  $restartButton = $("#restart")
  var tileIndex

  $box.on("click",function(){
    tileIndex = $(this).data('index')

    playTurn(tileIndex)
      currentPlayer === 2 ? $(this).addClass("player2") : $(this).addClass("player1")
      $winner.text(`Player ${currentPlayer}'s Turn`)
      if (isGameOver() === false){

      if(whoWon() === 1){
        alert("Player 1 has won!")
        $winner.text(`Winner is player 1!!`)
      }
      else if(whoWon() === 2){
        alert("Player 2 has won!")
        $winner.text(`Winner is player 2!!`)
      }else if(whoWon() === 3){
        alert("Its a draw!")
        $winner.text(`D R A W`)
      }
    }


  })

  $restartButton.on("click",function () {
    $box.removeClass("player2")
    $box.removeClass("player1")
    $winner.text("Winner:")
    restart()

  })


})
