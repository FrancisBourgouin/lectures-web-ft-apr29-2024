// Method => Method Man
// Function in a given context

const someObject = {
  key: "String!",
  age: 42,
  isFunny: false,
  someFunction: function () {
    console.log("WAZZAAA");
  },
};

someObject.someFunction();

const someCat = {
  name: "Sirius",
  type: "french",
  makeSound: function () {
    console.log("Miaou");
  },
};

const anotherCat = {
  name: "Felix",
  type: "english",
  makeSound: function () {
    console.log("Meow");
  },
};


someCat.makeSound()
anotherCat.makeSound()


// log is a method of console
// Math.round(), Math.random()