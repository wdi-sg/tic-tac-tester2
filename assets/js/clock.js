$(function() {
  setInterval(buildTime, 1000)
  setInterval(bgChanger, 2000)
})

function bgChanger() {
  var $body = $('body')
  var r = Math.floor(Math.random()*255)
  var g = Math.floor(Math.random()*255)
  var b = Math.floor(Math.random()*255)

  var rgb = 'rgb('+`${r},${g},${b}`+')'


  //simple assignment => create random color with rgb
  // second assignment => should fade in to color(gradient)

  $body.css('backgroundColor', rgb)
  $body.css('transition','all 1s ease-in')

}

function buildTime() {
  var now = new Date(Date.now())
  var h = now.getHours()
  var m = now.getMinutes() //TODO:fix the single digit bug

  var s = now.getSeconds()
  if(now.getSeconds().length == 1 ? `0${s}` : now.getSeconds())

  var time = `${h}:${m}:${s}`

$('h2').text(time)

//onsole.log(time)

}
