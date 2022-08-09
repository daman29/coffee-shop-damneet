const CoffeeShop = require("../CoffeeShop");

describe("CoffeeShop", () => {
  describe("Initialization", () => {
    // Test to check if all default properties and values are created for the object
    it("should create an object with default type, style, size and condiment arrays", () => {
      const coffeeShop = new CoffeeShop();

      expect(coffeeShop.type).toEqual([
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
      ]);
      expect(coffeeShop.style).toEqual([
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
      ]);
      expect(coffeeShop.size).toEqual([
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
      ]);
      expect(coffeeShop.condiment).toEqual([
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
      ]);
    });
    // Test to check if all default functions are created on initialization of the object
    it("should create an object with addType(), addStyle(), addSize(), addCondiment() and getTotal() methods", () => {
      const coffeeShop = new CoffeeShop();

      expect(typeof coffeeShop.addType).toBe("function");
      expect(typeof coffeeShop.addStyle).toBe("function");
      expect(typeof coffeeShop.addSize).toBe("function");
      expect(typeof coffeeShop.addCondiment).toBe("function");
      expect(typeof coffeeShop.getTotal).toBe("function");
    });
  });

  describe("Getting order total", () => {
    // Test to check total cost of multiple orders with varying inputs
    it("should get the total of order sent to getTotal() method", () => {
      const coffeeShop = new CoffeeShop();

      const order1 = {
        coffeeType: "Arabica",
        coffeeStyle: "Macchiato",
        coffeeSize: "Large",
        coffeeCondiments: ["Sugar", "Coco powder"],
      };
      const order2 = {
        coffeeType: "House blend",
        coffeeStyle: "Espresso",
        coffeeSize: "Standard",
        coffeeCondiments: "Milk",
      };
      const order3 = {
        coffeeType: "Dark roast",
        coffeeStyle: "Latte",
        coffeeSize: "Child",
        coffeeCondiments: ["Sugar", "Milk"],
      };
      const order4 = {
        coffeeType: "Robusta",
        coffeeStyle: "Cappuccino",
        coffeeSize: "Addict",
        coffeeCondiments: ["Coco powder", "Sugar", "Milk"],
      };
      const order5 = {
        coffeeType: "Robusta",
        coffeeStyle: "Mocha",
        coffeeSize: "Addict",
      };

      expect(coffeeShop.getTotal(order1)).toEqual(6.9);
      expect(coffeeShop.getTotal(order2)).toEqual(3);
      expect(coffeeShop.getTotal(order3)).toEqual(3);
      expect(coffeeShop.getTotal(order4)).toEqual(9.7);
      expect(coffeeShop.getTotal(order5)).toEqual(8);
    });
  });

  describe("adding properties", () => {
    // Test to check that a new type is added when the addType method is called with the correct variables
    it("should add type when the correct variables are passed through the addType method", () => {
      const coffeeShop = new CoffeeShop();

      coffeeShop.addType("new type", 3);

      expect(coffeeShop.type).toEqual([
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
        {
          name: "new type",
          cost: 3,
        },
      ]);
    });

    // Test to check that a new style is added when the addStyle method is called with the correct variables
    it("should add style when the correct variables are passed through the addStyle method", () => {
      const coffeeShop = new CoffeeShop();

      coffeeShop.addStyle("new style", 2.5);

      expect(coffeeShop.style).toEqual([
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
        {
          name: "new style",
          cost: 2.5,
        },
      ]);
    });

    // Test to check that a new size is added when the addSize method is called with the correct variables
    it("should add size when the correct variables are passed through the addSize method", () => {
      const coffeeShop = new CoffeeShop();

      coffeeShop.addSize("new size", 2.5);

      expect(coffeeShop.size).toEqual([
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
        {
          name: "new size",
          multiplier: 2.5,
        },
      ]);
    });

    // Test to check that a new condiment is added when the addCondiment method is called with the correct variables
    it("should add condiment when the correct variables are passed through the addCondiment method", () => {
      const coffeeShop = new CoffeeShop();

      coffeeShop.addCondiment("new condiment", 4);

      expect(coffeeShop.condiment).toEqual([
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
        {
          name: "new condiment",
          cost: 4,
        },
      ]);
    });

    // Test to check if new properties can be called to get the total
    it("should get the total of the order sent with new properties", () => {
      const coffeeShop = new CoffeeShop();

      coffeeShop.addType("Indian", 2.75);
      coffeeShop.addStyle("Chai", 1.25);
      coffeeShop.addSize("Small", 0.8);
      coffeeShop.addCondiment("Turmeric powder", 0.2);

      const order = {
        coffeeType: "Indian",
        coffeeStyle: "Chai",
        coffeeSize: "Small",
        coffeeCondiments: ["Sugar", "Turmeric powder", "Milk"],
      }

      expect(coffeeShop.getTotal(order)).toBe(4.36)
    });
  });
});
