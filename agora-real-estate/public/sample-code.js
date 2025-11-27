function calculateTotal(items) {
    var total = 0;
    for(var i = 0; i < items.length; i++) {
        total = total + items[i].price
    }
    return total
}

console.log("Debug message")