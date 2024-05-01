const mug = {
  color: {
    outside: {
      main: "white",
      secondary: "black",
    },
    inside: "black",
  },
  content: "coffee",
  capacityInMl: 330,
  empty: false,
};

// Object, everything is stored in a key/value pair
const key = "empty";

// Access key values from two ways:
// dot notation, litteral
const value = mug.color;
// const value = mug.key will not work, since it will for the key called key
console.log(value);

// square bracket notation
// Anything inside the square brackets will be evaluated
const valueAgain = mug[key];
// const valueAgain = mug["key"]
// const valueAgain = mug["color"]
// const valueAgain = mug["c"+"o"+"l"+"o"+"r"]
console.log(valueAgain);


const mainColorDN = mug.color.outside.main

const mainColorSB = mug["color"]["outside"]["main"]

const insideOrOutside = "inside"

const colorsBoth = mug.color[insideOrOutside]