/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
    var maxCount = 0;
    var maxIndex = arr[0];
    var currentIndex = arr[0];
    var currentCount = 1;
    for (var i = 0; i < arr.length; i++) {
        if (currentIndex === arr[i + 1]) {
            currentCount++;
        }
        else {
            if (maxCount < currentCount) {
                maxCount = currentCount;
                maxIndex = currentIndex;
            }
            currentIndex = arr[i + 1];
            currentCount = 1;
        }
    }
    var maxSequence = [];
    for (var i= 0; i < maxCount; i++) {
        maxSequence.push(maxIndex);
    }
    return maxSequence;
};
