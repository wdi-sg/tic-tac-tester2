$(function(){



  //var $body = $('body') // same like css
//   $body.on('click', changeColor)

//   function changeColor() {
//     $body.css('backgroundColor', 'black')
//   }


  var $box = $('.box')
  var boxColor =""

  $box.on('click', playGame)

  function playGame(){
    var index = $(this).data('id')

      if (player === 2 ){
      $(this).addClass('player2')
    }
      if (player === 1){
      $(this).addClass('player1')
    }
    playTurn(index)

    console.log(grid)

    console.log(whoWon())
    if (whoWon()===1 || whoWon()===2) {
      alert(`Player ${whoWon()} won!`)
      $box.removeClass('player1 player2')
      restart()
    }
    if (whoWon()===3){
      alert(`It is a draw!`)
      $box.removeClass('player1 player2')
      restart()

    }
     }



    //     if (player === 2){
    // //   var index = $(this).data('id')
    // //   playTurn(index)
    //
    //     }









//
//   function changeBoxColor() {
//
    // if (boxColor != "yellow"){
    // boxColor = "yellow"
    // } else {
    // boxColor = "blue"
    // }
    // $(this).css('backgroundColor', boxColor)
// }
})
