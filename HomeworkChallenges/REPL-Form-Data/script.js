function customerOrder(quantity, brand, item) {
    quantity = document.getElementById("quantity").value;
    brand = document.getElementById("brand").value;
    item = document.getElementById("item").value;
    document.getElementById('message').innerText =`Customer is shopping for ${quantity} ${brand}'s ${item}(s).`;
    event.preventDefault();
}





