let number = 23;
let array = [1, 2, 3];
let string = "Hello Hamid";
let object = {};
let value; // some value

// common -----------------------------------------------

typeof value; // can examine a value and tell you what type it is (not function, but useful)

isNaN(value); // check NaN of value as boolean

// output -----------------------------------------------

console.log(value); // logs the output

alert(value); // visual log output

prompt(string); // input from user

// Number -----------------------------------------------

Number(value); // convert any type to number type

Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_VALUE; // 5e-324

Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991

Number.POSITIVE_INFINITY; // Infinity
Number.NEGATIVE_INFINITY; // -Infinity

Number.isInteger(number); // returns true if the value passed is an integer, false otherwise

number.toFixed(num); // show decimal as you set. for example x.toFixed(2); shows with 2 decimal in output

number.toPrecision(num); // is similar, but specifies how many significant digits should be used torepresent the value

number.toExponential(); // returns a string containing a number represented in exponential notation

// String -----------------------------------------------

String(value); // convert any type to string type

String.raw`function`; // show raw format of string (ex: show \t or \n and etc.)

string.toUpperCase(); // converts all the alphabetic characters in a string to uppercase
string.toLowerCase(); // converts all the alphabetic characters in a string to lowercase

// Object -----------------------------------------------

Object.create(value); // creates an object that has the specified prototype or that has null prototype

Object.preventExtensions(object); // prevent from adding properties

Object.keys(object); // shows all object's keys (returns an array of all enumerable properties)

Object.setPrototypeOf(object2,object1); // the object to change its prototype

Object.getOwnPropertySymbols(object); // returns an array of all symbol properties found directly on object
Object.getOwnPropertyNames(object); // returns the names of the own properties of an object

eval("Hamid"); // evaluates JavaScript code and executes it (string of code)(ex: "let a = 20;")

setTimeout(() => {
    console.log("Hello");
}, 1000); // this command is executed after the specified time (to create a delay)

setInterval(() => {
    console.log("Hello");
}, 1000); // this command is executed repeatedly after the time we specified

// Array -----------------------------------------------

array.join("!"); // join something beween array elements

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
} // shows values in array

for (let v of array) {
    console.log(v);
    } // shows values in array (awesome)

array.reverse(); // reverses the elements in an array

Array(number).fill(value); // filling the section identified by start and end with value

array.copyWithin(); // copying a section of the array identified by start and end to the same array starting at position target

array.some(number); // determines whether the specified callback function returns true for any element of an array (find)

array.find(number); // find calls predicate once for each element of the array

array.findIndex(number); // find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true

array.indexOf(number); // returns the index of the first occurrence of a value in an array

[...array.values()]; // returns an iterable of values in the array

[...array.keys()]; // returns an iterable of keys in the array

[...array.entries()]; // returns an iterable of key, value pairs for every entry in the array

ArrayBuffer(number); // represents a raw buffer of binary data

Uint8Array(number); // a typed array of 8-bit unsigned integer values
Uint16Array(number); // a typed array of 16-bit unsigned integer values
Uint32Array(number) // a typed array of 32-bit unsigned integer values
