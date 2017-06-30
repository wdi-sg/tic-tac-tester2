var ttt = ttt()

document.addEventListener('DOMContentLoaded', ttt)

var tttBox = document.querySelectorAll('.box')
// var grid = ['','','','','','','','','']
// var currentPlayer = 1

tttBox.forEach(function(element) {
  element.addEventListener('click', ttt.move)
})
