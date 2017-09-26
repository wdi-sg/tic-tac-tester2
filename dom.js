$(document).ready(init)
  var count = 0

 function init() {
   //target the element

   var $box = $('.box')
   //add event
   $box.on('click', boxClick)

   console.log(count)

   //change the title to timer
   // that changes every second
   // Tic Tac Toe: <5 seconds passed>

   setInterval(boxClick, 5000)
 }


 function boxClick(){
   var $title = $('h1')
   count++
   $('h1').text("Tic Tac Toe : " +count)
  //  console.log(($title.text())
  // change the $title into 'Tic Tac Toe: <click count>'
 }
