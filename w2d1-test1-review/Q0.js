/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 *
 *
 * Returns:
 *
 *    9
 */

// INPUT: Array of numbers
// STEP: Figure out how many items, arr methods to help! .length()
// OUTPUT: number (amount of items in the array)

const count = function (listOfNumbers) {
  //  IMPLEMENT ME!
  const amountOfItems = listOfNumbers.length;
  return amountOfItems;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */

// INPUT: Array of numbers
// STEP: Create a sum buffer
// STEP: Iterate / loop over my array
// STEP: -- Add the current number of my list, to my buffer
// STEP: Return the buffer
// OUTPUT: Sum of those numbers (number)

const sum = function (listOfNumbers) {
  //  IMPLEMENT ME!
  let sumBuffer = 0;
  for (const number of listOfNumbers) {
    sumBuffer += number;
  }
  return sumBuffer;
};

console.log(sum([6,2,3,4,9,6,1,0,5]))

// To be used by mean. Do not alter.
const round = function (number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */

// INPUT: Array of numbers
// STEP: Create a mean buffer (it's still friendly)
// STEP: Create a total amount value
// STEP: Loop over the elements
// STEP: -- Add the value to the buffer
// STEP: Divide the mean buffer by the total amount
// STEP: Round the buffer
// STEP: Return the buffer
// OUTPUT: Mean value, (number)


// INPUT: Array of numbers
// STEP: Create a mean buffer
// STEP: Generate the sum of all numbers, using my sum()
// STEP: Generate the count of my array, using my count()
// STEP: Store in mean buffer sum / count
// STEP: Return buffer
// OUTPUT: Mean value, (number)

// INPUT: Array of numbers
// STEP: Create a mean buffer
// STEP: Create a sum buffer
// STEP: Iterate / loop over my array
// STEP: -- Add the current number of my list, to my buffer
// STEP: Figure out how many items, arr methods to help! .length()
// STEP: Store in mean buffer sum / count
// STEP: Return buffer
// OUTPUT: Mean value, (number)


const mean = function (arr) {
  //  IMPLEMENT ME!
  let mean = null

  if(arr.length === 0){
    return null
  }

  const sum = sum(arr)
  const count = count(arr)

  mean = sum / count

  return round(mean)
};

// Don't change below:
module.exports = { count, sum, mean };
