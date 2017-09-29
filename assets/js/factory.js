class Ball{
  constructor(color= this.randomColor(),width,height){

    var randPx = this.randomPx(400)
    this.color = color
    this.width = randPx
    this.height = randPx

    this.onClick()
  }

  randomColor(){
    var color = ["#00D8FF","#EAEAEA","#490099","#E1C7EA","#2182A5","#21A586","#ABA2BF","#A54421"]
    var index = Math.floor(Math.random()*7)
    return color[index]
    }

  randomPx(limit){
    var pixel = Math.floor(Math.random()*limit) +10
    return `${pixel}px`
  }

  onClick(){
    $('body').on("click",'.ball',()=>{
      alert(`My color is ${this.color}`)

    })
  }
}

$(function(){
  console.log("Dom is connected")
  ///////// DECLARATIONS //////////
  var $container = $('.container')

  // setInterval(createBall, 1000)
  createBall()


  function createBall(){

    var randomBall = new Ball()

    randomBall.onClick()
    var $newBall = $("<div class='ball'>")
    $newBall.css({
      backgroundColor: randomBall.color,
      width: randomBall.width,
      height: randomBall.height
      })
    $container.append($newBall)
  }



})
