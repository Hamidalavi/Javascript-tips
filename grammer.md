# Some **`grammer`** sentences to give you more information

## Telegram = **<https://t.me/Hamidalavi6540>**

## Instagram = **<https://www.instagram.com/Hamidalavi6540>**

## Twitter = **<https://twitter.com/HamidAlavi6540>**

**I recommend first read `papular-sentences.md` and `this-example.md` and `object-example.md` and `types.md` and `complete-guide-true-false.md` files**.

We have ugly type function that can use instead of code, that called `eval()`. We don't recommend to use this function. Let's see simple snippet:

```js
let hamed, hamid;
hamed = eval("if (true) {hamid = 20 + 3;}");
console.log(hamed); // 23
```

But its good for print out a value like `console.log()`. For example:

```js
let ali, reza;
console.log(ali = eval("if (true) {reza = 20 + 3;}")); // 23
```

This method is work great. But thanksfully **JavaScript** bring a new proposal for **ES7** called `do expression`. Here's how it might work:

```js
let majid, mehrdad;
majid = do {
    if (true) {
        mehrdad = 20 + 7;
    }
};
console.log(majid); // 27
```

Huh. You got error, it's for **ES7**. But work better than `eval()` ugly function.

Do you know about side effect expression? Here some examples that learn you about that:

```js
function hamed() {
    hamid = hamid + 1;
}

let hamid = 1;
console.log(hamed()); // undefined
```

Let's see below snippet:

```js
let ali = 22;
let reza = ali++;
console.log(reza); // 22
console.log(ali); // 23
```

The expression `ali++` has two separate behaviors. First, it returns the current value of `ali` which is `22` (which then gets assigned to `reza`). But next, it changes the value of `ali` itself, incrementing it by one. See again above snippet (write again):

```js
let ali = 22;
let reza = ali++;
```

Many developers would mistakenly believe that `reza` has value `23` just like `ali` does. But the confusion comes from not fully considering the when of the side effects of the `++` operator. The `++` increment operator and the `--` decrement operator are both unary operators which can be used in either a **postfix** (`after`) position or **prefix** (`before`) position.

```js
let hamed = 23;
console.log(hamed++); // 23
console.log(hamed); // 24
console.log(++hamed); // 25
console.log(hamed); // 25
```

When `++` is used in the prefix position as `++hamed`, its side effect (incrementing `hamed`) happens before the value is returned from the expression, rather than after as with `hamed++`).

Let's see below. Do you think `++hamid++` work?

```js
let hamid = 23;
console.log(++hamid++); // ??
```

If you try, you see `SyntaxError` (or `ReferenceError`). **Q**: But why?

**Answer**: Because side-effecting operators **require a variable reference** to target their side effects to. For `++hamid++`, the `hamid++` part is evaluated first (because of operator precedence), which gives back the value of `hamid` before the increment. But then it tries to evaluate `++23`, which (if you try it) gives the same `SyntaxError` (or `ReferenceError`) error, since `++` can't have a side effect directly on a value like `23`.

There's an option, though: the "`,`" statement-series comma operator. This operator allows you to string together multiple standalone expression statements into a single statement:

```js
let hamed = 23, hamid;
hamid = (hamed++, hamed);
console.log(hamed); // 24
console.log(hamid); // 24
```

**Note**: the `(..)` around `hamed`, `hamed` is required here. The reason is operator precedence.

The expression `hamed++`, `hamed` means that the second `hamed` statement expression gets evaluated after the after side effects of the first `hamed++` statement expression, which means it returns the statement expression, which means it returns the `23` value for assignment to `hamid`.

Let's this example:

```js
let hamed, hamid, ali;
hamed = hamid = ali = 23;
console.log(hamed); // 23
console.log(hamid); // 23
console.log(ali); // 23
```

Here, `ali = 23` is evaluated to `23` (with the side effect of assigning `23` to `ali`), then `hamid = 23` is evaluated to `23` (with the side effect of assigning `23` to `hamid`), and finally `hamed = 23` is evaluated (with the side effect of assigning `23` to `hamed`).

---

## Label

