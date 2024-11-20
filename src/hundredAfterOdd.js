/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (Math.abs(arr[i] % 2) === 1) {
        arr.splice(i + 1, 0, 100);
      }
    }
    return arr;
};
