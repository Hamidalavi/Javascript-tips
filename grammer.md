# Some **`grammer`** sentences to give you more information

## Telegram = **<https://t.me/Hamidalavi6540>**

## Instagram = **<https://www.instagram.com/Hamidalavi6540>**

## Twitter = **<https://twitter.com/HamidAlavi6540>**

JavaScript defines seven built-in types:
>1.null
>>2.undefined
>>>3.boolean
>>>>4.number
>>>>>5.string
>>>>>>6.object
>>>>>>>7.symbol

**Important**: All of these types except `object` are called **primitive**.

If you want inspect `type` of any value, you can use **`typrof`** operator. For example:

```js
console.log(typeof true); // boolean
console.log(typeof { hamed: 23, hamid: 23 }); // object
console.log(typeof null); // object (bug)
console.log(typeof "23"); // string
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol

var a = null;
(!a && typeof a === "object"); // true
```

`null` is the only primitive value that is **falsy**. But it's type is `object` as a bug.

Lets see below snippet:

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

## Array

You can add `string` index (associate array) manually in arrays. But array's length will not change. For example:

```js
var arr = [1, 2, 3];
arr["forth"] = 4;
console.log(arr.length); // 3
console.log(arr["forth"]); // 4
```

Be careful that when you want to define a specific array's key, don't put extra number. Because array get more array white space. For example:

```js
var arr = [];
arr[0] = 1;
arr[9] = 10;
console.log(arr.length); // 10
```

As you see above, space of array is being wasted.

Again, be careful that when you want to define a specific array's key with `string number` type, dont's use `number` as `string`. `srting` convert to `number` automatically, It's working, but not recommend. For example:

```js
var arr = [];
arr["0"] = 1;
arr["9"] = 10;
console.log(arr.length); // 10
```

One another thing; is, many people think `string` is `array` concatination. But is not **true**. Because `string` values are immutable (cannot be reverse). For example:

```js
let hamed = "Hamed";
let hamid = ["H", "a", "m", "i", "d"];
// console.log(hamed.reverse()); // TypeEror
console.log(hamid.reverse()); // [ 'd', 'i', 'm', 'a', 'H' ]
```

---

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

**Answer**: The most commonly accepted practice is to use a tiny "rounding error" value as the tolerance for comparison. This tiny value is often called **machine epsilon**, which is commonly `2^-52` (2.220446049250313e-16) for the kind of numbers in **JavaScript**. As of ES6, `Number.EPSILON` is predefined with this tolerance value, so you'd want to use it. but you can safely polyfill the definition for pre-ES6:

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

Huge number. Whoa. Lets test next strange thing, `NaN`:

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

var hamid = [1, 2, 3];
hamed(hamid);
console.log(hamid); // [ 1, 2 ,3 ,4 ]  not  [ 4, 5 ,6 ,7 ]
```

---

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
