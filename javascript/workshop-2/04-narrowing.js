"use strict";
/* In order to give context to narrowing, let's revisit unions
    - Unions are described using the `|` (pipe) operator
    - Unions can be thought of as an `or` clause
      - "success" | "error" = "success" or "error"
*/
function flipCoin() {
    if (Math.random() > 0.5)
        return 'heads';
    return 'tails';
}
/* Narrowing With Type Guards
    - When we need to separate the potential possibilities of a Union, we often need to do type guards
    - Type guards are expressions, which when used with control flow statements, allow us to have a more specific type for a particular value
    - Often times we will use `typeof` and `instanceof` for narrowing with type guards.
*/
function maybeGetUserInfo(
// ?: - optional parameter
string) {
    if (string === 'error') {
        throw new Error();
    }
    else if (string === 'success') {
        return { name: 'Michael', email: 'mshuff@appacademy.io' };
    }
    else {
        return 'need an argument';
    }
}
console.log(maybeGetUserInfo('success'));
// console.log(maybeGetUserInfo('error'));
console.log(maybeGetUserInfo());
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person('Mike', 33);
function returnPerson(person) {
    if (person instanceof Person)
        return person;
    console.log('Not an existing person, creating...');
    const newPerson = new Person(person.name, person.age);
    return newPerson;
}
console.log(returnPerson(person1));
console.log(returnPerson({ name: 'John', age: 50 }));
function maybeGetInfoTwo() {
    if (Math.random() > 0.5) {
        return ['error', new Error()];
    }
    return ['success', { name: 'John', email: 'john@email.com' }];
}
const outcome = maybeGetInfoTwo();
const [first, second] = outcome;
if (second instanceof Error) {
    second;
}
else {
    second;
}
// Discriminated Unions ("tagged" union type)
// Using a specific 'key' to know what's available while having many different options (here we only have two, but you could have more)
// Can also be done with an Object
const secondOutcome = maybeGetInfoTwo();
if (secondOutcome[0] === 'error') {
    // In this branch of code, second is an Error
    secondOutcome;
}
else {
    secondOutcome;
}
// Intersection Types
// Intersection types can be described using the `&` (ampersand) operator
// For example, what if we had a Promise that had extra startTime and endTime properties to it?
// We can merge these types together with an intersection return
function makeWeek() {
    // <- return type
    const start = new Date();
    const end = new Date(start.valueOf() + 20000);
    console.log(start);
    return { ...start, end }; // kind of Object.assign.
    // return start;
    // return end;
}
// Here we get everything from our start Date with the addition of an end Date
const thisWeek = makeWeek();
console.log(thisWeek);
// thisWeek.toISOString();
thisWeek.end.toISOString();
const newYearsEve = {
    ...new Date(),
    getReason: () => 'Last day of the year!',
};
console.log(newYearsEve.getReason());
