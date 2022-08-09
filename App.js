// import the coffee shop class 
const CoffeeShop = require('./CoffeeShop')

const AdelaideCoffee = new CoffeeShop()

// Adding a new condiment to the coffee shop
AdelaideCoffee.addCondiment("Honey", 2.5)

// Dummy order to get total with the new condiment
const order = {
    coffeeType: "Arabica",
    coffeeStyle: "Macchiato",
    coffeeSize: "Large",
    coffeeCondiments: ["Honey", "Coco powder"]
}

// Shows the total of the order send to the coffee shop
console.log(`Total for a ${order.coffeeSize} ${order.coffeeType} ${order.coffeeStyle} with ${order.coffeeCondiments} is $${AdelaideCoffee.getTotal(order)}`)