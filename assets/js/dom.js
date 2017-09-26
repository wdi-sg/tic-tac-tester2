$(document).ready(function () {
  var $box = $('.box')
  var $title = $('h1')
  var $count = 0
  var $startTitle = $title.text()
  $box.on('click', boxClick)
  //asn 1
    function boxClick() {
      //console.log($title.text())
      $count++
      $title.text($startTitle +" "+ $count)
    }
//asgn 2 change title with timer
  var $myInt = setInterval(boxClick, 500)

  // function myFunction(){
  //   $count++
  //   $title.text($startTitle +": "+ $count)
  // }

   window.setTimeout(stop, 50000);
   function stop() {
     clearInterval($myInt)
   }


})//end of DOM

$(function(){
  var $body = $('body') // same like css
//   $body.on('click', changeColor)

//   function changeColor() {
//     $body.css('backgroundColor', 'black')
//   }

  var $box = $('.box')

  $box.on('click', changeBoxColor)

  var $boxColor =""

  function changeBoxColor() {

    if ($boxColor != "yellow"){
    $boxColor = "yellow"
    } else {
    $boxColor = "blue"
    }
    $(this).css('backgroundColor', $boxColor)

  }
})
