/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
    return function isPalindrome(string) {
        string = string.toLowerCase().replace(/[^a-z]/g, '');
        var palindromeString = "";
        for (var i = string.length - 1; i > -1; i--) {
            palindromeString += string[i];
        }
        return palindromeString === string;
    }
};
