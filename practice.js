// these are very simple practice that i write. its not for professional practice
// very short examples from YDKJS book (not complete)
// this example are just one time write, in other project (not in this repository), i practicing much

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
// let haveMoney = 3000;
// let tableCost = 19.99;
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
// let haveMoney = 3000;
// let tableCost = 19.99;
// let finalResult = tableCost += (tableCost * tax);
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
// let haveMoney = prompt("enter the value: ");
// let tableCost = 19.99;

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
// let obj = {
//   a: "hello world",
//   b: 23,
//   c: true,
// };
// console.log(obj["a"]);
// console.log(obj.a);
// let b = "a";
// console.log(obj[b]);

// -----------------------------------------------

// array
// let array = ["hello world", 23, true];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array.length);
// console.log(typeof array);

// -----------------------------------------------

// explicit and implicit
// let a = "23";
// let b = a * 2; // implicit
// let c = Number(a); // explicit
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

// let addOne = addition(1);
// console.log(addOne(5));

// -----------------------------------------------

// module instance
// function user() {
//     let username, password;
//     function doLogin(usr, passwd) {
//         username = usr;
//         password = passwd;
//     }

//     let publicAPI = { login: doLogin };
//     return publicAPI;
// }

// let hamid = user();
// hamid.login("Hamidalavi6540", "12345");

// -----------------------------------------------

// `this` identifier
// function foo() {
// console.log(this.bar);
// }
// let bar = "global";
// let obj1 = {
//     bar: "obj1",
//     foo: foo
// };
// let obj2 = {
//     bar: "obj2"
// };
// // --------
// foo(); // undefined
// obj1.foo(); // "obj1"
// foo.call(obj2); // "obj2"

// -----------------------------------------------

// object
// let obj = { hamed: 23, ali: 22 };
// obj.reza = 26;
// console.log(obj);

// -----------------------------------------------

// transpiling
// (function hamed(a = 23) {
//     console.log(a);
// })();

// function hamid() {
//     let a = arguments[0] !== (void 0) ? arguments[0] : 23;
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
//     let b = a;
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
//     let b = a * 2;
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
// let b = 2;
// hamid("let b = 5;", 2); // 1, 3

// function hamed(text) {
//     "use strict";
//     eval(text);
//     console.log(a); // ReferenceError: a is not defined
// }
// hamed("let a = 23");

// -----------------------------------------------

// with statement
// function hamed(obj) {
//     with (obj) {
//         a = 2;
//     }
// }

// let o1 = { a: 3 };
// let o2 = { b: 3 };
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
//     for (let i = 0; i < 10; i++) {
//         hamid(i * 2); // oops, infinite loop ahead!
//     }
// }
// hamed();

// -----------------------------------------------

// compile order
// {
//     console.log(hamed); // ReferenceError!
//     let hamed = 23;
// }

// a = 23;
// let a;
// console.log(a); // 23

// console.log(a); // undefined
// let a = 23;

// like above
// let a;
// console.log(a);
// a = 2;
// -----------------------------------------------

// overriding (duplicate functions)
// hamed(); // 3
// function hamed() {
//     console.log(1);
// }
// var hamed = () => {
//     console.log(2);
// };
// function hamed() {
//     console.log(3);
// }

// -----------------------------------------------

// set time out and set interval
// function wait(text) {
//     setTimeout(() => {
//         console.log(text);
//     }, 2000);
// }
// wait("Hello hamid, say hi to closure!");

// function repeat(text) {
//     setInterval(() => {
//         console.log(text)
//     }, 1000);
// }
// repeat("Hello hamid, say multiple hi to closure!");



// basic way
// for (let i = 1; i <= 5; i++) {
//     (function () {
//         let j = i;
//         setTimeout(function timer() {
//             console.log(j);
//         }, j * 1000);
//     })();
// }

// another way (hard to learn)
// for (let i = 1; i <= 5; i++) {
//     (function (j) {
//         setTimeout(function timer() {
//             console.log(j);
//         }, j * 1000);
//     })(i);
// }

// awesme way
// for (let i = 1; i <= 5; i++) { // not work with var keyword
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// } // even not work with IIFE

// -----------------------------------------------

// joining into array
// var hamed = [1, 2, 3];
// console.log(hamed.join(" ! "));

// -----------------------------------------------

// module (closure not accured)
// function module() {
//     var array = [1, 2, 3];
//     function doJoin() {
//         console.log(array.join(" ! "));
//     }
//     return {
//         join: doJoin
//     };
// }

// var create = module();
// create.join(); // 1 ! 2 ! 3 (exactly like like class or object with property)


// expert module (from YDKJS)
// MyModules.define("bar", [], function () {
//     function hello(who) {
//         return "Let me introduce: " + who;
//     }
//     return {
//         hello: hello
//     };
// });
// MyModules.define("foo", ["bar"], function (bar) {
//     var hungry = "hippo";
//     function awesome() {
//         console.log(bar.hello(hungry).toUpperCase());
//     }
//     return {
//         awesome: awesome
//     };
// });
// var bar = MyModules.get("bar");
// var foo = MyModules.get("foo");
// console.log(
//     bar.hello("hippo")
// ); // Let me introduce: hippo
// foo.awesome(); // LET ME INTRODUCE: HIPPO

// -----------------------------------------------

// more on lexing scope
// function foo() {
//     console.log(a); // 2
// }

// function bar() {
//     var a = 3;
//     foo();
// }
// var a = 2;
// bar();

// -----------------------------------------------

// more about block scope with try/catch and let
// {
//     let a = 23;
//     console.log(a); // 23
// }
// console.log(a); // ReferenceError

// like above
// try { throw 2 } catch (a) {
//     console.log(a);
// }
// console.log(a);

// -----------------------------------------------

// this practice
// var obj = {
//     id: "awesome",
//     cool: function coolFn() {
//         console.log(this.id);
//     }
// };
// var id = "not awesome";
// obj.cool(); // awesome
// setTimeout(obj.cool, 100); // not awesome

// -----------------------------------------------

// more this practice
// function hamed(number) {
//     console.log("number is: " + number);
//     this.count++;
// }
// hamed.count = 0;

// for (var i = 0; i < 10; i++) {
//     if (i > 5) {
//         hamed(i);
//     }
// }
// console.log(hamed.count);


// function hamed() {
//     var a = 23;
//     this.hamid();
// }

// function hamid() {
//     console.log(this.a);
// }

// hamed();

// -----------------------------------------------

// call-stack and call-site
// function ali() {
//     // call-stack is: `ali`
//     // so, our call-site is in the global scope
//     console.log("ali");
//     hamid(); // <-- call-site for `hamid`
// }

// function hamid() {
//     // call-stack is: `ali` -> `hamid`
//     // so, our call-site is in `ali`
//     console.log("hamid");
//     hamed(); // <-- call-site for `hamed`
// }

// function hamed() {
//     // call-stack is: `ali` -> `hamid` -> `hamed`
//     // so, our call-site is in `hamid`
//     console.log("hamed");
// }

// ali(); // <-- call-site for `ali`

// -----------------------------------------------

// this with object
// function hamed() {
//     console.log(this.a);
// }

// var object = { a: 23, hamed: hamed };
// object.hamed();



// function hamed() {
//     console.log(this.a);
// }

// var obj2 = {
//     a: 23,
//     hamed: hamed
// };

// var obj1 = {
//     a: 2,
//     obj2: obj2
// };

// obj1.obj2.hamed(); // 23

// -----------------------------------------------

// call function
// function hamed() {
//     console.log(this.a);
// }

// var obj = { a: 23 };

// hamed.call(obj);

// -----------------------------------------------

// simple bind
// function hamed(text1, text2) {
//     console.log(`"Hello ${text1} ${text2}"`);
// }

// var newf = hamed.bind(this, "Hamid", "Alavi");
// newf();


// function fullName(name, number, state) {
//     console.log(`Hello. Wellcome back ${name}${number} ${state}`)
// }

// var create = fullName.bind(this, "Hamid", 6540, "the hero");
// create();

// -----------------------------------------------

// advanced bind and apply
// function hamed(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }

// // simple `bind` helper
// function bind(fn, obj) {
//     return function () {
//         return fn.apply(obj, arguments);
//     };
// }

// var obj = { a: 23 };
// var hamid = bind(hamed, obj);
// var h = hamid(3); // 23 3
// console.log(h); // 26


// function hamed(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }

// var obj = {
//     a: 23
// };

// var hamid = hamed.bind(obj);
// var h = hamid(3); // 23 3
// console.log(h); // 26

// -----------------------------------------------

