let number = 23;
let array = [1, 2, 3];
let string = "Hello Hamid";
let object = {};

console.log(value); // logs the output

alert(value); // visual log output

prompt(string); // input from user

Number(value); // convert any type to number type

String(value); // convert any type to string type

number.toFixed(num); // show decimal as you set. for example x.toFixed(2); shows with 2 decimal in output

number.toPrecision(num); // is similar, but specifies how many significant digits should be used torepresent the value

number.toExponential(); // returns a string containing a number represented in exponential notation

typeof value; // can examine a value and tell you what type it is (not function, but useful)

Object.create(value); // creates an object that has the specified prototype or that has null prototype

eval("Hamid"); // evaluates JavaScript code and executes it (string of code)(ex: "var a = 20;")

setTimeout(() => {
    console.log("Hello");
}, 1000); // this command is executed after the specified time (to create a delay)

setInterval(() => {
    console.log("Hello");
}, 1000); // this command is executed repeatedly after the time we specified

array.join("!"); // join something beween array elements

for (let i = 0; i < array.length; i++) {
    console.log(arr[i]);
} // shows values in array

for (let v of arr) {
    console.log(v);
    } // shows values in array (awesome)

array.reverse(); // reverses the elements in an array

Object.preventExtensions(object); // prevent from adding properties

Object.keys(object); // shows all object's keys (returns an array of all enumerable properties)
