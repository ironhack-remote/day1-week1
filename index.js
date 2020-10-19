console.log("LIVE FROM THE CLASS");
// let; const''

// variable declaration
let ordinaryNumber = 1;
console.log(typeof ordinaryNumber);

// variable reassignment
ordinaryNumber = "2";

const hello = "world";
// hello = "something else" ❌ -> We will have an error. Trying to reassign a const. We cant do this

let bananas;
// const apples -> big no no. bananas can be undefined from the get go. But if we want apples to be undefined we have to be explicit

// let fruits, vegetables; ❌ -> Dont recommend because its not the most widely used naming structure;

let fuits;
let vegetables;

console.clear();

console.log(typeof ordinaryNumber);
// const 1Two = "cool beans" ❌ -> variables MUST start with a letter or `_`

// DATA TYPES
// array, object, number, string, boolean, null, undefined, NaN,symbol
// boolean true | false

// string  =>anything insde quotes
// numbers
// null
// undefined
// NaN

const niceString = "Hello there, how are you?";
console.log(niceString.length);
console.log(niceString[niceString.length - 1]);

let firstLetter = niceString[0];
console.log("firstLETTTER", firstLetter);

const isTrue = true;
// primitive
// strings, numbers, null, undefined, NaN

// true
// while (true) {
//   console.log("HUGO KNOWS HIS STUFF");
// }

// FALSY VALUES
// NaN, 0, undefined, "", null
// if ("") {
//   console.log("NEVER REACHES HERE");
// }

// !true -> false
// !1 -> false
// !0 -> true
// !"" -> true
// !!true

// != -> ! equal in value
// !== -> not equal both in type and value

// = -> Assignment Operator
// == -> Equal Value
// === -> Strict equality
