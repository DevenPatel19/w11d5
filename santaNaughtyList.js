/* 
    Given an array of objects representing people, and a string representing a bad habit
    return a "santasNaughtyList" containing the first and last names of all the people who
    have the matching bad habit so that santa knows how much coal he needs.

    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: [
            "doesn't wash dishes",
            "falls asleep in lecture",
            "shows up early",
        ],
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["FN1 LN1", "FN3 LN3"];

const badHabit2 = "shows up late";
const expected2 = ["FN2 LN2", "FN3 LN3"];

const badHabit3 = "vapes too much";
const expected3 = [];

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {
    const arr = [];

    for (let person of persons) {
        for (let i = 0; i < person.habits.length; i++) {
            if (person.habits[i] == badHabit) {
                arr.push(`${person.firstName} ${person.lastName}`);
            }
        }
    }
    return arr;
}

// function santasNaughtyList(persons, badHabit) {
//     // Solve this using normal for loops/for in
//     // MDN for...in loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
//     // Create an empty array to store the names of people with the bad habit
//     const naughtyList = [];

//     for (const person of persons) {
//         if (person.habits.includes(badHabit)) {
//             naughtyList.push(`${person.firstName} ${person.lastName}`);
//         }
//     }

//     return naughtyList;

//     // Return the list of naughty people
//     return naughtyList;
// }
console.log(santasNaughtyList(students, badHabit1)); // expected1
console.log(santasNaughtyList(students, badHabit2)); // expected2
console.log(santasNaughtyList(students, badHabit3)); // expected3
/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyListFunctional(persons, badHabit) {
    // Use the "filter" method to create a new array containing only people with the bad habit
    return (
        persons
            .filter((person) => person.habits.includes(badHabit))
            // Use the "map" method to transform the filtered list into an array of names
            .map((person) => `${person.firstName} ${person.lastName}`)
    );
}
console.log(santasNaughtyListFunctional(students, badHabit1));
console.log(santasNaughtyListFunctional(students, badHabit2));
console.log(santasNaughtyListFunctional(students, badHabit3));
/*****************************************************************************/
