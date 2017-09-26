$(function(){

  setInterval(buildTime,1000)
  setInterval(backgroundChanger,1000)

  backgroundChanger();

  //console.log("clock is connected")

   var now = new Date(Date.now())
   console.log("h" ,now.getHours());
   console.log("m",now.getMinutes());//TODO: fix the single digit bug
   if(now.getSeconds() === 1){
     s = 0 + s
   }
   console.log("s",now.getSeconds());
   console.log(now.toDateString());


})

function buildTime(){
  var now = new Date(Date.now())
  var h = now.getHours()
  var m = now.getMinutes()
  var s = now.getSeconds()

  //var time = h + ':' + m + ':'+ s
  var time = `${h}:${m}:${s}`
  console.log(time);

  $('h2').text(time)

}
buildTime();

function backgroundChanger(){
  //var colorArr = ['red','green','blue','pink','purple','yellow']
  //simple assignment => create random color with rgb
  //second assignment => changing gradually
  var r =(Math.floor(Math.random() * 256))
  var g =(Math.floor(Math.random() * 256))
  var b =(Math.floor(Math.random() * 256))

  var hue = "rgb(" + r + "," + g + "," + b + ")"
  console.log(hue);
  //var colorIndex = Math.floor(Math.random()*6)
  var $body = $('body')
  $body.css('backgroundColor',hue)
}
