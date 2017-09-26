
//
// use .map to break the arrays into individual strings.
// In each function always include name of function
// split each array into individual characters (split.)
// figure out which is odd or even. .length them to find out
// use splice to add a middle pipe - even number
// use splice to remove the middle pipe, and add |

function isolateIt (arr) {
  return arr.map(evenOrOddNumber)
}

function evenOrOddNumber (s) {
  console.log(s)
  if (s.length % 2 === 0 )
  return evenPipe(s)
  else return oddPipe(s)
}


function evenPipe(str) {
  console.log(str)
  var evenArray = str.split('')
  evenArray.splice(evenArray.length / 2 , 0 , '|')
  return evenArray.join('')
}

function oddPipe(str) {
  var oddArray = str.split('')
  oddArray.splice(str.length / 2 , 1 , '|')
  return oddArray.join('')
}



isolateIt(['abcd','edghj'])

























function isolateIt(arr) {
  return arr.map(evenOrOddPipe)
}

function evenOrOddPipe(s) {
  if(s.length % 2 === 0) return evenPipe(s)
  else return oddPipe(s)
  // return
}


function evenPipe(str) {
var letterArr = str.split('')
var newArr = letterArr.splice(str.length / 2, 0 , '|')
  return letterArr.join('')
}
// evenPipe('abcd')

function oddPipe(str) {
  var letterArr = str.split('')
  letterArr.splice(str.length / 2, 1 , '|')
  return letterArr.join('')
}
isolateIt(['abcd','edghj'])


$(document).ready(init)

seconds = 0;
function init () {
  var $box = $('.box')
  // add event
  $box.on('click', boxClick)
}

function boxClick() {
  setInterval(timerCount , 1000)
}

function timerCount() {
  seconds ++
  var $title = $('h1')
  $title.text('Tic-Tact-Toe : ' +seconds)
  seconds === 12 ? alert('you rocks matthew!') : 'You Rocks'
}
