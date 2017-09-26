$(function() {
  // console.log('dom is connected')

  // console.log(now.toString())

  // console.log('h', now.getHours());
  // console.log('m',now.getMinutes());
  // console.log('s',now.getSeconds())

  setInterval(buildTime, 1000) //remember to omit parenthesis
  // buildTime()
  setInterval(bgChanger,1000)
})

function buildTime() {
  var now = new Date(Date.now()) //date mdn resources
  var h = now.getHours()
  var m = now.getMinutes() // todo: fix single digit output
  var s = now.getSeconds().length === 1 ? `0${s}` : now.getSeconds()

  // var time = h + ':' + m + ':' + s
  var time = `${h}:${m}:${s}` //ES6 not javascript

  $('h2').text(time)
  console.log(time)
}

function bgChanger() {
  // var color = rgb(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255))
  var blue = Math.floor(Math.random()*255)
  var red = Math.floor(Math.random()*255)
  var green = Math.floor(Math.random()*255)
  var $body = $('body')
  $body.css('backgroundColor', 'rgb(' + red + ',' + blue + ',' + green + ')')
}

//homework: to set across all color ranges using rgb, then gradual change with gradient
// codewars 1-15 link
//show score if clicking on the correct color, deduct points
//transition