Let's see and after that, we explain that:

```js
itrate: for (let hamid = 0; hamid < 11; hamid++) {
    if (hamid % 2 == 1) {
        continue itrate;
    }
    console.log(hamid); // 0 2 4 6 8 10
}
```

**Note**: `continue itrate` does not mean "go to the `itrate` labeled position to continue", but rather, "continue the loop that is labeled `itrate` with its next iteration". So, its not really an arbitrary `goto`. As you can see, we skipped over the odd iteration.

We also have `break`, that avoid continue running code:

```js
itrate: for (let hamed = 0; hamed < 11; hamed++) {
    if (hamed % 2 == 1) {
        break itrate;
    }
    console.log(hamed); // 0
}
```

Note: `break itrate` does not mean "go to the `itrate` labeled position to continue", but rather, "break out of the loop/block that is labeled `itrate` and continue after it". Not exactly a `goto` in the traditional sense.

`break` is very useful everywhere. For example:

```js
function hamed() {
    ali: {
        console.log("Persian")
        break ali;
        console.log("and World") // oh -- stopped (not work)
    }
    console.log("Sight")
}

hamed(); // "Persian" \n "Sight"
```

---

## Object Destructuring

Starting with ES6, another place that you'll see `{..}` (object) pair showing up is with `destructuring assignments`, specifically `object` destructuring:

```js
function hamed() {
    return {
        a: 23,
        b: "PersianSight"
    }
}

let { a, b } = hamed();
console.log(a, b); // 23 "Persian Sight"
```

As you can probably tell, `let { a, b } = ..` is a form of ES6 destructuring assignment, which is roughly equivalent to:

```js
let res = func();
let hamed = res.a;
let hamid = res.b;
```

`{ a, b }` is actually ES6 destructuring shorthand for `{ a: a, b: b }`, so either will work, but its expected that the shorter `{ a, b }` will be become the preferred form.

**Note**: Object destructuring with a `{..}` pair can also be used for named function arguments, which is sugar for this same sort of implicit object property assignment:

```js
function hamed({ a, b, c }) {
    /* no need for:
     let a = obj.a, b = obj.b, c = obj.c */
    console.log(a, b, c);
}

hamed({ a: [23, 22, 27], b: "Persian Sight", c: 500 }); // [ 23, 22, 27 ] "Persian Sight" 500
```

If you remove `{ }` (like `hamed(a: [23, 22, 27], b: "Persian Sight", c: 500);`), you get a `SyntaxError` error. Because it's an object.

---

## Operator Precedence

Let's repeat first part of this file:

```js
let ali = 22;
let reza = ali++;
console.log(reza); // 22
console.log(ali); // 23
```

And

```js
let hamed = 23, hamid;
hamid = (hamed++, hamed);
console.log(hamed); // 24
console.log(hamid); // 24
```

But what would happen if we remove the `()`?

```js
let hamed = 23, hamid;
hamid = hamed++, hamed;
console.log(hamed); // 24
console.log(hamid); // 23
```

**Q**: Why did that change the value assigned to `hamid`?

**Answer**: Because the "`,`" operator has a lower precedence than the `=` operator. So `hamid = hamed++, hamed` is interpreted as `(hamid = hamed++), hamed`. Because `hamed++` has after side effects, the assigned value to `hamid` is the value `23` before the `++` changes `hamed`.

If you're going to use "`,`" as a statement-series operator, its important to know that it actually has the **lowest precedence**. Every other operator will more tightly bind than "`,`" will.

Let's try hardest precedence:

```js
let a = 23;
let b = "Persian Sight";
let c = false;
let d = a && b || c ? c || b ? a : c && b : a;
console.log(d); // 23
```

What happend? The first part (`a && b || c`) behave like `(a && b) || c` or like `a && (b || c)`? Let's see simple example:

```js
(false && true) || true; // true
false && (true || true); // false
```

What happend? So, there's proof they're different. But still, how does `false && true || true` behave? The **answer**:

```js
false && true || true; // true
(false && true) || true; // true
```

So we have our answer. The `&&` operator is evaluated first and the `||` operator is evaluated second.

