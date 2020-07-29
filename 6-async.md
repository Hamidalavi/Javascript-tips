# Some **`async`** examples to give you more information

Lets see below examples:

```js
let a = 1;
let b = 2;

// x
a++; // 2
b = b * a; // 4
a = b + 3; // 7

// y
b--; // 3
a = 8 + b; // 11 ^^
b = a * 2; // 11 * 2 = 22 ^^

console.log(a); // 11
console.log(b); // 22
```

```js
let a = 1;
let b = 2;

// x
b--; // 1
a = 8 + b; // 9
b = a * 2; // 18

// y
a++; // 10
b = b * a; // 180 ^^
a = b + 3; // 183 ^^

console.log(a); // 183
console.log(b); // 180
```
