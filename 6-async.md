# Some **`async`** examples to give you more information

Let's see below examples. But first, please see `functions`:

```js
let a = 1;
let b = 2;
function hamed() {
    a++;
    b = b * a;
    a = b + 3;
}
function hamid() {
    b--;
    a = 8 + b;
    b = a * 2;
}
```

Now, see the output of two functions ordering level:

```js
let a = 1;
let b = 2;

// hamed
a++; // 2
b = b * a; // 4
a = b + 3; // 7

// hamid
b--; // 3
a = 8 + b; // 11 ^^
b = a * 2; // 11 * 2 = 22 ^^

console.log(a); // 11
console.log(b); // 22
```

```js
let a = 1;
let b = 2;

// hamid
b--; // 1
a = 8 + b; // 9
b = a * 2; // 18

// hamed
a++; // 10
b = b * a; // 180 ^^
a = b + 3; // 183 ^^

console.log(a); // 183
console.log(b); // 180
```

Two outcomes from the same code means we still have nondeterminism! But it's at the function (event) ordering level, rather than at the statement ordering level as it is with threads. In other words, it's more deterministic than threads would have been.
