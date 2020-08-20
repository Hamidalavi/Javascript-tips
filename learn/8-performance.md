# Some **`performance`** advices to give you more information

![performance](https://stevesouders.com/images/withoutjs.png)

## Web Workers

In previous file, we talked in detail about how **JavaScript** is single threaded. And that's still true. But a single thread isn't the only way to organize the execution of your program.

Imagine splitting your program into two pieces, and running one of those pieces on the main UI thread, and running the other piece on an entirely separate thread.

**Web Workders**: A feature added to the web platform circa HTML5 called **Web Workders**. This is a feature of the browser (aka host environment) and actually has almost nothing to do with the **JavaScript** language itself. That is, **JavaScript** does not currently have any features that support threaded execution.

But an environment like your browser can easily provide multiple instances of the **JavaScript** engine, each on its own thread, and let you run a different program in each thread. Each of those separate threaded pieces of your program is called a **Web Workder**. This type of parallelism is called **task parallelism**, as the emphasis is on splitting up chunks of your program to run in parallel.

From your main **JavaScript** program (or another Worker), you instantiate a Worker like so:

```js
let w1 = new Worker("http://some.url.1/mycoolworker.js");
```

The URL should point to the location of a **JavaScript** file (not an HTML page!) which is intended to be loaded into a Worker. The browser will then spin up a separate thread and let that file run as an independent program in that thread.

**Note**: The kind of Worker created with such a URL is called a **Dedicated Worker**. But instead of providing a URL to an external file, you can also create an **Inline Worker** by providing a Blob URL (another HTML5 feature); essentially it's an inline file stored in a single (binary) value (we discuss **blob** in **ES6** file).

Workers do not share any scope or resources with each other or the main program -- that would bring all the nightmares of threaded programming to the forefront -- but instead have a basic event messaging mechanism connecting them.

The `w1` Worker object is an event listener and trigger, which lets you subscribe to events sent by the Worker as well as send events to the Worker.

Here's how to listen for events (actually, the fixed `"message"` event):

```js
w1.addEventListener("message", function (evt) {
    // evt.data
});
```

And you can send the `"message"` event to the Worker:

```js
w1.postMessage("something say to Persian Sight Support");
```

Inside the Worker, the messaging is totally symmetrical:

```js
addEventListener("message", function (evt) {
    // evt.data
});
postMessage("a really cool reply");
```

Notice that a dedicated Worker is in a one-to-one relationship with the program that created it. That is, the `"message"` event doesn't need any disambiguation here, because we're sure that it could only have come from this one-to-one relationship -- either it came from the Worker or the main page.

Usually the main page application creates the Workers, but a Worker can instantiate its own child Worker(s) -- known as subworkers -- as necessary. Sometimes this is useful to delegate such details to a sort of **master** Worker that spawns other Workers to process parts of a task. Unfortunately, at the time of this writing, **Chrome** still does not support subworkers, while **Firefox** does.

To kill a Worker immediately from the program that created it, call `terminate()` on the Worker object (like `w1` in the previous snippets). Abruptly terminating a Worker thread does not give it any chance to finish up its work or clean up any resources. It's akin to you closing a browser tab to kill a page.

If you have two or more pages (or multiple tabs with the same page!) in the browser that tryto create a Worker from the same file URL, those will actually end up as completely separate Workers. Shortly, we'll discuss a way to **share** a Worker.

**Note**: It may seem like a malicious or ignorant **JavaScript** program could easily perform a denial-of-service (DoS) attack on a system by spawning hundreds of Workers, seemingly each with their own thread. While it's true that it's somewhat of a guarantee that a Worker will end up on a separate thread, this guarantee is not unlimited. The system is free to decide how many actual threads/CPUs/cores it really wants to create. There's no way to predict or guarantee how many you'll have access to, though many people assume it's at least as many as the number of CPUs/cores available. We think the safest assumption is that there's at least one other thread besides the main UI thread, but that's about it.

## Worker Environment

Inside the Worker, you do not have access to any of the main program's resources. That means you cannot access any of its global variables, nor can you access the page's DOM or other resources. **Remember**: it's a totally separate thread.

You can, however, perform network operations (Ajax, WebSockets) and set timers. Also, the Worker has access to its own copy of several important global variables/features, including `navigator`, `location`, `JSON` and `applicationCache`.

You can also load extra **JavaScript** scripts into your Worker, using `importScripts(..)`:

```js
// inside the Worker
importScripts("hamed.js", "hamid.js");
```

These scripts are loaded synchronously, which means the `importScripts(..)` call will block the rest of the Worker's execution until the file(s) are finished loading and executing.

## Shared Workers

If your site or app allows for loading multiple tabs of the same page (a common feature), you may very well want to reduce the resource usage of their system by preventing duplicate dedicated Workers; the most common limited resource in this respect is a socket network connection, as browsers limit the number of simultaneous connections to a single host. Of course, limiting multiple connections from a client also eases your server resource requirements.

In this case, creating a single centralized Worker that all the page instances of your site or app can share is quite useful. That's called a `SharedWorker`, which you create like so (support for this is limited to Firefox and Chrome):

```js
let w1 = new SharedWorker("http://some.url.1/mycoolworker.js");
```

Because a shared Worker can be connected to or from more than one program instance or page on your site, the Worker needs a way to know which program a message comes from. This unique identification is called a **port** -- think network socket ports. So the calling program must use the `port` object of the Worker for communication:

```js
w1.port.addEventListener("message", handleMessages);
// ..
w1.port.postMessage("something cool");
```

Also, the port connection must be initialized, as:

```js
w1.port.start();
```

Inside the shared Worker, an extra event must be handled: `"connect"`. This event provides the port `object` for that particular connection. The most convenient way to keep multiple connections separate is to use closure over the `port`, as shown next, with the event listening and transmitting for that connection defined inside the handler for the `"connect"` event.

```js
// inside the shared Worker
addEventListener("connect", function (evt) {
    // the assigned port for this connection
    var port = evt.ports[0];
    port.addEventListener("message", function (evt) {
        // ..
        port.postMessage(/* // */);
        // ..
    });
    // initialize the port connection
    port.start();
});
```

Other than that difference, shared and dedicated Workers have the same capabilities and semantics.

**Note**: Shared Workers survive the termination of a port connection if other port connections are still alive, whereas dedicated Workers are terminated whenever the connection to their initiating program is terminated.

## SIMD (Single Instruction, Multiple Data)

Single instruction, multiple data (SIMD) is a form of **data parallelism**, as contrasted to **task parallelism** with Web Workers, because the emphasis is not really on program logic chunks being parallelized, but rather multiple bits of data being processed in parallel.

With SIMD, threads don't provide the parallelism. Instead, modern CPUs provide SIMD capability with **vectors** of numbers -- think: type specialized arrays -- as well as instructions that can operate in parallel across all the numbers; these are low-level operations leveraging instruction-level parallelism.

## How to Optimize with asm.js

The first thing to understand about asm.js optimizations is around types and coercion. If the **JavaScript** engine has to track multiple different types of values in a variable through various operations, so that it can handle coercions between types as necessary, that's a lot of extra work that keeps the program optimization suboptimal.

There are some **tricks** you can use to hint to an asm.js-aware **JavaScript** engine what the intended type is for variables/operations, so that it can skip these coercion tracking steps.

Let's see some snippets

```js
let hamed = 23;
let hamid = hamed;
```

In that program, the `hamid = hamed` assignment leaves the door open for type divergence in variables. However, it could instead be written as:

```js
let hamed = 23;
let hamid = hamed | 0;
```

Here, we've used the `|` (**binary OR**) with value `0`, which has no effect on the value other than to make sure it's a 32-bit integer. That code run in a normal **JavaScript** engine works just fine, but when run in an asm.js-aware **JavaScript** engine it can signal that `hamid` should always be treated as a 32-bit integer, so the coercion tracking can be skipped.

## Sort Array and Sanity Check

```js
// Case 1
let x = ["Hamed", "Hamid", "Ali", "Reza", "Mehrdad", "Majid", "Morteza"];
x.sort();

// Case 2
let y = ["Hamed", "Hamid", "Ali", "Reza", "Mehrdad", "Majid", "Morteza"];
y.sort(function mySort(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

console.log(x); // [ 'Ali', 'Hamed', 'Hamid', 'Majid', 'Mehrdad', 'Morteza', 'Reza']
console.log(y); // [ 'Ali', 'Hamed', 'Hamid', 'Majid', 'Mehrdad', 'Morteza', 'Reza']
```

```js
// Case 1
let x = [12, -14, 0, 3, 18, 0, 2.9];
x.sort();

// Case 2
let y = [12, -14, 0, 3, 18, 0, 2.9];
y.sort(function mySort(a, b) {
  return a - b;
});

console.log(x); // [-14, 0, 0, 12, 18, 2.9, 3]
console.log(y); // [-14, 0, 0, 2.9, 3, 12, 18]
```

Setting aside the previously mentioned inline function expression pitfall, the second case's `mySort(..)` works in this case because you have provided it numbers, but would have of course failed with strings. The first case doesn't throw an error, but it actually behaves differently and has a different outcome! It should be obvious, but: **a different outcome between two test cases almost certainly invalidates the entire test!**

But beyond the different outcomes, in this case, the built in `sort(..)`'s comparator is actually doing **extra work** that `mySort()` does not, in that the built-in one coerces the compared values to strings and does lexicographic comparison. The first snippet results in `[-14, 0, 0, 12, 18, 2.9, 3]` while the second snippet results (likely more accurately based on intent) in `[-14, 0, 0, 2.9, 3, 12, 18]`.

So that test is unfair because it's not actually doing the same task between the cases. Any results you get are bogus.

---

```js
// Case 1
let x = [];
for (let i = 0; i < 10; i++) {
  x[i] = "x";
}

// Case 2
let y = [];
for (let i = 0; i < 10; i++) {
  y[y.length] = "y";
}

// Case 3
let z = [];
for (let i = 0; i < 10; i++) {
  z.push("z");
}

console.log(x); // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
console.log(y); // ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y']
console.log(z); // ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z']
```

Arguably, cases 1 and 2 are fairer than case 3.

Look at below snippet:

```js
// Case 1
let x = false;
let y = x ? 1 : 2;

// Case 2
let x;
let y = x ? 1 : 2;
```

Here, the intent might be to test the performance impact of the coercion to a Boolean that the `? :` operator will do if the `x` expression is not already a Boolean. So, you're apparently OK with the fact that there is extra work to do the coercion in the second case.

The subtle problem? You're setting `x`'s value in the first case and not setting it in the other, so you're actually doing work in the first case that you're not doing in the second. To eliminate any potential (albeit minor) skew, try:

```js
// Case 1
let x = false;
let y = x ? 1 : 2;

// Case 2
let x = undefined;
let y = x ? 1 : 2;
```

Now there's an assignment in both cases, so the thing you want to test -- the coercion of `x` or not -- has likely been more accurately isolated and tested.

Let's see factorial example:

```js
function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(6)); // 720
```

Ah, the good ol' fashioned **factorial** algorithm! You might assume that the **JavaScript** engine will run that code mostly as is. And to be honest, it might -- I'm not really sure.

But as an anecdote, the same code expressed in C and compiled with advanced optimizations would result in the compiler realizing that the call `factorial(6)` can just be replaced with the constant value `720`, eliminating the function and call entirely!

Moreover, some engines have a practice called "unrolling recursion," where it can realize that the recursion you've expressed can actually be done "easier" (i.e., more optimally) with a loop. It's possible the preceding code could be rewritten by a **JavaScript** engine to run as:

```js
function factorial(n) {
  if (n < 2) return 1;
  let res = 1;
  for (let i = n; i > 1; i--) {
    res *= i;
  }
  return res;
}

console.log(factorial(6)); // 720
```

Now, let's imagine that in the earlier snippet you had been worried about whether `n * factorial(n-1)` or `n *= factorial(--n)` runs faster. Maybe you even did a performance benchmark to try to figure out which was better. But you miss the fact that in the bigger context, the engine may not run either line of code because it may unroll the recursion!

Speaking of `--`, `--n` versus `n--` is often cited as one of those places where you can optimize by choosing the `--n` version, because theoretically it requires less effort down at the assembly level of processing.

That sort of obsession is basically nonsense in modern **JavaScript**. That's the kind of thing you should be letting the engine take care of. You should write the code that makes the most sense. Compare these three `for` loops:

```js
// Option 1
for (let i = 0; i < 10; i++) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9 10
}

// Option 2
for (let i = 0; i < 10; ++i) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9 10
}

// Option 3
for (let i = -1; ++i < 10;) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9 10
}
```

Even if you have some theory where the second or third option is more performant than the first option by a tiny bit, which is dubious at best, the third loop is more confusing because you have to start with `-1` for `i` to account for the fact that `++i` pre-increment is used. And the difference between the first and second options is really quite irrelevant.

It's entirely possible that a **JavaScript** engine may see a place where `i++` is used and realize that it can safely replace it with the `++i` equivalent, which means your time spent deciding which one to pick was completely wasted and the outcome moot.

Here's another common example of silly microperformance obsession:

```js
let x = [1, 2, 3, 4];

// Option 1
for (let i = 0; i < x.length; i++) {
  console.log(`"First ${x[i]}"`); // "First 1" "First 2" "First 3" "First 4"
}

// Option 2
for (let i = 0, len = x.length; i < len; i++) {
  console.log(`"Second ${x[i]}"`); // "Second 1" "Second 2" "Second 3" "Second 4"
}
```

The theory here goes that you should cache the length of the `x` array in the variable `len`, because ostensibly it doesn't change, to avoid paying the price of `x.length` being consulted for each iteration of the loop. If you run performance benchmarks around `x.length` usage compared to caching it in a `len` variable, you'll find that while the theory sounds nice, in practice any measured differences are statistically completely irrelevant.

## Some Performance Advices

- Don't pass the `arguments` variable from one function to any other function, as such **leakage** slows down the function implementation.
- Isolate a `try..catch` in its own function. Browsers struggle with optimizing any function with a `try..catch` in it, so moving that construct to its own function means you contain the de-optimization harm while letting the surrounding code be optimizable.
- **best practice** advice at the time disseminated across the industry suggesting developers always use the array `join(..)` approach. And many followed.
  - Except, somewhere along the way, the JS engines changed approaches for internally managing strings, and specifically put in optimizations for `+` concatenation. They didn't slow down `join(..)` per se, but they put more effort into helping `+` usage, as it was still quite a bit more widespread.

Try below snippets:

```js
let x = "23"; // need number `23`

// Option 1: let implicit coercion automatically happen
let y = x / 2;

// Option 2: use `parseInt(..)`
let y = parseInt(x, 0) / 2;

// Option 3: use `Number(..)`
let y = Number(x) / 2;

// Option 4: use `+` unary operator
let y = +x / 2;

// Option 5: use `|` unary operator
let y = (x | 0) / 2;
```

When considering these different options, as they say, **One of these things is not like the others**. `parseInt(..)` does the job, but it also does a lot more -- it parses the string rather than just coercing. You can probably guess, correctly, that `parseInt(..)` is a slower option, and you should probably avoid it.

Of course, if `x` can ever be a value that **needs parsing**, such as `23px` (like from a CSS style lookup), then `parseInt(..)` really is the only suitable option!

`Number(..)` is also a function call. From a behavioral perspective, it's identical to the `+` unary operator option, but it may in fact be a little slower, requiring more machinery to execute the function. Of course, it's also possible that the **JavaScript** engine recognizes this behavioral symmetry and just handles the inlining of `Number(..)`'s behavior `(aka +x)` for you!

But remember, obsessing about `+x` versus `x | 0` is in most cases likely a waste of effort. This is a microperformance issue, and one that you shouldn't let dictate/degrade the readability of your program.
