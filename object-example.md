# Some **`object`** example a give you more information

## Telegram = **<https://t.me/Hamidalavi6540>**

## Instagram = **<https://www.instagram.com/Hamidalavi6540>**

## Twitter = **<https://twitter.com/HamidAlavi6540>**

**Important: All functions in JavaScript are object**.

**Use browser console (recommended) for get better result of `object`**.

**I recommend first read `papular-sentences.md` and `this-example.md` file**.

How to define an object? its pretty simple. you have two choices to creating objects 1) Literal 2) Constructed:

```js
var obj = { a: 23, b: 26 };
console.log(obj.a);
console.log(typeof obj);
```

Lets try "Hello guys" for string. The primitive value "Hello guys" is not an object, it's a primitive **literal** and immutable value. Luckily, the language automatically coerces a "**string**" primitive to a **string** object when necessary, which means you almost never need to explicitly create the **object** form. for example:

```js
let str = "Hello guys";
console.log(str.length); // 10
console.log(str.charAt(4)); // o
```

**Important**: Only use the constructed form if you need the extra options (**literal** is the best).

There are many types of **objects**:

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error

You have two ways of accessing the **properties** in **objects**. they are: 1) `.` operator 2)`[".."]` operator:

```js
let obj = { a: 23, b: "Hamid" };
console.log(obj.a); // 23
console.log(obj["b"]); // Hamid
```

Some benefits of using [".."] operation:

```js
let trueFalse = true;
let obj = { a: 23 };
let index;
if (trueFalse) {
    index = "a"
}
console.log(obj[index]); // 23 (after trueFalse is "true", index value changed to 23 (of obj property))
```

You have also two ways of creating the properties in objects. they are: 1) `.` operator 2)`[".."]` operator:

```js
var obj = {};

obj[3] = "23";
obj[true] = "Hamid";
obj[obj] = "Persian Sight";

console.log(obj["3"]); // 23
console.log(obj["true"]); // Hamid
console.log(obj["[object Object]"]); // Persian Sight
```

You can also create or access property with **computed property names**:

```js
let add = "hamed";
let obj = {
    [add + "h"]: "Hello",
    [add + "w"]: "world"
}
console.log(obj["hamedh"]); // hello
console.log(obj["hamedw"]); // world
```

Lets make function in object:

```js
let obj = {
    hamed: function () {
        console.log("Hello guys");
    }
}

let ref = obj.hamed;
console.log(ref); // [Function: hamed]
console.log(obj.hamed); // [Function: hamed] (same function)
```

## Array

**Arrays** are **objects**, so even though each index is a positive integer, you can also add properties onto the array:

```js
let arr = ["Hamed", 23, "Hamid", "Ali", "Reza"];
console.log(arr[0]); // Hamed
console.log(arr[2]); // Hamid
console.log(arr[4]); // Reza
console.log(arr.length); / // 5
```

You can add custom value with custom key (associate):

```js
let arr = ["Hamed", 23, "Hamid", "Ali", "Reza"];
arr.majid = "Majid";
arr.mehrdad = "Mehrdad";
console.log(arr.majid); // Majid
console.log(arr.mehrdad); // Mehrdad
console.log(arr.length); // 5
```

Look above code. **Q**: Why array length is 5, yet? we are adding two keys that called "majid" and "mehrdad", then what happend?

**Answer**: In fact, notice that adding named properties (regardless of `.` and `[]` operator syntax) does not change the reported `length` of the array.
