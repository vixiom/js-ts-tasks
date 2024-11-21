/**
 * Write a function which returns a formatter function to format address based on input address data
 * Array 'order' is specifying the format by string index in array.
 * In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)
 * Example:
 * order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']
 * gives address string like: 'city, street, house, apartment, postalCode, country'
 * @param {Array} order
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  return function (information) {
    var result = "";
    var values = [];
    values = Object.values(information).toString().split(',');
    var keys = [];
    keys = Object.keys(information).toString().split(',');
    for (var i = 0; i < order.length; i++) {
        for (var j = 0; j < order[i].length; j++) {
            if (keys[j] === order[i]) {
                result += values[j];
                if (i !== order.length - 1) {
                  result += ", ";
                }
                break;
            }
        }
    }
    return result;
  }
};
