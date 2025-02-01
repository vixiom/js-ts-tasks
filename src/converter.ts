/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
    const convertRate = {
      CToK: 273.15,
      KToC: -273.15,
      mTomi: 0.0006213727,
      miTom: 1 / 0.0006213727,
      grToPound: 0.002204624,
      poundTogr: 1/ 0.002204624
    }
      if ((to === 'C' && from === 'K') || (from === 'C' && to === 'K')) {
        if (to === 'C') {
          return Number((value + convertRate.KToC).toFixed(2));
        }
        return Number((value + convertRate.CToK).toFixed(2));
      }
      else if ((to === 'm' && from === 'mi') || (from === 'm' && to === 'mi')) {
        if (to === 'm') {
          return Number((value * convertRate.miTom).toFixed(2));
        }
        return Number((value * convertRate.mTomi).toFixed(2));
      }
      else if ((to === 'gr' && from === 'pound') || (from === 'gr' && to === 'pound')) {
        if (to === 'gr') {
          return Number((value * convertRate.poundTogr).toFixed(2));
        }
        return Number((value * convertRate.grToPound).toFixed(2));
      }
      return value;
}