// new binding
// function hamed(a) {
//     this.a = a;
// }

// var hamid = new hamed(2);
// console.log(hamid.a);


// function hamed(value) {
//     this.a = value;
// }

// var obj = {};
// var hamid = hamed.bind(obj);
// hamid(23);
// console.log(obj.a); // 23
// var ali = new hamid(3);
// console.log(obj.a); // 23
// console.log(ali.a); // 3

// -----------------------------------------------

// bind and constructor
// function hamed(player1, player2) {
//     this.val = player1 + player2;
// }

// var hamid = hamed.bind(null, "player1");
// var ali = new hamid("player2");
// ali.val; // player1player2
// console.log(ali.val);

// -----------------------------------------------

// indirect refrence
// function hamed() {
//     console.log(this.a);
// }

// var a = 23;
// var o = { a: 3, hamed: hamed };
// var p = { a: 4 };
// o.hamed(); // 3
// (p.hamed = o.hamed)(); // 23

// -----------------------------------------------

// call with arrow function
// function hamed() {
//     return (a) => {
//         // `this` here is lexically adopted from `hamed()`
//         console.log(this.a);
//     };
// }

// var obj1 = { a: 2 };
// var obj2 = { a: 3 };
// var hamid = hamed.call(obj1);
// hamid.call(obj2); // 2, not 3!

// -----------------------------------------------

// more on arrow function
// function hamed() {
//     setTimeout(() => {
//         // `this` here is lexically adopted from `hamed()`
//         console.log(this.a);
//     }, 2000);
// }
// var obj = {
//     a: 23
// };
// hamed.call(obj); // 23

// -----------------------------------------------

// bug found (WTF! object?!)
// console.log(typeof null);

// -----------------------------------------------

// practicing on object
// var obj = { a: 23, b: 26 };
// console.log(obj.a);
// console.log(typeof obj);

// -----------------------------------------------

// "string" as string (auto object)
// let str = "Hello guys";
// console.log(str.length);
// console.log(str.charAt(4));

// -----------------------------------------------

// access to property
// let obj = { a: 23, b: "Hamid" };
// console.log(obj.a);
// console.log(obj["b"]);

// -----------------------------------------------

// access to properties
// let trueFalse = true;
// let obj = { a: 23 };
// let index;
// if (trueFalse) {
//     index = "a";
// }
// console.log(obj[index]);

// -----------------------------------------------

// creating properies
// var obj = {};

// obj[3] = "23";
// obj[true] = "Hamid";
// obj[obj] = "Persian Sight";

// console.log(obj["3"]);
// console.log(obj["true"]);
// console.log(obj["[object Object]"]);

// -----------------------------------------------

// tip
// console.log(true == 1);

// -----------------------------------------------

// advanced creating properies (computed)
// let add = "hamed";
// let obj = {
//     [add + "h"]: "Hello",
//     [add + "w"]: "world"
// }
// console.log(obj["hamedh"]);
// console.log(obj["hamedw"]);

// -----------------------------------------------

// function in object
// let obj = {
//     hamed: function () {
//         console.log("Hello guys");
//     }
// }

// let ref = obj.hamed;
// console.log(ref);
// console.log(obj.hamed);

// -----------------------------------------------

// array
// let arr = ["Hamed", 23, "Hamid", "Ali", "Reza"];
// console.log(arr[0]); // Hamid
// console.log(arr[2]); // Hamed
// console.log(arr[4]); // Reza

// -----------------------------------------------

// add literal keys
// let arr = ["Hamed", 23, "Hamid", "Ali", "Reza"];
// arr.majid = "Majid";
// arr.mehrdad = "Mehrdad";
// console.log(arr.majid);
// console.log(arr.mehrdad);
// console.log(arr.length);

// -----------------------------------------------

// add numerical keys
// let arr = ["Hamed", 23, "Hamid", "Ali", "Reza"];
// arr["5"] = "Hello";
// console.log(arr[5]);
// console.log(arr.length);

// -----------------------------------------------

// object property description
// var obj = { a: 23 };
// Object.defineProperty(obj, "a", { value: 26 });
// console.log(Object.getOwnPropertyDescriptor(obj, "a"));
// console.log(obj);


// "use strict"
// var obj = { a: 23 };
// Object.defineProperty(obj, "a", { writable: false });
// obj.a = 26;
// console.log(Object.getOwnPropertyDescriptor(obj, "a"));
// console.log(obj);


// var obj = { a: 23 };
// Object.defineProperty(obj, "a", { configurable: false });
// Object.defineProperty(obj, "a", { value: 30, configurable: true });
// console.log(Object.getOwnPropertyDescriptor(obj, "a"));
// console.log(obj);


// var obj = { a: 2 };
// obj.a; // 2
// delete obj.a;
// obj.a; // undefined
// Object.defineProperty(obj, "a", { value: 2, configurable: false });
// obj.a; // 2
// delete obj.a;
// console.log(obj.a); // 2

// -----------------------------------------------

// constant
// let obj = {};
// Object.defineProperty(obj, "FAVORITE_NUMBER", {
//     value: 23,
//     writable: false,
//     configurable: false
// });

// -----------------------------------------------

// prevent extensions (prevent adding new property)
// let obj = { a: 23 };
// Object.preventExtensions(obj);
// obj.b = 26;
// console.log(obj);

// -----------------------------------------------

// freeze object
// let obj = { a: 2 };
// Object.freeze(obj);
// obj.a = 10;
// console.log(obj);

// -----------------------------------------------

// getter and setter in object
// let obj = {
//     get a() {
//         return 23;
//     }
// };
// obj.a = 3;
// console.log(obj.a); // 23


// let obj = {
//     get a() {
//         return this._a_;
//     },
//     set a(val) {
//         this._a_ = val * 4;
//     }
// };
// obj.a = 2;
// console.log(obj.a);

// -----------------------------------------------

// in keyword in object
// let obj = { a: 23 };
// console.log("a" in obj);
// console.log("b" in obj);
// console.log(obj.hasOwnProperty("a"));
// console.log(obj.hasOwnProperty("b"));

// -----------------------------------------------

// shows all keys and values in object
// let obj = { h1: "Hamed", h2: "Hamid", a: "Ali", r: "Reza" };
// console.log(Object.keys(obj));


// let arr = [1, 2, 3];
// for (let v of arr) {
//     console.log(v);
// }

// -----------------------------------------------

// iteration (from YDKJS)
// var myArray = [1, 2, 3];
// var it = myArray[Symbol.iterator]();
// it.next(); // { value:1, done:false }
// it.next(); // { value:2, done:false }
// it.next(); // { value:3, done:false }
// it.next(); // { done:true }

// -----------------------------------------------

// shadowing
// let obj = { a: 23 };
// let object = Object.create(obj);
// console.log(obj.a); // 23
// console.log(object.a); // 23


// console.log(obj.hasOwnProperty("a")); // true
// console.log(object.hasOwnProperty("a")); // false

// object.a++; // 24

// console.log(obj.a); // 23
// console.log(object.a); // 24

// console.log(object.hasOwnProperty("a")); // true



// polyfill (Object.create())
// var obj = {
//     a: 23
// };
// var object = Object.create(obj, {
//     b: {
//         enumerable: false,
//         writable: true,
//         configurable: false,
//         value: 32
//     },
//     c: {
//         enumerable: true,
//         writable: false,
//         configurable: false,
//         value: 43
//     }
// });
// console.log(object.hasOwnProperty("a"))// false
// console.log(object.hasOwnProperty("b"))// true
// console.log(object.hasOwnProperty("c"))// true
// console.log(object.a); // 23
// console.log(object.b); // 32
// console.log(object.c); // 43



// polyfill (Object.create()) Hard mode (strict opinion)(not recommend)
// function createAndLinkObject(o) {
//     function Hamed() { }
//     Hamed.prototype = o;
//     return new Hamed();
// }
// var hamid = {
//     a: 23
// };
// var ali = createAndLinkObject(hamid);
// console.log(ali.a); // 23

// -----------------------------------------------

// prototype | class
// function Hamed() {
//     // do something
// }

// let hamid = new Hamed();
// console.log(Object.getPrototypeOf(hamid) === Hamed.prototype); // true

// -----------------------------------------------

// constructor
// function Hamed() {
//     // do something
// }

// console.log(Hamed.prototype.constructor === Hamed); // true
// let hamid = new Hamed();
// console.log(hamid.constructor == Hamed); // true

// -----------------------------------------------

// constructor name
// function Hamed() {
//     // do something
// }

// let hamid = new Hamed();
// console.log(hamid.constructor);
// console.log(hamid.constructor.name);

