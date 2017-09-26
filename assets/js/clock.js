$(function() {
  var now = new Date(Date.now())

  console.log('h', now.getHours())
  console.log('m', now.getMinutes())
  console.log('s', now.getSeconds())

  setInterval(buildTime, 1000)
  // setInterval(randomBG, 1000)
  randomGradientBG()
})

// function bgChanger() {
//   var colorArr = ['red', 'green', 'blue', 'yellow', 'gold', 'pink']
//   var colorIndex = Math.floor(Math.random() * 6)
//   var $body = $('body')
//   $body.css('backgroundColor', colorArr[colorIndex])
// }

// function randomBG() {
//     var red = Math.floor(Math.random() * 255)
//     var green = Math.floor(Math.random() * 255)
//     var blue = Math.floor(Math.random() * 255)
//     $body = $('body')
//     $body.css('backgroundColor', 'rgb(' +red+ ',' +green+ ',' +blue+ ')')
// }
var b = 255

function randomGradientBG() {
  $body = $('body')
  $body.css('backgroundColor', 'blue')
  $body.css('transition', 'background-color 15s ease-out')
}

function buildTime() {
  var now = new Date(Date.now())
  var h = now.getHours()
  var m = now.getMinutes() // todo: fix single digit second
  var s = now.getSeconds()
  if(s.length === 1) {
    s = 0 + s
  }
  var time = `${h}:${m}:${s}`

  $('h2').text(time)

  // h + ':' + m + ':' + s
  console.log(time)
}
