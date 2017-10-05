$(function(){

  $box1 = $('#1')
  $box2 = $('#2')
  $box3 = $('#3')
  $box4 = $('#4')
  $box5 = $('#5')
  $box6 = $('#6')
  $box7 = $('#7')
  $box8 = $('#8')
  $box9 = $('#9')
  $winner = $("#winner")
  $currentplayer = $("#currentplayer")
  $main = $(".box")


  $main.on("click",function(){
    alert($(this).data('index'))
  })

  $box1.on("click", () =>{
    playTurn(0)
    currentPlayer === 1 ? $box1.css('backgroundColor','black') : $box1.css('backgroundColor','purple')
    $currentplayer.text(`Player ${currentPlayer}'s Turn`)
    if (isGameOver() === true){

    if(whoWon() === 1){
      alert("Player 1 has won!")
      restart()
    }
    else if(whoWon() === 2){
      alert("Player 2 has won!")
      restart()
    }else if(whoWon() === 3){
      alert("Its a draw!")
      restart()
    }
  }
  })
  $box2.on("click", () =>{

    playTurn(1)
    currentPlayer === 1 ? $box2.css('backgroundColor','black') : $box2.css('backgroundColor','purple')
    $currentplayer.text(`Player ${currentPlayer}'s Turn`)
    if(whoWon() === 1){
      alert("Player 1 has won!")
      restart()
    }
    else if(whoWon() === 2){
      alert("Player 2 has won!")
      restart()
    }else if(whoWon() === 3){
      alert("Its a draw!")
      restart()
    }
  })
  $box3.on("click", () =>{

    playTurn(2)
    currentPlayer === 1 ? $box3.css('backgroundColor','black') : $box3.css('backgroundColor','purple')
    $currentplayer.text(`Player ${currentPlayer}'s Turn`)
    if(whoWon() === 1){
      alert("Player 1 has won!")
      restart()
    }
    else if(whoWon() === 2){
      alert("Player 2 has won!")
      restart()
    }else if(whoWon() === 3){
      alert("Its a draw!")
      restart()
    }
  })
  $box4.on("click", () =>{

    playTurn(3)
    currentPlayer === 1 ? $box4.css('backgroundColor','black') : $box4.css('backgroundColor','purple')
    $currentplayer.text(`Player ${currentPlayer}'s Turn`)
    if(whoWon() === 1){
      alert("Player 1 has won!")
      restart()
    }
    else if(whoWon() === 2){
      alert("Player 2 has won!")
      restart()
    }else if(whoWon() === 3){
      alert("Its a draw!")
      restart()
    }
  })
  $box5.on("click", () =>{

    playTurn(4)
    currentPlayer === 1 ? $box5.css('backgroundColor','black') : $box5.css('backgroundColor','purple')
    $currentplayer.text(`Player ${currentPlayer}'s Turn`)
    if(whoWon() === 1){
      alert("Player 1 has won!")
      restart()
    }
    else if(whoWon() === 2){
      alert("Player 2 has won!")
      restart()
    }else if(whoWon() === 3){
      alert("Its a draw!")
      restart()
    }
  })
  $box6.on("click", () =>{

    playTurn(5)
    currentPlayer === 1 ? $box6.css('backgroundColor','black') : $box6.css('backgroundColor','purple')
    $currentplayer.text(`Player ${currentPlayer}'s Turn`)
    if(whoWon() === 1){
      alert("Player 1 has won!")
      restart()
    }
    else if(whoWon() === 2){
      alert("Player 2 has won!")
      restart()
    }else if(whoWon() === 3){
      alert("Its a draw!")
      restart()
    }
  })
  $box7.on("click", () =>{

    playTurn(6)
    currentPlayer === 1 ? $box7.css('backgroundColor','black') : $box7.css('backgroundColor','purple')
    $currentplayer.text(`Player ${currentPlayer}'s Turn`)
    if(whoWon() === 1){
      alert("Player 1 has won!")
      restart()
    }
    else if(whoWon() === 2){
      alert("Player 2 has won!")
      restart()
    }else if(whoWon() === 3){
      alert("Its a draw!")
      restart()
    }
  })
  $box8.on("click", () =>{

    playTurn(7)
    currentPlayer === 1 ? $box8.css('backgroundColor','black') : $box8.css('backgroundColor','purple')
    $currentplayer.text(`Player ${currentPlayer}'s Turn`)
    if(whoWon() === 1){
      alert("Player 1 has won!")
      restart()
    }
    else if(whoWon() === 2){
      alert("Player 2 has won!")
      restart()
    }else if(whoWon() === 3){
      alert("Its a draw!")
      restart()
    }
  })
  $box9.on("click", () =>{

    playTurn(8)
    currentPlayer === 1 ? $box9.css('backgroundColor','black') : $box9.css('backgroundColor','purple')
    $currentplayer.text(`Player ${currentPlayer}'s Turn`)
    if(whoWon() === 1){
      alert("Player 1 has won!")
      restart()
    }
    else if(whoWon() === 2){
      alert("Player 2 has won!")
      restart()
    }else if(whoWon() === 3){
      alert("Its a draw!")
      restart()
    }
  })

})
