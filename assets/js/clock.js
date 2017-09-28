$(function() {
  setInterval(buildTime, 1000)
  setInterval(bgChanger, 1000)
})

function bgChanger() {
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)
  color = `rgb(${red},${green},${blue})`

  let $body = $("body")
  $body.css("backgroundColor", color)
}

function buildTime() {
  let now = new Date(Date.now())
  let h = now.getHours()
  let m = now.getMinutes()
  let s = now.getSeconds()

  if (s < 10) {
    s = "0" + s
  }

  if (m < 10) {
    m = "0" + m
  }

  if (h < 10) {
    h = "0" + h
  }

  let time = `${h}:${m}:${s}`

  $("h2").text(time)
}
