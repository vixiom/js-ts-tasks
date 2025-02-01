/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {
  type User = {
    type: 'employees' | 'contractors';
  }
  var employees: User[] = [];
  var contractors: User[] = [];
  for (var i = 0; i < users.length; i++) {
    if ((users[i] as User).type.toLowerCase() === 'employee') {
      employees.push(users[i] as User);
    }
    else {
      contractors.push(users[i] as User);
    }
  }
  return {contractors, employees};
};
