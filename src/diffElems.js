/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
    var differentElements = [arr[0]];

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < differentElements.length; j++) {
          if (arr[i] === differentElements[j]) {
            break;
          }
          if (j === differentElements.length - 1) {
            differentElements.push(arr[i]);
          }
      }
    }
    return differentElements.length;
};
