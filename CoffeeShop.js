// CoffeeShop Class
class CoffeeShop {
  // Constructor to build the coffee shop
  constructor() {
    // assigns the coffee shop basic coffee types
    this.type = [
      {
        name: "House blend",
        cost: 1,
      },
      {
        name: "Dark roast",
        cost: 1.5,
      },
      {
        name: "Robusta",
        cost: 2,
      },
      {
        name: "Arabica",
        cost: 2.5,
      },
    ];
    // assigns the coffee shop basic coffee styles
    this.style = [
      {
        name: "Espresso",
        cost: 1,
      },
      {
        name: "Latte",
        cost: 1.25,
      },
      {
        name: "Cappuccino",
        cost: 1.5,
      },
      {
        name: "Macchiato",
        cost: 1.75,
      },
      {
        name: "Mocha",
        cost: 2,
      },
    ];
    // assigns the coffee shop basic coffee sizes
    this.size = [
      {
        name: "Standard",
        multiplier: 1,
      },
      {
        name: "Child",
        multiplier: 0.75,
      },
      {
        name: "Large",
        multiplier: 1.5,
      },
      {
        name: "Addict",
        multiplier: 2,
      },
    ];
    // assigns the coffee shop basic coffee condiments
    this.condiment = [
      {
        name: "Milk",
        cost: 1,
      },
      {
        name: "Sugar",
        cost: 0.25,
      },
      {
        name: "Coco powder",
        cost: 0.1,
      },
    ];
  }

  //   method to add a new type to the coffee shop
  addType(name, cost) {
    // only add new type if both name and cost is provided for the type
    if (name && cost) {
      const newType = {
        name,
        cost,
      };
      this.type.push(newType);
      console.log(`new type ${name} with the cost ${cost} added`)
    } else {
      // if either name or cost isn't provided send message to the user
      console.log("please provide both name and cost of the new type");
    }
  }

  //   method to add a new style to the coffee shop
  addStyle(name, cost) {
    if (name && cost) {
      const newStyle = {
        name,
        cost,
      };
      this.style.push(newStyle);
      console.log(`new style ${name} with the cost ${cost} added`)
    } else {
      console.log("please provide both name and cost of the new style");
    }
  }

  //   method to add a new size to the coffee shop
  addSize(name, multiplier) {
    if (name && multiplier) {
      const newSize = {
        name,
        multiplier,
      };
      this.size.push(newSize);
      console.log(`new size ${name} with the multiplier ${multiplier} added`)
    } else {
      console.log("please provide both name and multiplier of the new size");
    }
  }

  //   method to add a new condiment to the coffee shop
  addCondiment(name, cost) {
    if (name && cost) {
      const newCondiment = {
        name,
        cost,
      };
      this.condiment.push(newCondiment);
      console.log(`new condiment ${name} with the cost ${cost} added`)
    } else {
      console.log("please provide both name and cost of the new condiment");
    }
  }

  //   method to get the total of the order provided
  getTotal({ coffeeType, coffeeStyle, coffeeSize, coffeeCondiments }) {
    // get the cost/multiplier of the type, style and size provided in the order by finding the property in their respective arrays.
    const typeCost = this.type.find((type) => type.name === coffeeType).cost;
    const styleCost = this.style.find((style) => style.name === coffeeStyle).cost;
    const sizeMultiplier = this.size.find((size) => size.name === coffeeSize).multiplier;

    // initialise a condiment cost variable as condiments are optional and can be multiple. Therefore we need some logic before we can assign a cost to the condiments
    let condimentCost = 0;

    // check if condiments are provided
    if (coffeeCondiments) {
        // if provided check if provided as a string. If a string is provided then split that string into an Array for ease of use
      if (typeof coffeeCondiments === "string") {
        coffeeCondiments = coffeeCondiments.split(" ");
      }
    //   iterate through each condiment provided
      for (let condiment of coffeeCondiments) {
        // iterate through every condiment available at the coffee shop
        for (let condimentShop of this.condiment) {
            // if the condiment provided matches a condiment in the coffee shop then add that to the condiment total
          if (condiment === condimentShop.name) {
            condimentCost += condimentShop.cost;
          }
        }
      }
    }

    // return the total cost rounded to two decimal places
    return (
      Math.round(
        (typeCost + styleCost + condimentCost) * sizeMultiplier * 100
      ) / 100
    );
  }
}

module.exports = CoffeeShop;
