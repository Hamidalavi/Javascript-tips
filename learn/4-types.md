# **`type`s** in JavaScript

![types](https://miro.medium.com/max/1400/1*l_ZDRMLFUVaIO38p9Qkzvw.jpeg)

<!-- Types -->

**JavaScript** defines seven built-in types:

1. null
2. undefined
3. boolean
4. number
5. string
6. object
7. symbol

**Important**: All of these types except `object` are called **primitive**.

If you want inspect `type` of any value, you can use **`typrof`** operator. For example:

```js
console.log(typeof true); // boolean
console.log(typeof { hamed: 23, hamid: 23 }); // object
console.log(typeof null); // object (bug)
console.log(typeof "23"); // string
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol

let a = null;
(!a && typeof a === "object"); // true
```

`null` is the only primitive value that is **falsy**. But it's type is `object` as a bug.

Let's see below snippet:

```js
console.log(typeof typeof 23); // "string"
```

**Q**: Why output is "string"?
**Answer**: because The first `typeof` 23 returns `"number"`, and `typeof` `"number"` is `"string"`.

Functions also have property like **objects** (because they are really **object**). For example:

```js
function hamed(a, b) {
    // do something
}

console.log(hamed.length);
```

In **JavaScript**, variables don't have `types`, **values** have types. Variables can hold anyvalue, at any time.

---
<!-- Values -->
## Array

You can add `string` index (associate array) manually in arrays. But array's length will not change. For example:

```js
let arr = [1, 2, 3];
arr["forth"] = 4;
console.log(arr.length); // 3
console.log(arr["forth"]); // 4
```

Be careful that when you want to define a specific array's key, don't put extra number. Because array get more array white space. For example:

```js
let arr = [];
arr[0] = 1;
arr[9] = 10;
console.log(arr.length); // 10
```

As you see above, space of array is being wasted.

Again, be careful that when you want to define a specific array's key with `string number` type, dont's use `number` as `string`. `srting` convert to `number` automatically, It's working, but not recommend. For example:

```js
let arr = [];
arr["0"] = 1;
arr["9"] = 10;
console.log(arr.length); // 10
```

One another thing; is, many people think `string` is `array` concatination. But is **not true**. Because `string` values are immutable (cannot be reverse). For example:

```js
let hamed = "Hamed";
let hamid = ["H", "a", "m", "i", "d"];
// console.log(hamed.reverse()); // TypeEror
console.log(hamid.reverse()); // [ 'd', 'i', 'm', 'a', 'H' ]
```

You can use multi-dimensional arrays. For example:

```js
let array = [1, 2, 3, [4, 5, [5]]];
```

**Array constructor**: The `Array()`constructor does not require the `new` keyword in front of it. If you omit it, it will behave as if you have used it anyway. So `Array(1, 2, 3)` is the same outcome as:

```js
new Array(1, 2, 3)
```

**Important**: An array with at least one "**empty slot**" in it is often called a "**sparse array**":

```js
let hamed = new Array(5);
console.log(hamed.length); // 5
console.log(hamed); // [ <5 empty items> ]
```

Look below snippet:

```js
let hamed = Array.apply(null, { length: 3 });
console.log(hamed); // [ undefined, undefined, undefined ]
```

While `Array.apply(null, { length: 3 })` is a strange and verbose way to create an array filled with `undefined` values, it's **vastly** better and more reliable than what you get with the footgun'ish `Array(3)` empty slots.

## Array-Likes

There will be occasions where you need to convert an array-like value (a numerically indexed collection of values) into a true array, usually so you can call array utilities (like `indexOf(..)`, `concat(..)`, `forEach(..)`, etc.) against the collection of values.

For example, various DOM query operations return lists of DOM elements that are not true arrays but are array-like enough for our conversion purposes. Another common example is when functions expose the `arguments` (array-like) object (as of **ES6**, deprecated) to access the `arguments` as a list.

One very common way to make such a conversion is to borrow the `slice(..)` utility against the value:

```js
function hamed() {
  let array = Array.prototype.slice.call(arguments);
  array.push("reza");
  console.log(array);
}

hamed("hamid", "ali"); // [ 'hamid', 'ali', 'reza' ]
```

If `slice`() is called without any other parameters, as it effectively is in the above snippet, the default values for its parameters have the effect of duplicating the array (or, in this case, array-like). As of **ES6**, there’s also a built-in utility called `Array.from(..)` that can do the same task:

```js
let array = Array.from(arguments);
```

**Note**: `Array.from(..)` has several powerful capabilities, and will be covered in detail in the **ES6+** file.

---
<!-- Natives -->

We alluded to various built-ins, usually called **natives**, like `String` and `Number`. Let’s examine those in detail now. Here’s a list of the most commonly used natives:

- String()
- Number()
- Boolean()
- Array()
- Object()
- Function()
- RegExp()
- Date()
- Error()
- Symbol()—added in **ES6**!

## Strings

It’s a very common belief that `strings` are essentially just arrays of characters. While the implementation under the covers may or may not use arrays, it’s important to realize that **JavaScript** strings **are really not the same as arrays of characters** (as see earlier in **Array** section). For example, let’s consider these two values:

```js
let a = "max";
let b = ["m","a","x"];
```

Strings do have a shallow resemblance to arrays—they are array-likes, as above.

We can use uppercase and lowercase for strings:

```js
let string = "hamid";
let striing = "HAMED";

console.log(string.toUpperCase()); // "HAMID"
console.log(striing.toLowerCase()); // "hamed"
```

## Number

In **JavaScript**, don't say "integer". This is an insult to **JavaScript**. Try saying `number` as habit. Because we and you use numerical type like `23` or `23.6` or `.25` or `23.` and etc. .

Very large or very small `numbers` will by default be outputted in exponent form. For example:

```js
let hamed = 2E13;
console.log(hamed); // 20000000000000
console.log(hamed.toExponential()); // 2e+13
let hamid = hamed * hamed;
console.log(hamid); // 4e+26
console.log(hamid.toExponential());// 4e+26
let ali = 1 / hamed;
console.log(ali); // 5e-14
```

If you want to specify how many fractional decimal places you'd like the value to be represented with, you can use `toFixed` function. For example:

```js
let hamed = 23 * 34.68;
console.log(hamed); // 797.64
console.log(hamed.toFixed()); // 798
console.log(hamed.toFixed(1)); // 797.6
console.log(hamed.toFixed(5)); // 797.64000
```

If you want to specify how many significant digits should be used to represent the value, you can use `toPrecision` function. For example:

```js
let hamed = 23 * 34.68;
console.log(hamed); // 797.64
console.log(hamed.toPrecision()); // 797.64
console.log(hamed.toPrecision(1)); // 8e+2
console.log(hamed.toPrecision(5)); // 797.64
```

Something you have mistake of using `toFixed` function. For example:

```js
console.log(23.toFixed(3)); // SyntaxError
console.log((0.23).toFixed(3)); // 0.230
console.log(23..toFixed(3)); // 23.000
console.log(23 .toFixed(3)); // 23.000
```

`23..toFixed(3)` works because the first `.` is part of the `number` and the second `.` is the **property** operator. You can also use last line of above snippet (23 .toFixed()) for getting result (not recommend)

In **JavaScript** we have small decimal values like:

```js
let hamed = 0.2 + 0.1;
console.log(hamed === 0.3); // false
```

**Q**: Why output is **false**?

**Answer**: The most commonly accepted practice is to use a tiny "rounding error" value as the tolerance for comparison. This tiny value is often called **machine epsilon**, which is commonly `2^-52` (2.220446049250313e-16) for the kind of numbers in **JavaScript**. As of **ES6**, `Number.EPSILON` is predefined with this tolerance value, so you'd want to use it. but you can safely polyfill the definition for pre-**ES6**:

```js
if (!Number.EPSILON) {
    Number.EPSILON = Math.pow(2, -52);
}
```

**Q**:Do you know how many digits, **JavaScript** support?

**Answer**: its very very huge, 5e-324 to 1.7976931348623157e+308 which isn't negative but is really close to zero. Yes; its awesome value.

There are some information that you must to learn.

```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

Huge number. Whoa. Let's test next strange thing, `NaN`:

```js
let hamed = 2 / "hamid";
console.log(hamed); // NaN (Not a Number)
console.log(hamed !== NaN); // true
console.log(hamed === NaN); // false
```

`NaN` is a very special value in that it's never equal to another `NaN` value (i.e., it's never equal to itself). It's the only value, in fact, that is not reflexive (without the Identity characteristic `x === x`). So, `NaN !== NaN`.

You can also check `NaN` of value:

```js
console.log(isNaN(hamed)); // true
```

We have also **infinite** values. For example:

```js
let hamed = 1 / 0;
let hamid = -1 / 0;
console.log(hamed); // Infinity
console.log(hamid); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```

You can't divide Infinity to Infinity:

```js
console.log(Infinity / Infinity); // NaN
```

Whoa, we forget to explain zeros value:

```js
let hamed = 0 / -23;
let hamid = 0 / 23;
console.log(hamed); // -0
console.log(hamid); // +0
```

But we have found something to show you:

```js
console.log(hamid === hamed); // true
console.log(hamid < hamed); // false
console.log(hamid > hamed); // false
console.log(hamid <= hamed); // true
console.log(hamid >= hamed); // true
```

Some grammer is here. that `array` are reference of each other, but scalar primitive (simple value), are copying each other:

```js
let hamed = 23;
let hamid = hamed;
hamid++;
console.log(hamed); // 23
console.log(hamid); // 24

let ali = [1, 2, 3];
let reza = ali;
reza.push(4);
console.log(ali); // [ 1, 2, 3, 4 ]
console.log(reza); // [ 1, 2, 3, 4 ]
```

Since references point to the values themselves and not to the variables, you cannot use one reference to change where another reference is pointed:

```js
let ali = [1, 2, 3];
let reza = ali;
reza.push(4);
console.log(ali); // [ 1, 2, 3, 4 ]
console.log(reza); // [ 1, 2, 3, 4 ]
reza = [4, 5, 6];
console.log(reza); // [ 4, 5, 6 ]
```

Another example:

```js
function hamed(nums) {
    nums.push(4); x; // [ 1, 2, 3, 4 ]

    // later
    nums = [4, 5, 6];
    nums.push(7);
    nums; // [ 4, 5, 6, 7 ]
}

let hamid = [1, 2, 3];
hamed(hamid);
console.log(hamid); // [ 1, 2 ,3 ,4 ]  not  [ 4, 5 ,6 ,7 ]
```

## Box and Object Wrapper

Primitive values don't have properties or method. Thankfully, **JavaScript** will automatically box (aka wrap) the primitive value to fulfill such accesses. For example:

```js
let hamed = "Hamed";
console.log(hamed);
console.log(hamed.length);
console.log(hamed.toUpperCase()); // real-time casing
```

But it turns out that's a bad idea. Browsers long ago performance optimized the common cases like `.length`, which means your program will actually go slower if you try to "**preoptimize**" by directly using the object form.

In general, there's basically no reason to use the object form directly. It's better to just let the boxing happen implicitly where necessary. In other words, never do things like `new String("abc")`, `new Number(23)` and etc.; Always prefer using the literal primitive values `"abc"` and `23`.

See below example:

```js
let hamed = "Hamed";
let hamid = new String(hamed);
let ali = Object(hamed);

console.log(typeof hamed); // string
console.log(typeof hamid); // object
console.log(typeof ali); // object

console.log(hamid instanceof String); // true
console.log(ali instanceof String); // true

console.log(Object.prototype.toString(hamid)); // [object Object]
console.log(Object.prototype.toString(ali)); // [object Object]
```

Again, using the boxed object wrapper directly (like `hamed` and `hamid` and above) is usually discouraged, but there may be some rare occasions you'll run into where they may be useful.

If you have an object wrapper and you want to get the underlying primitive value out, you can use the `valueOf()` method (You can also use Unboxing method, `valueOf()`):

```js
let hamed = new String("Hamed");
let hamid = new Number(23);
let ali = new Boolean(false);

console.log(hamed.valueOf()); // Hamed
console.log(hamid.valueOf()); // 23
console.log(ali.valueOf()); // false
```

Unboxing can also happen implicitly, when using an object wrapper value in a way that requires the primitive value:

```js
let hamed = new String("Hamed");
let hamid = hamed + "";

console.log(typeof hamed); // object
console.log(typeof hamid); // string
```

---
<!-- Coercion -->
## Continue on Number

Default value of something:

```js
let hamed = {
    valueOf: () => { return "23" }
};
let hamid = {
    toString: () => { return "23" }
};
let ali = [2, 2];
ali.toString = function () { return this.join("") };

console.log(Number(hamed)); // 23
console.log(Number(hamid)); // 23
console.log(Number(ali)); // 22
console.log(Number("")); // 0
console.log(Number([])); // 0
console.log(Number(["reza"])); // NaN
```

As you see, `""` and `[]` value is **0**.

In **JavaScript** and other languges we have **falsy** value, these are:

- undefined
- null
- false
- +0
- -0
- NaN
- " "

### String => Number (vice versa) (explicitly)

To coerce between strings and numbers, we use the built-in `String(..)` and `Number(..)` functions, but very importantly, we do not use the `new` keyword in front of them. As such, we’re not creating object wrappers.

Automatic converting `string` to `number` and vice versa:

```js
let hamed = "23.67";
let hamid = Number(hamed);
console.log(hamid); // 23.67 (number)

let ali = 22;
let reza = String(ali);
console.log(reza); // "22"
```

`String(..)` coerces from any other value to a primitive `string` value. `Number(..)` coerces from any other value to a primitive `number` value.

We call this **explicit** coercion because in general, it’s pretty obvious to most developers that the end result of these operations is the applicable type conversion.

#### unary operator

In **javaScript** and other language, we have **unary operator** there is both operator and mathematical operand. For example:

```js
let hamed = 24.67;
let hamid = 5+ +hamed;
console.log(hamid); // 29.67
```

Another common usage of the unary `+` operator is to coerce a `Date` object into a `Number`, because the result is the unix timestamp representation of the date/time value:

```js
let date = new Date("Sat, 25 Jul 2020 11:47:39 CDT");
console.log(+date); // 1595695659000
```

The most common usage of this idiom is to get the current now moment as a timestamp, such as:

```js
let timestamp = +new Date();
```

**Q**: How i get timestamp for now?

**Answer**: You can use `Date.now()` for get **now** time. And if you want to polyfill `Date.now` into older browsers, it's pretty simple:

```js
if (!Date.now) {
    Date.now = function () {
        return +new Date();
    };
}
```

The special character `~` use for some cool thing like as:

```js
let hamed = 23;
console.log(~hamed); // -(23 + 1) = -24
```

But more importantly, it doesn't work the same on negative numbers as `Math.floor(..)` does:

```js
console.log(Math.floor(-29.6)); // -30
console.log(~~-29.6); // -29
```

## Parsing Numeric Strings (explicitly)

**Q**: How can we convert easily `string` to `number`?

**Answer**: with `parseInt()` function (parsing numeric strings):

```js
let hamed = "23";
let hamid = "23px";

console.log(Number(hamed)); // 23
console.log(parseInt(hamed)); // 23
console.log(Number(hamid)); // NaN
console.log(parseInt(hamed)); // 23
```

See another example (non-string):

```js
console.log(parseInt(new String("23"))); // 23
```

```js
let hamed = {
    num: 11.5,
    toString: function () { return String(this.num * 2); }
};

parseInt(hamed); // 23
```

### String => Number (vice versa) (implicitly)

concatenation `string` and `number`:

```js
let hamed = "23";
let hamid = "0";
let ali = hamed + hamid;
console.log(ali); // "230"
```

```js
let hamed = 23;
let hamid = 0;
let ali = hamed + hamid;
console.log(ali); // 23
```

```js
let hamed = [1, 2];
let hamid = [3, 4];
let ali = hamed + hamid;
console.log(ali); // "1,23,4" (concat as two strings ("1,2" and "3,4"))
```

```js
let hamed = 23;
let hamid = hamed + "";
console.log(hamid); // "23"


let hamed = 23;
let hamid = "" + hamed;
console.log(hamid); // "23"
```

Some operators like `-` and `/` and `*` and etc. work strangely:

```js
let hamed = "26";
let hamid = hamed - 3;
console.log(hamid); // 23 (Implicitly convert string to number)
```

```js
let hamed = [26];
let hamid = [3];
let ali = hamed - hamid;
console.log(ali); // 23
```

**Note**: `hamid = String(hamed)` = explicit and `hamid = hamed + ""` = implicit.

## All to Boolean (* => Boolean (explicitly))

Now, let’s examine coercing from any non-boolean value to a boolean.

Just like with `String(..)` and `Number(..)` above, `Boolean(..)` (without the new, of course!) is an explicit way of forcing the `ToBoolean` coercion:

```js
var a = "0";
var b = [];
var c = {};
var d = "";
var e = 0;
var f = null;
var g;

console.log(Boolean(a)); // true
console.log(Boolean(b)); // true
console.log(Boolean(c)); // true

console.log(Boolean(d)); // false
console.log(Boolean(e)); // false
console.log(Boolean(f)); // false
console.log(Boolean(g)); // false
```

While `Boolean(..)` is clearly explicit, it’s not at all common or idiomatic.

**Note**: See **5-complete-guide-true-false** file to see many of boolean values.

```js
let hamed = 23;
let hamid = "Persian Sight";
let ali;
let reza = null;

if (hamed) { console.log("Yeah"); } // "Yeah"
if (ali) { console.log("Yeah"); } else { console.log("Nooo"); }; // "Nooo"
console.log(ali = reza ? hamed : hamid); // "Persian Sight"
```

## Ternary operator

It is most useful. its abbreviated from `if..else..if..else`. For example:

```js
let a = 23;
(a > 20) ? console.log("i'm older") : console.log("i'm younger");
// Its mean: if `23 > 20`, print `"i'm older"`, else print `"i'm younger"`
// output is "i'm older"

// before ternary
let a = 23;
if (a > 20) {
  console.log("i'm older")
}
else {
  console.log("i'm younger")
}
```

We can also use one line `if..else` condition. For example:

```js
let a = 23;
if (a > 20) console.log("i'm older"); else console.log("i'm younger");
// Its mean: if `23 > 20`, print `"i'm older"`, else print `"i'm younger"`
// output is "i'm older"
```

## `||` and `&&` operator (`and` and `or`)

Try to call them, "`selector operator`" or "`operand selector operator`", not **logical operator**. Because in **JavaScript**, everything are different in `||` and `&&` operator. And because they don't actually result in a logic value (boolean) in **JavaScript** as they do in some other languages.

**Q**: What do they result in?

**Answer**: They result in the value of one (and only one) of their two operand. In other word, **they select one of the two operand's values**. The value produced by a `&&` or `||` operator is not necessarily of type `Boolean`. The value produced will always be the **value of one of the two operand expressions**.

See below snippet:

```js
let hamed = 23;
let hamid = "Persian Sight";
let ali = null;

console.log(hamed || hamid); // 23
console.log(hamed && hamid); // "Persian Sight"
console.log(hamid || ali); // "Persian Sght"
console.log(hamid && ali); // null
```

Both `||` and `&&` operators perform a `boolean` test on the **first operand** (`a` or `c`). If the operand is not already `boolean` (as it's not, here), a normal `toBoolean` coercion occurs, so that the test can be performed.

For the `||` operator, if the test is `true`, the `||` expression results in the value of the first operand (`a` and `c`). If the test is `false`, the `||` expression results in the value of the second operand (`b`).

Inversely, for the `&&` operator, if the test is `true`, the `&&` expression results in the value of the second operand (`b`). If the test is `false`, the `&&` expression results in the value of the first operand (`a` or `c`).

**Important**: Another way of thinking about these operators (awesome example you see and understand):

```js
a || b; // a ? a : b;
// if a is true, then call a, else call b (if false, call b)
```

```js
a && b; // a ? b : a;
// if a is true, then call b, else call a (if false, call a)
```

One more interesting example is:

```js
function hamed(a, b) {
    a = a || "Persian";
    b = b || "Sight";
    console.log(a + " " + b);
}

hamed(); // "Persian Sight"
hamed("Hamid", "Alavi"); // "Hamid Alavi"
hamed("WOW", "");// "WOW Sight"
```

See the problem? `""` as the second argument is a falsy value, so the `b = b || "Sight"` test fails, and the `"Sight"` default value is substituted, even though the intent probably was to have the explicitly passed `""` be the value assigned to `b`.

Do you want exciting example? we bring it to you :)

```js
function hamed() {
    console.log(hamid);
}
let hamid = 23;
console.log(hamid && hamed()); // 23 (call hamed first)
```

We think you get it right now how these operators (`||` and `&&`) work.

## Symbol Coercion

Up to this point, there’s been almost no observable outcome difference between **explicit** and **implicit** coercion only the readability of code has been at stake. But **ES6** Symbols introduce a gotcha into the coercion system that we need to discuss briefly. **Explicit** coercion of a symbol to a `string` is allowed, but **implicit** coercion of the same is disallowed and throws an error. For example:

```js
let str1 = Symbol("Yeah");
console.log(String(str1)); // "Symbol(Yeah)"
let str2 = Symbol("Awts");
console.log(str2 + ""); // TypeError
```

`symbol` values cannot coerce to `number` at all (throws an error either way), but strangely they can both explicitly and implicitly coerce to `boolean` (always true).

## Loose Equals Versus Strict Equals

Loose equals is the `==` operator, and strict equals is the `===` operator. Both operators are used for comparing two values for **equality**, but the **loose** vs. **strict** indicates a **very important** difference in behavior between the two, specifically in how they decide **equality**.

A very common misconception about these two operators is: " `==` checks values for equality and `===` checks both values and types for equality". While that sounds nice and reasonable, it's **inaccurate**. Countless well-respected **JavaScript** books and blogs have said exactly that, but unfortunately they're all **wrong**.

The correct description is: "`==` allows coercion in the equality comparison and `===` disallows coercion".

## Equality Performance

In the first explanation (inaccurate), it seems obvious that `===` is doing more work than `==` because it has to follow through the steps of coercion if the types are different.

**Don't fall into the trap**, as many have, of thinking this has anything to do with performance, though, as if `==` is going to be slower than `===` in any relevant way. While it's measurable that coercion does take a little bit of processing time, it's mere **microseconds** (yes, that's millionths of a second!).

If you’re comparing two values of the same types,`==` and `===` use the identical algorithm, and so other than minor differences in engine implementation, they should do the same work.

If you want coercion, use `==` loose equality, but if you don’t want coercion, use `===` strict equality.

## Abstract Equality

Some minor exceptions to normal expectation to be aware of:

- `NaN` is never equal to itself.
- `+0` and `-0` are equal to each other.

Let's see allowing coercion and disallowing coercion (**string to number**)

```js
let hamed = 23;
let hamid = "23";

console.log(hamed == hamid); // true
console.log(hamed === hamid); // false
```

1. If Type(x) is `Number` and Type(y) is `String`, return the result of the comparison `x == ToNumber(y)`.
2. If Type(x) is `String` and Type(y) is `Number`, return the result of the comparison `ToNumber(x) == y`.

Let's see another snippet comparison (**anything to boolean**)

```js
let hamed = "23";
let hamid = true;

console.log(hamed == hamid); // false
console.log(hamed === hamid); // false
```

1. If Type(x) is `boolean`, return the result of the comparison `ToNumber(x) == y`.
2. If Type(y) is `boolean`, return the result of the comparison `x == ToNumber(y)`.

Let's make your brain smarter:

```js
let hamed = "23";

if (hamed == true) { console.log("Not working"); } // nothing to show (false)
if (hamed === true) { console.log("Not working"); } // also nothing to show (false)
if (hamed) { console.log("Working"); } // show "Working" (true)(works implicitly)
if (!!hamed) { console.log("Working"); } // also show "Working" (true)(works explicitly)
if (Boolean(hamed)) { console.log("Working"); } // yeah. also show "Working" (true)(works explicitly)
```

Another example of implicit coercion comparison(**null to undefined**)

1. If x is `null` and y is `undefined`, return `true`.
2. If x is `undefined` and y is `null`, return `true`.

```js
let hamed = null;
let hamid;

console.log(hamed == hamid);
console.log(hamed == null); // true
console.log(hamid == null); // true
console.log(hamed == false); // true
console.log(hamid == false); // false
console.log(hamed == ""); // false
console.log(hamid == ""); // false
console.log(hamed == 0); // false
console.log(hamid == 0); // false
if (hamed === undefined || hamed === null) {
    console.log(hamed === undefined || hamed === null); // true (false || true = true)
}
```

Another snippet (**object to non-object**) comparison:

1. If Type(x) is either `String` or `Number` and Type(y) is `Object`, return the result of the comparison `x == ToPrimitive(y)`.
2. If Type(x) is `Object` and Type(y) is either `String` or `Number`, return the result of the comparison `ToPrimitive(x) == y`.

You may notice that these clauses only mention `String` and `Number`, but not `Boolean`. That's because, take care of coercing any `Boolean` operand presented to an `Number` first. For example:

```js
let hamed = 23;
let hamid = [23];

console.log(hamed == hamid); // true
```

Let's see about `null`, `undefined` and `NaN`:

```js
let hamed = null;
let hamid = Object(hamed); // same as `Object()`
console.log(hamed == hamid); // false
let ali = undefined;
let reza = Object(ali); // same as `Object()`
console.log(ali == reza); // false
let majid = NaN;
let mehrdad = Object(majid); // same as `new Number(majid)`
console.log(majid == mehrdad); // false
```

The `null` and `undefined` values cannot be boxed (they have no object wrapper equivalent). So `Object(null)` is just like `Object()` in that both just produce a **normal object**.

**Note**: You can see `complete guide true and false.md` file for more information about true and false.
