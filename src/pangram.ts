/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
   if (typeof word === "string") {
     var alphabet = "abcdefghijklmnopqrstuvwxyz";
     for (var i = 0; i < alphabet.length; i++) {
       if (!(word.includes(alphabet[i] as string))) {
         return false;
       }
     }
   }
   else {
     word = word.toString();
     var numbers = "0123456789";
     for (var i = 0; i < numbers.length; i++) {
       if (!(word.includes(numbers[i] as string))) {
         return false;
       }
     }
   }
   return true;
};