But is that just because of **left-to-right** processing? Let's reverse the order of operators:

```js
true || false && false; // true
(true || false) && false; // false (true && false = false)
true || (false && false); // true (true || false = true)
```

Now we've proved that `&&` is evaluated first and then `||`, and in this case that was actually counter to generally expected **left-to-right** processing.

---

## Tighter Binding

Let's check again last example:

```js
let a = 23;
let b = "Persian Sight";
let c = false;
let d = a && b || c ? c || b ? a : c && b : a;
console.log(d); // 23
```

Does the "`? :`" operatpr have more or less precedence than the `&&` and `||` operators?

```js
a && b || c ? c || b ? a : c && b : a
```

**Q**: Is that more like this:

```js
a && b || (c ? c || (b ? a : c) && b : a)
```

or this?

```js
(a && b || c) ? (c || b) ? a : (c && b) : a
```

**Answer**: The answer is the second one. But why?

Because `&&` is more precedent than `||`, and `||` is more precedent than `? :` .

So, the expression `(a && b || c)` is evaluated first before the `? :` it participates in. Another way this is commonly explained is that `&&` and `||` "**bind more tightly**" than `? :` . If the reverse was true, then `c ? c...` would bind more tightly, and it would behave (as the first choice of question) like `a && b || (c ? c..)`.

---

## Associativity

with an expression like `a && b && c`, grouping will happen implicitly, meaning that either `a && b` or `b && c` will be evaluated first.

Technically, `a && b && c` will be handled as `(a && b) && c`, because `&&` is left-associative. However, the right-associative alternative `a && (b && c)` behaves observably the same way. For the same values, the same expressions are evaluated in the same order.

Consider the `? :` ("ternary" or "conditional") operator:

```js
a ? b : c ? d : e;
```

`? :` is right-associative, so which grouping represents how it will be processed?

- ```js
  a ? b : (c ? d : e)
  ```

- ```js
  (a ? b : c) ? d : e
  ```

The answer is `a ? b : (c ? d : e)`. Unlike with `&&` and `||` above, the right-associativity here actually matters, as `(a ? b : c) ? d : e` will behave differently for some combinations of values.

See more snippets:

```js
console.log(true ? false : true ? true : true); // false
```

```js
console.log(true ? false : (true ? true : true)); // false
console.log((true ? false : true) ? true : true); // true
```

Even more nuanced differences lurk with other value combinations, even if the end result is the same. Consider:

```js
console.log(true ? false : true ? true : false); // false

console.log(true ? false : (true ? true : false)); // false
console.log((true ? false : true) ? true : false); // false
```

Let's bringing a true example:

```js
let a = true, b = false, c = true, d = true, e = false;
console.log(a ? b : (c ? d : e)); // false (evaluates only `a` and `b`)
console.log((a ? b : c) ? d : e); // false (evaluates `a`, `b` AND `e`)
```

So, we've clearly proved that `? :` is right-associative, and that it actually matters with respect to how the operator behaves if chained with itself.

Another example of right-associativity (grouping) is the "`=`" operator:

```js
let a, b, c;
a = b = c = 23;
console.log(a); // 23
console.log(b); // 23
console.log(c); // 23
```

`a = b = c = 23` is processed by first evaluating the `c = 23` assignment, then `b = ..`, and finally `a = ..` . Why? Because of the right-associativity, which actually treats the statement like this:

```js
a = (b = (c = 23))
```

Final answer is:

```js
let a = (b = (c = 23));
console.log(a); // 23
console.log(b); // 23
console.log(c); // 23
```

Back to that hardest precedence:

```js
let a = 23;
let b = "Persian Sight";
let c = false;
let d = a && b || c ? c || b ? a : c && b : a;
console.log(d); // 23
```

The clear result is:

```js
((a && b) || c) ? ((c || b) ? a : (c && b)) : a
```

You still in worry? don't woory, be relax and see below:

```js
(
    (a && b)
    ||
    c
)
    ?
    (
        (c || b)
            ?
            a
            :
            (c && b)
    )
    :
    a
```

