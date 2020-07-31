# Some **`async`** examples to give you more information

## Precedence

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

Then, see below snippets and **think** about them:

```js
console.log("A");

console.log("B");

setTimeout(() => {
    console.log("C");
}, 0);

setTimeout(() => {
    console.log("D");
}, 0); // "A" "B" "C" "D"

```

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0); // "A" "C" "B" "D"

// -----------------

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 1000); /* "A" "C" | "B" "D"
               1 sec later*/
```

If you read above snippets, see next one:

```js
console.log("A");
setTimeout(function () {
    console.log("C");
}, 1000);
console.log("B");
```

Most readers just now probably thought or said something to the effect of: "Do `A`, then set up a timeout to wait 1,000 milliseconds (1 second), then once that fires, do `C`".

You might have caught yourself and self-edited to: "Do `A`, setup the timeout for 1,000 milliseconds (1 second), then do `B`, then after the timeout fires, do `C`".

---

## Promise

Consider below pseudocode:

```js
function hamed(x) {
    return new Promise(function (resolve, reject) {
        // do something
    });
}
```

These below pseudos `Promise` are similar:

```js
// one
let p1 = new Promise(function (resolve, reject) {
    resolve(42);
});

// two
let p2 = Promise.resolve(42);


let pm1 = Promise.resolve(42);
let pm2 = Promise.resolve(pm1);

console.log(pm1 === pm2); // true (result)
```

The are same and similar. Let's see below code and surprise:

```js
Promise.resolve(23).then(
    function resolv(value) {
        console.log(value); // 23
    }
);

// -----------------

Promise.resolve(23).then(
    function resolv(value) {
        console.log(value); // 23
    }, function rejct(vall) {
        console.log(vall); // never gets here
    }
);
```

That's amazing, isn't it?

`Promise.resolve(..)` will accept any thenable, and will unwrap it to its non-thenable value. But you get back from `Promise.resolve()` a real, genuine Promise in its place, **one that you can trust**. If what you passed in is already a genuine Promise, you just get it right back, so there's no downside at all to filtering through `Promise.resolve()` to gain trust.

There is a **recommendation** to do this below:

```js
function hamed(val) {
    return val;
}

hamed(23)
    .then(function (v) {
        console.log(v); // TypeError
    });

// intead, do this
Promise.resolve(hamed(23))
    .then(function (v) {
        console.log(v); // 23
    });
```

Another beneficial side effect of wrapping `Promise.resovle()` around any function's return value (thenable or not) is that it's an easy way to normalize that function call into a well-behaving async task. If `hamed(23)` returns an immediate value sometimes, or a Promise other times, `Promise.resolve(hamed())` makes sure it's always a Promise result. And avoiding Zalgo (trrible) makes for much better code.
