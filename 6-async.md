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

## `Promise.all([ .. ])`

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

## `Promise.race([ .. ])`

`Promise.race([ .. ])` also expects a single `array` argument, containing one or more Promises, thenables, or immediate values. It doesn't make much practical sense to have a race with immediate values, because the first one listed will obviously win -- like a foot race where one runner starts at the finish line!

Similar to `Promise.all([ .. ])`, `Promise.race([ .. ])` will fulfill if and when any Promise resolution is a fulfillment, and it will reject if and when any Promise resolution is a rejection.

**Warning**: A "race" requires at least one "runner", so if you pass an empty `array`, instead of immediately resolving, the main `race([..])` Promise will never resolve.

Let's revisit our previous concurrent Ajax example, but in the context of a race between `pm1` and `pm2`:

```js
let pm1 = request("http://some.url.1/");
let pm2 = request("http://some.url.2/");
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

## `new Promise(..)` Constructor

The revealing constructor `Promise(..)` must be used with `new`, and must be provided a function callback that is synchronously/immediately called. This function is passed two function callbacks that act as resolution capabilities for the promise. We commonly label these `resolve(..)` and `reject(..)`:

```js
let p = new Promise(function (resolve, reject) {
    // `resolve(..)` to resolve/fulfill the promise
    // `reject(..)` to reject the promise
});
```

`reject(..)` simply rejects the promise, but `resolve(..)` can either fulfill the promise or reject it, depending on what it's passed. If `resolve(..)` is passed an immediate, non-Promise, non-thenable value, then the promise is fulfilled with that value.

But if `resolve(..)` is passed a genuine Promise or thenable value, that value is unwrapped recursively, and whatever its final resolution/state is will be adopted by the promise.

## `Promise.resolve(..)` and `Promise.reject(..)`

A shortcut for creating an already-rejected Promise is `Promise.reject(..)`, so these two promises are equivalent:

```js
let hamed = new Promise(function (rsolve, reject) {
    reject("Oh No!");
}); // #1

let hamid = Promise.reject("Oh No!"); // #2
```

`Promise.resolve(..)` is usually used to create an already-fulfilled Promise in a similar way to `Promise.reject(..)`. However, `Promise.resolve(..)` also unwraps thenable values. In that case, the Promise returned adopts the final resolution of the thenable you passed in, which could either be fulfillment or rejection:

```js
let resolved = {
    then: function (callBack) {
        callBack(23);
    }
};

let rejected = {
    then: function (callBack, errorCallBack) {
        errorCallBack("Oh No!");
    }
};

let hamed = Promise.resolve(resolved);
let hamid = Promise.resolve(rejected); // UnhandledPromiseRejectionWarning: Oh No!
console.log(hamed); // Promise { <pending> }

// `hamed` will be a fulfilled promise
// `hamid` will be a rejected promise
```

And remember, `Promise.resolve(..)` doesn't do anything if what you pass is already a genuine Promise; it just returns the value directly. So there's no overhead to calling `Promise.resolve(..)` on values that you don't know the nature of, if one happens to already be a genuine Promise.

## `then(..)` and `catch(..)`

Each Promise instance (**not** the `Promise` API namespace) has `then(..)` and `catch(..)` methods, which allow registering of fulfillment and rejection handlers for the Promise. Once the Promise is resolved, one or the other of these handlers will be called, but not both, and it will always be called asynchronously.

`then(..)` takes one or two parameters, the first for the fulfillment callback, and the second for the rejection callback. If either is omitted or is otherwise passed as a non-function value, a default callback is substituted respectively. The default fulfillment callback simply passes the message along, while the default rejection (propagates) callback simply rethrows the error reason it receives.

`catch` takes only the rejection callback as a parameter, and automatically substitutes the default fulfillment callback. In other words, it's equivalent to `then(null,..)`:

```js
pm.then(resolved);
pm.then(resolved, rejected);
pm.catch(rejected); // or `pm.then(null, rejected)`
```

`then(..)` and `catch(..)` also create and return a new promise, which can be used to express Promise chain flow control. If the fulfillment or rejection callbacks have an exception thrown, the returned promise is rejected. If either callback returns an immediate, non-Promise, non-thenable value, that value is set as the fulfillment for the returned promise. If the fulfillment handler specifically returns a promise or thenable value, that value is unwrapped and becomes the resolution of the returned promise.

## `Promise.all([ .. ])` and `Promise.race([ .. ])`

The static helpers `Promise.all([ .. ])` and `Promise.race([ .. ])` on the **ES6** `Promise` API both create a Promise as their return value. The resolution of that promise is controlled entirely by the array of promises that you pass in.

For `Promise.all([..])`, all the promises you pass in must fulfill for the returned promise to fulfill. If any promise is rejected, the main returned promise is immediately rejected, too (discarding the results of any of the other promises). For fulfillment, you receive an `array` of all the passed in promises' fulfillment values. For rejection, you receive just the first promise rejection reason value. This pattern is classically called a **gate**: all must arrive before the gate opens.

For `Promise.race([ .. ])`, only the first promise to resolve (fulfillment or rejection) **wins**, and whatever that resolution is becomes the resolution of the returned promise. This pattern is classically called a **latch**: first one to open the latch gets through. For example:

```js
let hamed = Promise.resolve(23);
let hamid = Promise.resolve("Hello World");
let ali = Promise.reject("Oh No!");
Promise.race([hamed, hamid, ali])
    .then(function (msg) {
        console.log(msg); // 23
    });
