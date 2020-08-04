# Some **`performance`** advices to give you more information

## Web Workers

In previous file, we talked in detail about how **JavaScript** is single threaded. And that's still true. But a single thread isn't the only way to organize the execution of your program.

Imagine splitting your program into two pieces, and running one of those pieces on the main UI thread, and running the other piece on an entirely separate thread.

**Web Workders**: A feature added to the web platform circa HTML5 called **Web Workders**. This is a feature of the browser (aka host environment) and actually has almost nothing to do with the **JavaScript** language itself. That is, **JavaScript** does not currently have any features that support threaded execution.

But an environment like your browser can easily provide multiple instances of the **JavaScript** engine, each on its own thread, and let you run a different program in each thread. Each of those separate threaded pieces of your program is called a **Web Workder**. This type of parallelism is called **task parallelism**, as the emphasis is on splitting up chunks of your program to run in parallel.

From your main **JavaScript** program (or another Worker), you instantiate a Worker like so:

```js
let w1 = new Worker("http://some.url.1/mycoolworker.js");
```
