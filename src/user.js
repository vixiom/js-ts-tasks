const {createInvalidExceptionError} = require("mocha/lib/errors");
const {use} = require("chai");

class User {
    #firstName;
    #secondName;
    #age;
    constructor(firstName, secondName, age) {
        if (typeof(firstName) === 'string' && typeof(secondName) === 'string' && typeof(age) === 'number') {
            this.#firstName = firstName;
            this.#secondName = secondName;
            this.#age = age;
        }
        else {
            throw createInvalidExceptionError();
        }
    }
    set firstName(firstName) {
        this.#firstName = firstName;
    }
    set lastName(secondName) {
        this.#secondName = secondName;
    }
    set age(age) {
        this.#age = age;
    }
    get age() {
        return this.#age;
    }
    get name() {
        return `${this.#firstName} ${this.#secondName}`;
    }
    introduce () {
        return `My name is ${this.#firstName} ${this.#secondName}, I\'m ${this.#age}`;
    }
    celebrateBirthday() {
        this.#age = this.#age + 1;
    }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
    var user = new User(firstName, secondName, age);
    return user;
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
    var users = [];
    for (var i = 0; i < data.length; i ++) {
        users.push(new User(data[i].firstName, data[i].secondName, data[i].age));
    }
    return users;
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
    var usersWithSpecifiedAge = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].age === age) {
            usersWithSpecifiedAge.push(users[i]);
        }
    }
    return usersWithSpecifiedAge;
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
    return function sortComparator (...users) {
        for (var i = 0; i < users.length; i++) {
            for (var j = 0; j < (users.length - i - 1); j++) {
                if (TestUtils.sortComparatorByAge(users[j], users[j + 1]) > 0) {
                    [users[j], users[j + 1]] = [users[j + 1], users[j]];
                }
            }
        }
        return users.flat();
    }
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
    for (var i = 0; i < users.length; i++) {
        if (i % 2 === 1) {
            users[i].celebrateBirthday();
        }
    }
    return users;
};
