// $(document).ready(function(){
//
// })

class Ball {
  constructor(color = this.colorFn(), width, height) {
    var randomPx = this.pxFn(400)

    this.color = color
    this.width = randomPx
    this.height = randomPx

    // this.onClick()
  }
  colorFn() {
    var colorSet = ['red', 'green', 'blue', 'black', 'pink', 'yellow']
    var randomNum = Math.floor(Math.random()*6)
    return colorSet[randomNum]
  }
  pxFn(limit) {
    return Math.floor(Math.random()*500) + 'px'
    //output => 1px - <limit>px 500 px
  }
 onClick() {
  //  jquery code
    $('body').on('click', '.ball', function () {
      console.log(this.color)// ths one the 
      //alert('ball is clicked')
    })
  }

}

$(function() {
  var $container = $('.container')
  //setInterval(createBall, 1500)
  createBall()

  function createBall() {
    var randomBall = new Ball()
    randomBall.onClick()

    console.log(randomBall)

    var $newBall = $("<div class = 'ball'>")
    $newBall.css('background-color', randomBall.color)
    $newBall.css('width', randomBall.width)
    $newBall.css('height', randomBall.height)

    $container.append($newBall)
    console.log('creating ball every second')
  }
  })
