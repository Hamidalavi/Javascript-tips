// these are very simple practice that i write. it's not for professional practice.
// very short examples from YDKJS book (not complete)

// simple practice
// let a = 23; // my age
// let b = a * 2;
// console.log(b);
// alert(b);
// a += 1;
// b -= 1;
// a *= 1;
// b /= 1;
// a == b: loose-equals
// a === b: strict-equals

// -----------------------------------------------

// input output
// let message = prompt("tell your name: ");
// console.log(message);

// -----------------------------------------------

// condition and loop
// if (a < b) {
//   console.log("yeah. that is true");
// }
// while (a < 120) {
//   console.log("im ready for help other peaople");
//   a += 1;
//   break;
// }

// -----------------------------------------------

// loop example
// let i = 0;
// while (true) {
//   // not useful for loop
//   if (i <= 23 === false) {
//     break;
//   }
//   console.log(i);
//   i = i + 1;
// }
// // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
// for (let i = 0; i <= 23; i++) {
//   console.log(i);
// }
// // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
// // let i is for initialization
// // i <= 23 is the condition
// // i++ (or i = i + 1) is for updating

// 1
// Write a program to calculate the total price of your table purchase. You will keep
// purchasing tables until you run out of money in your bank account.
// You'll also buy accessories for each table as long as your purchase amount is below
// your mental spending threshold.
// var haveMoney = 3000;
// var tableCost = 19.99;
// while (haveMoney >= 0) {
//   haveMoney -= tableCost;
//   if (haveMoney <= 0) {
//       console.log("Insufficient money");
//     break;
//   } else {
//     console.log("$" + haveMoney.toFixed(2));
//   }
// }

// 2
// Take above question (request). add tax to table
// const tax = 0.08; // 8%
// var haveMoney = 3000;
// var tableCost = 19.99;
// var finalResult = tableCost += (tableCost * tax);
// while (haveMoney >= 0) {
//   haveMoney -= finalResult;
//   if (haveMoney <= 0) {
//     console.log("Insufficient money");
//     break;
//   } else {
//     console.log("$" + haveMoney.toFixed(2));
//   }
// }

// 3
// better code with prompt function
// const tax = 0.08; // 8%
// var haveMoney = prompt("enter the value: ");
// var tableCost = 19.99;

// function taxResult() {
//     return haveMoney * tax;
// }

// while (haveMoney >= 0) {
//     haveMoney -= tableCost;
//     if (haveMoney <= 0) {
//         console.log("Insufficient money");
//         break;
//     } else {

//         console.log("$" + taxResult().toFixed(2));
//     }
// }

// -----------------------------------------------

// object
// var obj = {
//   a: "hello world",
//   b: 42,
//   c: true,
// };
// console.log(obj["a"]);
// console.log(obj.a);
// var b = "a";
// console.log(obj[b]);

// -----------------------------------------------

// array
// var array = ["hello world", 42, true];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array.length);
// console.log(typeof array);

// -----------------------------------------------

// explicit and implicit
// var a = "42";
// var b = a * 2; // implicit
// var c = Number(a); // explicit
// console.log(b);
// console.log(typeof b);
// console.log(c);
// console.log(typeof c);

// -----------------------------------------------

// switch
// let a = 30;
// switch (a) {
//     case 30:
//         console.log("hello there");
//         break;
//     default:
//         break;
// }

// -----------------------------------------------

// immediately invoked function expression (IIFE)
// function example() {
//     console.log("Hello!!!");
// }
// example();

// output: Hello!! function with immediately execution
// (function example() {
//     console.log("Hello!!");
//   })();

// -----------------------------------------------

// closure practice
// function addition(x) {
//     function add(y) {
//         return y + x;
//     }

//     return add;
// }

// var addOne = addition(1);
// console.log(addOne(5));

// -----------------------------------------------

// module instance
// function user() {
//     var username, password;
//     function doLogin(usr, passwd) {
//         username = usr;
//         password = passwd;
//     }

//     var publicAPI = { login: doLogin };
//     return publicAPI;
// }

// var hamid = user();
// hamid.login("Hamidalavi6540", "12345");

// -----------------------------------------------

// `this` identifier
// function foo() {
//     console.log(this.bar);
// }
// var bar = "global";
// var obj1 = {
//     bar: "obj1",
//     foo: foo
// };
// var obj2 = {
//     bar: "obj2"
// };
// // --------
// foo(); // undefined
// obj1.foo(); // "obj1"
// foo.call(obj2); // "obj2"

// -----------------------------------------------

// object
// var obj = { hamed: 23, ali: 22 };
// obj.reza = 26;
// console.log(obj);

// -----------------------------------------------

// transpiling
// (function hamed(a = 23) {
//     console.log(a);
// })();

// function hamid() {
//     var a = arguments[0] !== (void 0) ? arguments[0] : 23;
//     console.log(a);
// }
// hamid();

// -----------------------------------------------

// LHS/RHS
// (function hamed(a = 23) {
//     console.log(a);
// })();

// -----------------------------------------------

// console.table
// (function hamed(a = 23) {
//     console.table([a, "Hamid"]);
// })();

// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │    0    │   23    │
// │    1    │ 'Hamid' │
// └─────────┴─────────┘

// -----------------------------------------------

// slightly advanced function
// function hamed(a) {
//     var b = a;
//     return a + b;
// }
// console.log(hamed(6));

// shadowing
// function hamid(a) {
//      b = a;
//     console.log(a + b);
// }
// hamid(2);

// function hamid(a) {
//     var b = a * 2;
//     function hamed(c) {
//         console.log(a, b, c);
//     }
//     hamed(b * 3);
// }
// hamid(5); // 5 10 30

// -----------------------------------------------

// val() function (deprecated)
// function hamid(text, a) {
//     eval(text);
//     console.log(a, b);
// }
// var b = 2;
// hamid("var b = 5;", 2); // 1, 3

// function hamed(text) {
//     "use strict";
//     eval(text);
//     console.log(a); // ReferenceError: a is not defined
// }
// hamed("var a = 23");

// -----------------------------------------------

// with statement
// function hamed(obj) {
//     with (obj) {
//         a = 2;
//     }
// }

// var o1 = { a: 3 };
// var o2 = { b: 3 };
// hamed(o1);
// console.log(o1.a); // 2
// hamed(o2);
// console.log(o2.a); // undefined
// console.log(a);

// -----------------------------------------------

// custom infinite loop
// function hamed() {
//     function hamid(a) {
//         i = 3; // changing the `i` in the enclosing scope's for-loop
//         console.log(a + i);
//     }
//     for (var i = 0; i < 10; i++) {
//         hamid(i * 2); // oops, infinite loop ahead!
//     }
// }
// hamed();

// -----------------------------------------------
