const calculateData = (a, b) => {
  const result = a + b;

  return result;
};

// I get back a number

const result = calculateData(5, 6);
console.log(result + calculateData(5,6));

// Very slow computer, will take 2 seconds to give us the answer
// It may fail at the calculation for some reason

const calculateDataOnAnOldSuperComputer = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failed = Math.random() > 0.1;

      if (failed) {
        return reject("🪳🕷️🪳 Sorry had some bugs"); // will call .catch()
      }

      return resolve(a + b); // will call .then()
    }, 2000);
  });
};

// new Promise((resolve, reject) => reject("SAD!"))

// We will get back a promise of a number

const result1 = calculateDataOnAnOldSuperComputer(5, 6);
console.log(result1);

result1
  .then((answer) => console.log("The answer is:", answer))
  .catch((err) => console.log(err))
  .finally(() => console.log("The process is done"));

calculateDataOnAnOldSuperComputer(15, 6)
  .then((answer) => console.log("The answer is:", answer))
  .catch((err) => console.log(err))
  .finally(() => console.log("The process is done"));


// fetch("someUrl")
//   .then(res => res.toJSON())
//   .then(data => data.names)
//   .then(names => ...)