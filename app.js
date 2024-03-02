document.getElementById("cart").addEventListener("click", function() {
 
    const orderDetails = {
        
        items: ["Book 1", "Game 2", "Craft 3"],
        quantity: [1, 2, 3],
        totalAmount: 50 
    };

    let message = "Order Details:\n";
    orderDetails.items.forEach((item, index) => {
        message += `${item} x${orderDetails.quantity[index]}\n`;
    });
    message += `Total Amount: $${orderDetails.totalAmount}`;

    const whatsappNumber = "1234567890";
    const whatsappMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`, '_blank');
});
