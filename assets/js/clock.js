$(function () {
  //setInterval(buildTime, 5000)
//  setInterval(bgChanger, 5000)
bgChanger()
})

// function bgChanger(){
//     var $body = $('body')
//     var rgb1 = randRgb()
//     var rgb2 = randRgb()
//     var rgb3 = randRgb()
//     var rgbNow = `rgb(${rgb1},${rgb2},${rgb3})`
//     console.log(rgbNow);
//     var rgbn1 = randRgb()
//     var rgbn2 = randRgb()
//     var rgbn3 = randRgb()
//     var rgbNext = `rgb(${rgbn1},${rgbn2},${rgbn3})`
//     console.log('rgbNext', rgbNext);
//     $body.css('backgroundColor',rgbNow)
//
// }
function randRgb(){
  return Math.floor((Math.random()*255)+1)
}

function bgChanger(){
  var $body = $('body')
//Asgn 0: random color from array
  // var colorIndex = Math.floor((Math.random()*255)+1)
  // $body.css('backgroundColor', colorArr[colorIndex])

//Asn 1 = change rand color with rgb
  var rgb1 = Math.floor((Math.random()*255)+1)
  var rgb2 = Math.floor((Math.random()*255)+1)
  var rgb3 = Math.floor((Math.random()*255)+1)
  var rgb = `rgb(${rgb1},${rgb2},${rgb3})`
  console.log(rgb);

$body.css('backgroundColor',rgb)
$body.fadeIn(10000)
}

//asn 2 = change gradually

function buildTime() {
  var now = new Date (Date.now())
  var  h= now.getHours()
  var  m= now.getMinutes()
  var  s= now.getSeconds()
  if(s.length===1)
   s = '0'+now.getSeconds()
else
   s = now.getSeconds()

  var time = ` ${h}:${m}:${s}`

  $('h2').text(time)
}

var colorArr = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]
