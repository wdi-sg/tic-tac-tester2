$(function() {
  setInterval(bgChanger,1000)
    setInterval(buildTime,1000)
   bgChanger();
 })



function bgChanger() {
  var r = Math.floor(Math.random() * 255)
  var g = Math.floor(Math.random() * 255)
  var b = Math.floor(Math.random() * 255)
  var colorIndex = (`rgb(${r},${g},${b}`)
  var $body = $('body')

  $body.css('background', colorIndex)
  $body.css('transition', 'all 0.3s ease-out')
}

var now = new Date(Date.now());


function buildTime() {
  var now = new Date(Date.now())
  var h = now.getHours()
  var m = now.getMinutes()
  var s = now.getSeconds().length === 0 ? `0$[s]` : now.getSeconds()


  var time = h + ':' + m + ':' + s

  $('h2').text(time)

}
