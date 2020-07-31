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

`Promise.resolve(..)` will accept any thenable, and will unwrap it to its non-thenable value. But you get back from `Promise.resolve(..)` a real, genuine Promise in its place, **one that you can trust**. If what you passed in is already a genuine Promise, you just get it right back, so there's no downside at all to filtering through `Promise.resolve(..)` to gain trust.

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

---

## Chain Flow

The key to making this work is built on two behaviors intrinsic to `Promises`:

- Every time you call `then()` on a Promise, it creates and returns a new Promise, which we can chain with.

- Whatever value you return from the `then()` call's fulfillment callback (the first parameter, resolve) is automatically set as the fulfillment of the chained Promise (from the first point).

```js
let pm1 = Promise.resolve(23);
let pm2 = pm1.then(function (value) {
    console.log(value); // 23
    return value * 2;
});

pm2.then(function (value2) {
    console.log(value2); // 46
});
```

By returning `value * 2` (i.e., 46), we fulfill the `pm2` promise that the first `then(..)` call created and returned. When `pm2`'s `then(..)` call runs, it's receiving the fulfillment from the `return value * 2` statement. Of course, `pm2.then(..)` creates yet another promise, which we could have stored in a `pm3` variable.

But it's a little annoying to have to create an intermediate variable `pm2` (or `pm3`, etc.). Thankfully, we can easily just chain these together:

```js
let pm = Promise.resolve(23);
pm.then(function (value) {
    console.log(value); // 23
    return value * 2;
})
    // here's the chained promise
    .then(function (value2) {
        console.log(value2); // 46
    });
```

So now the first `then(..)` is the first step in an async sequence, and the second `then(..)` is the second step. This could keep going for as long as you needed it to extend. Just keep chaining of a previous `then(..)` with each automatically created Promise.

**Q**: What if we want step 2 to wait for step 1 to do something asynchronous?

**Answer**: We're using an immediate `return` statement, which immediately fulfills the chained promise.

The key to making a Promise sequence truly async capable at every step is to recall how `Promise.resolve(..)` operates when what you pass to it is a Promise or thenable instead of a final value. `Promise.resolve(..)` directly returns a received genuine Promise, or it unwraps the value of a received thenable (and keeps going recursively while it keeps unwrapping thenables).

The same sort of unwrapping happens if you `return` a thenable or Promise from the fulfillment (or rejection) handler. Consider:

```js
let pm = Promise.resolve(23);
pm.then(function (value) {
    console.log(value); // 23

    // create a promise and return it
    return new Promise(function (resolve, reject) {
        // fulfill with value `46`
        resolve(value * 2);
    });
})
    .then(function (value) {
        console.log(value); // 46
    });
```

Even though we wrapped `46` up in a promise that we returned, it still got unwrapped and ended up as the resolution of the chained promise, such that the second `then(..)` still received `46`. If we introduce asynchrony to that wrapping promise, everything still nicely works the same:

```js
let pm = Promise.resolve(23);
pm.then(function (value) {
    console.log(value); // 23

    // create a promise to return
    return new Promise(function (resolve, reject) {
        // introduce asynchrony!
        setTimeout(function () {
            // fulfill with value `46`
            resolve(value * 2);
        }, 1000);
    });
})
    .then(function (value) {
        // runs after the 100ms delay in the previous step
        console.log(value); // 46
    });
//  output: 23; 1 second later, 46
```

That's incredibly powerful! Now we can construct a sequence of however many async steps we want, and each step can delay the next step (or not!), as necessary.

Of course, the value passing from step to step in these examples is optional. If you don't return an explicit value, an implicit `undefined` is assumed, and the promises still chain together the same way. Each Promise resolution is thus just a signal to proceed to the next step.

Example of one of internet book (YDKJS):

```js
function delay(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, time);
    });
}

delay(100) // step 1
    .then(function STEP2() {
        console.log("step 2 (after 100ms)");
        return delay(200);
    })
    .then(function STEP3() {
        console.log("step 3 (after another 200ms)");
    })
    .then(function STEP4() {
        console.log("step 4 (next Job)");
        return delay(50);
    })
    .then(function STEP5() {
        console.log("step 5 (after another 50ms)");
    })

/* output:
step 2 (after 100ms)
step 3 (after another 200ms)
step 4 (next Job)
step 5 (after another 50ms) */
```

Calling `delay(200)` creates a promise that will fulfill in 200ms, and then we return that from the first `then(..)` fulfillment callback, which causes the second `then(..)`'s promise to wait on that 200ms promise.

**Note**: As described, technically there are two promises in that interchange: the 200-ms-delay promise and the chained promise that the second `then(..)` chains from. But you may find it easier to mentally combine these two promises together, because Promise mechanism automatically merges their states for you. In that respect, you could think of `return delay(200)` as creating a promise that replaces the earlier-returned chained promise.

