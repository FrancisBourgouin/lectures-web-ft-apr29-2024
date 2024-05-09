/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */

// INPUT: Array of numbers
// STEP: Set a min buffer, set it to the first value of the array
// STEP: Loop over all my numbers
// STEP: -- if the current number is smaller than min buffer
// STEP: -- -- replace min with the current number
// STEP: Return the buffer
// OUTPUT: Smallest value

// INPUT: Array of numbers
// STEP: Sort the array by smallest to biggest
// STEP: Return the first value
// OUTPUT: Smallest value
const min = function (arr) {
  //  IMPLEMENT ME!
  const sortedArray = arr.sort((a, b) => a - b);
  const minimumValue = sortedArray[0];

  return minimumValue;
};

const minAgain = function(arr){
  let minBuffer = arr[0]

  for(const number of arr){
    if(number < minBuffer) {
      minBuffer = number
    }
  }

  return minBuffer
}

/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function (arr) {
  //  IMPLEMENT ME!
  const sortedArray = arr.sort((a, b) => b - a);
  const minimumValue = sortedArray[0];

  return minimumValue;
};

const maxAgain = function(arr){
  let minBuffer = arr[0]

  for(const number of arr){
    if(number > minBuffer) {
      minBuffer = number
    }
  }

  return minBuffer
}


/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function (arr) {
  //  IMPLEMENT ME!
  const max = max(arr)
  const min = min(arr)

  return Math.abs(max - min)
};

// Don't change below:

module.exports = { min, max, range };