// -----------------------------------------------

// instance of
// function Hamed() {
//     // do something
// }

// function Hamed2() {
//     // do something
// }
// let hamid = new Hamed();
// console.log(hamid instanceof Hamed);
// console.log(hamid instanceof Hamed2);

// -----------------------------------------------

// typeof examples
// console.log(typeof true); // boolean
// console.log(typeof { hamed: 23, hamid: 23 }); // object
// console.log(typeof null); // object (bug)
// console.log(typeof "23"); // string
// console.log(typeof undefined); // undefined
// console.log(typeof Symbol()); // symbol

// -----------------------------------------------

// function property
// function hamed(a, b) {
//     // do something
// }

// console.log(hamed.length); // 2

// -----------------------------------------------

// typeof typeof
// console.log(typeof typeof 23); // "string"

// -----------------------------------------------

// array index
// var arr = [1, 2, 3];
// arr["forth"] = 4;
// console.log(arr.length); // 3
// console.log(arr["forth"]); // 4

// -----------------------------------------------

// white space of array
// var arr = [];
// arr[0] = 1;
// arr[9] = 10;
// console.log(arr.length); // 10

// -----------------------------------------------

// string number formatting
// var arr = [];
// arr["0"] = 1;
// arr["9"] = 10;
// console.log(arr.length); // 10

// -----------------------------------------------

// array-like (from YDKJS)
// function foo() {
//     var arr = Array.prototype.slice.call(arguments);
//     arr.push("bam");
//     console.log(arr);
// }
// foo("bar", "baz"); // ["bar","baz","bam"]

// // or
// var arr = Array.from(arguments);

// -----------------------------------------------

// string and array length
// let hamed = "Hamed";
// let hamid = ["H", "a", "m", "i", "d"];
// console.log(hamed.length); // 5
// console.log(hamid.length); // 5
// let ali = hamed.concat(" Alavi")
// let reza = hamed.concat(" Alavi")
// hamid.concat(" Alavi")
// console.log(ali); // Hamed Alavi
// console.log(reza); // Hamid Alavi

// console.log(hamed.length); // 5
// console.log(hamid.length); // 5
// // because
// console.log(hamed); // Hamed
// console.log(hamid); // [ 'H', 'a', 'm', 'i', 'd' ]

// console.log(hamed === ali); // false
// console.log(hamed === ali); // false

// console.log(hamed.reversse()); // TypeError:
// console.log(hamid.reverse()); // [ 'd', 'i', 'm', 'a', 'H' ]

// -----------------------------------------------

// reverse value
// let hamed = "Hamed";
// let hamid = ["H", "a", "m", "i", "d"];
// // console.log(hamed.reverse()); // TypeEror
// console.log(hamid.reverse()); // [ 'd', 'i', 'm', 'a', 'H' ]

// -----------------------------------------------

// toExponential
// let hamed = 2E13;
// console.log(hamed); // 20000000000000
// console.log(hamed.toExponential()); // 2e+13
// let hamid = hamed * hamed;
// console.log(hamid); // 4e+26
// console.log(hamid.toExponential());// 4e+26
// let ali = 1 / hamed;
// console.log(ali); // 5e-14

// -----------------------------------------------

// decimal (fractional and precision)
// let hamed = 23 * 34.68;
// console.log(hamed); // 797.64
// console.log(hamed.toFixed()); // 798
// console.log(hamed.toFixed(1)); // 797.6
// console.log(hamed.toFixed(5)); // 797.64000


// let hamed = 23 * 34.68;
// console.log(hamed); // 797.64
// console.log(hamed.toPrecision()); // 797.64
// console.log(hamed.toPrecision(1)); // 8e+2
// console.log(hamed.toPrecision(5)); // 797.64

// -----------------------------------------------

// invalid syntax of decimal
// console.log(23.toFixed(3)); // SyntaxError
// console.log((0.23).toFixed(3)); // 0.230
// console.log(23..toFixed(3)); // 23.000
// console.log(23 .toFixed(3)); // 23.000

// -----------------------------------------------

// hexadecimal and octal
// console.log(0xf3); // 243
// console.log(0Xf3); // 243
// console.log(0363); // 243

// -----------------------------------------------

// small decimal and big digits
// let hamed = 0.2 + 0.1;
// console.log(hamed === 0.3); // false

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// -----------------------------------------------

// NaN
// let hamed = 2 / "hamid";
// console.log(hamed);
// console.log(hamed !== NaN);
// console.log(hamed === NaN);
// console.log(isNaN(hamed));

// -----------------------------------------------

// infinity
// let hamed = 1 / 0;
// let hamid = -1 / 0;
// console.log(hamed); // Infinity
// console.log(hamid); // -Infinity
// console.log(Number.POSITIVE_INFINITY); // Infinity
// console.log(Number.NEGATIVE_INFINITY); // -Infinity
// console.log(Infinity / Infinity); // NaN

// -----------------------------------------------

// zeros
// let hamed = 0 / -23;
// let hamid = 0 / 23;
// // console.log(hamed); // -0
// // console.log(hamid); // +0
// console.log(hamid === hamed); // true
// console.log(hamid < hamed); // false
// console.log(hamid > hamed); // false
// console.log(hamid <= hamed); // true
// console.log(hamid >= hamed); // true

// -----------------------------------------------

// copy and reference
// let hamed = 23;
// let hamid = hamed;
// hamid++;
// console.log(hamed); // 23
// console.log(hamid); // 24

// let ali = [1, 2, 3];
// let reza = ali;
// reza.push(4);
// console.log(ali); // [ 1, 2, 3, 4 ]
// console.log(reza); // [ 1, 2, 3, 4 ]
// reza = [4, 5, 6];
// console.log(reza); // [ 4, 5, 6 ]


// function foo(x) {
//     x.push(4); x; // [ 1, 2, 3 ,4 ]

//     // later
//     x = [4, 5, 6];
//     x.push(7);
//     x; // [ 4, 5, 6, 7 ]
// }

// var a = [1, 2, 3];
// foo(a);
// console.log(a); // [ 1, 2 ,3 ,4 ]  not  [ 4, 5, 6 ,7 ]

// -----------------------------------------------

// box wrapper
// let hamed = "Hamed";
// console.log(hamed);
// console.log(hamed.length);
// console.log(hamed.toUpperCase()); // real-time casing


// let hamed = "Hamed";
// let hamid = new String(hamed);
// let ali = Object(hamed);

// console.log(typeof hamed); // string
// console.log(typeof hamid); // object
// console.log(typeof ali); // object

// console.log(hamid instanceof String); // true
// console.log(ali instanceof String); // true

// console.log(Object.prototype.toString(hamid)); // [object Object]
// console.log(Object.prototype.toString(ali)); // [object Object]


// -----------------------------------------------

// unboxing value
// let hamed = new String("Hamed");
// let hamid = new Number(23);
// let ali = new Boolean(false);

// console.log(hamed.valueOf()); // Hamed
// console.log(hamid.valueOf()); // 23
// console.log(ali.valueOf()); // false


// let hamed = new String("Hamed");
// let hamid = hamed + "";
// console.log(typeof hamed); // object
// console.log(typeof hamid); // string

// -----------------------------------------------

// sparse array
// let hamed = new Array(5);
// console.log(hamed.length); // 5
// console.log(hamed); // [ <5 empty items> ]


// let hamed = Array.apply(null, { length: 3 });
// console.log(hamed); // [ undefined, undefined, undefined ]

// -----------------------------------------------

// more on coercion
// let hamed = 23;
// let hamid = hamed + "";
// console.log(typeof hamed); // number
// console.log(typeof hamid); // string


// let hamed = 1.01 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
// console.log(hamed.toString()); // "1.01e+21"


// let hamid = [1, 2, 3];
// console.log(hamid.toString()); // "1,2,3"

// -----------------------------------------------

// JSON
// let hamed = 1234567889;
// console.log(JSON.stringify(hamed)); // "1234567889"
// console.log(JSON.stringify("Hamid")); // ""Hamid""
// console.log(JSON.stringify(undefined)); // undefined
// console.log(JSON.stringify(function () { })); // undefined
// console.log(JSON.stringify([23, undefined, function () { }, 32])); // [23,null,null,32]
// console.log(JSON.stringify({ hamid: 23, b: function () { } })); // {"hamid":23}


// var hamid = {
//     b: 23,
//     c: "23",
//     d: [1, 2, 3]
// };

