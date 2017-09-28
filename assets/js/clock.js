$(function() {
  //console.log(now.toDateString())
  // console.log('h',now.getHours());
  // console.log('m',now.getMinutes());
  // console.log('s',now.getSeconds());
  setInterval(buildTime, 1000)
  setInterval(bgChanger,1000)
})

function bgChanger(){

  var r = Math.floor(Math.random() * 255)
  var g = Math.floor(Math.random() * 255)
  var b = Math.floor(Math.random() * 255)
  var $body = $('body')
  var colorArray = "rgb("+r+","+g+","+b+")"
  console.log(colorArray)

  $body.css('backgroundColor', colorArray)
  //simple assignment => create random color within rbg
  //2nd assignment => changing gradually
}

function buildTime(){
  var now = new Date(Date.now())
  var h = now.getHours()
  var m = now.getMinutes()
  var s = now.getSeconds().length === 1 ? `0${s}` : now.getSeconds()


  var time = `${h}:${m}:${s}`

  $('h2').text(time)
  //console.log(time)

}
