# Some **`object`** example a give you more information

## Telegram = **<https://t.me/Hamidalavi6540>**

## Instagram = **<https://www.instagram.com/Hamidalavi6540>**

## Twitter = **<https://twitter.com/HamidAlavi6540>**

**Important: All functions in JavaScript are object**.

### A most important bug in **JavaScript** was found by developers, that the `null` is object in output

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

> String
>> Number
>>> Boolean
>>>> Object
>>>>> Function
>>>>>> Array
>>>>>>> Date
>>>>>>>> RegExp
>>>>>>>>> Error

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

You could use an **array** as a plain **key/value** object, and never add any numeric indices, but this is a bad idea because **arrays** have behavior and optimizations specific to their intended use, and likewise with plain objects. Use objects to store key/value pairs, and arrays to store values at numeric indices.

**Be careful**: If you try to add a property to an array, but the property name looks like a number, it will end up instead as a numeric index (thus modifying the array contents):

```js
let arr = ["Hamed", 23, "Hamid", "Ali", "Reza"];
arr["5"] = "Hello"; // or can use arr[5] = "Hello";
console.log(arr[5]); // Hello
console.log(arr.length); // 6
```

## Object Property Description

We can use `Object.defineProperty(obj, prop, {...})` to add a new **property**, or modify an existing one with the desired characteristics.

For example:

```js
var obj = { a: 0 };
Object.defineProperty(obj, "a", { value: 26 })
console.log(Object.getOwnPropertyDescriptor(obj, "a")); // { value: 23, writable: true, enumerable: true, configurable: true }
console.log(obj); // { a: 26 }
```

Above code is about `value`. now for `writable`:

```js
var obj = { a: 23 };
Object.defineProperty(obj, "a", { writable: false });
obj.a = 26; // look at this
console.log(Object.getOwnPropertyDescriptor(obj, "a")); // { value: 23, writable: false, enumerable: true, configurable: true }
console.log(obj); // { a: 23 }
```

If `writable` is **false**, you cant edit or modify value (like read-only). If you use "strict mode", output is => TypeError: Cannot assign to read only property 'a' of object '#`<Object>`'. The **TypeError** tells us we cannot change a non-writable property. Lets got to the next, `configurable`:

`configurable`: As long as a property is currently configurable, we can modify its descriptor definition, using the same `defineProperty(..)` utility.

```js
var obj = { a: 23 };
Object.defineProperty(obj, "a", { configurable: false });
Object.defineProperty(obj, "a", { value: 30, configurable: true }); // Cannot redefine property: a
console.log(Object.getOwnPropertyDescriptor(obj, "a"));
console.log(obj); // error
```

The second `defineProperty(..)` call results in a TypeError, regardless of "strict mode", if you attempt to change the descriptor definition of a non-configurable property. **Be careful**: as you can see, changing `configuration` to **false** is a one-way action, and cannot be undone! even if the property is already `configurable:false`, `writable` can always be changed from **true** to **false** without error, but not back to **true** if already **false**.

Another thing `configurable:false` prevents is the ability to use the `delete` operator to remove an existing property:

```js
var obj = { a: 2 };
obj.a; // 2
delete obj.a;
obj.a; // undefined
Object.defineProperty(obj, "a", { value: 2, configurable: false });
obj.a; // 2
delete obj.a;
console.log(obj.a); // 2
```

The second `delete` call failed, because we made the `a` property non-configurable.

**Important Note**: `delete` is only used to remove object properties (which can be removed) directly from the object in question. If an object property is the last remaining reference to some object/function, and you `delete` it, that removes the reference and now that unreferenced object/function can be garbage collected. But, it is **not** proper to think of `delete` as a tool to free up allocated memory as it does in other languages (like C/C++). `delete` is just an object property removal operation -- nothing more.

By combining `writable:false` and `configurable:false` you can essentially create a **constant** (cannot be changed, redefined or deleted) as an object property, like:

```js
let obj = {};
Object.defineProperty(obj, "FAVORITE_NUMBER", {
    value: 23,
    writable: false,
    configurable: false
});
```

If you want to prevent an object from having new properties added to it, but otherwise leave the rest of the object's properties alone, call `Object.preventExtensions(..)`:

```js
let obj = { a: 23 };
Object.preventExtensions(obj);
obj.b = 26; // undefined
console.log(obj); // { a: 23 }
```

In `strict mode`, it throws a `TypeError`. You also can use `Object.freez(..)` to frezing object (key and value):

```js
let obj = { a: 23 };
Object.freeze(obj);
obj.a = 10;
console.log(obj); // { a: 23 }
```

Sometimes you heard about [Get] and [Put] operation. But, what are they? look below example:

```js
let obj = { a: 23 };
obj.a; // 23
```

The `obj.a` is a property access, but it doesn't just look in `obj` for a property of the name `a`, as it might seem. According to the spec, the code above actually performs a [[Get]] operation on the `obj`. The default built-in [[Get]] operation for an **object** first inspects the **object** for a property of the requested name, and if it finds it, it will return the value accordingly. However, the [[Get]] algorithm defines other important behavior if it does not find a property of the requested name. But one **important** result of this [[Get]] operation is that if it cannot through any means come up with a value for the requested property, it instead returns the value **undefined**.

```js
let obj = { a: 23 };
obj.b; // undefined
```

This behavior is different from when you reference variables by their identifier names. If you reference a variable that cannot be resolved within the applicable lexical scope look-up, the result is not **undefined** as it is for **object** properties, but instead a `ReferenceError` is thrown.

Since there's an internally defined [[Get]] operation for getting a value from a property, it should be obvious there's also a default [[Put]] operation. It may be tempting to think that an assignment to a property on an object would just invoke [[Put]] to set or create that property on the object in question. But the situation is more nuanced than that. If the property is not yet present on the object in question, the [[Put]] operation is even more nuanced and complex.

Getter and Setter, i think nothing to explain. you understand by just looking at this below code:

```js
let obj = {
    get a() {
        return this._a_;
    },
    set a(val) {
        this._a_ = val * 4;
    }
};
obj.a = 2;
console.log(obj.a);
```
