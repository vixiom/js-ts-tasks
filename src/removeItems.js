/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */ const Json = require("mocha/lib/utils");
module.exports.removeItems = function removeItems(arr, value) {
      var modifiedArray = [];
      for (var i = 0; i < arr.length; i++) {
          if (typeof arr[i] === 'object') {
              if (Json.stringify(arr[i]) !== Json.stringify(value)) {
                  modifiedArray.push(arr[i]);
              }
          }
          else if (arr[i] !== value) {
              modifiedArray.push(arr[i]);
          }
      }
      return modifiedArray;
};