Promise.all([hamed, hamid, ali])
    .catch(function (err) {
        console.error(err); // "Oh No!"
    });
Promise.all([hamed, hamid])
    .then(function (message) {
        console.log(message); // [ 23, 'Hello World' ]
    });
```

**Warning**: Be careful! If an empty `array` is passed to `Promise.all([..])`, it will fulfill immediately, but `Promise.race([ .. ])` will hang forever and never resolve.

---

## Generators

We detailed how Promises uninvert the inversion of control of callbacks, restoring trustability/composability.

Now we turn our attention to expressing async flow control in a sequential, synchronous-looking fashion. The **magic** that makes it possible is **ES6** generators.

We explained an expectation that JS developers almost universally rely on in their code: once a function starts executing, it runs until it completes, and no other code can interrupt and run in between.

As bizarre as it may seem, **ES6** introduces a new type of function that does not behave with the run-to-completion behavior. This new type of function is called a **generator**.

To understand the implications, let's consider this example:

```js
let number = 1;

function hamed() {
    number++;
    hamid();
    console.log("number is: " + number); // "number is: 3"
}

function hamid() {
    number++;
}

hamed(); // "number is: 3"
```

In this example, we know for sure that `hamid()` runs in between `number++` and `console.log(number)`. But what if `hamid()` wasn't there? Obviously the result would be `2` instead of `3`.

**Q**: What if `hamid()` wasn't present, but it could still somehow run between the `number++` and `console.log(number)` statements? How would that be possible?

**Answer**: In **preemptive** multithreaded languages, it would essentially be possible for `hamid()` to **interrupt** and run at exactly the right moment between those two statements. But **JavaScript** is not preemptive, nor is it (currently) multithreaded. And yet, a **cooperative** form of this **interruption** (concurrency) is possible, if `hamed()` itself could somehow indicate a "**pause**" at that part in the code.

**Note**: We use the word **cooperative** not only because of the connection to classical concurrency terminology, but because as you'll see in the next snippet, the **ES6** syntax for indicating a pause point in code is `yield` -- suggesting a politely cooperative yielding of control.

Here's the **ES6** code to accomplish such cooperative concurrency:

```js
let number = 1;
function* hamed() {
    number++;
    yield; // pause!
    console.log("number:", number);
}

hamed();
```

**Note**: You will likely see most other JS documentation/code that will format a generator declaration as `function* hamed() { .. }` instead of as we've done here with `function *hamed() { .. }` -- the only difference being the stylistic positioning of the `*`. The two forms are functionally/syntactically identical, as is a third `function*hamed() { .. }` (no space) form. There are arguments for both styles, but we basically prefer `function *hamed..` (you are free to choose) because it then matches when we reference a generator in writing with `*hamed()`. If we said only `hamed()`, you wouldn't know as clearly if we were talking about a **generator** or a **regular function**. It's purely a stylistic preference.

**Q**: How can we run the code in that previous snippet such that `hamid()` executes at the point of the `yield` inside of `*hamed()`?

**Answer**:

```js
let number = 1;
function *hamed() {
    number++;
    yield; // pause!
    console.log("number:", number);
}

function hamid() {
    number++;
}

hamed();

// construct an iterator `iterator` to control the generator
let iterator = hamed(); // start `hamed()` here!
iterator.next();
console.log(number); // 2
hamid();
console.log(number); // 3
iterator.next(); // "number:" 3
```

There's quite a bit of new and potentially confusing stuff in those two code snippets, so we've got plenty to wade through. But before we explain the different mechanics/syntax with **ES6** generators, let's walk through the behavior flow:

1. The `iterator = hamed()` operation does not execute the `*hamed()` generator yet, but it merely constructs an iterator that will control its execution(more on iterators in a bit).
2. The first `iterator.next()` starts the `*hamed()` generator, and runs the `number++` on the first line of `*hamed()`.
3. `*hamed()` pauses at the `yield` statement, at which point that first `iterator.next()` call finishes. At the moment, `*hamed()` is still running and active, but it's in a paused state.
4. We inspect the value of `number`, and it's now `2`.
5. We call `hamid()` which increments `number` again with `number++`.
6. We inspect the value of `number` again, and it's now `3`.
7. The final `iterator.next()` call resumes the `*hamed()` generator from where it was paused, and runs the `console.log(..)` statement, which uses the current value of `number` of `3`.

---

## Input and Output

A generator function is a special function with the new processing model we just alluded to. But it's still a function, which means it still has some basic tenets that haven't changed -- namely, that it still accepts arguments (**input**), and that it can still return a value (**output**):

```js
function* hamid(a, b) {
    return a * b;
}

