$(function(){

  $('#addButton').on('click', addShoppingList)
  var $shoppingList = $('.shopping-list')

  function addShoppingList(){
    var $input = $('input').val()
    var $newList = $('<li>')
    var $deleteItem = $('<button class="delete">Remove</button>')

    $newList.text($input + " ")
    $newList.append($deleteItem)
    $shoppingList.prepend($newList)
    $('input').val('')
  }
  //
  $('ul').on('click', '.delete',function(){
      $(this).parent('li').remove()
    })

  $('#clearButton').on('click', function(){
    $('.shopping-list').text('')
  })

  //flow to move existing shopping list to bought list
  $('#moveButton').on('click',function(){
    //check if shopping list has li inside
    var numShoppingItems =$shoppingList.find('li').length
    if(numShoppingItems === 0) alert("Nothing to move")

    //lastShoppingItem
    var lastShoppingItem = $('.shopping-list li').last()

    //move into the bought ul
    var $boughtUl =  $('.bought-ul')
    $boughtUl.append(lastShoppingItem)
  })

  $('#moveBack').on('click',function(){
    var numPurchaseItems =$('.bought-ul').find('li').length
    if(numPurchaseItems === 0) alert("Nothing to move")

    //lastShoppingItem
    var firstPurchaseItem = $('.bought-ul li').first()
    $('.shopping-list').append(firstPurchaseItem)
  })

//TODO: refactor the function move and moveBack

})
