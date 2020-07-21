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
