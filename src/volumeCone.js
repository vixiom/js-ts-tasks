/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  return ((Math.PI / 3) * h * r * r).toFixed(2);
};