// console.log(JSON.stringify(hamid, null, 3));
// /* {
//     "b": 23,
//     "c": "23",
//     "d": [
//        1,
//        2,
//        3
//     ]
//  }
// */
// console.log(JSON.stringify(hamid, null, "-----"));
// /*
// {
// -----"b": 23,
// -----"c": "23",
// -----"d": [
// ----------1,
// ----------2,
// ----------3
// -----]
// }
// */

// -----------------------------------------------

// default value
// let hamed = {
//     valueOf: () => { return "23" }
// };
// let hamid = {
//     toString: () => { return "23" }
// };
// let ali = [2, 2];
// ali.toString = function () { return this.join("") };

// console.log(Number(hamed)); // 23
// console.log(Number(hamid)); // 23
// console.log(Number(ali)); // 22
// console.log(Number("")); // 0
// console.log(Number([])); // 0
// console.log(Number(["reza"])); // NaN


// let hamed = "23.67";
// let hamid = Number(hamed);
// console.log(hamid);

// let ali = 22;
// let reza = String(ali);
// console.log(reza); // "22"

// -----------------------------------------------

// unary operator
// let hamed = 24.67;
// let hamid = 5+ +hamed;
// console.log(hamid); // 29.67


// console.log(1 + - + + + - + 1); // 2


// let date = new Date("Sat, 25 Jul 2020 11:47:39 CDT");
// console.log(+date); // 1595695659000


// let timestamp = +new Date();

// for older browser
// if (!Date.now) {
//     Date.now = function () {
//         return +new Date();
//     };
// }

// -----------------------------------------------

// tilde ~
// let hamed = 23;
// console.log(~hamed); // -(23 + 1) = -24


// console.log(Math.floor(-29.6)); // -30
// console.log(~~-29.6); // -29

// -----------------------------------------------

// parsing numeric strings
// let hamed = "23";
// let hamid = "23px";

// console.log(Number(hamed)); // 23
// console.log(parseInt(hamed)); // 23
// console.log(Number(hamid)); // NaN
// console.log(parseInt(hamed)); // 23


// console.log(parseInt(new String("23"))); // 23


// let hamed = {
//     num: 11.5,
//     toString: function () { return String(this.num * 2); }
// };
// parseInt(hamed); // 23


// console.log(parseInt(parseInt, 30.99)); // 15 (+16 to 30.99)

// -----------------------------------------------

// convert and concat (Implicitly)
// let hamed = "23";
// let hamid = "0";
// let ali = hamed + hamid;
// console.log(ali); // "230"


// let hamed = 23;
// let hamid = 0;
// let ali = hamed + hamid;
// console.log(ali); // 23


// let hamed = [1, 2];
// let hamid = [3, 4];
// let ali = hamed + hamid;
// console.log(ali); // "1,23,4"


// let hamed = 23;
// let hamid = hamed + "";
// console.log(hamid); // "23"


// let hamed = 23;
// let hamid = "" + hamed;
// console.log(hamid); // "23"


// let hamed = "26";
// let hamid = hamed - 3;
// console.log(hamid); // 23


// let hamed = [26];
// let hamid = [3];
// let ali = hamed - hamid;
// console.log(ali); // 23

// -----------------------------------------------

// boolean
// let hamed = 23;
// let hamid = "Persian Sight";
// let ali;
// let reza = null;

// if (hamed) { console.log("Yeah"); } // "Yeah"
// if (ali) { console.log("Yeah"); } else { console.log("Nooo"); }; // "Nooo"
// console.log(ali = reza ? hamed : hamid); // "Persian Sight"

// -----------------------------------------------

// operand selector
// let hamed = 23;
// let hamid = "Persian Sight";
// let ali = null;

// console.log(hamed || hamid); // 23
// console.log(hamed && hamid); // "Persian Sight"
// console.log(hamid || ali); // "Persian Sght"
// console.log(hamid && ali); // null


// function hamed(a, b) {
//     a = a || "Persian";
//     b = b || "Sight";
//     console.log(a + " " + b);
// }

// hamed(); // "Persian Sight"
// hamed("Hamid", "Alavi"); // "Hamid Alavi"
// hamed("WOW", "");// "WOW Sight"


// function hamed() {
//     console.log(hamid);
// }
// var hamid = 23;
// console.log(hamid && hamed()); // 23 (call hamed first)

// -----------------------------------------------

// symbol coercion
// let str1 = Symbol("Yeah");
// console.log(String(str1)); // "Symbol(Yeah)"
// let str2 = Symbol("Awts");
// console.log(str2 + ""); // TypeError

// -----------------------------------------------

// allowing and disallowing coercion
// let hamed = 23;
// let hamid = "23";

// console.log(hamed == hamid); // true
// console.log(hamed === hamid); // false


// let hamed = "23";
// let hamid = true;

// console.log(hamed == hamid); // false
// console.log(hamed === hamid); // false


// let hamed = "23";

// if (hamed == true) { console.log("Not working"); } // nothing to show (false)
// if (hamed === true) { console.log("Not working"); } // also nothing to show (false)
// if (hamed) { console.log("Working"); } // show "Working" (true)(works implicitly)
// if (!!hamed) { console.log("Working"); } // also show "Working" (true)(works explicitly)
// if (Boolean(hamed)) { console.log("Working"); } // yeah. also show "Working" (true)(works explicitly)


// let hamed = null;
// let hamid;

// console.log(hamed == hamid);
// console.log(hamed == null); // true
// console.log(hamid == null); // true
// console.log(hamed == false); // true
// console.log(hamid == false); // false
// console.log(hamed == ""); // false
// console.log(hamid == ""); // false
// console.log(hamed == 0); // false
// console.log(hamid == 0); // false
// if (hamed === undefined || hamed === null) {
//     console.log(hamed === undefined || hamed === null); // true (false || true = true)
// }


// let hamed = 23;
// let hamid = [23];

// console.log(hamed == hamid); // true


// let hamed = null;
// let hamid = Object(hamed); // same as `Object()`
// console.log(hamed == hamid); // false
// let ali = undefined;
// let reza = Object(ali); // same as `Object()`
// console.log(ali == reza); // false
// let majid = NaN;
// let mehrdad = Object(majid); // same as `new Number(majid)`
// console.log(majid == mehrdad); // false

// -----------------------------------------------

// complete guide of true and false
// "0" == null; // false
// "0" == undefined; // false
// "0" == false; // true
// "0" == NaN; // false
// "0" == 0; // true
// "0" == ""; // false


// false == null; // false
// false == undefined; // false
// false == NaN; // false
// false == 0; // true
// false == ""; // true
// false == []; // true
// false == {}; // false


// "" == null; // false
// "" == undefined; // false
// "" == NaN; // false
// "" == 0; // true
// "" == []; // true
// "" == {}; // false


// 0 == null; // false
// 0 == undefined; // false
// 0 == NaN; // false
// 0 == []; // true
// 0 == {}; // false


// [] == ![]; // true
// 2 == [2]; // true
// "" == [null]; // true
// let hamed = [ 22 ];
// let hamid = [ "23" ];
// hamed < hamid; // true
// hamid < hamed; // false


// let hamed = ["22"];
// let hamid = ["023"];
// hamed < hamid; // false

// let ali = [2, 2];
// let reza = [0, 2, 3];
// ali < reza; // false


// 0 == "\n"; // true


// 22 == "23"; // false
// 22 < "23"; // true
// "hamed" == 23; // false
// "true" == true; // false
// 22 == "22"; // true
// "hamid" == ["hamid"]; // true


// let hamed = { a: 22 };
// let hamid = { a: 23 };
// console.log(hamed < hamid); // false

// let ali = { b: 22 };
// let reza = { b: 23 };
// ali < reza; // false
// ali == reza; // false
// ali > reza; // false
// ali <= reza; // true
// ali >= reza; // true


// let hamed = [22];
// let hamid = "023";
// hamed < hamid; // false -- string comparison!
// Number(hamed) < Number(hamid); // true -- number comparison!

// -----------------------------------------------

// eval() function and `do`
// let hamed, hamid;
// hamed = eval("if (true) {hamid = 20 + 3;}");
// console.log(hamed); // 23


// let ali, reza;
// console.log(ali = eval("if (true) {reza = 20 + 3;}")); // 23


// let majid, mehrdad;
// majid = do {
//     if (true) {
//         mehrdad = 20 + 7;
//     }
// };
// console.log(majid); // 27

// -----------------------------------------------

// side effect expression
// function hamed() {
//     hamid = hamid + 1;
// }

// var hamid = 1;
// console.log(hamed()); // undefined


// let ali = 20;
// let reza = ali++;
// console.log(reza); // 20
// console.log(ali); // 21


