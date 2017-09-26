$(function() {
  // setInterval(buildTime, 1000);
  setInterval(bgChange, 1000);
})

// function buildTime() {
//   // var now = new Date(Date.now());
//   // var h = now.getHours().toPrecision(2);
//   // var m = now.getMinutes().toPrecision(2);
//   // var s = now.getSeconds().toPrecision(2);
//   // var time = `${h}:${m}:${s}`;
//   // console.log($('h2').text(time));
// }

var rUp = true;
var gUp = true;
var bUp = true;
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

function bgChange() {
  var $body = $('body');
  // increment/decrement r value by +- 20
  if(rUp) {
    if(r >= 255) rUp = false;
    if(r < 255) r+= Math.floor((Math.random() * 20)+1);
  }
  else {
    if(r <= 0) rUp = true;
    if(r > 0) r-= Math.floor((Math.random() * 20)+1);
  }
  // increment/decrement g value by +- 20
  if(gUp) {
    if(g >= 255) gUp = false;
    if(g < 255) g+= Math.floor((Math.random() * 20)+1);
  }
  else {
    if(g <= 0) gUp = true;
    if(g > 0) g-= Math.floor((Math.random() * 20)+1);
  }
  // increment/decrement b value by +- 20
  if(bUp) {
    if(b >= 255) bUp = false;
    if(b < 255) b+= Math.floor((Math.random() * 20)+1);
  }
  else {
    if(b <= 0) bUp = true;
    if(b > 0) b-= Math.floor((Math.random() * 20)+1);
  }
  // set background color and transition
  $body.css('backgroundColor', `rgb(${r},${g},${b})`);
  $body.css('transition', 'all 2s ease-out');
}
