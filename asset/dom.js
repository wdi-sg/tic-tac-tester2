$(document).ready(init)

  function init() {
    // jquery run this point onward

    // target the element
    var $box = $('.box')
    // add event
    // $box.on('click', boxClick) //click box
    $box.on('click', titleTimer)

    // change the title to timer
    // that changes every 5 seconds
    // Tic Tac Toe: <5 seconds passed>

  }

  //var counter = 0
  var timer = 0

  function boxClick() {
    var $title =  $('h1')
    // alert('box is clicked')
    //counter ++;
    // console.log($title.text())
    //console.log($title.text('TIC TAC TOE: ' + timer));
    // only take in one element

    // change the $title into TIC TAC TOE: <click count>
  }

  function titleTimer(){
    var $title = $('h1')
    setInterval(printTimer, 1000)
    //console.log($title.text('TIC TAC TOE: ' + timer));
  }

  function printTimer(){
    var $title = $('h1')
    timer += 1;
    //console.log(timer);
    console.log($title.text('TIC TAC TOE: ' + timer));
  }
