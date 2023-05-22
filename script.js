// Define an array to store the items
var cartItems = [];

// Function to add an item to the cart
function addItem() {
  var item = document.getElementById('item').value;
  var quantity = document.getElementById('quantity').value;
  var newItem = { item: item, quantity: quantity };
  cartItems.push(newItem);
  displayItems();
}

// Function to update an item in the cart
function updateItem() {
  var index = document.getElementById('index').value;
  var item = document.getElementById('item').value;
  var quantity = document.getElementById('quantity').value;
  if (index >= 0 && index < cartItems.length) {
    cartItems[index].item = item;
    cartItems[index].quantity = quantity;
    displayItems();
  } else {
    alert('Invalid index!');
  }
}

// Function to delete an item from the cart
function deleteItem() {
  var index = document.getElementById('index').value;
  if (index >= 0 && index < cartItems.length) {
    cartItems.splice(index, 1);
    displayItems();
  } else {
    alert('Invalid index!');
  }
}

// Function to clear all items from the cart
function clearItems() {
  cartItems = [];
  displayItems();
}

// Function to display the items in the cart
function displayItems() {
  var itemsDiv = document.getElementById('items');
  itemsDiv.innerHTML = '';

  for (var i = 0; i < cartItems.length; i++) {
    var itemDiv = document.createElement('div');
    itemDiv.innerHTML = 'Item: ' + cartItems[i].item + ', Quantity: ' + cartItems[i].quantity;
    itemsDiv.appendChild(itemDiv);
  }
}
