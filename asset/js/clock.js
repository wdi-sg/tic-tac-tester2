$(function(){
  var now = new Date(Date.now())
  console.log(now.toString());

  console.log("h " + now.getHours())
  console.log("m " + now.getMinutes())
  console.log("s " + now.getSeconds())

  setInterval(buildTime,1000)
  randomGradient();


});

//create random color with rgb
// function bgChanger(){
//   var red = Math.floor(Math.random()*255)
//   var green = Math.floor(Math.random()*255)
//   var blue = Math.floor(Math.random()*255)
//   var $body = $('body')
//   $body.css('backgroundColor', 'rgb(' + red +',' + green + ',' + blue +')')
//
// }

//changing gradually
function randomGradient(){
  var $body = $('body')
  $body.css('backgroundColor', 'brown')
  $body.css('transition', 'background-color 15s ease-out')
}


function buildTime(){
    var now = new Date(Date.now())
    var h = now.getHours()
    var m = now.getMinutes() //TODO: fix the single digit
    var s = now.getSeconds().length === 1 ? `0{s}` : now.getSeconds()

    var time = `${h}:${m}:${s}`

    $('h2').text(time)
}
