const bagetPrice = 1.05;
const bagetQuantity = 2;

const butterPrice = 2;
const butterQuantity = 1;

const milkPrice = 0.86;
const milkQuantity = 2;

let totalPriceOfTheBasket = 0;

// Your functions will go below this line...

function calculatePriceWithQuantity(price, quantity){
    return price * quantity;
}

function calculateTotalPriceOfTheBasket(baget, butter, milk){
    return baget + butter + milk;
}

function formatThePrice(totalPrice){
    return "£" + totalPrice.toFixed(2);
}

totalPriceOfTheBasket = calculateTotalPriceOfTheBasket(calculatePriceWithQuantity(bagetPrice, bagetQuantity), calculatePriceWithQuantity(butterPrice, butterQuantity), calculatePriceWithQuantity(milkPrice, milkQuantity));
console.log( formatThePrice(totalPriceOfTheBasket) );

// The output should be "The total price for your basket is: £5.82"