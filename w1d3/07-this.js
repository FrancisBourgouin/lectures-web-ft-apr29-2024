// This is weird!

const someCat = {
  name: "Sirius",
  type: "french",
  sound:"Miaou",
  makeSound: function () {
    console.log(someCat.sound);
  },
};

const anotherCat = {
  name: "Felix",
  type: "english",
  sound:"Meow",
  makeSound: function () {
    console.log(this.sound);
  },
};

const yetAnotherCat = {
  name: "Sirius",
  type: "Romanian",
  sound:"Not meow",
  makeSound: function () {
    console.log(this.sound);
  },
};

yetAnotherCat.makeSound()