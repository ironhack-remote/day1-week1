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

const isFilipeAGoodTA = !false;

const isThisTheBestClassEver = 100;

if (isThisTheBestClassEver) {
  console.log("HEC YEAH");
}

// 1 ->!truthy -> false
// !null =>

console.clear();

// given a starting number, an ending number, and special palces, you are going to console.log numbers, in normal palces, and special keyworkd in places where the numbers

for (let i = 0; i < 100; i++) {
  console.log(i);
}

console.clear();

let fancyNumber = 1;
// fancyNumber++;
console.log(fancyNumber++);
console.log(fancyNumber);
console.log(++fancyNumber);

fancyNumber += 1; // fancyNumber = fancyNumber +1
fancyNumber -= 1; // fancyNumber-- OR fancyNumber = fancyNumber -1
fancyNumber *= 313; // fancyNumber = fancyNumber * 313
fancyNumber /= 215; // fancyNumber = fancyNumber / 215

// %
// 4 % 2

fancyNumber ** 4;

// fizzbuzz
// 1
// 2
// 3
// 4
// buzz
// 6
// fizz
// 8
// 9
// buzz

// for (let i = 0; i <= 10; i++) {
//   // if (//something is true, or truthy) {
//   // print x
//   // }
//   // else if (something else is trutthy but not really the thing above) {
//   // do y
//   // }
//   // else if (something else is trutthy but not really the thing above) {
//   // do z
//   // }
// }
