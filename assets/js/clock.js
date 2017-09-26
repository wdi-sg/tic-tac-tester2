$(function(){

  setInterval(buildTime,1000)
  setInterval(bgChange, 2000)
  bgChange()

  })

  function buildTime(){
    var now = new Date(Date.now())
    var h = now.getHours()
    var m = now.getMinutes()
    var s = now.getSeconds()

    var hLength = h.toString().length
    hLength === 1 ? h = `0${h}` : now.getHours()
    var mLength = m.toString().length
    mLength === 1 ? m = `0${m}` : now.getMinutes()
    var sLength = s.toString().length
    sLength === 1 ? s = `0${s}` : now.getSeconds()

    console.log(s.toString().length)

    var time = `${h}:${m}:${s}`
    $("h2").text(time)

}

function bgChange(){

  // var colorArray = [ "red", "green","blue","yellow","gold","pink"]
  // var colorIndex = Math.floor(Math.random()*6)
  // var $body = $("body")
  // $body.css("backgroundColor", colorArray[colorIndex])

  var r = Math.floor(Math.random()*255)
  var g = Math.floor(Math.random()*255)
  var b = Math.floor(Math.random()*255)


    var $body = $("body")
    // $body.css("backgroundColor", `rgb(${r},${g},${b})`)
    $body.animate({backgroundColor: `rgb(${r},${g},${b})`}, 1500)



}
//1) change to all colors in the rgb index
//2) change color gradually
