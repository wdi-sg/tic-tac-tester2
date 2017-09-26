$(document).ready(init) // make sure that the document is loaded first
var count = 0
var value = 0
function init(){

  // this point onward
  var $box = $('.box') //using jquery, if not will be document.select
  var $title = $('h1')
  $box.on('click', boxClick)
  // change the title to timer
  // that changes every  5 second
  //Tic tac toe: <5 seconds passed>
  //setInterval(function(){ ("5 seconds passed"); 5000})
  //setInterval (titleTimer,1000)
// }
//
// function boxClick (){
//   var $title = $('h1')
//   count += 1
//   //console.log($title.text() + ": " + count)
//
//   $title.text("Tic Tac Toe : " + count)
//    //+ count
//   //change the $title into 'Tic tac toe': <click count>
// }
}
function titleTimer (){
  var $title = $('h1')
  value +=1

  $title.text("Tic Tac Toe : " + count + ": " + value)
  //return value
}

function boxClick (){
  var $title = $('h1')
  value = 0
  count += 1
  //console.log($title.text() + ": " + count)
  //setInterval (titleTimer(),1000)
  $title.text("Tic Tac Toe : " + count)
  setInterval (titleTimer,3000)
   //+ count
  //change the $title into 'Tic tac toe': <click count>
}