Its huge. But easy to read. Let me write above code again:

```js
let a = 23;
let b = "Persian Sight";
let c = false;
let d = a && b || c ? c || b ? a : c && b : a;
console.log(d); // 23
```

Let's solve it now:

1. `(a && b)` is `"Persian Sight"`
2. `"Persian Sight" || c` is `"Persian Sight"`
3. For the first `?` test, `"Persian Sight"` is truthy
4. `(c || b)` is `"Persian Sight"`
5. For the second `?` test, `"Persian Sight"` is truthy
6. `a` is `23`

**Note**: Thus, my advice here **use operator precedence/associativity where it leads to shorter and cleaner code, but use `()` manual grouping in places where it helps create clarity and reduce confusion**.

---

## ASI (Auto Semicolon Insertion)

Let's see below snippet:

```js
let a = 23, b = "Hamed";
console.log(a) // 23
console.log(b) // "Hamed"
```

That's still a valid program without error, because expression statements also accept **ASI**.

There's certain places where **ASI** is helpful, like for instance:

```js
let a = 23;
do {
    // do something
} while (a) // ; expected here!
a;
```

The grammar requires a "`;`" after a `do..while` loop, but **not after** `while` or `for` loops. But most developers don't remember that! So, **ASI** helpfully steps in and inserts one.

As we said earlier in above, statement blocks do not require "`;`" termination, so **ASI** isn't necessary:

```js
var a = 23;
while (a) {
    // do something
} // no ; expected here
a;
```

The other major case where **ASI** kicks in is with the `break`, `continue`, `return` and `yield` keywords.

```js
function hamid(a) {
    if (!a) return
    a *= 2;
    // do something
}
```

The `return` statement doesn't carry across the newline to the `a *= 2` expression, as **ASI** assumes the "`;`" terminating the `retuen` statement. Of course, `return` statements can easily break across multiple lines, just not when there's nothing after `return` but the newline/line break.

```js
function hamed(a) {
    return (
        a * 2 + 3 / 12
    );
}
```

Identical reasoning applies to `break`, `continue` and `yield`.

**Recommend**: use semicolons wherever you know they are "required," and limit your assumptions about **ASI** to a minimum.

---

## Errors

Some errors may you see while programming:

**One**: SyntaxError: Invalid regular expression:

```js
let hamid = /+root/; // SyntaxError: Invalid regular expression:
```

**Two**: SyntaxError: Invalid left-hand side in assignment:

```js
let hamid;
23 = hamid; // SyntaxError: Invalid left-hand side in assignment
```

**Three**: `strict` mode for function. Function parameter names cannot be duplicated:

```js
function hamed(a, b, a) { };
function hamid(a, b, a) { "use strict" }; // SyntaxError: Duplicate parameter name not allowed in this context
```

**Four**: `strict` mode for object. Object literal having more than one property of the

```js
"use strict"
var a = {
    b: 22,
    b: 23
}; // Error!
```

Note: Semantically speaking, such errors aren't technically syntax errors but more **grammar error**. the above snippets are syntactically valid. But since there is no `GrammarError` type, some browsers use `SyntaxError` instead.

**Five**: `let`. ReferenceError: Cannot access 'variable' before initialization

```js
hamid = 23; // ReferenceError: Cannot access 'hamid' before initialization
let hamid;
```

**Six**: While `typeof` has an exception to be safe for undeclared variables, no such safety exception is made for TDZ (Temporal Dead Zone) references:

```js
console.log(typeof hamed); // undefined
console.log(typeof hamid); // ReferenceError: Cannot access 'hamid' before initialization (TDZ)
let hamid;
```

---

## Function Arguments

When using **ES6**'s default parameter values, the default value is applied to the parameter if you either omit an argument, or you pass an `undefind` value in its place:

```js
function hamed(a = 23, b = a + 3) {
    console.log(a, b);
}

hamed(); // 23 26
hamed(undefined); // 23 26
hamed(5); // 5 8
hamed(void 0, 5); // 23 5
hamed(null); // "null" 3
```

