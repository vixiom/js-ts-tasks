/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);
  var sum = 0;
  if (start > end) {
    var swap = start;
    start = end;
    end = swap;
  }
  for (var i = start; i < end + 1; i++) {
    sum += i;
  }
  return sum;
};
