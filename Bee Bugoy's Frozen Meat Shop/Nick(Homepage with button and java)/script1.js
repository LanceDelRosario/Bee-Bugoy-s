// Function to open the cart sidebar
function openCart() {
  document.getElementById("cart-sidebar").style.width = "350px";
}

// Function to close the cart sidebar
function closeCart() {
  document.getElementById("cart-sidebar").style.width = "0";
}

// Function to update the cart items in the sidebar
function updateCartSidebar(items) {
  var cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var li = document.createElement("li");
    li.innerHTML = item.itemId + " x " + item.quantity;
    cartItems.appendChild(li);
  }
}

// Function to handle the checkout button click
function checkout() {
  // Implement your checkout logic here
}

// Add event listener for the checkout button
document.getElementById("checkout-button").addEventListener("click", checkout);