let iterator = hamid(11.5, 2);
let result = iterator.next();
console.log(result); // { value: 23, done: true }
console.log(result.value); // 23
console.log(result.done); // true
```

We pass in the arguments `11.5` and `2` to `*hamid(..)` as the parameters `a` and `b`, respectively. And `*hamid(..)` returns the value `23` back to the calling code.

We now see a difference with how the generator is invoked compared to a normal function. `hamid(11.5, 2)` obviously looks familiar. But subtly, the `*hamid(..)` generator hasn't actually run yet as it would have with a function.

Instead, we're just creating an iterator object, which we assign to the variable `iterator`, to control the `*hamid(..)` generator. Then we call `iterator.next()`,which instructs the `*hamid(..)` generator to advance from its current location, stopping either at the next `yield` or end of the generator.

The result of that `next(..)` call is an object with a `value` property on it holding whatever value (if anything) was returned from `*hamid(..)`. In other words, `yield` caused a value to be sent out from the generator during the middle of its execution, kind of like an intermediate `return`.

## Iteration Messaging

In addition to generators accepting arguments and having return values, there's even more powerful and compelling input/output messaging capability built into them, via `yield` and `next(..)`. Consider:

```js
function* hamed(x) {
    let y = x * (yield);
    return y;
}
let iterator = hamed(11.5);

// start `hamed(..)`
iterator.next();
let result = iterator.next(2);
console.log(result.value); // 23
```

First, we pass in `11.5` as the parameter `x`. Then we call `iterator.next()`, and it starts up `hamed(..)`.

Inside `*hamed(..)`, the `var y = x ..` statement starts to be processed, but then it runs across a `yield` expression. At that point, it pauses `*hamed(..)` (in the middle of the assignment statement!), and essentially requests the calling code to provide a result value for the `yield` expression. Next, we call `iterator.next(2)`, which is passing the `2` value back in to be that result of the paused `yield` expression.

So, at this point, the assignment statement is essentially `let y = 11.5 * 2`. Now, `return y` returns that `23` value back as the result of the `iterator.next(2)` call.

Notice something very important but also easily confusing, even to seasoned JS developers: depending on your perspective, there's a mismatch between the `yield` and the `next(..)` call. In general, you're going to have one more `next(..)` call than you have `yield` statements -- the preceding snippet has one `yield` and two `next(..)` calls.

**Q**: Why the mismatch?

**Answer**: Because the first `next(..)` always starts a generator, and runs to the first `yield`. But it's the second `next(..)` call that fulfills the first paused `yield` expression, and the third `next(..)` would fulfill the second `yield`, and so on.

Actually, which code you're thinking about primarily will affect whether there's a perceived mismatch or not. Consider only the generator code:

```js
let y = x * (yield);
return y;
```

the **first** `yield` is basically asking a question: "What value should I insert here"?

Who's going to answer that question? Well, the **first** `next()` has already run to get the generator up to this point, so obviously it can't answer the question. So, the **second** `next(..)` call must answer the question posed by the **first** `yield`.

See the mismatch -- second-to-first?

But let's flip our perspective. Let's look at it not from the generator's point of view, but from the **iterator's point of view**. To properly illustrate this perspective, we also need to explain that messages can go in both directions -- `yield ..` as an expression can send out messages in response to `next(..)` calls, and `next(..)` can send values to a paused `yield` expression. Consider this slightly adjusted code:

```js
function* hamed(x) {
    let y = x * (yield "Persian Sight");
    return y;
}

let iterator = hamed(11.5);
let result = iterator.next(); // first `next()`, don't pass anything
console.log(result.value); // "Persian Sight"
result = iterator.next(2); // pass `2` to waiting `yield`
console.log(result.value); // 23
```

`yield ..` and `next(..)` pair together as a two-way message passing system **during the execution of the generator**. So, looking only at the iterator code:

```js
let result = iterator.next(); // first `next()`, don't pass anything
console.log(result.value); // "Persian Sight"
result = iterator.next(2); // pass `2` to waiting `yield`
console.log(result.value); // 23
```

**Note**: We don't pass a value to the first `next()` call, and that's on purpose. Only a paused `yield` could accept such a value passed by a `next(..)`, and at the beginning of the generator when we call the first `next()` **there is no paused `yield`** to accept such a value. The specification and all compliant browsers just silently **discard** anything passed to the first `next()`. It's still a bad idea to pass a value, as you're just creating silently **failing** code that's confusing. So, always start a generator with an argument-free `next()`.

The first `next()` call (with nothing passed to it) is basically asking a question: "What next value does the `*hamed(..)` generator have to give me"? And who answers this question? the first `yield "Persian Sight"` expression.

See that? No mismatch there. Yaay :)
