/**
 * Write a function that returns a function that will sort all it's arguments in an order
 * being specified by sortComparator function from TestUtils object
 *
 * Note: You MUST use a function sortComparator from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
module.exports.sort = function sort(TestUtils) {
    return function sortComparator (...array) {
        var type = "undefined";
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] !== "number") {
                break;
            }
            if (i === array.length - 1) {
                type = "number";
            }
        }
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] !== "string") {
                break;
            }
            if (i === array.length - 1) {
                type = "string";
            }
        }
        if (type === 'number') {
            for (var i = 0; i < array.length; i++) {
                for (var j = 0; j < (array.length - i - 1); j++) {
                    if (array[j] < array[j + 1]) {
                        var temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }
        if (type === 'string') {
            for (var i = 0; i < array.length; i++) {
                for (var j = 0; j < (array.length - i - 1); j++) {
                    if (array[j + 1].localeCompare(array[j]) > -1) {
                        var temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }
        return array;
    }
};