// let hamed = 23;
// console.log(hamed++); // 23
// console.log(hamed); // 24
// console.log(++hamed); // 25
// console.log(hamed); // 25


// let hamid = 23;
// console.log(++hamid++);
// console.log(hamid); // SyntaxError


// let hamed = 23, hamid;
// hamid = (hamed++, hamed);
// console.log(hamed); // 24
// console.log(hamid); // 24


// let hamed, hamid, ali;
// hamed = hamid = ali = 23;
// console.log(hamed); // 23
// console.log(hamid); // 23
// console.log(ali); // 23

// -----------------------------------------------

// contextual rules (label)
// itrate: for (let hamid = 0; hamid < 11; hamid++) {
//     if (hamid % 2 == 1) {
//         continue itrate;
//     }
//     console.log(hamid);
// }


// itrate: for (let hamed = 0; hamed < 11; hamed++) {
//     if (hamed % 2 == 1) {
//         break itrate;
//     }
//     console.log(hamed); // 0
// }


// function hamed() {
//     ali: {
//         console.log("Persian")
//         break ali;
//         console.log("and World")
//     }
//     console.log("Sight")
// }

// hamed(); // "Persian" \n "Sight"


// console.log([] + {}); // [object Object]
// console.log({} + []); // [object Object] (0 in old)

// -----------------------------------------------

// object destructuring
// function hamed() {
//     return {
//         a: 23,
//         b: "PersianSight"
//     }
// }

// let { a, b } = hamed();
// console.log(hamed()); // 23 "Persian Sight"


// let result = func();
// let hamed = result.a;
// let hamid = result.b;


// function hamed({ a, b, c }) {
//     /* no need for:
//      var a = obj.a, b = obj.b, c = obj.c */
//     console.log(a, b, c);
// }

// hamed({ a: [23, 22, 27], b: "Persian Sight", c: 500 }); // [ 23, 22, 27 ] "Persian Sight" 500

// -----------------------------------------------

// operator precedence
// let hamed = 23, hamid;
// hamid = (hamed++, hamed);
// console.log(hamed); // 24
// console.log(hamid); // 24


// // removing ( )
// let hamed = 23, hamid;
// hamid = hamed++, hamed;
// console.log(hamed); // 24
// console.log(hamid); // 23


// (false && true) || true; // true
// false && (true || true); // false

// false && true || true; // true
// (false && true) || true; // true


// true || false && false; // true
// (true || false) && false; // false (true && false = false)
// true || (false && false); // true (true || false = true)


// hardest precedence (tighter binding)
// let a = 23;
// let b = "Persian Sight";
// let c = false;
// var d = a && b || c ? c || b ? a : c && b : a;
// console.log(d); // 23

// -----------------------------------------------

// associativity
// function hamed() {
//     console.log("Hello")
// }

// function hamid() {
//     console.log("World")
// }

// console.log(hamed() && hamid()); // "Hello" \n undefined -- ops


// console.log(true ? false : true ? true : true); // false

// console.log(true ? false : (true ? true : true)); // false
// console.log((true ? false : true) ? true : true); // true


// console.log(true ? false : true ? true : false); // false

// console.log(true ? false : (true ? true : false)); // false
// console.log((true ? false : true) ? true : false); // false


// let a = true, b = false, c = true, d = true, e = false;
// console.log(a ? b : (c ? d : e)); // false (evaluates only `a` and `b`)
// console.log((a ? b : c) ? d : e); // false (evaluates `a`, `b` AND `e`)


// let a, b, c;
// a = b = c = 23;
// console.log(a); // 23
// console.log(b); // 23
// console.log(c); // 23


// let a = (b = (c = 23));
// console.log(a); // 23
// console.log(b); // 23
// console.log(c); // 23

// -----------------------------------------------

// ASI (auto semicolon insertion)
// let a = 23, b = "Hamed";
// console.log(a) // 23
// console.log(b) // "Hamed"


// let a = 23;
// do {
//     // do something
// } while (a) // ; expected here!
// a;


// var a = 23;
// while (a) {
//     // do something
// } // no ; expected here
// a;


// function hamid(a) {
//     if (!a) return
//     a *= 2;
//     // do something
// }


// function hamed(a) {
//     return (
//         a * 2 + 3 / 12
//     );
// }

// -----------------------------------------------

// error
// function hamed(a, b, a) { };
// function hamid(a, b, a) { "use strict" }; // SyntaxError: Duplicate parameter name not allowed in this context


// "use strict"
// var a = {
//     b: 22,
//     b: 23
// }; // Error!


// hamid = 23; // ReferenceError: Cannot access 'hamid' before initialization
// let hamid;


// console.log(typeof hamed); // undefined
// console.log(typeof hamid); // ReferenceError: Cannot access 'hamid' before initialization (TDZ)
// let hamid;

// -----------------------------------------------

// function arguments
// function hamed(a = 23, b = a + 3) {
//     console.log(a, b);
// }

// hamed(); // 23 26
// hamed(undefined); // 23 26
// hamed(5); // 5 8
// hamed(void 0, 5); // 23 5
// hamed(null); // "null" 3


// function hamed(a = 23, b = a + 3) {
//     console.log(arguments.length, a, b, arguments[0], arguments[1]);
// }

// hamed(); // 0 23 26 undefined undefined
// hamed(20); // 1 20 23 20 undefined
// hamed(20, undefined); // 2 20 23 20 undefined
// hamed(void 0, 5); // 2 23 5 undefined 5
// hamed(20, null); // 2 20 "null" 20 "null"


// function hamid(a) {
//     a = 23;
//     console.log(arguments[0])
// }

// hamid(2); // 23
// hamid(); // undefined


// function hamid(a) {
//     a = 23;
//     console.log(a)
// }

// hamid(2); // 23
// hamid(); // 23


// function hamid(a) {
//     "use strict"
//     a = 23;
//     console.log(arguments[0])
// }

// hamid(2); // 2 -- not linked
// hamid(); // undefined -- not linked


// function hamed(a) {
//     console.log(a + arguments[1] + arguments[2])
// }

// hamed(34, 24, 20); // 78

// -----------------------------------------------

// try cache finally
// function hamed() {
//     try {
//         return 23;
//     } finally {
//         console.log("Persian Sight")
//     }
//     console.log("Mission failed!");
// }

// hamed(); // "Persian Sight"
// console.log(hamed()); // "Persian Sight" \n 23


// function hamid() {
//     try {
//         throw 23;
//     } finally {
//         console.log("Persian Sight");
//     }
//     console.log("Mission failed!")
// }

// hamid(); // "Persian Sight" \n throw 23; \n 23
// console.log(hamid()); // "Persian Sight" \n throw 23; \n 23


// function hamid() {
//     try {
//         return 23;
//     } finally {
//         throw "Error of PS";
//     }
//     console.log("Mission failed!");
// }

// hamid(); // Uncaught Exception: "Error of PS"
// console.log(hamid()); // Uncaught Exception: "Error of PS"


// for (let i = 0; i < 10; i++) {
//     try {
//         continue;
//     }
//     finally {
//         console.log(i);
//     }
// }
// // 0 1 2 3 4 5 6 7 8 9


// function hamed() {
//     try {
//         return 23;
//     }
//     finally {
//         // no `return ..` here, so no override
//     }
// }

// function hamid() {
//     try {
//         return 23;
//     }
//     finally {
//         // override previous `return 23`
//         return;
//     }
// }

// function ali() {
//     try {
//         return 23;
//     }
//     finally {
//         // override previous `return 23`
//         return "Persian Sight";
//     }
// }

// console.log(hamed()); // 23
// console.log(hamid()); // undefined
// console.log(ali()); // "Persian Sight"

// -----------------------------------------------

// switch
// let hamed = 23;
// switch (hamed) {
//     case 10:
//         console.log("I'm 10 years old?!");
//         break;
//     case 20:
//         console.log("I'm 20 years old?!");
//         break;
//     case 23:
//         console.log("Yeah. I'm 23 years old :)");
//         break
//     default:
//         console.log("Go ahead");
//         break;
// } // "Yeah. I'm 23 years old :)"


// let hamed = "23";
// switch (true) {
//     case hamed == 23:
//         console.log("Congrats");
//         break;
//     default:
//         console.log("Mission failed!");
//         break;
// } // "Congrats" (23 or '23' no matter)


// let hamed = "23";
// switch (true) {
//     case hamed === 23:
//         console.log("Congrats");
//         break;
//     default:
//         console.log("Mission failed!");
//         break;
// } // "Mission failed!"


