$(function() {
  var $addButton = $('#addBtn')

  $addButton.on('click', addShoppingList)
  $('ul').on('click','.delete', deleteItem)

  var $shoppingList = $('.shopping-list-ul')
  var $boughtUl = $('.done-ul')

function deleteItem() {
  $(this).parent('li').remove()
}

  //update this to have remove button for each li

function addShoppingList () {
//  alert ('new shopping list')
  var $shoppingItem = $('input').val()
  var $removeBtn = $("<button class = delete>delete</button>");
  // $("button").click(function()'
  var $newList = $('<li>'); //creating new html element
  $newList.text($shoppingItem + " ")
    $newList.append($removeBtn)
  $shoppingList.prepend($newList)
  $('input').val('')
}

var $moveBtn = $('#move')

// TODO: add back item inside bought ul, into shopping-list-ul

var $moveBtn = $('#moveBtn')
 $moveBtn.on('click', function() {
   // check if shopping list is empty
   // by checking if shopping list has <li> inside
   var numShoppingItems = $shoppingList.find('li').length
   if(numShoppingItems === 0) alert('shopping list is empty, nothing to move')
   // get the last shopping item
   var $lastShoppingItem = $('.shopping-list-ul li').last()
   // move it into the bought ul
   $boughtUl.append($lastShoppingItem)
})

var $havenBuy = $('#havenBuy')

$havenBuy.on('click', function () {

var boughtItems = $boughtUl.find('li').length
if (boughtItems === 0) alert ('start shopping!')

var $lastBoughtList = $boughtUl.find('li').first()

$shoppingList.append($lastBoughtList)
})

})
