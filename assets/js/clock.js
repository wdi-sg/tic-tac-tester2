$ (function() {
  // console.log('dom is connected')

setInterval(buildTime,1000)
setInterval(bgChanger,1000)

// buildTime()
// bgChanger()
// console.log(now.toString())
// console.log('h',now.getHours())
// console.log('m',now.getMinutes())
// console.log('s',now.getSeconds())
})
// Assign 1: create multiple random/different colors. RGB. Create different combination
// Assign 2: changing gradually (fade into the first color)
// Create a closure.

function bgChanger () {
  var $body = $('body')

  var a = Math.floor(Math.random()*255)
  var b = Math.floor(Math.random()*255)
  var c = Math.floor(Math.random()*255)

  $body.css({
    "transition": 'background-color 1s ease-in-out',
    "backgroundColor": `rgb(${a},${b},${c})`,
  })

}

// rgb(155, 102, 102)
// var colorIndex = Math.floor(Math.random()*6)
// var colorArr = ['red','green','blue','yellow','gold','pink']
// $body.css('backgroundColor', colorArr[colorIndex])
// console.log(typeof Math.floor(Math.random()*255))


function buildTime() {
  var now = new Date(Date.now())

  // get hours
  var h = now.getHours().toString()
  h = h.length === 1 ? `0${h}` : now.getHours()
  //get minutes
  var m = now.getMinutes().toString() //TODO: fix the single digit bug
  // console.log(now.getSeconds().toString().length)
  m = m.length === 1 ? `0${m}` : now.getMinutes()
  //get seconds
  var s = now.getSeconds().toString()
  // s.length === 1 ? s = `0${s}` : s = now.getSeconds()
  s = s.length === 1 ? `0${s}` : now.getSeconds()


  // if (s.length === 1) {
  //   s = `0${s}`
  // } else {
  //   s = now.getSeconds()
  // }
  // console.log(s)

  // ? 0${s} : now.getSeconds()
  // === 2 ? `0${s}`: now.getSeconds())


// if(s.length === 1) s = 0 + s

  var time = `${h}:${m}:${s}`
  // = h + ":" + m + ":" + s
  $('h2').text(time)
}
