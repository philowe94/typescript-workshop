"use strict";
/*
   Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

   Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
*/
/********************************** Numeric enums *********************************************/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right"; // 4
})(Direction || (Direction = {}));
// Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto - incremented from that point on.In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.;
// If we didn't initialize our first enum option with `1`, it would have started at `0`
console.log(Direction);
console.log(Direction.Up);
console.log(Direction['1']);
console.log(Direction["Right"]);
// // Using an enum is simple: just access any member as a property off of the enum itself, and declare types using the name of the enum:
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
console.log(UserResponse['0']);
function respond(recipient, message) {
    console.log(`${recipient}: ${message}`);
}
respond("Michael", UserResponse.No);
// /********************************** String enums *********************************************/
// // String enums are a similar concept, but have some subtle runtime differences as documented below. In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.
var StringDirections;
(function (StringDirections) {
    StringDirections["Up"] = "NORTH";
    StringDirections["Down"] = "SOUTH";
    StringDirections["Left"] = "WEST";
    StringDirections["Right"] = "EAST";
})(StringDirections || (StringDirections = {}));
