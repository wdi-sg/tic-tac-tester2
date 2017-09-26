$(function() {
  //console.log("dom is connected")
//buildTime() --> manually versus below

setInterval(buildTime, 1000)

setInterval(bgChanger, 1000)
})

  //console.log(now.toString())

  //console.log('h', now.getHours());
  //console.log('m', now.getMinutes());
  //console.log('s', now.getSeconds());

function bgChanger(){

var colorArr = ""
var r = Math.floor(Math.random() * 255)
var g = Math.floor(Math.random() * 255)
var b = Math.floor(Math.random() * 255)
var colorArr= "rgb(" + r + "," + g + "," + b + ")"
//var colorIndex= Math.floor(Math.random() * 6)
var $body = $('body')
$body.css('backgroundColor', colorArr)



//colorArr[colorIndex]

//transition: background 0.5s linear;

}


function buildTime() {
  var now = new Date(Date.now())
  var h = now.getHours()
  var m = now.getMinutes() //TO DO: fix the single digit bug

  var s = now.getSeconds().length === 1 ? `0${s}`: now.getSeconds()

    //if(s.length === 1) {
      //s = 0 + s

  //var time = h + ':' + m + ':' + s
  //console.log(time)

var time = `${h}:${m}:${s}`

$('h2').text(time)
//console.log(time)

}


// first assignment -> create random color with rgd
// second assignment -> add gradually
