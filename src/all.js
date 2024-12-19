/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    var results = [];
    for (let i = 0; i < promisesArray.length; i++) {
      promisesArray[i]
          .then((result) => {
            results[i] = result;
            if (results.length === promisesArray.length) {
              resolve(results);
            }
          })
          .catch(reject);
    }
  });
};
