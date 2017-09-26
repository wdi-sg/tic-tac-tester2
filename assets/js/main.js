$(function(){

  var $box = $('.box')
  var $currentBG = ''
  $box.on('click', changeBoxColor)

  function changeBoxColor() {
    if ($currentBG == '') {
      $(this).css('backgroundColor', 'yellow');
      $currentBG = 'yellow';
    } else if ($currentBG == 'yellow') {
      $(this).css('backgroundColor', 'blue');
      $currentBG = 'blue';
    } else if ($currentBG == 'blue') {
      $(this).css('backgroundColor', 'white');
      $currentBG = '';
    }
  }
})
