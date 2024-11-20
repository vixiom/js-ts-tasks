/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]).toString().length > 4) {
            newArr.push(4);
            continue;
        }
        newArr.push(Math.abs(arr[i]).toString().length);
    }
    return newArr;
};