Instead of timers, let's consider making Ajax requests:

```js
function request(url) {
    return new Promise(function (resolve, reject) {
        ajax(url, resolve);
    });
}
```

We first define a `request(..)`  utility that constructs a promise to represent the completion of the `ajax(..)` call:

```js
request("http://some.url.1/")
    .then(function (response1) {
        return request("http://some.url.2/?v=" + response1);
    })
    .then(function (response2) {
        console.log(response2);
    });
```

Let's see simple exaample of Promise (reject):

```js
let p = new Promise(function (resolve, reject) {
    reject("Oops");
});

let p2 = p.then(
    function fulfilled() {
        // never gets here
    }
    // assumed rejection handler, if omitted or
    // any other non-function value passed
    // function(err) {
    //
    // throw err;
    // }
);
// output: UnhandledPromiseRejectionWarning: Oops
```

As you can see, the assumed rejection handler simply rethrows the error, which ends up forcing `p2` (the chained promise) to reject with the same error reason. In essence, this allows the error to continue propagating along a Promise chain until an explicitly defined rejection handler is encountered.

If a proper valid function is not passed as the fulfillment handler parameter to `then(..)`, there's also a default handler substituted:

```js
let pm = Promise.resolve(23);
pm.then(
    // assumed fulfillment handler, if omitted or
    // any other non-function value passed
    // function(value) {
    //
    // return value;
    // }
    null,
    function rejected(err) {
        // never gets here
    }
);
```

Let's break code to better style:

```js
let pm = Promise.resolve(23);
pm.then(
    null,
    function rejected(err) {
        // never gets here
    }
);
```

As you can see, the default fulfillment handler simply passes whatever value it receives along to the next step (Promise).

**Note**: The `then(null,function(err){ .. })` pattern -- only handling rejections (if any) but letting fulfillments pass through -- has a shortcut in the API: `catch(function(err){ .. })`. We'll cover `catch(..)` more fully in the next section.

Let's review briefly the intrinsic behaviors of Promises that enable chaining flow control:

- A `then(..)` call against one Promise automatically produces a new Promise to return from the call.
- Inside the fulfillment/rejection handlers, if you return a value or an exception is thrown, the new returned (chainable) Promise is resolved accordingly.
- If the fulfillment or rejection handler returns a Promise, it is unwrapped, so that whatever its resolution is will become the resolution of the chained Promise returned from the current `then(..)`.

---

## Promsise (step by step)

I know, these examples are hard to lean, Let's do this step by step:

```js
let pm = new Promise(function (x, y) {
    // x() for resolve
    // y() for reject
});
```

As you can see, two callbacks (here labeled `x` and `y`) are provided. The first is usually used to mark the Promise as `resolved` (fulfilled), and the second always marks the Promise as `rejected`.

**Q**: what's the "usually" about, and what does that imply about accurately naming those parameters?

**Answer**: Ultimately, it's just your user code and the identifier names aren't interpreted by the engine to mean anything, so it doesn't technically matter; `hamid()` and `hamed()` (foo and bar are common) are equally functional. But the words you use can affect not only how you are thinking about the code, but how other developers on your team will think about it. Thinking wrongly about carefully orchestrated (sync, concurrent) async code is almost surely going to be worse than the spaghetti-callback alternatives. **So it actually does kind of matter what you call them**.

The second parameter is easy to decide. Almost all literature uses `reject(..)` as its name, and because that's exactly (and only!) what it does, that's a very good choice for the name. I'd strongly recommend you always use **`reject(..)`**.

At the end, use **`resolve(..)`** and **`reject(..)`**.

---

## Error Handling

The most natural form of error handling for most developers is the synchronous `try..catch` construct. Unfortunately, it's synchronous-only, so it fails to help in async code patterns:

```js
function hamed() {
    setTimeout(function () {
        ali.hamid();
    }, 200);
}

try {
    hamed();
    // later throws global error from `ali.hamid()`
}
catch (err) {
    // never gets here
}
```

`try..catch` would certainly be nice to have, but it doesn't work across async operations. That is, unless there's some additional environmental support (generators).

So we come to error handling in Promises, with the rejection handler passed to `then(..)`. Promises don't use the popular "error-first callback" design style, but instead use "split callbacks" style; there's one callback for fulfillment and one for rejection:

```js
let pm = Promise.reject("Oh no!");
pm.then(function resolved() {
    // blank
},
    function rejected(error) {
        console.log(error);
    }); // "Oh oh!"
```

While this pattern of error handling makes fine sense on the surface, the nuances of Promise error handling are often a fair bit more difficult to fully grasp. Consider:

```js
let pm = Promise.resolve("Hamid");
pm.then(function resolved(message) {
    console.log(message.toUpperCase());
},
    function rejected(error) {
        // never gets here
    }); // HAMID
```

