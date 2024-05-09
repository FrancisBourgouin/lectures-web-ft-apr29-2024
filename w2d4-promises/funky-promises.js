const multiplyOnAnOldSuperComputer = (a, b) => {
  return new Promise((resolveAKACallTheThenMethod, rejectAKACallTheCatchMethod) => {
    const failure = Math.random() > 0.8;

    setTimeout(() => {
      if (failure) {
        return rejectAKACallTheCatchMethod("OH NO! 🪳🕷️🪳🐔");
      }

      return resolveAKACallTheThenMethod(a * b);
    }, 5000);
  });
};

const addOnAnOldSuperComputer = (a, b) => {
  return new Promise((resolve, reject) => {
    const failure = Math.random() > 0.8;

    setTimeout(() => {
      if (failure) {
        return reject("OH NO! 🪳🕷️🪳🐔");
      }

      return resolve(a + b);
    }, 2000);
  });
};

const spinners = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];
let interval = 100;

const startSpinner = () => {
  let index = 0;
  const intervalId = setInterval(() => {
    process.stdout.write(spinners[index % spinners.length]);
    index++;
  }, 50);

  return intervalId;
};

// Multiply 5 and 7
// Add the result of the previous op to the number 42

// const result = multiplyOnAnOldSuperComputer(5,7)

// const secondResult = addOnAnOldSuperComputer(result, 42)

// ABOVE WILL NOT WORK!

// console.log("LOADING...")
const spinnerId = startSpinner()
multiplyOnAnOldSuperComputer(5,7)
  .then(result => addOnAnOldSuperComputer(result, 42))
  .then(secondResult => console.log(secondResult))
  .catch(err => console.log(err))
  .finally(() => clearInterval(spinnerId))

// const addPreviousResultToTheAddFunction = result => addOnAnOldSuperComputer(result, 42)
// const outputResult = result => console.log(result)

// multiplyOnAnOldSuperComputer(5,7)
//   .then(addPreviousResultToTheAddFunction)
//   .then(outputResult)
//   .catch(err => console.log(err))

// Multiply 5 and 7 (5s)
// Multiply 8 and 9 (5s)
// Add the result of the previous operations together (2s)

// Total amount of time: 7s or 12s ?

// Promise.all([multiplyOnAnOldSuperComputer(5, 7), multiplyOnAnOldSuperComputer(8, 9)])
//   .then((results) => {
//     const firstResult = results[0];
//     const secondResult = results[1];

//     return addOnAnOldSuperComputer(firstResult, secondResult);
//   })
//   .then((result) => console.log(result))
//   .catch((err) => console.log("something failed", err));