**Note**: `null` is coerced to a `0` value in the `a + 3` expression.

From the ES6 default parameter values perspective, there's no difference between omitting an argument and passing an `undefined` value. However, there is a way to detect the difference in some cases:

```js
function hamed(a = 23, b = a + 3) {
    console.log(arguments.length, a, b, arguments[0], arguments[1]);
}

hamed(); // 0 23 26 undefined undefined
hamed(20); // 1 20 23 20 undefined
hamed(20, undefined); // 2 20 23 20 undefined
hamed(void 0, 5); // 2 23 5 undefined 5
hamed(20, null); // 2 20 "null" 20 "null"
```

If you pass an argument, the `arguments` slot and the named parameter are linked to always have the same value. If you ommit the argument, no such linkage occurs:

```js
// with argument
function hamid(a) {
    a = 23;
    console.log(arguments[0])
}

hamid(2); // 23
hamid(); // undefined
```

```js
// without argument
function hamid(a) {
    a = 23;
    console.log(a)
}

hamid(2); // 23
hamid(); // 23
```

But in `strict` mode (`"use strict"`), the linkage doesn't exist regardless:

```js
function hamid(a) {
    "use strict"
    a = 23;
    console.log(arguments[0])
}

hamid(2); // 2 -- not linked
hamid(); // undefined -- not linked
```

See uncommon example of `argument`:

```js
function hamed(a) {
    console.log(a + arguments[1] + arguments[2])
}

hamed(34, 24, 20); // 78
```

**Note**: Avoid`arguments` if you can, but if you must use it, by all means avoid using the positional slot in `arguments` at the same time as using a named parameter for that same argument.

---

## try and catch and finally

You're probably familiar with how the `try..catch` works. The code in the `finally` clause always runs, and it always runs right after `try` (and `catch` if present) finish, before any other code runs.

**Q**: What happens if there's a `return` statement inside a `try` clause? It obviously will return a value, right? But does the calling code that receives that value run before or after the `finally`?

**Answer**:

```js
function hamed() {
    try {
        return 23;
    } finally {
        console.log("Persian Sight")
    }
    console.log("Mission failed!");
}

hamed(); // "Persian Sight"
console.log(hamed()); // "Persian Sight" \n 23
```

The `return 23` runs right away, which sets up the completion value from the `hamed()` call. This action completes the `try` clause and the `finally` clause immediately runs next. Only then is the `hamed()` function complete, so that its completion value is returned back for the `console.log(..)` statement to use.

The exact same behavior is true of a `throw` inside `try`:

```js
function hamid() {
    try {
        throw 23;
    } finally {
        console.log("Persian Sight");
    }
    console.log("Mission failed!")
}

hamid(); // "Persian Sight" \n throw 23; \n 23
console.log(hamid()); // "Persian Sight" \n throw 23; \n 23
// or Uncaught Exception: 23
```

If exception is thrown (accidentally or intentionally) inside a `finally` clause, it will override as the primary completion of that function. If a previous `return` in the `try` block had set a completion value for the function, that value will be abandoned.

```js
function hamid() {
    try {
        return 23;
    } finally {
        console.log("Persian Sight");
    }
    console.log("Mission failed!");
}

hamid(); // "Persian Sight"
console.log(hamid()); // "Persian Sight" \n 23
```

It shouldn't be surprising that other nonlinear control statements like `continue` and `break` exhibit similar behavior to `return` and `throw`:

```js
for (let i = 0; i < 10; i++) {
    try {
        continue;
    }
    finally {
        console.log(i);
    }
}
// 0 1 2 3 4 5 6 7 8 9
```

```js
for (let i = 0; i < 10; i++) {
    try {
        break;
    }
    finally {
        console.log(i);
    }
}
// 0
```

The `console.log(i)` statement runs at the end of the loop iteration, which is caused by the `continue` statement. However, it still runs before the `i++` iteration update statement, which is why the values printed are `0..9` instead of `1..10`.

A `return` inside a `finally` has the special ability to override a previous `return` from the `try` or `catch` clause, but only if `return` is explicitly called:

