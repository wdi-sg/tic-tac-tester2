$(function() {
  // console.log("dom is connected");

  // console.log('h' , now.getHours());
  // console.log('m' , now.getMinutes());
  // console.log('s' , now.getSeconds());
  setInterval(buildTime, 1000)

  // buildTime()
  setInterval(bgChanger, 1000)
})

function bgChanger(){
  // var colorArr = ['red', 'green', 'blue', 'yellow', 'gold', 'pink']
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  var $body = $('body')

  $body.css('backgroundColor', "rgb(" + r + "," + g + "," + b + ")")

}


function buildTime () {

  var now = new Date(Date.now())

  var h = now.getHours()
  var m = now.getMinutes() // TODO: fix the single digit bug
  var s = now.getSeconds().length === 1 ? `0${s}` : now.getSeconds()

  var time = `${h}:${m}:${s}`

  $('h2').text(time)

  // console.log(time);
}
