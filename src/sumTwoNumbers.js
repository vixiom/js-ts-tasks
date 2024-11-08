/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  firstNumber = firstNumber.toString().replace(/\s/g, '');
  secondNumber = secondNumber.toString().replace(/\s/g, '');
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  return firstNumber + secondNumber;
};