If the `message.toUpperCase()` legitimately throws an error (it does!), why doesn't our error handler get notified? As we explained earlier, it's because that error handler is for the `pm` Promise, which has already been fulfilled with value `23`. The `pm` promise is immutable, so the only promise that can be notified of the error is the one returned from `pm.then(..)`, which in this case we don't capture.

**Warning**: If you use the Promise API in an invalid way and an error occurs that prevents proper Promise construction, the result will be an immediately thrown exception, **not a rejected Promise**. Some examples of incorrect usage that fail Promise construction: `new Promise(null)`, `Promise.all()`, `Promise.race(23)`, and so on. You can't get a rejected Promise if you don't use the Promise API validly enough to actually construct a Promise in the first place!

To avoid losing an error to the silence of a forgotten/discarded Promise, some developers have claimed that a **best practice** for Promise chains is to always end your chain with a final `catch(..)`, like:

```js
let pm = Promise.resolve("Hamid");
pm.then(function resolved(message) {
    console.log(message.toUpperCase());
})
    .catch(handleError);
```

---

## Promise.all([ .. ])

In an async sequence (Promise chain), only one async task is being coordinated at any given moment -- step 2 strictly follows step 1, and step 3 strictly follows step 2. But what about doing two or more steps concurrently (in parallel)?

In classic programming terminology, a **gate** is a mechanism that waits on two or more parallel/concurrent tasks to complete before continuing. It doesn't matter what order they finish in, just that all of them have to complete for the gate to open and let the flow control through.

In the Promise API, we call this pattern `all([ .. ])`.

Say you wanted to make two Ajax requests at the same time, and wait for both to finish, regardless of their order, before making a third Ajax request. Consider:

```js
let pm1 = request("http://some.url.1/");
let pm2 = request("http://some.url.2/");

Promise.all([pm1, pm2])
    .then(function (msgs) {
        // both `pm1` and `pm2` fulfill and pass in
        // their messages here
        return request(
            "http://some.url.3/?v=" + msgs.join(",")
        );
    })
    .then(function (msg) {
        console.log(msg);
    });
```

`Promise.all([ .. ])` expects a single argument, an `array`, consisting generally of Promise instances. The promise returned from the `Promise.all([ .. ])` call will receive a fulfillment message (`msg` in this snippet) that is an `array` of all the fulfillment messages from the passed in promises, in the same order as specified (regardless of fulfillment order).

**Note**: Technically, the `array` of values passed into `Promise.all([ .. ])` can include Promises, thenables, or even immediate values. Each value in the list is essentially passed through `Promise.resolve(..)` to make sure it's a genuine Promise to be waited on, so an immediate value will just be normalized into a Promise for that value. If the `array` is empty, the main Promise is immediately fulfilled.

The main promise returned from `Promise.all([ .. ])` will only be fulfilled if and when all its constituent promises are fulfilled. If any one of those promises instead is rejected, the main `Promise.all([ .. ])` promise is immediately rejected, discarding all results from any other promises.

**Remember to always attach a rejection/error handler to every promise, even and especially the one that comes back from `Promise.all([ .. ])`**.

---

## Promise.race([ .. ])

`Promise.race([ .. ])` also expects a single `array` argument, containing one or more Promises, thenables, or immediate values. It doesn't make much practical sense to have a race with immediate values, because the first one listed will obviously win -- like a foot race where one runner starts at the finish line!

Similar to `Promise.all([ .. ])`, `Promise.race([ .. ])` will fulfill if and when any Promise resolution is a fulfillment, and it will reject if and when any Promise resolution is a rejection.

**Warning**: A "race" requires at least one "runner", so if you pass an empty `array`, instead of immediately resolving, the main `race([..])` Promise will never resolve.

Let's revisit our previous concurrent Ajax example, but in the context of a race between `pm1` and `pm2`:

```js
var pm1 = request("http://some.url.1/");
var pm2 = request("http://some.url.2/");
Promise.race([pm1, pm2])
    .then(function (msg) {
        // either `pm1` or `pm2` will win the race
        return request(
            "http://some.url.3/?v=" + msg
        );
    })
    .then(function (msg) {
        console.log(msg);
    });
```

Because only one promise wins, the fulfillment value is a single message, not an `array` as it was for `Promise.all([ .. ])`.

We can set timeout (Timout Race) for `Promise.race([..])`:

```js
Promise.race([
    hamed(), // attempt `hamed()`
    timeoutPromise(3000) // give it 3 seconds
])
    .then(
        function () {
            // `hamed(..)` fulfilled in time!
        },
        function (err) {
            // either `hamed()` rejected, or it just
            // didn't finish in time, so inspect
            // `err` to know which
        }
    );
```

This timeout pattern works well in most cases. But there are some nuances to consider, and frankly they apply to both `Promise.race([ .. ])` and `Promise.all([ .. ])` equally.
