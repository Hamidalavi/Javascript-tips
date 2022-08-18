# Wellcome to Papular Programming Language World (Motivation)

![JavaScript](https://tutorialzine.com/media/2017/08/titanic.gif)

|Note|
|:---|
|Our variable declaration names: **Hamid**, **Hamed**, **Ali**, **Reza**, **Majid**, **Mehrdad**, **Morteza**.|

 Read priority: 0. papular-sentences.md 1. operators.md 2. this-example.md 4. object-example.md 4. type.md 5. compelte-guide-true-false.md 6. grammer.md 7. async.md 8. performance.md 9. ES6+.md 10. proxy.md

## Difference

The two languages are different in many important ways. "**JavaScript**" is as related to "**Java**" as "Butter" is to "Butterfly", but they are completely different.

## Blame

When developers encounter confusion, they usually blame the language instead of their lack of understanding. Those who do not understand anything. There are three kind of behaviors:

- They **leave** it
- They **destroy** it
- They **make fun** of it

## Syntax

The rules for valid format and combinations of instructions is called a **computer language**, sometimes referred to as its **syntax**, much the same as English tells you how to **spell** wordsand how to create valid sentences using words and punctuation.

The specification uses the `@@` prefix notation to refer to the built-in symbols.

## Understanding to Computer

A special utility on the computer(either an `interpreter` or a `compiler`) is used to translate the code you write into commands a computer can understand.

- For some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called `interpreting` the code (like **JavaScript**).

- For other languages, the translation is done ahead of time, called `compiling` the code, so when the program runs later, what's running is actually the already compiled computer instructions ready to go (like **C++**).

## Thread

**Javascript** is a single threaded language. This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next.

## How Does a Compilation(Compiling) Work (from **YDKJS**)

1. **Tokenizing/Lexing**: breaking up a string of characters into meaningful (to the language) chunks, called tokens. For instance, consider the program: `var a = 2;`. This program would likely be broken up into the following tokens: var , a , = , 2 , and ; . **Whitespace** may or may not be persisted as a token, depending on whether it's meaningful or not. **`Note`**: The difference between **tokenizing** and **lexing** is subtle and academic, but it centers on whether or not these tokens are identified in a stateless or stateful way. Put simply, if the tokenizer were to invoke stateful parsing rules to figure out whether a should be considered a distinct token or just part of another token, that would be **lexing**.
2. **Parsing**: taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. This tree is called an "**AST**" (**Abstract Syntax Tree**).
   - The tree for `var a = 2;` might start with a top-level node called `VariableDeclaration`, with a child node called `Identifier` (whose value is a ), and another child called `AssignmentExpression` which itself has a child called NumericLiteral (whose value is 2).
3. **Code-Generation**: the process of taking an **AST** and turning it into executable code. This part varies greatly depending on the language, the platform it's targeting, etc.

Two distinct actions are taken for a variable assignment: First, **Compiler** declares a **variable** (if not previously declared in the current scope), and second, when executing, Engine looks up the **variable** in **Scope** and assigns to it, if found.

---

# Usage

## Choice

We recommend to use node instead of browser console to see output(example: node [`file`]). Maybe some codes not work correctly. you are free to choose both browser and node (for example, `prompt()` not work in node, but we prefer to using node).

## Output

Its better and cleaner to use `console.log()` instead of `alert()` function (fast and not annoying) to see output. For example:

```js
console.log("Hello world"); // "Hello world"

alert("Hello world"); // visual output: "Hello world"
```

## Input

If you want input something to browser (like text box), you can use `prompt(..)` function. For example:

```js
prompt("message");
```

## Function

We use `function` to prevent repeating some code. You can see many functions during these files. For example:

```js
function hamid() {
  console.log("call me please!");
}

hamid(); // "call me please!"
// we can call this function n times (awesome)
```

---

# **Tip**

## Comment

If you want to be good programmer, always use **comment** between your codes and commands (use `//` or `/* */` for comment).

## Interpreter

**Javascript** is an interpreter language and it runs in a browser with **Javascript** engine.

## Engine

Chromium (or Chrome) uses **V8** engine. Firefox uses **Spider Monkey** engine.

## Execute

You can use the browser console to execute **Javascript** code. You can use `shift + enter` in the browser console to move to the next line. You can use `enter` in the brower console to execute the code.

## Number or String

All **numbers** on the screen are **string**.

---

## Know About JavaScript (just pointing to base with simple informations)

## **Statement**

Just know simple statement:

```js
variable = x * 2;
```

- `variable` is a varible that hold `x * 2` result.
- `*` is an operator for multiplication (mul).
- `=` is an operator for assignment (set).
- `;` is a semicolon. most statements in **Javascript** and other many languages conclude with a semicolon at the end When one operation want be end. Not for functions and some conditional (execpt special function like arrow functions and ternary conditions).

## **Expressions**

```js
variable = x * 4;
```

- `4` is a literal expression (also can be string and etc.).
- `variable` is a variable expression (declaration).
- `x * 4` is an arithemic expression.
- `variable = x * 4` is an assignment expression (set a value to variable).
- `variable * x;` is not very common or useful. Because it wouldn't have any effect on the running of the program.

## Values

We have many types in **Javascript**, `object`, `string`, `number`, `null`, `boolean`, `symbol` and `undefined`.

Values that are included directly in the source code are called **literals**. If they are surrounded by double quotes or single quotes, they called as **string** (`"string"` or `'string'`).

In other word, values that stands alone without being stored in a variable, called literal values. For example:

```js
"I'm string";
'I`m also a string';
23;
true;
false;
```

**Javascript** also give a `typeof` operator that can test a value and give us a type of it (value). For example:

```js
var variable;

typeof variable; // "undefined"

variable = "hey hamid";
typeof variable; // "string" -- not string, it is "string"

variable = 23;
typeof variable; // "number"

variable = true;
typeof variable; // "boolean"

variable = null;
typeof variable; // "object" -- bug

variable = undefined;
typeof variable; // "undefined"

variable = { b: "c" };
typeof variable; // "object"
```

Learn more in **types** file and **grammar** for better understanding.

## Comment

The `//` single-line **comment** is appropriate if you're going to put a comment right above a single statement, or even at the end of a line. For example:

```js
// set 23 (my age) for `hamid` variable -- one line comment
var hamid = 23;
```

The `/* .. */` multiline **comment** is appropriate if you have several lines worth of explanation to make in your comment. For example:

```js
/* set 23 (my age)
for `hamid` variable -- multiline comment */
var hamid = 23;
```

---

# **Grammar**

## **Variable versus Value**

**JavaScript** has typed values, not typed variables. Only values have type in **JavaScript**; variables are just simple containers for those values.

## **Type**

**Javascript** uses dynamic type, meaning variables can hold values of any type without any type enforcement. You can use `var` keyword to declare a variable. For example:

```js
var amount = 49.99;

amount = amount * 2;

console.log(amount); // 99.8

/* convert `amount` to a string, and
add "$" on the beginning */
amount = "$" + String(amount);

console.log(amount); // "$99.8"
```

## **Semicolon**

Unlike most other statements like `console.log(amount);`, a block statement does not need a semicolon (`;`) to conclude it.

## **Coercion**

We have two form of coercion in **Javascript**: **explicit** and **implicit**. For example:

```js
// explicit: we converts types to another
var a = "23";
var b = Number(a);
a; // "23"
b; // 23

// implicit: Javascript converts types to another
var x = "23";
var z = x * 1;

x; // "23"
b; // 23
```

## **Falsy value**

Some values are called **falsy**, like `0`, `0n`, `-0`, `null`, `undefined`, `false`, `NaN` and empty string `""`.

## **Truthy value**

Some values are called **truthy**, like `23`, `"hi"`, `true`, `[]`, `{}`, `object = {a:1}`, `function hamid() {..}` and `[23, 24]`.

## **Iteration**

A loop includes the test condition as well as a block (typically as `{ .. }` ). Each time the loop block executes, that's called an **iteration**.

## **Loop and Condition**

If you don't want using value increment manually, you can use **loop** or **conditions** (`for` (`of` and `in`) or `while` loop and `if` or `switch` and etc.). For example:

```js
// for loop
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

// for..of loop
var hamid = [1, 2, 4];

for (var i of hamid) {
  console.log(i); // 1 2 4
}

// for..in loop
var hamid = [1, 2, 4];

for (var i in hamid) {
  console.log(i); // "0" "1" "2"
}

// while loop and if condition
var number = 0;

while (true) {
  if (number >= 5) {
    break;
  }

  number++;
  console.log(number); // 1 2 3 4 5
}
```

More information in **grammar** and **async** and **ES6+** files.

## **Scope**

If you ask the phone store employee for a phone model that her store doesn't carry, she will not be able to sell you the phone you want. She only has access to the phones in her store's inventory. You'll have to try another store to see if you can find the phone you're looking for. That means only variable (code) **inside** that function can access that function's scoped variables. For example:

```js
function hamid() {
  let x = 25;
}

console.log(x); // ReferenceError: x is not defined
```

As you can see, that `x` is just accessible in `hamid` function. You can also try **nested** function scope:

```js
function hamed() {
  var a = 1;

  function hamid() {
    var b = 2;

    function ali() {
      var c = 3;
      console.log(a, b, c); // 1 2 3
    }

    ali();

    console.log(a, b); // 1 2
  }

  hamid();

  console.log(a); // 1
}

hamed(); // 1 2 3 | 1 2 | 1
```

## **Variable Scope**

You use the **`var`** (or `let` and `const`) keyword to declare a **variable** that will belong to the current function **scope**, or the **global scope** if at the top level outside of any **function**.

## **Bug**

Type of `null` is an interesting case, because it errantly returns **"object"**.

## **Array**

An **array** is an **object** that holds values of any type.

## **Equality**

The difference between `==` (loose-equals) and `===` (strict-equals) is usually characterized that `==` checks for **value** equality and `===` checks for both **value** and **type** equality. **Array**s are by default coerced to string s by simply joining all the values with commas (`,`) in between. You might think that two `array`s with the same contents would be `==` equal, but they're not:

```js
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c; // true
b == c; // true
a == b; // false
```

We have three more equality `!`, `!=` and `!==`.

## **Number**

In **inequality** (`<` , `>` and etc.), if one or both is not a **string**, then both values are coerced to be **number**, and a typical numeric comparison occurs.

## **Condition**

Sometimes you may find yourself writing a series of `if..else..if` statements like this for conditions:

```js
if (a == 2) {
  // do something
}
else if (a == 10) {
  // do another thing
} else if (a == 23) {
  // do yet another thing
}
else {
  // fallback to here
}
```

This structure works, but it’s a little verbose because you need to specify the a test for each case. Here’s another option, the `switch` statement:

```js
switch (a) {
  case 2:
    // do something
    break;
  case 10:
    // do another thing
    break;
  case 23:
    // do yet another thing
    break;
  default:
  // fallback to here
}
```

The `break` is important if you want only the statement(s) in one case to run. If you omit `break` from a case , and that case matches or runs, execution will continue with the next case ’s statements regardless of that case matching. This so called **fall through** is sometimes useful/desired:

```js
switch (a) {
  case 2:
  case 10:
    // some cool stuff
    break;
  case 23:
    // other stuff
    break;
  default:
  // fallback
}
```

## **Ternary Operator**

It is most useful. its abbreviated from `if..else..if..else`. For example:

```js
let a = 23;
(a > 20) ? console.log("i'm older") : console.log("i'm younger");
// Its mean: if `23 > 20`, print `"i'm older"`, else print `"i'm younger"`
// output is "i'm older"
```

Before ternary operator, we must wrote:

```js
let a = 23;
if (a > 20) {
  console.log("i'm older")
}
else {
  console.log("i'm younger")
}
```

We can also use one line `if..else` condition. For example:

```js
let a = 23;
if (a > 20) console.log("i'm older"); else console.log("i'm younger");
// Its mean: if `23 > 20`, print `"i'm older"`, else print `"i'm younger"`
// output is "i'm older"
```

## **Strict Mode**

We recommend to use `"use strict"`. because its fury and have strict behavior. For example: if you write `a = 10`, compiler will use strict behavior a saying to us: `ReferenceError: a is not defined`. With `"strict mode"` is disallowing the implicit auto-global variable declaration from omitting the `var` or `let`. Adhering to `"strict mode"` makes your code generally more optimizable by the engine. For example:

```js
function hamed() {
  "use strict"; // // turn on strict mode
  a = 1; // `var` missing, ReferenceError
}

hamed();
```

## **IIFE**

There's another way to execute a **function** expression, which is typically referred to as an immediately invoked function expression (IIFE). Consider:

```js
(function example() {
  console.log("Hello!!");
})(); // output: "Hello!!" -- function with execution
```

- The first enclosing `()` pair makes the function an expression, and the second `()` executes the function.
- **IIFE**: Immediately Invoked Function Expression it used to be very common. you can use both expressions.
- Firstly, the performance of `try/catch` is slower, but there's no reasonable assumption that it has to be that way, or even that it always will be that way. Since the official TC39-approved **ES6** transpiler uses performance of `try/catch`, the Traceur team has asked Chrome to improve the `try/catch`, and they are obviously motivated to do so.
- Secondly, **IIFE** is not a fair apples-to-apples comparison with `try/catch`, because a function wrapped around any arbitrary code changes the meaning, inside of that code, of `this`, `return`, `break`, and `continue`. **IIFE** is not a suitable general substitute. It could only be used manually in certain cases.

## **Closure**

Use **closure** techniques for better to understand coding. its like finding blocks that stacked. (you can also go to my brother page: **<https://github.com/Hamed2012-dr>**)

```js
function addition(x) {
  function add(y) {
      return y + x;
  };
  return add;
}

var addOne = addition(1);
var addTen = addition(10);
```

1. When we call `addition(1)` , we get back a reference to its inner `add(..)` that remembers x as 1 . We call this function reference `addONe(..)`.
2. When we call `addition(10)` , we get back another reference to its inner `add(..)` that remembers x as 10 . We call this function reference `addTen(..)`.
3. When we call addOne(3) , it adds 3 (its inner y ) to the 1 (remembered by x ), and we get 4 as the result.
4. When we call addTen(13), it adds 13 (its inner y ) to the 10 (remembered by x ), and we get 23 as the result.

## **Custom Property**

Objects are interesting. you can add custom property in object, even if there is no property in it. For example:

```js
let obj = { hamed: 23, ali: 22 };
obj.reza = 26;
console.log(obj); // { hamed: 23, ali: 22, reza: 26 }
```

For more information, read **object-example** file (know about `prototype`).

## **Transpiling**

Read more about **transpiling** from sites. Here's a quick example of **transpiling**:

```js
// new ES6 (default parameter value)
(function hamed(a = 23) {
  console.log(a);
})();

// pre-ES6
function hamid() {
  var a = arguments[0] !== (void 0) ? arguments[0] : 23;
  console.log(a);
}

hamid(); // void 0 means undefined
```

## **Misconception**

Debunking the common misconception that **JavaScript** is an **interpreted language** and therefore not compiled. **Nope**. The **JavaScript** engine compiles your code right before [and sometimes during] execution.

## **Visual Loging**

You can use `console.table(array)` to see array visually. like below:

```js
(function hamed(a = 23) {
    console.table([a, "Hamid"]);
})();

// output:
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │   23    │
│    1    │ 'Hamid' │
└─────────┴─────────┘
```

## **`eval()` and `with`**

Both `eval(..)` and `with` are affected (restricted) by **Strict Mode**. they are not good for performance.

## **`let`**

Declarations made with **`let`** will not hoist to the entire scope of the block they appear in. Such declarations will not observably "exist" in the block until the declaration statement. Function declarations are **hoist**. But function expressions are not. Functions are hoisting first, and then variables.

```js
hamid(); // "b"

var a = true;
if (a) {
  function hamid() { console.log("a"); }
}
else {
  function hamid() { console.log("b"); }
}
```

## **`let` and `const` Scope**

Two declaration keyword `let` (a cousin to the `var` keyword) and `const` both are **block scope**. For example:

```js
{
  let hamed = 23;
}
console.log(hamed); // ReferenceError: hamed is not defined
```

## **Duplicate `var` Declarations**

While multiple/duplicate `var` declarations are effectively ignored, subsequent function declarations do override previous ones. For example:

```js
hamed(); // 3
function hamed() {
  console.log(1);
}
var hamed = () => {
  console.log(2);
};
function hamed() {
  console.log(3);
}
```

Be careful about **duplicate declarations**, especially mixed between normal `var` declarations and function declarations; **peril awaits if you do!**

## **Lexical Scope**

**JavaScript** does not, in fact, have **dynamic** scope. It has **lexical** scope. The key contrast: **lexical** scope is **write-time**, whereas **dynamic** scope (and `this`) are **runtime**.

---

## LHS/RHS (Left Hand Side/Right Hand Side)

It means **Right/Left Hand Side**  Of an assignment operation (=). If you want understand this section, try meaning this like: "who's the target of the **assignment** (LHS)" and "who's the source of the assignment (RHS)" (a = 23);

We also can explain LHS/RHS is **functions**, for example:

```js
(function hamed(a = 23) {
  console.log(a); // 23
})();
```

In this example, its like `a = 23`;

- You may have missed the implied `a = 2` in this code snippet. It happens when the value `2` is passed as an argument to the `hamed(..)` **function**, in which case the 2 value is assigned to the parameter `a`. To (implicitly) assign to parameter `a`, an **LHS** look-up is performed.

- There's also an **RHS** reference for the value of `a`, and that resulting value is passed to `console.log(..)`. `console.log(..)` needs a reference to execute. It's an **RHS** look-up for the `console` object, then a property-resolution occurs to see if it has a method called `log`.

You might be tempted to conceptualize the function declaration `function hamed(a) {`... as a normal variable **declaration** and **assignment**, such as `var a` and `hamed = function(a) {`... . In so doing, it would be tempting to think of this function declaration as involving an LHS look-up.

- Unfulfilled **RHS** references result in `ReferenceError`s being thrown (show). **LHS** too.

## Modules

You can use `import` and `export` for importing and exporting files (modules)

More information in **ES6+** file.

## `this` Identifier

If a function has a this reference inside it, that `this` reference usually points to an object . But which object it points to depends on how the function was called.

It’s important to realize that `this` does not refer to the function itself, as is the most common misconception. Here’s a quick illustration:

```js
function hamed() {
  console.log(this.hamid);
}

var hamid = "global";

var obj1 = {
  hamid: "obj1",
  hamed: hamed
};

var obj2 = {
  hamid: "obj2"
};

// --------

hamed(); // "global"

obj1.hamed(); // "obj1"
hamed.call(obj2); // "obj2"
new hamed(); // undefined
```

There are four rules for how this gets set, and they’re shown in those last four lines of that snippet:

1. `hamed()` ends up setting this to the global object in non-strict-mode—in **strict mode**, this would be undefined and you’d get an error in accessing the hamid property—so `"global"` is the value found for this.hamid (test on browser).

2. `obj1.hamed()` sets this to the `obj1` object.

3. `hamed.call(obj2)` sets `this` to the obj2 object.

4. `new hamed()` sets `this` to a brand new empty object.

For more information, read **this-example** file from this directory.

You need also must read **object-eample** for `prototype` for objects.

## Non-JavaScript

The most common non-JavaScript **JavaScript** you'll encounter is the DOM API. For example:

```js
var element = document.getElementById("hamid");
```

- The `document` variable exists as a global variable when your code is running in a browser. It's not provided by the **Javascript** engine. These kind of variables are called "host objects". `getElementById(..)` is also a built-in method on `document` provided by the DOM from your browser.

- `alert(..)` is provided to your **Javascript** program by the browser, not by the **Javascript** engine itself. The same goes with console.log(..).

- You need to be aware of non-**Javascript** variable or methods, as they'll be in every **Javascript** program you write.

---

Get confused? don't worry, we help you to know **JavaScript** core. Just read the following files in **learn** folder (directory).

Try hard to get it. If you worry, we bring more and clear examples in **ES6+** file. Then, don't worry :)

Don't waste your gold time. Delete your unnecessary phone apps and games and focus on your way. Then Buy modern and exiting Objects and Game Console for real exciting. If you want be famous, read this files and then try another way that you want :)