// let hamed = "Persian Sight";
// let hamid = 23;
// switch (true) {
//     case (hamed || hamid == 23):
//         console.log("OMG! not matching");
//         break;
//     default:
//         console.log("Mission failed!");
//         break;
// } // "Mission failed!"


// let hamed = "Persian Sight";
// let hamid = 23;
// switch (true) {
//     case !!(hamed || hamid == 23):
//         console.log("OMG! not matching");
//         break;
//     default:
//         console.log("Mission failed!");
//         break;
// } // "Mission failed!"


// let hamed = "Persian Sight";
// let hamid = 23;
// switch (true) {
//     case !!(hamed || hamid == 23):
//         console.log("OMG! its working");
//         break;
//     default:
//         console.log("Mission failed!");
//         break;
// } // "OMG! its working"


// let hamed = 23;
// switch (hamed) {
//     case 1:
//     case 2:
//     // never gets here
//     default:
//         console.log("default");
//     case 3:
//         console.log("3");
//         break;
//     case 4:
//         console.log("4");
// } // "default" \n "3"

// -----------------------------------------------

// async
// simple example
// let answer = now();
// function now() {
//     return 23;
// }

// function later() {
//     answer *= 2;
//     console.log("answer is: ", answer);
// }

// setTimeout(later, 1000);


// let age = 23;
// function hamed() {
//     age += 1;
//     return age;
// }

// function hamid() {
//     age += 1;
// }

// console.log(hamed());


// let a = 1;
// let b = 2;

// // x
// a++; // 2
// b = b * a; // 4
// a = b + 3; // 7

// // y
// b--; // 3
// a = 8 + b; // 11 ^^
// b = a * 2; // 11 * 2 = 22 ^^

// console.log(a); // 11
// console.log(b); // 22


// let a = 1;
// let b = 2;

// // x
// b--; // 1
// a = 8 + b; // 9
// b = a * 2; // 18

// // y
// a++; // 10
// b = b * a; // 180 ^^
// a = b + 3; // 183 ^^

// console.log(a); // 183
// console.log(b); // 180


// console.log("A");

// console.log("B");

// setTimeout(() => {
//     console.log("C");
// }, 0);

// setTimeout(() => {
//     console.log("D");
// }, 0); // "A" "B" "C" "D"


// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// console.log("C");

// setTimeout(() => {
//     console.log("D");
// }, 0); // "A" "C" "B" "D"


// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 1000);

// console.log("C");

// setTimeout(() => {
//     console.log("D");
// }, 1000); // "A" "C" "B" "D"


// console.log("A");
// setTimeout(function () {
//     console.log("C");
// }, 1000);
// console.log("B"); "A" "B" | "C"


// let hamed = 23;
// let hamid = "24";
// let ali = "22";

// console.log(hamed + hamid);
// console.log(Number(hamid) + hamed);
// console.log(hamed - hamid);
// console.log(hamid - hamed);
// console.log(ali+= 5);

// -----------------------------------------------

// promise
// function add(valX, valY, valZ) {
//     console.log("Hi ")

//     valX(function (vallX) {
//         vallX = console.log("Hello");
//         return vallX;
//     });


//     valY(function (vallY) {
//         vallY = console.log("Wellcome to ");
//         return vallY;
//     });

//     valZ(function (vallZ) {
//         vallZ = console.log("Persian Sight Company");
//         return vallZ;
//     });
// }

// add(str1, str2, str3);


// function hamed(x) {
//     return new Promise(function (resolve, reject) {
//         // do something
//     });
// }


// let p1 = new Promise(function (resolve, reject) {
//     resolve(23);
// });

// let p2 = Promise.resolve(23);

// let pm1 = Promise.resolve(23);
// let pm2 = Promise.resolve(pm1);
// console.log(pm1 === pm2); // true (result)


// Promise.resolve(23).then(
//     function resolv(value) {
//         console.log(value); // 23
//     }, function rejct(vall) {
//         console.log(vall); // never gets here
//     }
// );

// -----------------------------------------------

// intermediate promise
// don't just do this:
// function hamed(val) {
//     return val;
// }

// hamed(23)
//     .then(function (v) {
//         console.log(v); // TypeError
//     });

// // intead, do this
// Promise.resolve(hamed(23))
//     .then(function (v) {
//         console.log(v); // 23
//     });


// let pm1 = Promise.resolve(23);
// let pm2 = pm1.then(function (value) {
//     console.log(value); // 23
//     return value * 2;
// });

// pm2.then(function (value2) {
//     console.log(value2); // 46
// });


// let pm = Promise.resolve(23);
// pm.then(function (value) {
//     console.log(value); // 23
//     return value * 2;
// })
//     .then(function (value2) {
//         console.log(value2); // 46
//     });


// let pm = Promise.resolve(23);
// pm.then(function (value) {
//     console.log(value); // 23

//     // create a promise and return it
//     return new Promise(function (resolve, reject) {
//         // fulfill with value `46`
//         resolve(value * 2);
//     });
// })
//     .then(function (value) {
//         console.log(value); // 46
//     });


// let pm = Promise.resolve(23);
// pm.then(function (value) {
//     console.log(value); // 23

//     // create a promise to return
//     return new Promise(function (resolve, reject) {
//         // introduce asynchrony!
//         setTimeout(function () {
//             // fulfill with value `46`
//             resolve(value * 2);
//         }, 1000);
//     });
// })
//     .then(function (value) {
//         // runs after the 100ms delay in the previous step
//         console.log(value); // 46
//     });


// function delay(time) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, time);
//     });
// }

// delay(100) // step 1
//     .then(function STEP2() {
//         console.log("step 2 (after 100ms)");
//         return delay(200);
//     })
//     .then(function STEP3() {
//         console.log("step 3 (after another 200ms)");
//     })
//     .then(function STEP4() {
//         console.log("step 4 (next Job)");
//         return delay(50);
//     })
//     .then(function STEP5() {
//         console.log("step 5 (after another 50ms)");
//     })

// /* output:
// step 2 (after 100ms)
// step 3 (after another 200ms)
// step 4 (next Job)
// step 5 (after another 50ms) */


// function request(url) {
//     return new Promise(function (resolve, reject) {
//         ajax(url, resolve);
//     });
// }


// request("http://some.url.1/")
//     .then(function (response1) {
//         return request("http://some.url.2/?v=" + response1);
//     })
//     .then(function (response2) {
//         console.log(response2);
//     });


// let p = new Promise(function (resolve, reject) {
//     reject("Oops");
// });

// let p2 = p.then(
//     function fulfilled() {
//         // never gets here
//     }
//     // assumed rejection handler, if omitted or
//     // any other non-function value passed
//     // function(err) {
//     //
//     // throw err;
//     // }
// );
// // output: UnhandledPromiseRejectionWarning: Oops


// let pm = Promise.resolve(23);
// pm.then(
//     // assumed fulfillment handler, if omitted or
//     // any other non-function value passed
//     // function(value) {
//     //
//     // return value;
//     // }
//     null,
//     function rejected(err) {
//         // never gets here
//     }
// );

// simplified
// let pm = Promise.resolve(23);
// pm.then(
//     null,
//     function rejected(err) {
//         // never gets here
//     }
// );

// -----------------------------------------------

// promise (step by step)
// let pm = new Promise(function (x, y) {
//     // x() for resolve
//     // y() for reject
// });


// error handlingfirst one to open the latch gets through.
// try {
//     hamed();
//     // later throws global error from `ali.hamid()`
// }
// catch (err) {
//     // never gets here
// }


// let pm = Promise.reject("Oh no!");
// pm.then(function resolved() {
//     // blank
// },
//     function rejected(error) {
//         console.log(error);
//     }); // "Oh oh!"


// let pm = Promise.resolve("Hamid");
// pm.then(function resolved(message) {
//     console.log(message.toUpperCase());
// },
//     function rejected(error) {
//         // never gets here
//     }); // HAMID


// let pm = Promise.resolve("Hamid");
// pm.then(function resolved(message) {
//     console.log(message.toUpperCase());
// })
//     .catch(handleError).catch(handleError);


// let p = Promise.resolve(23);
// p.then(
//     function fulfilled(msg) {
//         // numbers don't have string functions,
//         // so will throw an error
//         console.log(msg.toLowerCase());
//     }
// )
//     .done(null, handleErrors);


// Promise.all
// let pm1 = request("http://some.url.1/");
// let pm2 = request("http://some.url.2/");

// Promise.all([pm1, pm2])
//     .then(function (msgs) {
//         // both `pm1` and `pm2` fulfill and pass in
//         // their messages here
//         return request(
//             "http://some.url.3/?v=" + msgs.join(",")
//         );
//     })
//     .then(function (msg) {
//         console.log(msg);
//     });


