/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */

// INPUT: Array of numbers
// STEP: Create buffer object to store numbers, and repetitions
// STEP: Iterate over the array
// STEP: -- Add the number as a key, and 0 as it's value (num of repetitions)
// STEP: Iterate over the array (again!)
// STEP: -- Increment by 1 every key that we encounter
// STEP: Create keyBuffer = null
// STEP: Create valueBuffer = null
// STEP: Iterate over the buffer object (for..in)
// STEP: -- If value at the key is bigger valueBuffer then
// STEP: -- -- Replace both keyBuffer & valueBuffer
// STEP: Return keyBuffer
// OUTPUT: Most repeated number

// const maxAgain = function(arr){
//   let minBuffer = arr[0]

//   for(const number of arr){
//     if(number > minBuffer) {
//       minBuffer = number
//     }
//   }

//   return minBuffer
// }

const mode = function (arr) {
  //  IMPLEMENT ME!
  const bufferObject = {};
  let keyBuffer = null;
  let valueBuffer = 0;

  for (const number of arr) {
    bufferObject[number] = 0;
  }

  for (const number of arr) {
    bufferObject[number]++;
  }

  for (const key in bufferObject) {
    const value = bufferObject[key];

    if (value > valueBuffer) {
      valueBuffer = value;
      keyBuffer = key;
    }
  }

  return keyBuffer;
};

const modeAgain = function (arr) {
  //  IMPLEMENT ME!
  const bufferObject = {};
  let keyBuffer = null;
  let valueBuffer = 0;

  for (const number of arr) {
    if(bufferObject[number]){
      bufferObject[number]++
    } else { 
      bufferObject[number] = 1;
    }
  }

  for (const key in bufferObject) {
    const value = bufferObject[key];

    if (value > valueBuffer) {
      valueBuffer = value;
      keyBuffer = key;
    }
  }

  return keyBuffer;
};

// Don't change below:

module.exports = { mode };
