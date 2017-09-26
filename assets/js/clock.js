$(function() {
// console.log('dom is connected')

//getting the current date and time

// console.log(now.toString())

//getting the hour minute second
  // console.log('h', now.getHours());
  // console.log('m', now.getMinutes());
  // console.log('s', now.getSeconds());

//calling buildTime function at an interval
  setInterval(buildTime, 1000)

//calling buildTime function by itself
  // buildTime

  setInterval(bgChanger, 1000)
})

//Assignment 1 => create random color with rgb
//Assignment 2 => changing gradually, fade in

function bgChanger() {
  var colorArr =  ['red', 'blue', 'yellow', 'gold', 'pink']
  var colorIndex = Math.floor(Math.random() * 6)
  var $body = $('body')

  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

  $body.css('backgroundColor', hue)
  $body.css('transition', 'all, 0.5s ease-out')

}

$body.css('transition', 'all, 0.5s ease-out')

//   $("body").css("transition","all 1s");
//   function changeColor(){
//    $("body").css({
//         backgroundColor : hue
//       });
// }
//   changeColor();
//   setInterval(changeColor,3000);



function buildTime() {
  var now = new Date(Date.now())
  var h = now.getHours()
  var m = now.getMinutes() //TODO: fix the single digit bug
  var s = now.getSeconds().length === 1 ? `0${s}` : now.getSeconds()

  //es6 concat method
    var time = `${h}:${m}:${s}`

  //do not need to declare again because only use once, just directly use
    $('h2').text(time)
}

// jquery method concat
  // var time = h + ':' + m + ':' + s

//console.log(time)
