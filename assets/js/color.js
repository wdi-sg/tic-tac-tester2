$(function(){
  var $box = $('.box')

  $box.on('click', changeBoxColor)

  function changeBoxColor() {
    var result = ($(this).css('backgroundColor') == 'rgba(0, 0, 0, 0)');
    if (result) {
      return ($(this).css('backgroundColor', 'yellow'));
    }
    else {
      return ($(this).css('backgroundColor', 'blue'));
    }

  }
})


//TTT Pseudocode
 - create 9 empty identical boxes
 - css to arrange into 3x3 grid
 - for each box, on odd clicks, change color to yellow if not clicked before
 - for even clicks, same, but change color to blue
 - on click, set attribute for odd and even clicks ('o'' and 'e'')
 - assign box with IDs (1,2,3,4,5,6,7,8,9)
 - calculate across horizontal, vertical, diagonal attribute triggers (e.g.: 1,4,7: ooo)
 - if trigger win: player odd wins
