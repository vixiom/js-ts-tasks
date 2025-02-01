/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
    if (typeof targetDate === 'string') {
      var day: number, month: number, year: number;
      var date: string[] = targetDate.split('.');
      day = Number(date[0]);
      month = Number(date[1]);
      year = Number(date[2]);
      targetDate = new Date(year, month - 1, day);
    }
    var nextEveYear : number = targetDate.getFullYear();
    while (true) {
      if (nextEveYear % 4 === 0 && (nextEveYear % 100 !== 0 || nextEveYear % 400 === 0)) {
        break;
      }
      nextEveYear++;
    }
    return Math.floor((new Date(nextEveYear, 0, 1).getTime() - targetDate.getTime()) / 86400000);
};
