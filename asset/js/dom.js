$(document).ready(function(){
  //target the element
  var $box = $('.box')
  var $title = $('h1')

  //add evennt
  // $title.on('click', boxClick)
  var count = 0
  //
  // function boxClick(){
  //   var $title = $('h1');
  //   count++
  //   $($title).text('Tic Tac Toe:' + count)
  // }
  //change the title to timer
  setInterval(function(){
    count++
    $('h2').text('Timer:' + count)
  }, 1000);
  
  // make that change every second


  //Tic Tac Toe: 0 setInterval

  //change the $title to 'Tic Tac Toe : <click count>'
})
