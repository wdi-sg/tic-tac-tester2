$(function() {
  // var now = new Date(Date.now())
  // console.log('hour', now.getHours());
  // console.log('mins', now.getMinutes());
  // console.log('seconds', now.getSeconds());
  setInterval(buildTime, 1000);
  setInterval(bgChanger, 8000);
})
var count = 0;

function bgChanger() {
  var $body = $('body')
  var r = Math.floor(Math.random() * 255)
  var g = Math.floor(Math.random() * 255)
  var b = Math.floor(Math.random() * 255)
  var rgb = 'rgb(' + `${r},${g},${b}` + ')';
  $body.css('backgroundColor', rgb)
  $body.css('transition', 'all 5s ease-out')
}

function buildTime () {
  var now = new Date(Date.now())
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds().length === 1 ? `${s}` : now.getSeconds() // TODO: fix the single digit bug
  var time = `${h}:${m}:${s}`

// if (s.length === 1) {
//   s = 0 + s
// })


$('h2').text(time)
  // console.log(time)
}