// Promise.race (latch)
// let pm1 = request("http://some.url.1/");
// let pm2 = request("http://some.url.2/");
// Promise.race([pm1, pm2])
//     .then(function (msg) {
//         // either `pm1` or `pm2` will win the race
//         return request(
//             "http://some.url.3/?v=" + msg
//         );
//     })
//     .then(function (msg) {
//         console.log(msg);
//     });


// Promise.race (timout)
// Promise.race([
//     hamed(), // attempt `hamed()`
//     timeoutPromise(3000) // give it 3 seconds
// ])
//     .then(
//         function () {
//             // `hamed(..)` fulfilled in time!
//         },
//         function (err) {
//             // either `hamed()` rejected, or it just
//             // didn't finish in time, so inspect
//             // `err` to know which
//         }
//     );


// promise equivalent
// let hamed = new Promise(function (rsolve, reject) {
//     reject("Oh No!");
// }); // #1

// let hamid = Promise.reject("Oh No!"); // #2


// let resolved = {
//     then: function (callBack) {
//         callBack(23);
//     }
// };

// let rejected = {
//     then: function (callBack, errorCallBack) {
//         errorCallBack("Oh No!");
//     }
// };

// let hamed = Promise.resolve(resolved);
// let hamid = Promise.resolve(rejected); // UnhandledPromiseRejectionWarning: Oh No!
// console.log(hamed); // Promise { <pending> }


// let hamed = Promise.resolve(23);
// let hamid = Promise.resolve("Hello World");
// let ali = Promise.reject("Oh No!");
// Promise.race([hamed, hamid, ali])
//     .then(function (msg) {
//         console.log(msg); // 23
//     });
// Promise.all([hamed, hamid, ali])
//     .catch(function (err) {
//         console.error(err); // "Oh No!"
//     });
// Promise.all([hamed, hamid])
//     .then(function (message) {
//         console.log(message); // [ 23, 'Hello World' ]
//     });

// -----------------------------------------------

// generators
// let number = 1;

// function hamed() {
//     number++;
//     hamid();
//     console.log("number is: " + number); // "number is: 3"
// }

// function hamid() {
//     number++;
// }

// hamed(); // "number is: 3"


// let number = 1;
// function* hamed() {
//     number++;
//     yield; // pause!
//     console.log("number:", number);
// }

// function hamid() {
//     number++;
// }

// hamed();

// // construct an iterator `iterator` to control the generator
// let iterator = hamed(); // start `hamed()` here!
// iterator.next();
// console.log(number); // 2
// hamid();
// console.log(number); // 3
// iterator.next(); // "number:" 3

// -----------------------------------------------

// input output - generators
// function* hamid(a, b) {
//     return a * b;
// }

// let iterator = hamid(11.5, 2);
// let result = iterator.next();
// console.log(result); // { value: 23, done: true }
// console.log(result.value); // 23
// console.log(result.done); // true

// -----------------------------------------------

// iteration messaging
// function* hamed(x) {
//     let y = x * (yield);
//     return y;
// }

// let iterator = hamed(11.5);

// // start `hamed(..)`
// iterator.next();
// let result = iterator.next(2);
// console.log(result.value); // 23


// function* hamed(x) {
//     let y = x * (yield "Persian Sight");
//     return y;
// }

// let iterator = hamed(11.5);
// let result = iterator.next(); // first `next()`, don't pass anything
// console.log(result.value); // "Persian Sight"
// result = iterator.next(2); // pass `2` to waiting `yield`
// console.log(result.value); // 23

// -----------------------------------------------

// multiple iterators - generators
// from YDKJS
// function* foo() {
//     var x = yield 2;
//     z++;
//     var y = yield (x * z);
//     console.log(x, y, z);
// }

// var z = 1;
// var it1 = foo();
// var it2 = foo();

// var val1 = it1.next().value; // 2 <-- yield 2
// var val2 = it2.next().value; // 2 <-- yield 2

// val1 = it1.next(val2 * 10).value; // 40 < --x:20, z:2
// val2 = it2.next(val1 * 5).value; // 600 <-- x:200, z:3

// it1.next(val2 / 2); // y:300 | 20 300 3
// it2.next(val1 / 4); // y:10 | 200 10 3


// recall from older practice
// let a = 1;
// let b = 2;
// function hamed() {
//     a++;
//     b = b * a;
//     a = b + 3;
// }
// function hamid() {
//     b--;
//     a = 8 + b;
//     b = a * 2;
// }

// let a = 1;
// let b = 2;
// function* hamed() {
//     a++;
//     yield;
//     b = b * a;
//     a = (yield b) + 3;
// }
// function* hamid() {
//     b--;
//     yield;
//     a = (yield 8) + b;
//     b = a * (yield 2);
// }


// beautiful example
// let value = (function () {
//     let nextValue;
//     return function () {
//         if (nextValue === undefined) {
//             nextValue = 1;
//         } else {
//             nextValue = (3 * nextValue) + 6;
//         }
//         return nextValue;
//     };
// })();

// console.log(value()); // 1
// console.log(value()); // 2
// console.log(value()); // 33
// console.log(value()); // 105
// console.log(value()); // 321


// beautiful example 2
// let value = (function () {
//     let nextValue;
//     return {
//         [Symbol.iterator]: function () { return this; },
//         next: function () {
//             if (nextValue === undefined) {
//                 nextValue = 1;
//             } else {
//                 nextValue = (3 * nextValue) + 6;
//             }
//             return { done: false, value: nextValue };
//         }
//     };
// })();

// for (let iterator of value) {
//     if (iterator > 500) {
//         break;
//     }
//     console.log(iterator); // 1 9 33 105 321
// }

// -----------------------------------------------

// default iterator
// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let arr in array) {
//     console.log(arr); // 1 2 3 4 5 6 7 8
// }


// let obj = { a: 1, b: 2, c: 3, d: 4 };
// for (key in obj) {
//     console.log(key); // "a" "b" "c" "d"
// }


// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let iterator = array[Symbol.iterator]();

// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next().value); // 4
// console.log(iterator.next().value); // 5
// console.log(iterator.next().value); // 6
// console.log(iterator.next().value); // 7
// console.log(iterator.next().value); // 8

// -----------------------------------------------

// generator iterator
// function* value() {
//     var nextValue;
//     while (true) {
//         if (nextValue === undefined) {
//             nextValue = 1;
//         }
//         else {
//             nextValue = (3 * nextValue) + 6;
//         }
//         yield nextValue;
//     }
// }

// -----------------------------------------------

// generators + promises
// function hamed(x, y) {
//     return request(
//         "http://some.url.1/?x=" + x + "&y=" + y
//     );
// }
// hamed(22, 23)
//     .then(
//         function (text) {
//             console.log(text);
//         },
//         function (error) {
//             console.error(error);
//         }
//     );


// function hamed(x, y) {
//     return request(
//         "http://some.url.1/?x=" + x + "&y=" + y
//     );
// }
// function* main() {
//     try {
//         var text = yield hamed(22, 23);
//         console.log(text);
//     }
//     catch (error) {
//         console.error(error);
//     }
// }


// let iterator = main();

// let pm = iterator.next().value;

// // wait for the `pm` promise to resolve
// pm.then(
//     function (text) {
//         iterator.next(text);
//     },
//     function (error) {
//         iterator.throw(error);
//     }
// );


// function hamid(x, y) {
//     return request(
//         "http://some.url.1/?x=" + x + "&y=" + y
//     );
// }

// -----------------------------------------------

// async await
// async function main() {
//     try {
//         var text = await hamid(11, 31);
//         console.log(text);
//     }
//     catch (error) {
//         console.error(error);
//     }
// }

// main();

// -----------------------------------------------

// yield* ___ - yield delegation
// function* hamed() {
//     console.log("`*hamed()` starting");
//     yield 3;
//     yield 4;
//     console.log("`*hamed()` finished");
// }

// function* hamid() {
//     yield 1;
//     yield 2;
//     yield* hamed();
//     // `yield`-delegation!
//     yield 5;
// }

// let iterator = hamid();
// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// iterator.next().value; // `*hamed()` starting | 3
// console.log(iterator.next().value); // 4
// iterator.next().value; // `*hamed()` finished | 5


// function* foo() {
//     console.log("inside `*foo()`:", yield "B");
//     console.log("inside `*foo()`:", yield "C");
//     return "D";
// }

// function* bar() {
//     console.log("inside `*bar()`:", yield "A");

