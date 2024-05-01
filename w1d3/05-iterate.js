const mug = {
  color: "white",
  content: "coffee",
  capacityInMl: 330,
  empty: false,
};

// C-Style For loop
// for(let i = 0; i < ..; i++)

// While loop
// while(true)

// For..of

const mugKeys = Object.keys(mug); // ["color","content","capacityInMl","empty"]
for (const key of mugKeys) {
  console.log(key, mug[key]);
}

// Create an array containing all the keys of mug ["color","content","capacityInMl","empty"]
// We start to loop over that array
  // assign "color" to the variable key
  // log to the console the value of key (color) and the value of mug at the key value (white)
  // log to the console the value of key (content) and the value of mug at the key value (coffee)
  // log to the console the value of key (capcityInMl) and the value of mug at the key value (330)
  // log to the console the value of key (empty) and the value of mug at the key value (false)


const mugValues = Object.values(mug); // ["white","coffee","330","false"]
for (const value of mugValues) {
  console.log(value);
}

// For..in

// for(const key of Object.keys(mug))
for(const key in mug){
  console.log(key, mug[key]);
}