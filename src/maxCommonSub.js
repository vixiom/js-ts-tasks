/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
    var maxCommonString = '';
    if (str1.length < str2.length) {
        var swap = str1;
        str1 = str2;
        str2 = swap;
    }
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str1.length + 1; j++) {
            if (str2.includes(str1.substr(i, j))) {
                if (maxCommonString.length < str1.substr(i, j).length) {
                    maxCommonString = str1.substr(i, j);
                }
            }
        }
    }
    return maxCommonString;
};
