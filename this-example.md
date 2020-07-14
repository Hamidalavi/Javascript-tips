# Some **`this`** example a give you more information

## Telegram = **<https://t.me/Hamidalavi6540>**

## Instagram = **<https://www.instagram.com/Hamidalavi6540>**

## Twitter = **<https://twitter.com/HamidAlavi6540>**

**Use browser console (recommended) for get better result of `this`**.

**I recommend first read `papular-sentences.md` file**.

```js
function hamed(number) {
    console.log("number is: " + number);
    this.count++;
}

hamed.count = 0;

for (var i = 0; i < 10; i++) {
    if (i > 5) {
        hamed(i);
    }
}
console.log(hamed.count);
```

Look above code, **Q**: why output `hamed.count` is 0?

**Answer**: When the code executes `hamed.count = 0`, indeed it's adding a property `count`  to the function object `hamed`. But for the `this.count`, reference inside of the function, this is not in fact pointing at all to that function object, and so even though the property names are the same, the root objects are different.

- No such bridge is possible. You cannot use a `this` reference to look something up in a **lexical** scope. It is not possible.
- Every time you feel yourself trying to mix lexical scope look-ups with `this`, remind yourself: there is no bridge (there is no way).
- `this` is not an author-time binding but a runtime binding.
- `this` is neither a reference to the function itself, nor is it a reference to the function's lexical scope.

**Call-site**: the location in code where a **function** is called (not where it's **declared**).

**Call-stack**: the stack of functions that have been called to get us to the current moment in execution.

```js
function ali() {
    // call-stack is: `ali`
    // so, our call-site is in the global scope
    console.log("ali");
    hamid(); // <-- call-site for `hamid`
}

function hamid() {
    // call-stack is: `ali` -> `hamid`
    // so, our call-site is in `ali`
    console.log("hamid");
    hamed(); // <-- call-site for `hamed`
}

function hamed() {
    // call-stack is: `ali` -> `hamid` -> `hamed`
    // so, our call-site is in `hamid`
    console.log("hamed");
}

ali(); // <-- call-site for `ali`
```

Look another code:

```js
function hamed() {
    console.log(this.a);
}
var a = 23;
hamed(); // 23
```

**Q**: why the output is 2?

**Ansawer**: **First**, that variable declared in the global scope, as `a = 23` is, are synonymous with **global-object** properties of the same name. They're not copies of each other, they are each other. **Second**: We see that when `hamed()` is called, `this.a` resolves to our global variable `a`. Because the default binding for `this` applies to the **function** call, and so points `this` at the global object.

- If `"strict mode"` is in effect, the global object is not eligible for the default binding, so the `this` is instead set to **undefined**.

```js
function hamed() {
    "use strict"
    console.log(this.a);
}
var a = 23;
hamed(); // Uncaught TypeError: Cannot read property 'a' of undefined
```

Try other code:

```js
function hamed() {
    console.log(this.a);
}

var obj = { a: 23, hamed: hamed };
obj.hamed(); // 23
```

**Q**: What happend?

**Answer**: Firstly, which `hamed()` is declared and then later added as a reference property onto `obj`. Regardless of whether `hamed()` is initially declared on `obj`, or is added as a reference later, in neither case is the function really "owned" or "contained" by the `obj` object.

When there is a context object for a function reference, **implicit** binding rule says that it's that object which should be used for the function call's `this` binding. Because `obj` is the `this` for the `hamed()` call, `this.a` is synonymous with `obj.a`.

You can also use more objects like below:

```js
function hamed() {
    console.log(this.a);
}

var obj2 = {
    a: 23,
    hamed: hamed
};

var obj1 = {
    a: 2,
    obj2: obj2
};

obj1.obj2.hamed(); // 23
```

Its awesome, isn't it? try other special code, can you think about this? abit hard:

```js
function hamed() {
    console.log(this.a);
}

var obj = {
    a: 2,
    hamed: hamed
};

var hamid = obj.hamed; // function reference/alias!
var a = "oops, global"; // `a` also property on global object
hamid(); // "oops, global"
```

There is another `a` property on global object. thus the `"oops, global"` will print in output.

We have `call` function that can be useful (explicit binding)(P179)

```js
function hamed() {
    console.log(this.a);
}

var obj = { a: 23 };

hamed.call(obj); // 23
```

## bind

There are some good features, one of them is `bind()`. For a given function, creates a bound function that has the same body as the original function. The `this` object of the bound function is associated with the specified object, and has the specified initial parameters.

- `this` argument: An object to which the this keyword can refer inside.
- argument `Array`: A list of arguments to be passed to the new function (parameters).

 This is a simple example:

```js
function fullName(name, number, state) {
    console.log(`Hello. Wellcome back ${name}${number} ${state}`)
}

var create = fullName.bind(this, "Hamid", 6540, "the hero");
create();
```

We are not give you an example for object, lets see:

```js
function hamed(something) {
    console.log(this.a, something);
    return this.a + something;
}

var obj = {
    a: 23
};

var hamid = hamed.bind(obj);
var h = hamid(3); // 23 3
console.log(h); // 26
```

How about `new` keyword for **new binding**? lets see guys:

```js
function hamed(value) {
    this.a = value;
}

var obj = {};
var hamid = hamed.bind(obj);
hamid(2);
console.log(obj.a); // 23
var ali = new hamid(3);
console.log(obj.a); // 23
console.log(ali.a); // 3
```

If you want to make **safer** `this`, lets try this:

```js
Object.create(null)
```

It is good placeholder value that protects the **global** object from unintended side-effects.

Also you can use indirect refrence (like divert):

```js
function hamed() {
    console.log(this.a);
}

var a = 23;
var o = { a: 3, hamed: hamed };
var p = { a: 4 };
o.hamed(); // 3
(p.hamed = o.hamed)(); // 23
```

Think more about above code. trail n fail to geting ready to be a best programmer (run in browser console).

The result value of the assignment expression `p.hamed = o.hamed` is a reference to just the underlying function object. As such, the effective call-site is just `hamed()`, not `p.hamed()` or `o.hamed()` as you might expect.
