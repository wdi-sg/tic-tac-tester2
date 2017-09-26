// function init() {
//   console.log("dom is connected")
// })

$(function() {
  // console.log("dom is connected") //to check if the function is working
  // console.log("h", now.getHours());
  // console.log("m", now.getMinutes());
  // console.log("s", now.getSeconds());

  setInterval(buildTime, 1000) //calling buildTime at certain interval

  // buildTime() //calling buildTime on our own
  // console.log(now.toString()) //current date in numeric values //output human readable format for day, date and time
  // console.log(now.toString()) //output human readable format for day and date only

  setInterval(bgChanger, 2000)
})

// function bgChanger() {
//   var colorArr = ["red", "green", "blue", "yellow", "gold", "pink"]
//   var colorIndex = Math.floor(Math.random() * 6)
//   var $body = $("body")
//
//   $body.css("backgroundColor", colorArr[colorIndex])
// }

function bgChanger() {

  // rgb(0, 0, 0)
  // rgb(255, 255, 255)

  var r = Math.floor(Math.random() * 255)
  var g = Math.floor(Math.random() * 255)
  var b = Math.floor(Math.random() * 255)
  var rgbColor = "rgb" + "(" + r + ", " + g + ", " + b + ")"
  console.log(rgbColor)
  var $body = $("body")

  $body.css("backgroundColor", rgbColor)

  $("body").animate(function() {
    $(this).toggleClass(rgbColor);
  });

}

function buildTime() {
  var now = new Date(Date.now()) //create a date object based on the current date
  var h = now.getHours()
  var m = now.getMinutes() //TODO: fix the single digit bug
  var s = now.getSeconds().length === 1 ? `0${s}` : now.getSeconds()
  // if (now.getSeconds().length === 1) {
  //   s = 0 +
  // }

  var time = `${h}:${m}:${s}`
  // var time = h + ":" + m + ":" + s

  $("h2").text(time)

  // console.log(time)

}
