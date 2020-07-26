// these are very simple practice that i write. it's not for professional practice
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
// console.log(this.bar);
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

// compile order
// {
//     console.log(hamed); // ReferenceError!
//     let hamed = 23;
// }

// a = 23;
// var a;
// console.log(a); // 23

// console.log(a); // undefined
// var a = 23;

// like above
// var a;
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
// for (var i = 1; i <= 5; i++) {
//     (function () {
//         var j = i;
//         setTimeout(function timer() {
//             console.log(j);
//         }, j * 1000);
//     })();
// }

// another way (hard to learn)
// for (var i = 1; i <= 5; i++) {
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
// let hamid = "42px";

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
