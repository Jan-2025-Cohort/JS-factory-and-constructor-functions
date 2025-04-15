// Constructor Function Exercise
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.describe = function () {
    console.log(`"${this.title}" is written by ${this.author}.`);
  };
}

// TODO 1: Create 2 new Book objects using the constructor and call describe()


// Factory Function Exercise
function createMovie(title, director) {
  return {
    title,
    director,
    describe() {
      console.log(`"${this.title}" is directed by ${this.director}.`);
    }
  };
}

// TODO 2: Create 2 movie objects using the factory function and call describe()


// this Keyword Challenge
const laptop = {
  brand: "Dell",
  model: "XPS",
  specs: {
    ram: "16GB",
    storage: "512GB",
    printDetails: function () {
      console.log(`Laptop: ${this.brand} ${this.model}, RAM: ${this.ram}, Storage: ${this.storage}`);
    }
  }
};

// TODO 3: Try calling laptop.specs.printDetails(). What happens?


// TODO 4: Fix the method so that it prints the correct brand/model using this correctly.


// Bonus: Constructor with method counter
function Counter(name) {
  this.name = name;
  this.count = 0;
  this.increment = function () {
    this.count++;
    console.log(`${this.name} has been clicked ${this.count} times.`);
  };
}

// TODO 5: Create a new Counter object and call increment() multiple times.
