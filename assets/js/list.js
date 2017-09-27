$(function(){


  var $addButton= $('#addButton')
  var $moveButton = $("#moveButton")
  var $removeButton = $("#removeButton")
  var $shoppingList = $('.shopping-list')
  var $boughtUl = $(".bought-ul")
  var deleteButton = $(".deleteButton")


  $("ul").on("click",".deleteButton",deleteItem) // passes the on click event to delete button ( runs the delete item event on the button not on the UL)

  function deleteItem(){
    console.log($(this).parent("li"))
    $(this).parent('li').remove(); //remove this Li from nearest parent
  }

  $addButton.on("click",addShoppingList) //run shopping list function

  function addShoppingList (){ //add new shopping list

      var $shoppingItem = $('input').val()  // Link $shoppingItem to value of "input"
      var $newList = $('<li>')    // link $newList to a new "<li>" element
      $newList.text($shoppingItem + " ")// creating new HTML element
      var $shoppingList = $('.shopping-list') // link $shoppingList to .shopping-list class
      var $deleteItem = $('<button class="deleteButton" type="button" name="button">Delete</button>') //create delete button
      $newList.append($deleteItem) //add delete button to Li before appending it to shopping list
      $shoppingList.prepend($newList) // append the "<li>" element to shoppingList  | append adds to last line, prepend adds to first line
  }



  $moveButton.on("click",function(){
    //check if shoppingList is empty
    var numOfShoppingItems = $shoppingList.find("li").length //find out if the amount of li
    if(numOfShoppingItems === 0) alert("Shopping list is empty")  // if amount is equal to zero alert shopping list is empty
    else{
    var $lastShoppingItem = $('.shopping-list li').last() // get the last shopping item // link $boughtUl to bought list
    $boughtUl.append($lastShoppingItem) //add the last shopping item to bought list
  }
  })

// flow to remove the items from bought list and put it back into shopping list
  $removeButton.on("click",function() {
    var $boughtList = $('.bought-ul') // lin $boughtList to bought list
    var numOfBoughtItems = $boughtList.find("li").length //find the amount of lis's in the bought list
    if(numOfBoughtItems === 0) alert("Bought list is empty")// check if list is empty
    else{
    var $firstBoughtItem = $('.bought-ul li').first() //link first item in the bought list to firstBoughtItem
    $shoppingList.append($firstBoughtItem) // move the firstBoughtItem to shopping list
  }
  })

})
