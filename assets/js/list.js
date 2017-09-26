$(function () {
  var $addButton = $('#addBtn')
  var $removeButton = $('.removeBtn')
  var $shoppingList = $('.shopping-list-ul')
  var $boughtUl = $('.bought-ul')

  $addButton.on('click', addShoppingList)
  $('ul').on('click', '.removeBtn', removeItem) //because removeBtn not created yet at the beginning. Give this event to Ul element which already exists

  function addShoppingList() {
    var $shoppingItem = $('input').val() //.val() looks for value attribute

    var $newList = $('<li>') //create new html
    var $addRemoveButton = $('<button class = "removeBtn">Remove</button>')


    $newList.text($shoppingItem + " ").append($addRemoveButton)

    $shoppingList.prepend($newList)
  }

  function removeItem() {
    $(this).parent('li').remove()
  }


//flow to move shopping list to bought list
  var $moveButton = $('#moveBtn')
  $moveButton.on('click', function(){
    //check if shopping list is empty
    //by checking if shopping list has Li inside
    var numshoppingItems = $shoppingList.find('li').length
    if (numshoppingItems === 0 ) alert('shopping list is empty')

    //get the last shopping item
    var $lastShoppingItem = $('.shopping-list-ul li').last()

    //move it into the bought list

    $boughtUl.append($lastShoppingItem)

    // alert('move button')
  })

  var $undoButton = $('#undoBtn')
  $undoButton.on('click', function(){

    var numBoughtItems = $boughtUl.find('li').length
    if (numBoughtItems === 0 ) alert('bought list is empty')


    var $firstBoughtItem = $boughtUl.find('li').first()


    $shoppingList.append($firstBoughtItem)
  })



})
