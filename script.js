/**
* Created by Deepen on 10/1/15.
*/
$(function () {
	var $shoppingUL = $('#shopping_list');
	var $newItemForm = $('#new_shopping_item');
	var $itemNameBlank = $('#item_name');

	$newItemForm.on("submit", function(event){ 	// Add a "submit" event handler to your form. The event handler 
		// should console.log the text the user entered into the form. 
		// Hint: this is the input element's value. Look up how to access 
		// it by searching "jQuery form value." Hint: Remember to prevent 
		// the default submit behavior!
		event.preventDefault();
		var listItem  = $('#item_name').val();
		console.log(listItem);

		shoppingList.push(listItem);	//add submitted items in the shoppingList
		// clear the form
    	$itemNameBlank.val("");
		$shoppingUL.append('<li class="item">' + listItem + '</li>');  //dynamically add the listItem into the item class
		});

		$shoppingUL.on('click', '.item', function(){
		$(this).addClass('donePurchase');	//adds class to the element that invokes click!
		$(this).animate({opacity: '0.50'}, 1000);
	});
});

var shoppingList = ["banana", "oranges", "paperRoll"];