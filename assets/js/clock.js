
$(function(){
  //console.log('dom is connected')
  setInterval(buildTime,1000)
  //buildTime()
  //console.log(now)
  setInterval(bgChanger,2000)
  //bgChanger()
})
function bgChanger(){
  //var colorArr = ['red', 'green', 'blue', 'yellow', 'gold', 'pink' ]
  var $body = $('body')
//  var colorIndex = Math.floor(Math.random()*6)
// simple assignment ==> create random color
  var r = Math.ceil(Math.random()*255)
  var g = Math.ceil(Math.random()*255)
  var b = Math.ceil(Math.random()*255)
  var rgb = `rgb(${r},${g},${b})`

  // simple assignment ==> create random color
  //$body.css('backgroundColor',rgb)
  // second assignment => changing gradually
  $body.css({transition : 'background-color 1s ease-in-out','backgroundColor': rgb})
  // create the game where there are words on the color if the word and backgroundColor match, points given.
}
function buildTime()  {
  var now = new Date(Date.now())
  var h = now.getHours()
  var m = now.getMinutes() //TODO: fix the single digit bug
  var s = now.getSeconds().length === 1? `0${s}`: now.getSeconds()

  //var time = h + ": " + m + ": " + s
  var time = `${h}:${m}:${s}`
  $('h2').text (time)
  //console.log(time)
}
