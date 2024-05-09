/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// sqrt(sum((x - populationMean)^2)/numberOfValues)
// populationMean = mean()
// numberOfValues = count()
// Math.sqrt()

const sqrt = (value) => Math.sqrt(value);

const count = function (listOfNumbers) {
  //  IMPLEMENT ME!
  const amountOfItems = listOfNumbers.length;
  return amountOfItems;
};

const sum = function (listOfNumbers) {
  //  IMPLEMENT ME!
  let sumBuffer = 0;
  for (const number of listOfNumbers) {
    sumBuffer += number;
  }
  return sumBuffer;
};

const mean = function (arr) {
  //  IMPLEMENT ME!
  let mean = null;

  if (arr.length === 0) {
    return null;
  }

  const sumValue = sum(arr);
  const countValue = count(arr);

  mean = sumValue / countValue;

  return round(mean);
};

const squared = (value) => Math.pow(value, 2);

// This function is to be used by stdev. Do not alter.
const round = function (number) {
  return Math.round(number * 100) / 100;
};

const stdev = function (arr) {
  //  IMPLEMENT ME!
  const meanValue = mean(arr);
  const countValue = count(arr);
  let sumBuffer = 0;

  for (const number of arr) {
    sumBuffer += squared(number - meanValue) / countValue;
  }

  return round(sqrt(sumBuffer));
};

// Don't change below:
module.exports = { stdev };
