$(function () {
//   var now = new Date(Date.now ()) //will create the date based on the seconds
//   console.log(now.toString())
//
//
setInterval(buildTime,1000)
//   console.log('clock js is working

setInterval(bgChanger,1000)

})

function bgChanger() {
  var $body = $('body')
  // var colorArr = ['red', 'green', 'blue', 'yellow', 'gold', 'pink']
  // var index = Math.floor(Math.random()*6)
  //randomize RGB
  //random number between 0 - 255 Math.floor((Math.random() * 255))
  //var randomValue = Math.floor((Math.random() * 255))
var r = Math.ceil(Math.random() * 255)
var g = Math.ceil(Math.random() * 255)
var b = Math.ceil(Math.random() * 255)
var rgb = `rgb(${r},${g},${b})`
console.log(rgb)

//$body.animate({backgroundColor: rgb}, "slow");
$body.css({ transition: 'background-color 1s ease', "backgroundColor": rgb });
  // $body.css('backgroundColor',rgb)

}


function buildTime () {
var now = new Date(Date.now ())
  var h = now.getHours()
  var m = now.getMinutes()  // TODO: fix the single digit bug
  var s = now.getSeconds().length === 1 ? `0${s}` : now.getSeconds()

  var time = `${h}:${m}:${s}`
  console.log(time)

  $('h2').text(time)
}
