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

The URL should point to the location of a **JavaScript** file (not an HTML page!) which is intended to be loaded into a Worker. The browser will then spin up a separate thread and let that file run as an independent program in that thread.

**Note**: The kind of Worker created with such a URL is called a **Dedicated Worker**. But instead of providing a URL to an external file, you can also create an **Inline Worker** by providing a Blob URL (another HTML5 feature); essentially it's an inline file stored in a single (binary) value (we discuss **blob** in ES6 file).

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