//     // `yield`-delegation!
//     console.log("inside `*bar()`:", yield* foo());
//     console.log("inside `*bar()`:", yield "E");
//     return "F";
// }

// var it = bar();

// console.log("outside:", it.next().value);
// // outside: A

// console.log("outside:", it.next(1).value);
// // inside `*bar()`: 1
// // outside: B

// console.log("outside:", it.next(2).value);
// // inside `*foo()`: 2
// // outside: C

// console.log("outside:", it.next(3).value);
// // inside `*foo()`: 3
// // inside `*bar()`: D
// // outside: E

// console.log("outside:", it.next(4).value);
// // inside `*bar()`: 4
// // outside: F
// -----------------------------------------------

// thunks
// function hamed(x, y) {
//     return x + y;
// }

// function hamid() {
//     return hamed(15, 8);
// }

// console.log(hamid()); // 23


// function hamed(x, y, callback) {
//     setTimeout(function () {
//         callback(x + y);
//     }, 1000);
// }

// function thunk(callback) {
//     hamed(15, 8, callback);
// }

// thunk(function (sum) {
//     console.log(sum); // 23 (after one second)
// });

// -----------------------------------------------

// web worker - performance
// let w1 = new Worker("http://some.url.1/mycoolworker.js");

// w1.postMessage("something say to Persian Sight Support");

// w1.addEventListener("message", function (evt) {
//     // evt.data
// });
// postMessage("a really cool reply");


// // inside the Worker
// importScripts("hamed.js", "hamid.js");


// let w1 = new SharedWorker("http://some.url.1/mycoolworker.js");

// w1.port.addEventListener("message", handleMessages);
// // ..
// w1.port.postMessage("something cool");
// w1.port.start();

// -----------------------------------------------

// shared workder
// // inside the shared Worker
// addEventListener("connect", function (evt) {
//     // the assigned port for this connection
//     var port = evt.ports[0];
//     port.addEventListener("message", function (evt) {
//         // ..
//         port.postMessage(/* // */);
//         // ..
//     });
//     // initialize the port connection
//     port.start();
// });

// -----------------------------------------------

// asm.js
// let hamed = 23;
// let hamid = hamed;
// // or
// let hamid = hamed | 0;


// let heap = new ArrayBuffer(0x10000);
// console.log(heap);
/* output:
ArrayBuffer {
  [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 65436 more bytes>,
  byteLength: 65536
} */

// -----------------------------------------------

// benchmark
// let hamed = new Benchmark();

// -----------------------------------------------

// sort array and sanity check
// // Case 1
// let x = ["Hamed", "Hamid", "Ali", "Reza", "Mehrdad", "Majid", "Morteza"];
// x.sort();

// // Case 2
// let y = ["Hamed", "Hamid", "Ali", "Reza", "Mehrdad", "Majid", "Morteza"];
// y.sort(function mySort(a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// });

// console.log(x); // [ 'Ali', 'Hamed', 'Hamid', 'Majid', 'Mehrdad', 'Morteza', 'Reza']
// console.log(y); // [ 'Ali', 'Hamed', 'Hamid', 'Majid', 'Mehrdad', 'Morteza', 'Reza']


// // Case 1
// let x = [12, -14, 0, 3, 18, 0, 2.9];
// x.sort();

// // Case 2
// let y = [12, -14, 0, 3, 18, 0, 2.9];
// y.sort(function mySort(a, b) {
//   return a - b;
// });

// console.log(x); // [-14, 0, 0, 12, 18, 2.9, 3]
// console.log(y); // [-14, 0, 0, 2.9, 3, 12, 18]


// // Case 1
// let x = [];
// for (let i = 0; i < 10; i++) {
//   x[i] = "x";
// }

// // Case 2
// let y = [];
// for (let i = 0; i < 10; i++) {
//   y[y.length] = "y";
// }

// // Case 3
// let z = [];
// for (let i = 0; i < 10; i++) {
//   z.push("z");
// }

// console.log(x); // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
// console.log(y); // ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y']
// console.log(z); // ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z']


// // Case 1
// let x = false;
// let y = x ? 1 : 2;

// // Case 2
// let x;
// let y = x ? 1 : 2;

// -----------------------------------------------

// factorial
// function factorial(n) {
//   if (n < 2) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(6)); // 720


// function factorial(n) {
//   if (n < 2) return 1;
//   let res = 1;
//   for (let i = n; i > 1; i--) {
//     res *= i;
//   }
//   return res;
// }

// console.log(factorial(6)); // 720

// -----------------------------------------------

// for loop
// // Option 1
// for (let i = 0; i < 10; i++) {
//   console.log(i); // 0 1 2 3 4 5 6 7 8 9 10
// }

// // Option 2
// for (let i = 0; i < 10; ++i) {
//   console.log(i); // 0 1 2 3 4 5 6 7 8 9 10
// }

// // Option 3
// for (let i = -1; ++i < 10;) {
//   console.log(i); // 0 1 2 3 4 5 6 7 8 9 10
// }


// let x = [1, 2, 3, 4];

// // Option 1
// for (let i = 0; i < x.length; i++) {
//   console.log(`"First ${x[i]}"`); // "First 1" "First 2" "First 3" "First 4"
// }

// // Option 2
// for (let i = 0, len = x.length; i < len; i++) {
//   console.log(`"Second ${x[i]}"`); // "Second 1" "Second 2" "Second 3" "Second 4"
// }

// -----------------------------------------------

// performance check
// let x = "23"; // need number `23`

// // Option 1: let implicit coercion automatically happen
// let y = x / 2;

// // Option 2: use `parseInt(..)`
// let y = parseInt(x, 0) / 2;

// // Option 3: use `Number(..)`
// let y = Number(x) / 2;

// // Option 4: use `+` unary operator
// let y = +x / 2;

// // Option 5: use `|` unary operator
// let y = (x | 0) / 2;

// -----------------------------------------------

// wellcome to ES6+ - block-scope
// var hamid = 23;
// (function IIFE() {
//   var hamid = 24;
//   console.log(hamid); // 24
// })();

// console.log(hamid); // 23


// let declaration
// let hamed = 23;

// {
//   let hamed = 24;
//   console.log(hamed); // 24
// }

// console.log(hamed); // 23


// {
//   let ali = 22, reza, majid, mehrdad, morteza;
// }


// deprecated
// let(ali = 22, reza, majid, mehrdad, morteza); {
//   // do something
// }

// -----------------------------------------------

// scope
// console.log(hamed); // undefined
// console.log(hamid); // ReferenceError: Cannot access 'hamid' before initialization

// var hamed;
// let hamid;


// {
//   // `hamed` is not declared
//   if (typeof hamed === "undefined") {
//     console.log("Yeah!");
//   }

//   // `hamid` is declared, but in its TDZ
//   if (typeof hamid === "undefined") { // ReferenceError!
//     // ..
//   }

//   // ..

//   let hamid;
// }

// -----------------------------------------------

// let + for
// var funcs = [];
// for (let i = 0; i < 5; i++) {
//   funcs.push(function () {
//     console.log(i);
//   });
// }

// funcs[4](); // 4


// var funcs = [];
// for (var i = 0; i < 5; i++) {
//   let j = i;
//   funcs.push(function () {
//     console.log(j);
//   });
// }

// funcs[4](); // 4


// var funcs = [];
// for (var i = 0; i < 5; i++) {
//   funcs.push(function () {
//     console.log(i);
//   });
// }

// funcs[4](); // 5

// -----------------------------------------------

// const
// const hamid = 23;
// console.log(hamid); // 23
// hamid = 24; // TypeError: Assignment to constant variable


// const hamid = [1, 2, 3, 4];
// hamid.push(5);
// console.log(hamid); // [ 1, 2, 3, 4, 5 ]
// hamid = 23; // TypeError: Assignment to constant variable

// -----------------------------------------------

// block-scoped functions
// {
//   hamid(); // "Persian Sight"

//   function hamid() {
//     console.log("Persian Sight");
//   }
// }

// hamid(); // "Persian Sight"


// "use strict"
// {
//   hamid(); // "Persian Sight"

//   function hamid() {
//     console.log("Persian Sight");
//   }
// }

// hamid(); // ReferenceError: hamid is not defined



// if (true) {
//   function hamed() {
//     console.log("1");
//   }
// }
// else {
//   function hamed() {
//     console.log("2");
//   }
// }

// hamed(); // "1"

// -----------------------------------------------

// spread/rest
// function hamid(a, b, c) {
//   console.log(a + b + c);
// }

// hamid(...[21, 22, 23]); // 66
// hamid.apply(null, [21, 22, 23]); // 66