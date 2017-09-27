class Ball {
  constructor(color =this.colorFn(), width, height){
    var randomPx = this.pxFn(200)

    this.color = color
    this.width = randomPx
    this.height = randomPx

    this.onClick()
  }


    colorFn() {
      var colorSet = ['#00FFC5', '#481620', '#0075A2', '#D55672', '#ADF5FF']
      var colorIndex = Math.floor(Math.random() * colorSet.length)
      return colorSet[colorIndex]

    }

    pxFn(limit) {
      return (Math.floor(Math.random() * limit) + 10) + 'px'
      //output ==> 1px - <limit>px
    }

    onClick(){
        //jquery code
      $('body').on('click', '.ball', () => {
        console.log(this)

      })
    }

}

$(function() {
  var $container = $('.container')

  setInterval(createBall, 1000)

  function createBall() {
    var randomBall = new Ball()


    var $newBall =$("<div class='ball'>")
    $newBall.css({
      backgroundColor: randomBall.color,
      width: randomBall.width,
      height: randomBall.height
    })
    $container.append($newBall)

  }



})