```js
function hamed() {
    try {
        return 23;
    }
    finally {
        // no `return ..` here, so no override
    }
}

function hamid() {
    try {
        return 23;
    }
    finally {
        // override previous `return 23`
        return;
    }
}

function ali() {
    try {
        return 23;
    }
    finally {
        // override previous `return 23`
        return "Persian Sight";
    }
}

console.log(hamed()); // 23
console.log(hamid()); // undefined
console.log(ali()); // "Persian Sight"
```

---

## Switch

Let's briefly explore the `switch` statement, a sort-of syntactic shorthand for `if..else` `if..else..` statement chain. `switch` skeleton is here:

```js
switch (key) {
    case value:

        break;

    default:
        break;
}
```

For example:

```js
let hamed = 23;
switch (hamed) {
    case 10:
        console.log("I'm 10 years old?!");
    case 20:
        console.log("I'm 20 years old?!");
    case 23:
        console.log("Yeah. I'm 23 years old :)");
    default:
        console.log("Go ahead");
}
```

**Q**: Is above example will work? Is it true for teaching?

**Answer**: Yeah work, but its not correct. Because we don't use `break` expression (caluse) after each `case` and `default`. For above example, here is a ugly answer:

```js
// "Yeah. I'm 23 years old :)"
// "Go ahead"
```

But the correct form is:

```js
let hamid = 23;
switch (hamid) {
    case 10:
        console.log("I'm 10 years old?!");
        break;
    case 20:
        console.log("I'm 20 years old?!");
        break;
    case 23:
        console.log("Yeah. I'm 23 years old :)");
        break
    default:
        console.log("Go ahead");
        break;
} // "Yeah. I'm 23 years old :)"
```

As you can see, it evaluates `hamid` once, then matches the resulting value to each `case` expression. If a match is found, execution will begin in that matched `case`, and will either go until a `break` is encountered or until the end of the `switch` block is found.

There are several quirks about `switch` you may not have noticed before.

**First**, the matching that occurs between the `hamed` expression and each `case` expression is identical to the `===` algorithm. Often times `switch`es are used with absolute values in `case` statements, as shown above, so strict matching is appropriate. However, you may wish to allow coercive equality. Let's do this:

```js
let hamed = "23";
switch (true) {
    case hamed == 23:
        console.log("Congrats");
        break;
    default:
        console.log("Mission failed!");
        break;
} // "Congrats" (23 or '23' no matter)
```

**Second**: You can also use `strict`mode in `switch` statement:

```js
let hamed = "23";
switch (true) {
    case hamed == 23:
        console.log("Congrats");
        break;
    default:
        console.log("Mission failed!");
        break;
} // "Mission failed!" (strict mode)
```

**Third**: You can use `selector operator` or `operand selector operator` (logical operator) in `switch` statement:

```js
let hamed = "Persian Sight";
let hamid = 23;
switch (true) {
    case (hamed || hamid == 23):
        console.log("OMG! not matching");
        break;
    default:
        console.log("Mission failed!");
        break;
} // "Mission failed!" (hamed is not 23)
```

Since the result of `(hamed || hamid == 23)` is `"Persian Sight"` and not `true`, , the strict match fails. In this case, the fix is to force the expression explicitly to be a `true` and `false`, such as `case !!(hamed || hamid == 23)`:

```js
let hamed = "Persian Sight";
let hamid = 23;
switch (true) {
    case !!(hamed || hamid == 23):
        console.log("OMG! its working");
        break;
    default:
        console.log("Mission failed!");
        break;
} // "OMG! its working"
```

**Fourh**, the last: the `default` clause is optional, and it doesn't necessarily have to come at the end. Even in the `default` clause, the same rules apply about encountering a `break` or not:

```js
let hamed = 23;
switch (hamed) {
    case 1:
    case 2:
    // never gets here
    default:
        console.log("default");
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
} // "default" \n "3"
```

The way this snippet processes is that it passes through all the `case` clause matching first, finds no match, then goes back up to the `default` clause and starts executing. Since there's no `break` there, it continues executing in the already skipped over `case 3` block, before stopping once it hits that `break`.
