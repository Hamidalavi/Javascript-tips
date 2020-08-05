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

Notice that a dedicated Worker is in a one-to-one relationship with the program that created it. That is, the `"message"` event doesn't need any disambiguation here, because we're sure that it could only have come from this one-to-one relationship -- either it came from the Worker or the main page.

Usually the main page application creates the Workers, but a Worker can instantiate its own child Worker(s) -- known as subworkers -- as necessary. Sometimes this is useful to delegate such details to a sort of **master** Worker that spawns other Workers to process parts of a task. Unfortunately, at the time of this writing, **Chrome** still does not support subworkers, while **Firefox** does.

To kill a Worker immediately from the program that created it, call `terminate()` on the Worker object (like `w1` in the previous snippets). Abruptly terminating a Worker thread does not give it any chance to finish up its work or clean up any resources. It's akin to you closing a browser tab to kill a page.

If you have two or more pages (or multiple tabs with the same page!) in the browser that tryto create a Worker from the same file URL, those will actually end up as completely separate Workers. Shortly, we'll discuss a way to **share** a Worker.

**Note**: It may seem like a malicious or ignorant **JavaScript** program could easily perform a denial-of-service (DoS) attack on a system by spawning hundreds of Workers, seemingly each with their own thread. While it's true that it's somewhat of a guarantee that a Worker will end up on a separate thread, this guarantee is not unlimited. The system is free to decide how many actual threads/CPUs/cores it really wants to create. There's no way to predict or guarantee how many you'll have access to, though many people assume it's at least as many as the number of CPUs/cores available. I think the safest assumption is that there's at least one other thread besides the main UI thread, but that's about it.

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
