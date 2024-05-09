/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function (number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// [1,2,3] => 3/2 => 1.5 => 1 =>
// [1,2,3,4] => 4/2 => 2 => 2,1 =>

// INPUT: An array of numbers, yet again
// STEP: Create a median buffer
// STEP: Sort the array
// STEP: If the array length is odd
// STEP: -- Store the middle index: Math.floor(length / 2)
// STEP: -- Round the value at the middle index
// STEP: -- Return the value at the middle index
// STEP: If the array length is even
// STEP: -- Store the first middle index: Math.floor(length / 2)
// STEP: -- Store the second middle index: Math.floor(length / 2) - 1
// STEP: -- Store the value: Sum of both value, divided by two
// STEP: -- Round the value at the middle index
// STEP: -- Return the value at the middle index
// OUTPUT: Median value, number

const median = function (arr) {
  //  IMPLEMENT ME!

  let median = null;
  let length = arr.length
  let isOdd = length % 2 === 1 // !!(length % 2)

  arr.sort((a, b) => a - b);

  if(isOdd){
    let middleIndex = Math.floor(length / 2)
    median = round(arr[middleIndex])
  } else {
    let middleIndex1 = Math.floor(length / 2)
    let middleIndex2 = middleIndex1 - 1

    let middleValue = (arr[middleIndex1] + arr[middleIndex2]) / 2

    median = round(middleValue)
  }

  return median


};

// median([1,2,3]) === 2
// 2) median([2,1,3]) === 2
// 3) median([1,2,3,4]) === 2.5
// 4) median([3,4,1,2])

// Don't change below:

module.exports = { median };
