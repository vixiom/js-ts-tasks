/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
    return function (start, end) {
        var primeNumbers = [];
        for (var i = start; i < end + 1; i++) {
            var count = 0;
            for (var j = 1; j < i + 1; j++) {
                if (i % j === 0) count++;
            }
            if (count === 2) primeNumbers.push(i);
            count = 0;
        }
        return primeNumbers;
    }
};
