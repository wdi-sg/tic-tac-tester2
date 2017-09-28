$(function() {
  let $addButton = $("#addButton")
  let $shoppingList = $(".shopping-list-ul")

  //flow to add new shopping list
  $addButton.on("click", addShoppingList)
  //update to have remove button for each Li

  function addShoppingList() {
    let $shoppingItem = $("input").val()
    let $newList = $("<li>")
    let $listItem = $("li")
    let $newButton = $('<button class="delButton">Delete</button>')
    // let $newListItem = $(
    //   `<li>${$shoppingItem} <button type="button" name="button" id="delButton">Delete</button></li>`
    // ) //vulnerable to hack by user input
    // $shoppingList.prepend($newListItem)
    // creating new html element using < > angled brackets
    $newList.text($shoppingItem + " ")
    $newList.append($newButton)
    $shoppingList.prepend($newList)
    $("input").val("")
    //Prepend places item at the top. Append places it at the bottom
  }

  $("ul").on("click", ".delButton", function() {
    $(this)
      .parent("li")
      .remove()
  })

  //flow to move existing shooping list to bought list
  let $moveButton = $("#moveButton")
  let $boughtList = $(".bought-ul")
  $moveButton.on("click", () => {
    let shoppingQty = $shoppingList.find("li").length //find if any li is present in ul
    if (shoppingQty === 0) alert("Shopping list is empty")

    let $lastShoppingItem = $(".shopping-list-ul li").last()
    $boughtList.prepend($lastShoppingItem)
  })

  //add back item from bought to shopping list
  let $moveBackButton = $("#moveBackButton")
  $moveBackButton.on("click", () => {
    let boughtQty = $boughtList.find("Li").length
    if (boughtQty === 0) alert("Bought list is empty")

    let $lastShoppingItem = $boughtList.find("li").first()
    $shoppingList.append($lastShoppingItem)
  })
})
