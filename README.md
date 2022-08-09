# coffee-shop-damneet

## Challenge

You are a member of a team to design and implement a simple point-of-sale (POS) solution for a client who owns a
café. The café is best known for its wide range of coffees.
Your job, as developer, is to design the domain model. Specifically:

- The classes and interfaces which best model the different types of coffees, sizes, and condiments
- The business logic to calculate the final cost of an order.

## Evaluation

- A CoffeeShop class was created to handle all the required functions of the coffee shop. CoffeeShop can be initialised with the default values listed below but also other values can be added using the in-built methods (addType(), addStyle(), addSize() and addCondiment()). For example:

```javascript
const AdelaideCoffee = new CoffeeShop()

AdelaideCoffee.addCondiment("Honey", 2.5)
```

- The CoffeeShop takes an order in the below format and returns the total cost of the coffee.

```javascript
const order = {
    coffeeType: "Arabica",
    coffeeStyle: "Macchiato",
    coffeeSize: "Large",
    coffeeCondiments: ["Sugar", "Coco powder"]
}
```

- To make sure all requirements were met a test driven design approach was used. Tests were built in jest to make sure the class was functioning as intended. The model passes all tests (initialisation, get total, add new properties).


- Each property was built as an array of objects in the CoffeeShop object, for example `this.type = [{name: "House blend", cost: 1}, ....]`. The reason for doing that was to easily hold all data in a single object rather than having external references. Also having embeddmultiple coffee shops can be initiated using the class.

## Installation

- To install the dependencies for the application, run the below in the terminal:

```
npm i
```

## Usage
- To see the basic function of the application run the command below:
```
node App.js
```

## Testing
- To test the application Jest library is used. Run the command below to test the application:
```
npm test
```


