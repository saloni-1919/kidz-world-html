// Define variables to select elements from the DOM
var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");
var addButtons = document.getElementsByClassName("button");

// Define an array of items with their properties
var items = [
  { name: "This was our pact", quantity: 0, dollars: 7},
  { name: "The famous five", quantity: 0, dollars: 4 },
  { name: "Matilda", quantity: 0, dollars: 6},
  { name: "Harry Potter", quantity: 0, dollars: 10},
  { name: "For Young Readers", quantity: 0, dollars: 7},
  { name: "Wimpy Kid - DIY", quantity: 0, dollars: 4 },
  { name: "Dart Board", quantity: 0, dollars: 17},
  { name: "Connect 4", quantity: 0, dollars:19 },
  { name: "Jenga", quantity: 0, dollars: 20},
  { name: "Monopoly", quantity: 0, dollars: 19},
  { name: "Bookmarks", quantity: 0, dollars: 12},
  { name: "Birthday card", quantity: 0, dollars: 19 },
  { name: "Stuffed toys", quantity: 0, dollars: 15 },
  { name: "Dream catcher drawing", quantity: 0, dollars: 18},
  

];

var finalDollars = 0;
var finalCents = 0;

// Function to update the cart display
function updateCart() {
  let cart = 0;
  for (let index = 0; index < items.length; index++) {
    cart += items[index].quantity;
  }
  cartValue.textContent = cart;
}

// Function to update the total price
function updatePrice() {
  let totalPriceInCents = 0;
  for (let index = 0; index < items.length; index++) {
    totalPriceInCents +=
      items[index].quantity * (items[index].dollars * 100 + items[index].cents);
  }
  // Convert total price to dollars and cents
  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
  // Log the total amount to the console
  console.log(
    "The total amount is " + finalDollars + "$ and " + finalCents + " cents"
  );
}

// Function to compose the WhatsApp message
function composeWhatsAppMessage() {
  let message = "Cart Items:\n";
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      message += `${items[index].name} - Quantity: ${items[index].quantity}\n`;
    }
  }
  // Add the total price to the message
  updatePrice();
  message += `Total Amount: $${finalDollars}.${finalCents}`;

  return encodeURIComponent(message);
}

// Add event listeners to the "Add to Cart" buttons
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", function() {
    items[i].quantity++;
    updateCart();
  });
}

// Add event listener to the cart button
cartButton.addEventListener("click", function() {
    // Compose the WhatsApp message
    var whatsappMessage = composeWhatsAppMessage();
    // Replace '1234567890' with your actual WhatsApp number
    var whatsappNumber = "1234567890";
    // Open WhatsApp with the composed message
    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`,
      "_blank"
    );
});
