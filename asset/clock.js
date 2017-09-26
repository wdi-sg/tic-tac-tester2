// $(function() {
//   var now = new Date(Date.now())
//
//   console.log(now.toDateString()) //get today date
//   console.log('h', now.getHours());
//   console.log('m', now.getMinutes());
//   console.log('s', now.getSeconds());
//
// })

$(function() {
  setInterval(buildTime, 1000)
  setInterval(bgChanges, 1000);
  // buildTime()
  // bgChanges()
})

function bgChanges() {
  // var colorArr = ['red', 'green', 'blue', 'yellow', 'pink', 'gold']
  // var colorIndex = Math.floor(Math.random() * 6)

  //// RANDOM METHOD ONE
  // var randColorValue = function() {
  // return Math.floor( Math.random() * 255 );
  // }
  //
  // var randColor = function() {
  // var red = randColorValue();
  // var green = randColorValue();
  // var blue = randColorValue();
  //
  // return "rgb(" + red + "," + green + "," + blue + ")";
  // }
  //// RANDOM METHOD ONE

  // RANDOM COLOR METHOD 2
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);


  var $body = $('body')

  // simple assignment => create random color with rgb
  // second assignment => changing gradully

  $body.css('backgroundColor', `rgb(${r},${g},${b})`);
  $body.css('transition', 'all 4s ease-out');
}

function buildTime() {
  var now = new Date(Date.now())
  var h = now.getHours()
  // TODO: fix the single digit bug
  var m = now.getMinutes().length < 10 ? `"0" ${m}` : now.getMinutes()
  var s = now.getSeconds().length < 10 ? `"0" ${s}` : now.getSeconds()

  // var time = h + ':' + m + ':' + s
  var time = `${h}:${m}:${s}` //cs6 not jquery

$('h2').text(time)

  console.log(time)
}
