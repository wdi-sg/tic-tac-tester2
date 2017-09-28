class Ball {
  constructor(color = this.randomColor(), width, height) {
    this.color = color

    let ranPx = this.randomPx(100)
    this.width = ranPx
    this.height = ranPx
    this.onClick()
  }

  randomColor() {
    let ranr255 = Math.floor(Math.random() * 255)
    let ranb255 = Math.floor(Math.random() * 255)
    let rang255 = Math.floor(Math.random() * 255)
    return `rgb(${ranr255}, ${rang255}, ${ranb255})`
  }

  randomPx(limit) {
    return Math.floor(Math.random() * limit + 10) + "px"
  }

  onClick() {
    $("body").on("click", ".ball", () => console.log(`ball is ${this.color}`))
  }
}

$(function() {
  let $wall = $(".wall")
  let createBall = () => {
    let randomBall = new Ball()
    let $newBall = $('<div class="ball">')
    $newBall.css({
      backgroundColor: randomBall.randomColor,
      width: randomBall.width,
      height: randomBall.height
    })
    $wall.append($newBall)
  }

  createBall()
  createBall()
  createBall()
  createBall()
  // setInterval(createBall, 1000)
})
