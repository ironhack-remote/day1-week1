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

console.clear();

const zero = 0;

if (!zero) {
  console.log("ZERO WAS FALSY");
}

console.clear();

for (let i = 0; i <= 10; i++) {
  if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 7 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// STRINGS
console.clear();

const string1 = "My name is ";

const name = "Andre";

console.log(string1 + name);
console.log(`${string1}${name}`);

const myAge = 26;
console.log(`I am ${myAge} years old`);

console.log("I am " + myAge + " years old");

const maximsName = "Maxim Jurgander";

for (let i = 0; i < maximsName.length; i++) {
  console.log(maximsName[i]);
}
for (let i = maximsName.length - 1; i >= 0; i--) {
  console.log(maximsName[i]);
}

console.clear();

// const newAge = 14;
// const newAge = prompt("What is your age");
// if (newAge >= 18) {
//   console.log(`You are legal to drive`);
// } else {
//   console.log(`You should be on a baby stroller`);
// }

// const someonesName = prompt("What is your name");

// if (!someonesName) {
//   // if (someonesName === "") {
//   console.log("Oh oh ");
// }

// && and ||
if (1 && true) {
  console.log("COOL");
}

if (1 && 2) {
  console.log("COOL TIMES 2");
}

if (1 || true) {
  console.log("CONFUSING MUCH?");
}

let test = 1000 && true && [];
test = null && true;
test = false || true;
console.log(test);

console.clear();

true && 123.34678 && "Nice city"; // becomes "Nice City". Why? All values are truthy and when using && operators  if everything is true, it will take the last value
undefined || null || []; // becomes "[]". Why? Because we are dealing with the || (OR) operator, the first truthy value is the one that this resolves to
[] && {} && 0 && ""; // becomes 0. Why? dealing with && (AND) operator, its either the last truthy value (if all values are truthy), or the first falsy.
"hello" || true; // becomes true.
false || 0; // becomes 0. Why? Because we are dealing with he || (OR) operator, if all values are false, the last one is the one that this expression resolves to
!!true && "hey"; // becomes "hey". both values are true. !!true is a double negative
!!false || null; //becomes null. same thng as above

const player1 = "up";
const userIsClickingUpArrow = true;
if (player1 === "down" || userIsClickingUpArrow) {
  console.log("Movingp");
}
