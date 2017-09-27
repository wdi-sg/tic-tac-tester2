$(function() {

  //flow to add new shopping list
  var $addButton = $("#addBtn")
  var $shoppingList = $(".shopping-list-ul")
  var $boughtUl = $(".bought-ul")
  $addButton.on("click", addShoppingList)

  $("ul").on("click", ".deleteBtn", deleteItem)

  function deleteItem() {
    // console.log($(this).parent("li").html())
    $(this).parent("li").remove()
    // console.log($(this).parent("li").remove())
  }

  function addShoppingList () {
    var $input = $("input").val() //looking for value attribute
    var $newList = $("<li>") //li not in html yet
    // alert("new shopping list")
    var $deleteItem = $("<button class = 'deleteBtn'>Delete</button>")

    $newList.text($input + " ")
    $newList.append($deleteItem)

    $shoppingList.prepend($newList)
    $("input").val("")
  }

//add a remove button for each li
  // var $removeBtn = $("#removeBtn")
  // // $removeBtn.on("click", function() {
  //   var $input = $("input").val()
  //   var $newList = $("<li> <removeBtn>")
  //
  // })

//flow to move existing shopping list to bought list

  var $moveDownBtn = $("#moveDownBtn")
  $moveDownBtn.on("click", function() {
    //check if shopping list is empty by checking if shopping list has li inside
    var numShoppingItems = $('.shopping-list-ul').find("li").length
    if(numShoppingItems === 0) alert("shopping list is empty, nothing to move")

    var $lastShoppingItem = $(".shopping-list-ul li").last()

    //move it into the bought ul
    var $boughtUl = $(".bought-ul")
    $boughtUl.append($lastShoppingItem)

  })

//flow to move items back from bought list to shopping list

  var $moveUpBtn = $("#moveUpBtn")
  $moveUpBtn.on("click", function() {
    //check if shopping list is empty by checking if shopping list has li inside
    var numShoppingItems = $('.bought-ul').find("li").length
    if(numShoppingItems === 0) alert("bought list is empty, nothing to move")

    var $lastShoppingItem = $(".bought-ul li").last()

    //move it into the bought ul
    var $shoppingListUl = $(".shopping-list-ul")
    $shoppingListUl.append($lastShoppingItem)

})
})
